import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createSupabaseAdmin } from '@/lib/supabase-server';
import { getSiteConfig } from '@/lib/sites-config';
import { sendLeadToViteUnDevis } from '@/lib/viteundevis';

// Help functions to calculate score for solar leads
function calculateScore(body: any): number {
    let score = 0;
    if (body.projectType === 'proprietaire_maison') score += 30;
    if (body.projectType === 'coproprietaire') score += 5;
    if (body.monthlyBill === 'plus_150') score += 30;
    if (body.monthlyBill === '100_150') score += 15;
    if (body.monthlyBill === 'moins_100') score += 5;
    if (body.roofType === 'tuile_ardoise') score += 20;
    if (body.roofType === 'toit_plat') score += 10;
    if (body.solarLocation === 'carport_solaire') score += 25;
    if (body.solarLocation === 'toiture') score += 20;
    if (body.solarLocation === 'au_sol') score += 10;
    return score;
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const clientIp = request.headers.get("cf-connecting-ip") || request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "82.64.15.20";
        const refererUrl = request.headers.get("referer") || "";
        const consentText = body.consentText || "J'accepte d'être contacté par téléphone par les services qui prendront en charge ma demande de devis pour la qualifier et effectuer une visite technique.";
        const consentDate = body.consentDate || new Date().toISOString();
        const consentIp = clientIp;
        const consentUrl = body.consentUrl || refererUrl || "https://" + (body.domain || "expertpanneausolaire.ch");
        console.log("📥 [API/LEADS/SOLAR] Received body:", body);
        const {
            name, email, phone, city, postalCode, domain,
            projectType, monthlyBill, roofType, solarLocation,
            attribution
        } = body;

        if (!name || !email || !phone) {
            return NextResponse.json(
                { error: 'Champs obligatoires manquants' },
                { status: 400 }
            );
        }

        const leadScore = calculateScore(body);
        
        // ----------------------------------------------------
        // ARBITRAGE ROUTING
        // Score >= 55 AND not asbestos/thatch AND house owner -> Premium Partner
        // Score < 55 -> ViteUnDevis API
        // ----------------------------------------------------
        let arbitrageStatus = 'vite_un_devis';
        if (leadScore >= 55 && roofType !== 'amiante_chaume' && projectType === 'proprietaire_maison') {
            arbitrageStatus = 'direct_partner';
        }

        console.log(`⚖️ [ARBITRAGE] Lead score: ${leadScore}. Routing status: ${arbitrageStatus}`);

        // Forward to ViteUnDevis if it is a secondary lead
        let vudResult = null;
        if (true) { // Always route to ViteUnDevis
            console.log("📡 [ViteUnDevis] Forwarding lead to ViteUnDevis API...");
            
            let catId = '37'; // Panneaux photovoltaïques
            if (postalCode === '33260') {
                catId = '145'; // Map to Déménagement for tests
            }
            
            const nameParts = (name || '').trim().split(/\s+/);
            const prenom = nameParts[0] || 'Client';
            const nom = nameParts.slice(1).join(' ') || 'Inconnu';
            
            const vudPayload = {
                nom,
                prenom,
                email,
                tel: phone,
                cp: postalCode,
                ville: city,
                cp_projet: postalCode,
                ville_projet: city,
                pays: 'fr',
                adresse1: 'Adresse non communiquee',
                tp: 1, // Particulier
                type_bien: 2, // Maison
                situation: projectType === 'proprietaire_maison' ? 1 : 2,
                delais: 2, // Dans les 6 mois
                description: `Projet de pose de panneaux solaires. Emplacement: ${solarLocation || 'N/A'}. Type de toit: ${roofType || 'N/A'}. Facture mensuelle d'electricite: ${monthlyBill || 'N/A'}. Statut d'habitation: ${projectType || 'N/A'}.`,
                cat_id: catId,
                site_name: domain || 'expertpanneausolaire.ch',
                consent_text: consentText,
                consent_date: consentDate,
                consent_ip: consentIp,
                consent_url: consentUrl
            };
            
            try {
                vudResult = await sendLeadToViteUnDevis(vudPayload);
            } catch (err) {
                console.error("❌ Failed to forward to ViteUnDevis:", err);
            }
        }

        const apiKey = process.env.RESEND_API_KEY;
        const resend = apiKey ? new Resend(apiKey) : null;

        // 1. SAVE TO DATABASE (Supabase)
        const metadata = {
            monthly_bill: monthlyBill,
            roof_type: roofType,
            solar_location: solarLocation,
            source: 'website',
            attribution: attribution || { source: 'direct', medium: 'direct' },
            score: leadScore,
            arbitrage_status: arbitrageStatus,
            niche: 'solaire'
        };

        const supabase = createSupabaseAdmin();
        const siteConfig = getSiteConfig(domain);
        const region = siteConfig?.region || 'National';
        const department = siteConfig?.department || (postalCode ? postalCode.substring(0, 2) : null);

        const { error: dbError } = await supabase
            .from('leads')
            .insert({
                name,
                email,
                phone,
                city,
                postal_code: postalCode,
                tenant_id: domain,
                type: 'solar_lead',
                housing_type: projectType,
                status: 'new',
                region: region,
                department: department,
                message: JSON.stringify(metadata, null, 2),
                niche: 'solaire',
                arbitrage_status: arbitrageStatus,
                score: leadScore
            });

        if (dbError) {
            console.error('Supabase DB Error:', dbError);
        }

        // 2. SEND NOTIFICATION EMAIL (Resend)
        if (resend) {
            const subject = arbitrageStatus === 'direct_partner'
                ? `💎☀️ NOUVEAU LEAD SOLAIRE PREMIUM [${postalCode || city}] - ${name}`
                : `☀️ Lead Solaire à 10€ (ViteUnDevis) [${postalCode || city}] - ${name}`;

            const html = `
                <h1>Nouveau Lead Panneaux Solaires Photovoltaïques</h1>
                <p><strong>Domaine :</strong> ${domain} (${city} - ${postalCode || 'N/A'})</p>
                
                <div style="background-color: ${arbitrageStatus === 'direct_partner' ? '#fefce8' : '#f8fafc'}; border: 1.5px solid ${arbitrageStatus === 'direct_partner' ? '#eab308' : '#cbd5e1'}; padding: 16px; border-radius: 12px; margin-bottom: 20px;">
                    <h2 style="margin-top:0; color: ${arbitrageStatus === 'direct_partner' ? '#854d0e' : '#334155'};">
                        Scoring & Routage : ${arbitrageStatus === 'direct_partner' ? '💎 PARTENAIRE DIRECT' : '✉️ REVENDU VITEUNDEVIS'}
                    </h2>
                    <p><strong>Score :</strong> ${leadScore} / 100</p>
                    <p><strong>Statut Arbitrage :</strong> ${arbitrageStatus}</p>
                </div>

                <h2>Informations de contact</h2>
                <ul>
                    <li><strong>Nom :</strong> ${name}</li>
                    <li><strong>Email :</strong> ${email}</li>
                    <li><strong>Téléphone :</strong> ${phone}</li>
                </ul>

                <h2>Critères de Qualification</h2>
                <ul>
                    <li><strong>Statut d'habitation :</strong> ${projectType}</li>
                    <li><strong>Facture d'électricité :</strong> ${monthlyBill}</li>
                    <li><strong>Type de toit :</strong> ${roofType}</li>
                    <li><strong>Emplacement panneaux :</strong> ${solarLocation}</li>
                </ul>

                <h2>Attribution Marketing</h2>
                <ul>
                    <li><strong>Source / Medium :</strong> ${attribution?.source || 'direct'} / ${attribution?.medium || 'direct'}</li>
                    ${attribution?.campaign ? `<li><strong>Campagne :</strong> ${attribution.campaign}</li>` : ''}
                    ${attribution?.term ? `<li><strong>Mot-clé recherché :</strong> ${attribution.term}</li>` : ''}
                    ${attribution?.landing_page ? `<li><strong>Page de capture :</strong> ${attribution.landing_page}</li>` : ''}
                </ul>
            `;

            await resend.emails.send({
                from: 'Expert Panneau Solaire <contact@expertpanneausolaire.ch>',
                to: ['bonjour@expertpanneausolaire.ch'],
                subject,
                html
            });
        }

        const vudDetails = vudResult?.devis_data?.devis_id ? {
            devis_id: vudResult.devis_data.devis_id,
            devis_hash: vudResult.devis_data.devis_hash || ''
        } : null;

        return NextResponse.json({ 
            success: true, 
            score: leadScore, 
            status: arbitrageStatus,
            vud: vudDetails
        });

    } catch (e: any) {
        console.error('API Error:', e);
        return NextResponse.json(
            { error: `Internal Server Error: ${e.message}` },
            { status: 500 }
        );
    }
}

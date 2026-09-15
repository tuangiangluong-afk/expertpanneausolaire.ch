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
        // ----------------------------------------------------
        // ARBITRAGE SUISSE (expertpanneausolaire.ch)
        // Les leads photovoltaïques suisses sont traités manuellement pour renovero.ch.
        // Aucun envoi vers ViteUnDevis.
        // ----------------------------------------------------
        const arbitrageStatus = 'renovero_manual';
        const vudResult = null;
        console.log(`⚖️ [ARBITRAGE SUISSE] Lead qualifié pour traitement manuel Renovero (Score: ${leadScore})`);

        const apiKey = process.env.RESEND_API_KEY || "re_7pgxJbPq_CwqeXijSNtvzHdZeLk8CPKix";
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
            const subject = `🇨🇭☀️ NOUVEAU LEAD SOLAIRE SUISSE (RENOVERO) [${postalCode || city}] - ${name}`;

            const html = `
                <h1>Nouveau Lead Panneaux Solaires Photovoltaïques (Suisse)</h1>
                <p><strong>Domaine :</strong> ${domain} (${city} - ${postalCode || 'N/A'})</p>
                
                <div style="background-color: #fefce8; border: 1.5px solid #eab308; padding: 16px; border-radius: 12px; margin-bottom: 20px;">
                    <h2 style="margin-top:0; color: #854d0e;">
                        Scoring & Routage : 🇨🇭 TRAITEMENT MANUEL RENOVERO.CH
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
                from: 'Expert Panneau Solaire Suisse <hello@expertbornerecharge.com>',
                to: ['hello@expertbornerecharge.com', 'bonjour@expertpanneausolaire.ch'],
                subject,
                html
            });
        }

        const vudDetails = null;

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

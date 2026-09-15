export const revalidate = 86400; // 24h ISR cache
import { getCityByCleanSlug, CITIES } from "@/lib/db";
import { SOLAR_BRANDS, getSolarBrandBySlug } from "@/data/solar-brands";
import { slugify } from "@/lib/slugify";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPseoSolaireContent } from "@/lib/pseo-solaire";
import SolaireContentPage from "@/components/SolaireContentPage";

type Params = Promise<{ slug: string; marque: string }>;

// Generate all combinations of City x Marque
export async function generateStaticParams() {
    const params: { slug: string; marque: string }[] = [];
    Object.values(CITIES).forEach((city) => {
        SOLAR_BRANDS.forEach((marque) => {
            params.push({ slug: slugify(city.city), marque: marque.slug });
        });
    });
    return params;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const { slug, marque: marqueSlug } = await params;
    const site = getCityByCleanSlug(slug);
    const marque = getSolarBrandBySlug(marqueSlug);

    if (!site || !marque) return {};

    const pseo = getPseoSolaireContent(site, marque);
    const canonicalUrl = `https://www.expertpanneausolaire.ch/ville/${slug}/${marqueSlug}`;

    return {
        title: pseo.meta_title,
        description: pseo.meta_description,
        alternates: { canonical: canonicalUrl },
        openGraph: {
            title: pseo.meta_title,
            description: pseo.meta_description,
            locale: "fr_FR",
            type: "website",
            url: canonicalUrl,
            images: [
                {
                    url: marque.image,
                    width: 1200,
                    height: 630,
                    alt: `Installation panneaux solaires ${marque.name} ${site.city}`,
                },
            ],
        },
        robots: { index: true, follow: true },
    };
}

export default async function CityMarquePage({ params }: { params: Params }) {
    const { slug, marque: marqueSlug } = await params;
    const site = getCityByCleanSlug(slug);
    const marque = getSolarBrandBySlug(marqueSlug);

    if (!site || !marque) return notFound();

    const pseo = getPseoSolaireContent(site, marque);
    const canonicalUrl = `https://www.expertpanneausolaire.ch/ville/${slug}/${marqueSlug}`;

    const sections = [
        {
            title: `Gisement solaire & productible estimé à ${site.city}`,
            html: `<div class="space-y-4 text-slate-700 leading-relaxed">
                <p>
                    À <strong>${site.city}</strong>, l'irradiation solaire moyenne permet d'obtenir un rendement moyen de <strong>${pseo.meta_description.match(/Production (.*?)\./)?.[1] || '1 100 kWh/kWc/an'}</strong>.
                </p>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
                        <thead class="bg-amber-50 text-slate-800 font-bold border-b border-amber-200">
                            <tr>
                                <th class="py-3 px-4 text-left">Puissance Installée</th>
                                <th class="py-3 px-4 text-left">Production Annuelle à ${site.city}</th>
                                <th class="py-3 px-4 text-left">Économie Facture Estimée</th>
                                <th class="py-3 px-4 text-left">Prime Autoconsommation EDF</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100">
                            <tr>
                                <td class="py-3 px-4 font-bold text-slate-900">3 kWc (6-8 panneaux)</td>
                                <td class="py-3 px-4 text-slate-700">3 300 à 4 350 kWh / an</td>
                                <td class="py-3 px-4 text-emerald-700 font-semibold">650 € à 950 € / an</td>
                                <td class="py-3 px-4 text-slate-700">780 € versés</td>
                            </tr>
                            <tr>
                                <td class="py-3 px-4 font-bold text-slate-900">6 kWc (12-16 panneaux)</td>
                                <td class="py-3 px-4 text-slate-700">6 600 à 8 700 kWh / an</td>
                                <td class="py-3 px-4 text-emerald-700 font-semibold">1 300 € à 1 900 € / an</td>
                                <td class="py-3 px-4 text-slate-700">1 140 € versés</td>
                            </tr>
                            <tr>
                                <td class="py-3 px-4 font-bold text-slate-900">9 kWc (18-24 panneaux)</td>
                                <td class="py-3 px-4 text-slate-700">9 900 à 13 000 kWh / an</td>
                                <td class="py-3 px-4 text-emerald-700 font-semibold">1 950 € à 2 850 € / an</td>
                                <td class="py-3 px-4 text-slate-700">1 710 € versés</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>`,
        },
        {
            title: `Fiche Technique & Garanties : Panneaux Solaires ${marque.name}`,
            html: `<div class="overflow-x-auto">
                <table class="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
                    <thead class="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                        <tr>
                            <th class="py-3 px-4 text-left">Critère Technique</th>
                            <th class="py-3 px-4 text-left">Spécification ${marque.name}</th>
                            <th class="py-3 px-4 text-left">Garantie & Norme</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        <tr>
                            <td class="py-3 px-4 font-semibold text-slate-900">Technologie de cellule</td>
                            <td class="py-3 px-4 text-slate-700">${marque.type} (${marque.rendement} de rendement)</td>
                            <td class="py-3 px-4 text-slate-600">Haute performance par faible ensoleillement</td>
                        </tr>
                        <tr>
                            <td class="py-3 px-4 font-semibold text-slate-900">Garantie Produit (Matériel)</td>
                            <td class="py-3 px-4 text-slate-700">25 ans à 40 ans selon gamme</td>
                            <td class="py-3 px-4 text-slate-600">Garantie constructeur pièces et main-d'œuvre</td>
                        </tr>
                        <tr>
                            <td class="py-3 px-4 font-semibold text-slate-900">Garantie de Rendement linéaire</td>
                            <td class="py-3 px-4 text-slate-700">85% à 92% de puissance initiale à 25 ans</td>
                            <td class="py-3 px-4 text-slate-600">Dégradation annuelle ultra-faible (&lt; 0,4%/an)</td>
                        </tr>
                        <tr>
                            <td class="py-3 px-4 font-semibold text-slate-900">Résistance mécanique</td>
                            <td class="py-3 px-4 text-slate-700">Charge neige 5400 Pa / Vent 2400 Pa</td>
                            <td class="py-3 px-4 text-slate-600">Certifié IEC 61215 / IEC 61730</td>
                        </tr>
                    </tbody>
                </table>
            </div>`,
        },
        {
            title: `Cadre Légal & Aides d'État 2026 à ${site.city}`,
            html: `<div class="space-y-3 text-slate-700 leading-relaxed text-sm">
                <p>
                    L'installation photovoltaïque ${marque.name} réalisée par nos techniciens qualifiés <strong>RGE QualiPV</strong> ouvre droit aux dispositifs publics officiels :
                </p>
                <ul class="list-disc pl-5 space-y-1.5">
                    <li><strong>Prime à l'autoconsommation :</strong> Versée en une seule fois à la date anniversaire de la mise en service Enedis.</li>
                    <li><strong>Tarif d'achat garanti EDF OA :</strong> Vente du surplus non consommé réinjecté sur le réseau au tarif réglementé fixé par arrêté ministériel sur 20 ans.</li>
                    <li><strong>Exonération fiscale :</strong> Les revenus de la revente d'électricité solaire sont 100% exonérés d'impôt sur le revenu pour les installations &le; 3 kWc.</li>
                    <li><strong>TVA réduite :</strong> 10% pour les puissances jusqu'à 3 kWc raccordées au réseau.</li>
                </ul>
            </div>`,
        },
    ];

    return (
        <SolaireContentPage
            site={site}
            heroBadge={`Installateur RGE QualiPV ${site.city}`}
            pageTitle={`Installation Panneaux Solaires ${marque.name} à ${site.city}`}
            introHtml={pseo.intro_html}
            facts={[
                { label: "Prix installation", value: pseo.prix },
                { label: "Rendement", value: marque.rendement },
                { label: "Production", value: pseo.meta_description.includes("kWh/kWc") ? "6 000 à 8 400 kWh/an" : "6 000 à 8 400 kWh/an" },
                { label: "Aides", value: "Jusqu'à 260€/kWc" },
            ]}
            benefits={pseo.atouts}
            expertTip={pseo.expert_tip}
            faqs={pseo.faqs}
            canonicalUrl={canonicalUrl}
            heroImage={marque.image}
            breadcrumb={[
                { name: site.city, item: `https://www.expertpanneausolaire.ch/ville/${slug}` },
                { name: marque.name, item: canonicalUrl },
            ]}
            yieldHtml={pseo.yield_html}
            sections={sections}
        />
    );
}

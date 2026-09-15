export const revalidate = 86400; // 24h ISR cache
import { getCityBySlug, CITIES } from "@/lib/db";
import { SOLAR_PUISSANCES, getSolarPuissanceBySlug } from "@/data/solar-puissances";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SolaireContentPage from "@/components/SolaireContentPage";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
    return SOLAR_PUISSANCES.map((p) => ({ slug: p.slug }));
}

const BASE_URL = "https://www.expertpanneausolaire.ch";

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const { slug } = await params;
    const p = getSolarPuissanceBySlug(slug);
    if (!p) return {};

    const canonicalUrl = `${BASE_URL}/puissance/${slug}`;
    return {
        title: `Installation Panneaux Solaires ${p.puissance} : Prix & Production | Expert Panneau Solaire`,
        description: `Installation photovoltaïque ${p.puissance} : ${p.panneaux}, ${p.surface} de toiture, ${p.production}. ${p.prix} avant aides. Devis gratuit sous 24h.`,
        alternates: { canonical: canonicalUrl },
        openGraph: {
            title: `Panneaux solaires ${p.puissance} : prix et production`,
            description: `${p.prix} avant aides. Installateurs Les Pros du Solaire.`,
            locale: "fr_FR",
            type: "website",
            url: canonicalUrl,
            images: [{ url: p.image, width: 1200, height: 630, alt: `Installation solaire ${p.puissance}` }],
        },
        robots: { index: true, follow: true },
    };
}

export default async function PuissancePage({ params }: { params: Params }) {
    const { slug } = await params;
    const p = getSolarPuissanceBySlug(slug);
    const site = getCityBySlug("home") || Object.values(CITIES)[0];

    if (!p || !site) return notFound();

    const canonicalUrl = `${BASE_URL}/puissance/${slug}`;
    const introHtml = `<p class="mb-4">${p.description}</p>
    <p>
        Comptez entre <strong>${p.prix}</strong> pour une installation clé en main de ${p.puissance}, avant déduction de la rétribution unique  et de la reprise du surplus par le gestionnaire de réseau.
        Devis gratuit et personnalisé sous 24h.
    </p>`;

    const sections = [
        {
            title: `Recommandations pour une installation ${p.puissance}`,
            html: `<ul class="space-y-2">${p.points.map((pt) => `<li>${pt}</li>`).join("")}</ul>`,
        },
        {
            title: `Caractéristiques`,
            html: `<table class="w-full text-sm">
                <tbody>
                    <tr><td class="py-2 pr-4 font-bold">Puissance</td><td>${p.puissance}</td></tr>
                    <tr><td class="py-2 pr-4 font-bold">Panneaux</td><td>${p.panneaux}</td></tr>
                    <tr><td class="py-2 pr-4 font-bold">Surface</td><td>${p.surface}</td></tr>
                    <tr><td class="py-2 pr-4 font-bold">Production annuelle</td><td>${p.production}</td></tr>
                    <tr><td class="py-2 pr-4 font-bold">Prix fourniture + pose</td><td>${p.prix}</td></tr>
                </tbody>
            </table>
            <p class="mt-4">La production varie selon la région (950 à 1 450 kWh/kWc) : l'étude d'ensoleillement gratuite calcule la production exacte de votre toiture.</p>`,
        },
    ];

    const faqs = [
        {
            question: `Quelle puissance de panneaux solaires pour ma maison ?`,
            reponse: `Pour un foyer de 2 personnes, 3 kWc suffisent ; pour une famille de 4 personnes, 6 kWc sont recommandés ; au-delà (PAC, véhicule électrique, piscine), visez 9 à 12 kWc. L'étude gratuite dimensionne précisément selon votre consommation.`,
        },
        {
            question: `Quel est le prix d'une installation ${p.puissance} ?`,
            reponse: `Comptez entre ${p.prix} pour une installation clé en main, fourniture et pose comprises, avant déduction de la rétribution unique  et de la reprise du surplus par le gestionnaire de réseau.`,
        },
        {
            question: `Combien produit une installation ${p.puissance} ?`,
            reponse: `Une installation de ${p.puissance} produit environ ${p.production} selon la région (950 à 1 450 kWh/kWc). L'étude d'ensoleillement gratuite calcule la production exacte de votre toiture.`,
        },
        {
            question: `Où faire installer une centrale ${p.puissance} ?`,
            reponse: `Notre réseau d'installateurs certifiés intervient partout en Suisse romande. Consultez nos pages par ville ou demandez votre devis gratuit sous 24h.`,
        },
    ];

    return (
        <SolaireContentPage
            site={site}
            heroBadge="Dimensionnement offert"
            pageTitle={`Installation Panneaux Solaires ${p.puissance}`}
            introHtml={introHtml}
            facts={[
                { label: "Panneaux", value: p.panneaux },
                { label: "Prix installation", value: p.prix },
                { label: "Production", value: p.production },
                { label: "Surface", value: p.surface },
            ]}
            benefits={p.points}
            expertTip={p.expertTip}
            faqs={faqs}
            canonicalUrl={canonicalUrl}
            heroImage={p.image}
            breadcrumb={[{ name: `Installation ${p.puissance}`, item: canonicalUrl }]}
            sections={sections}
        />
    );
}

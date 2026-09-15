export const revalidate = 86400; // 24h ISR cache
import { getCityBySlug, CITIES } from "@/lib/db";
import { SOLAR_BRANDS, getSolarBrandBySlug } from "@/data/solar-brands";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SolaireContentPage from "@/components/SolaireContentPage";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
    return SOLAR_BRANDS.map((marque) => ({ slug: marque.slug }));
}

const BASE_URL = "https://www.expertpanneausolaire.ch";

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const { slug } = await params;
    const marque = getSolarBrandBySlug(slug);
    if (!marque) return {};

    const canonicalUrl = `${BASE_URL}/marques/${slug}`;
    return {
        title: `Panneaux Solaires ${marque.name} : Prix, Avis & Installation | Expert Panneau Solaire`,
        description: `Installation de panneaux solaires ${marque.name} (${marque.modeles.join(", ")}) par des installateurs RGE QualiPV. ${marque.prix} avant aides. Devis gratuit sous 24h.`,
        alternates: { canonical: canonicalUrl },
        openGraph: {
            title: `Panneaux Solaires ${marque.name} : Prix & Installation`,
            description: `${marque.prix} fourniture et pose, avant aides. Installateurs certifiés RGE QualiPV.`,
            locale: "fr_FR",
            type: "website",
            url: canonicalUrl,
            images: [{ url: marque.image, width: 1200, height: 630, alt: `Panneaux solaires ${marque.name}` }],
        },
        robots: { index: true, follow: true },
    };
}

export default async function MarquePage({ params }: { params: Params }) {
    const { slug } = await params;
    const marque = getSolarBrandBySlug(slug);
    const site = getCityBySlug("home") || Object.values(CITIES)[0];

    if (!marque || !site) return notFound();

    const canonicalUrl = `${BASE_URL}/marques/${slug}`;
    const introHtml = `<p class="mb-4">
        ${marque.name} est l'une des références du marché photovoltaïque français : ${marque.type}, rendement de ${marque.rendement} et gamme ${marque.gamme}.
        Notre réseau d'installateurs <strong>certifiés RGE QualiPV</strong> pose et met en service les gammes ${marque.modeles.join(", ")} partout en France.
    </p>
    <p>
        Comptez entre <strong>${marque.prix}</strong> pour une installation ${marque.name} clé en main, avant déduction de la prime à l'autoconsommation (jusqu'à 260€/kWc) et de la revente EDF OA.
        Devis gratuit et personnalisé sous 24h.
    </p>`;

    const sections = [
        {
            title: `Les points forts de ${marque.name}`,
            html: `<ul class="space-y-2">${marque.atouts.map((a) => `<li>${a}</li>`).join("")}</ul>`,
        },
        {
            title: `Les limites à connaître`,
            html: `<ul class="space-y-2">${marque.limites.map((l) => `<li>${l}</li>`).join("")}</ul>`,
        },
        {
            title: `Caractéristiques techniques`,
            html: `<table class="w-full text-sm">
                <tbody>
                    <tr><td class="py-2 pr-4 font-bold">Type</td><td>${marque.type}</td></tr>
                    <tr><td class="py-2 pr-4 font-bold">Rendement</td><td>${marque.rendement}</td></tr>
                    <tr><td class="py-2 pr-4 font-bold">Gamme</td><td>${marque.gamme}</td></tr>
                    <tr><td class="py-2 pr-4 font-bold">Surface couverte</td><td>${marque.surface}</td></tr>
                    <tr><td class="py-2 pr-4 font-bold">Modèles</td><td>${marque.modeles.join(", ")}</td></tr>
                    <tr><td class="py-2 pr-4 font-bold">Prix fourniture + pose</td><td>${marque.prix}</td></tr>
                </tbody>
            </table>`,
        },
    ];

    const faqs = [
        {
            question: `Quel est le prix d'une installation ${marque.name} ?`,
            reponse: `Comptez entre ${marque.prix} pour une installation clé en main, fourniture et pose comprises, avant déduction de la prime à l'autoconsommation (jusqu'à 260€/kWc). Le prix dépend de la puissance (${marque.gamme}) et de votre toiture.`,
        },
        {
            question: `Quelle est la durée de vie des panneaux ${marque.name} ?`,
            reponse: `Les panneaux ${marque.name} durent 30 ans et plus, avec une garantie produit de ${marque.atouts.some((a) => a.includes("30 ans")) ? "30 ans" : "25 ans"} et une dégradation de performance inférieure à 0,5% par an.`,
        },
        {
            question: `Une installation ${marque.name} est-elle éligible aux aides ?`,
            reponse: `Oui, si elle est installée par un professionnel RGE QualiPV : prime à l'autoconsommation jusqu'à 260€/kWc, revente du surplus à EDF OA (12,69 c€/kWh pendant 20 ans) et TVA réduite à 10%. Nous validons votre éligibilité avant la signature du devis.`,
        },
        {
            question: `Où faire installer des panneaux ${marque.name} ?`,
            reponse: `Notre réseau d'installateurs certifiés intervient partout en France. Consultez nos pages par ville pour trouver un installateur ${marque.name} près de chez vous, ou demandez votre devis gratuit sous 24h.`,
        },
    ];

    return (
        <SolaireContentPage
            site={site}
            heroBadge={`Installateur certifié ${marque.name}`}
            pageTitle={`Panneaux Solaires ${marque.name} : Prix & Installation`}
            introHtml={introHtml}
            facts={[
                { label: "Prix installation", value: marque.prix },
                { label: "Rendement", value: marque.rendement },
                { label: "Gamme", value: marque.gamme },
                { label: "Surface couverte", value: marque.surface },
            ]}
            benefits={marque.atouts}
            expertTip={marque.expertTip}
            faqs={faqs}
            canonicalUrl={canonicalUrl}
            heroImage={marque.image}
            breadcrumb={[{ name: marque.name, item: canonicalUrl }]}
            sections={sections}
        />
    );
}

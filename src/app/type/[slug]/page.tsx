export const revalidate = 86400; // 24h ISR cache
import { getCityBySlug, CITIES } from "@/lib/db";
import { SOLAR_TYPES, getSolarTypeBySlug } from "@/data/solar-types";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SolaireContentPage from "@/components/SolaireContentPage";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
    return SOLAR_TYPES.map((type) => ({ slug: type.slug }));
}

const BASE_URL = "https://www.expertpanneausolaire.ch";

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const { slug } = await params;
    const type = getSolarTypeBySlug(slug);
    if (!type) return {};

    const canonicalUrl = `${BASE_URL}/type/${slug}`;
    return {
        title: `${type.name} : prix & aides`,
        description: `${type.name} : ${type.prix} fourniture et pose, ${type.aides}. Installateurs certifiés Les Pros du Solaire. Devis gratuit sous 24h.`,
        alternates: { canonical: canonicalUrl },
        openGraph: {
            title: `${type.name} : Prix & Installation`,
            description: `${type.prix} avant aides. Installateurs Les Pros du Solaire.`,
            locale: "fr_FR",
            type: "website",
            url: canonicalUrl,
            images: [{ url: type.image, width: 1200, height: 630, alt: type.name }],
        },
        robots: { index: true, follow: true },
    };
}

export default async function TypePage({ params }: { params: Params }) {
    const { slug } = await params;
    const type = getSolarTypeBySlug(slug);
    const site = getCityBySlug("home") || Object.values(CITIES)[0];

    if (!type || !site) return notFound();

    const canonicalUrl = `${BASE_URL}/type/${slug}`;
    const introHtml = `<p class="mb-4">${type.description}</p>
    <p>
        Comptez entre <strong>${type.prix}</strong> pour une installation clé en main, avant déduction des aides (${type.aides}).
        Devis gratuit et personnalisé sous 24h, étude d'ensoleillement offerte.
    </p>`;

    const sections = [
        {
            title: `Les points clés de la ${type.shortName}`,
            html: `<ul class="space-y-2">${type.points.map((p) => `<li>${p}</li>`).join("")}</ul>`,
        },
        {
            title: `Pour quel projet ?`,
            html: `<p class="mb-2"><strong>Idéale pour :</strong> ${type.ideal}</p>
            <p>Notre réseau d'installateurs Les Pros du Solaire réalise l'étude d'ensoleillement et le dimensionnement gratuitement pour confirmer que la ${type.shortName} est adaptée à votre logement et à votre région.</p>`,
        },
    ];

    const faqs = [
        {
            question: `Quel est le prix d'une ${type.shortName} ?`,
            reponse: `Comptez entre ${type.prix} pour une installation clé en main, fourniture et pose comprises, avant déduction des aides (${type.aides}). Le devis gratuit sous 24h précise le coût exact après étude d'ensoleillement.`,
        },
        {
            question: `Quelles aides pour une ${type.shortName} ?`,
            reponse: `${type.aides}. Nous validons votre éligibilité avant la signature du devis et constituons le dossier gratuitement.`,
        },
        {
            question: `Quelle production pour une ${type.shortName} ?`,
            reponse: `Une ${type.shortName} produit environ ${type.production} selon la région et l'orientation. L'étude d'ensoleillement gratuite calcule la production exacte de votre toiture.`,
        },
        {
            question: `Où installer une ${type.shortName} ?`,
            reponse: `Notre réseau d'installateurs certifiés intervient partout en Suisse romande. Consultez nos pages par ville ou demandez votre devis gratuit sous 24h.`,
        },
    ];

    return (
        <SolaireContentPage
            site={site}
            heroBadge="Installateur Les Pros du Solaire"
            pageTitle={type.name}
            introHtml={introHtml}
            facts={[
                { label: "Prix installation", value: type.prix },
                { label: "Production", value: type.production },
                { label: "Aides", value: "Rétribution unique selon la puissance (Pronovo)" },
                { label: "Idéale pour", value: type.ideal },
            ]}
            benefits={type.points}
            expertTip={type.expertTip}
            faqs={faqs}
            canonicalUrl={canonicalUrl}
            heroImage={type.image}
            breadcrumb={[{ name: type.name, item: canonicalUrl }]}
            sections={sections}
        />
    );
}

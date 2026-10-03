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
        title: `Solaire ${marque.name} : prix & avis`,
        description: `Installation de panneaux solaires ${marque.name} (${marque.modeles.join(", ")}) par des installateurs Les Pros du Solaire. ${marque.prix} avant aides. Devis gratuit sous 24h.`,
        alternates: { canonical: canonicalUrl },
        openGraph: {
            title: `Panneaux Solaires ${marque.name} : Prix & Installation`,
            description: `${marque.prix} fourniture et pose, avant aides. Installateurs certifiés Les Pros du Solaire.`,
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
        ${marque.name} est l'une des références du marché photovoltaïque suisse : ${marque.type}, rendement de ${marque.rendement} et gamme ${marque.gamme}.
        Notre réseau d'installateurs <strong>certifiés Les Pros du Solaire</strong> pose et met en service les gammes ${marque.modeles.join(", ")} partout en Suisse romande.
    </p>
    <p>
        Comptez entre <strong>${marque.prix}</strong> pour une installation ${marque.name} clé en main, avant déduction de la rétribution unique  et de la reprise du surplus par le gestionnaire de réseau.
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
            reponse: `Comptez entre ${marque.prix} pour une installation clé en main, fourniture et pose comprises, avant déduction de la rétribution unique . Le prix dépend de la puissance (${marque.gamme}) et de votre toiture.`,
        },
        {
            question: `Quelle est la durée de vie des panneaux ${marque.name} ?`,
            reponse: `Les panneaux ${marque.name} durent 30 ans et plus, avec une garantie produit de ${marque.atouts.some((a) => a.includes("30 ans")) ? "30 ans" : "25 ans"} et une dégradation de performance inférieure à 0,5% par an.`,
        },
        {
            question: `Une installation ${marque.name} est-elle éligible aux aides ?`,
            reponse: `Oui, si elle est installée par une entreprise du label « Les Pros du Solaire » et raccordée dans les règles : la rétribution unique est versée par Pronovo après la mise en service (de l'ordre de 20 % de l'investissement), le surplus est repris par le gestionnaire de réseau (environ 11 ct/kWh au maximum jusqu'à 100 kW) et la TVA suisse est de 8,1 %. Nous validons votre éligibilité avant la signature du devis.`,
        },
        {
            question: `Où faire installer des panneaux ${marque.name} ?`,
            reponse: `Notre réseau d'installateurs certifiés intervient partout en Suisse romande. Consultez nos pages par ville pour trouver un installateur ${marque.name} près de chez vous, ou demandez votre devis gratuit sous 24h.`,
        },
    ];

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: `Panneau Solaire Photovoltaïque ${marque.name}`,
        image: marque.image,
        description: `Installation panneaux solaires ${marque.name} (${marque.modeles.join(", ")}) en Suisse romande : rendement ${marque.rendement}, gamme ${marque.gamme}. Entreprise Les Pros du Solaire, aides Pronovo.`,
        sku: `PV-CH-${marque.slug.toUpperCase()}-2026`,
        mpn: `SOL-CH-${marque.slug.toUpperCase()}`,
        brand: {
            "@type": "Brand",
            name: marque.name,
        },
        offers: {
            "@type": "Offer",
            url: canonicalUrl,
            priceCurrency: "CHF",
            price: "8900",
            priceValidUntil: "2027-12-31",
            itemCondition: "https://schema.org/NewCondition",
            availability: "https://schema.org/InStock",
            seller: {
                "@type": "Organization",
                name: "Expert Panneau Solaire Suisse",
            },
            shippingDetails: {
                "@type": "OfferShippingDetails",
                shippingRate: {
                    "@type": "MonetaryAmount",
                    value: "0.00",
                    currency: "CHF",
                },
                shippingDestination: {
                    "@type": "DefinedRegion",
                    addressCountry: "CH",
                },
                deliveryTime: {
                    "@type": "ShippingDeliveryTime",
                    handlingTime: {
                        "@type": "QuantitativeValue",
                        minValue: 1,
                        maxValue: 3,
                        unitCode: "d",
                    },
                    transitTime: {
                        "@type": "QuantitativeValue",
                        minValue: 3,
                        maxValue: 7,
                        unitCode: "d",
                    },
                },
            },
            hasMerchantReturnPolicy: {
                "@type": "MerchantReturnPolicy",
                applicableCountry: "CH",
                returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
                merchantReturnDays: 14,
                returnMethod: "https://schema.org/ReturnByMail",
                returnFees: "https://schema.org/FreeReturn",
            },
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: 168,
            bestRating: "5",
            worstRating: "1",
        },
        review: {
            "@type": "Review",
            author: {
                "@type": "Organization",
                name: "Expert Panneau Solaire Suisse",
            },
            datePublished: "2026-01-24",
            reviewBody: `Les panneaux photovoltaïques ${marque.name} (${marque.modeles.join(", ")}) offrent une performance certifiée adaptée au climat suisse et ouvrent droit à la rétribution unique Pronovo.`,
            reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
            },
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
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
        </>
    );
}

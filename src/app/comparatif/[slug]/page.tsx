export const revalidate = 86400; // 24h ISR cache
import { getCityBySlug, CITIES } from "@/lib/db";
import { SOLAR_COMPARATIFS, getSolarComparatifBySlug } from "@/data/solar-comparatifs";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SolaireContentPage from "@/components/SolaireContentPage";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
    return SOLAR_COMPARATIFS.map((c) => ({ slug: c.slug }));
}

const BASE_URL = "https://www.expertpanneausolaire.ch";

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const { slug } = await params;
    const comp = getSolarComparatifBySlug(slug);
    if (!comp) return {};

    const canonicalUrl = `${BASE_URL}/comparatif/${slug}`;
    return {
        title: `${comp.title} | Expert Panneau Solaire`,
        description: `${comp.a} ou ${comp.b} : prix, rendement, aides. Notre comparatif complet pour vous aider à choisir. ${comp.prix} avant aides. Devis gratuit sous 24h.`,
        alternates: { canonical: canonicalUrl },
        openGraph: {
            title: comp.title,
            description: `${comp.prix} avant aides. Comparatif détaillé par des installateurs Les Pros du Solaire.`,
            locale: "fr_FR",
            type: "website",
            url: canonicalUrl,
            images: [{ url: comp.image, width: 1200, height: 630, alt: comp.title }],
        },
        robots: { index: true, follow: true },
    };
}

function tableHtml(comp: (typeof SOLAR_COMPARATIFS)[number]): string {
    const rows = comp.rows
        .map(
            (r) => `<tr class="border-b border-slate-200">
                <td class="py-3 pr-4 font-bold text-slate-900">${r.critere}</td>
                <td class="py-3 pr-4">${r.a}</td>
                <td class="py-3">${r.b}</td>
            </tr>`
        )
        .join("");
    return `<div class="overflow-x-auto">
        <table class="w-full text-sm">
            <thead>
                <tr class="border-b-2 border-slate-300 text-left">
                    <th class="py-2 pr-4">Critère</th>
                    <th class="py-2 pr-4 text-amber-700">${comp.a}</th>
                    <th class="py-2 text-amber-700">${comp.b}</th>
                </tr>
            </thead>
            <tbody>${rows}</tbody>
        </table>
    </div>
    <p class="mt-4 text-xs text-slate-500">Prix indicatifs fourniture + pose, avant déduction des aides (rétribution unique, la rétribution de l'injection, TVA suisse (8,1 %)).</p>`;
}

export default async function ComparatifPage({ params }: { params: Params }) {
    const { slug } = await params;
    const comp = getSolarComparatifBySlug(slug);
    const site = getCityBySlug("home") || Object.values(CITIES)[0];

    if (!comp || !site) return notFound();

    const canonicalUrl = `${BASE_URL}/comparatif/${slug}`;
    const introHtml = `<p class="mb-4">${comp.intro}</p>
    <p>
        Prix indicatifs : <strong>${comp.prix}</strong> fourniture et pose, avant déduction des aides.
        Notre réseau d'installateurs Les Pros du Solaire vous conseille gratuitement pour faire le bon choix.
    </p>`;

    const sections = [
        {
            title: `Comparatif : ${comp.a} vs ${comp.b}`,
            html: tableHtml(comp),
        },
        {
            title: comp.verdictTitle,
            html: `<div class="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl">
                <p class="text-slate-800 leading-relaxed">${comp.verdict}</p>
            </div>`,
        },
    ];

    return (
        <SolaireContentPage
            site={site}
            heroBadge="Comparatif expert 2026"
            pageTitle={comp.title}
            introHtml={introHtml}
            facts={[
                { label: comp.a.split(" ")[0], value: "Référence" },
                { label: comp.b.split(" ")[0], value: "Alternative" },
                { label: "Budget", value: comp.prix },
                { label: "Aides", value: "Rétribution unique selon la puissance (Pronovo)" },
            ]}
            benefits={[]}
            expertTip="Le bon choix dépend de votre toiture, de votre consommation et de votre budget. Demandez 2 à 3 devis comparatifs à des installateurs certifiés avant de vous décider."
            faqs={comp.faqs}
            canonicalUrl={canonicalUrl}
            heroImage={comp.image}
            breadcrumb={[{ name: "Comparatifs", item: `${BASE_URL}/comparatif` }, { name: comp.title, item: canonicalUrl }]}
            sections={sections}
        />
    );
}

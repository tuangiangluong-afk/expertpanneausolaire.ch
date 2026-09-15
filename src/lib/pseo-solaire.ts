import type { CityConfig } from "@/lib/db";
import type { SolarBrand } from "@/data/solar-brands";

// Production solaire réelle par département (kWh/kWc/an)
// Information gain local : même marque, production différente selon la région
const YIELD: Record<string, { prod: string; zone: string; conseil: string }> = {
    "13": { prod: "1 350 à 1 450 kWh/kWc", zone: "très ensoleillée", conseil: "le Sud bénéficie du meilleur gisement solaire de France : une installation 6 kWc produit plus de 8 000 kWh/an, idéal pour la climatisation l'été et le surplus à revendre" },
    "06": { prod: "1 350 à 1 450 kWh/kWc", zone: "très ensoleillée", conseil: "le littoral azuréen offre 300+ jours de soleil par an : l'autoconsommation avec climatisation réversible est particulièrement rentable" },
    "83": { prod: "1 350 à 1 450 kWh/kWc", zone: "très ensoleillée", conseil: "le Var cumule fort ensoleillement et forte consommation estivale (climatisation, piscine) : le solaire lisse la facture d'été" },
    "34": { prod: "1 300 à 1 400 kWh/kWc", zone: "très ensoleillée", conseil: "l'Hérault est une zone de production maximale : les panneaux produisent près de 1 400 kWh par kWc et par an" },
    "84": { prod: "1 300 à 1 400 kWh/kWc", zone: "très ensoleillée", conseil: "le Vaucluse profite d'un gisement solaire parmi les meilleurs de France, avec un rendement supérieur de 20% à la moyenne nationale" },
    "33": { prod: "1 050 à 1 150 kWh/kWc", zone: "bien ensoleillée", conseil: "la Gironde offre un bon gisement solaire (1 100 kWh/kWc) : une installation 6 kWc produit plus de 6 500 kWh/an" },
    "44": { prod: "1 000 à 1 100 kWh/kWc", zone: "ensoleillée", conseil: "la Loire-Atlantique reste productive malgré le climat océanique : les panneaux modernes produisent bien même par ciel voilé" },
    "35": { prod: "1 000 à 1 100 kWh/kWc", zone: "ensoleillée", conseil: "l'Ille-et-Vilaine offre 1 050 kWh/kWc : l'autoconsommation y est rentable, surtout avec une orientation sud" },
    "64": { prod: "1 000 à 1 100 kWh/kWc", zone: "ensoleillée", conseil: "le Pays Basque bénéficie d'un bon ensoleillement (1 050 kWh/kWc) malgré les pluies : l'orientation et l'inclinaison comptent plus que le climat" },
    "75": { prod: "1 000 à 1 100 kWh/kWc", zone: "ensoleillée", conseil: "l'Île-de-France produit 1 000 à 1 100 kWh/kWc : suffisant pour une autoconsommation rentable, surtout avec une toiture bien orientée" },
    "92": { prod: "1 000 à 1 100 kWh/kWc", zone: "ensoleillée", conseil: "les Hauts-de-Seine offrent un gisement correct (1 050 kWh/kWc) : l'autoconsommation reste rentable avec la prime et la revente" },
    "69": { prod: "1 050 à 1 150 kWh/kWc", zone: "bien ensoleillée", conseil: "le Rhône profite d'un bon ensoleillement (1 100 kWh/kWc), renforcé par des hivers clairs qui favorisent la production" },
    "01": { prod: "1 050 à 1 150 kWh/kWc", zone: "bien ensoleillée", conseil: "l'Ain, avec le Pays de Gex, offre un bon gisement (1 100 kWh/kWc) : les panneaux produisent bien malgré l'hiver" },
    "74": { prod: "1 050 à 1 150 kWh/kWc", zone: "bien ensoleillée", conseil: "la Haute-Savoie profite de l'altitude : un air plus pur et des hivers clairs donnent 1 100 kWh/kWc, l'un des meilleurs rendements alpins" },
    "67": { prod: "950 à 1 050 kWh/kWc", zone: "modérément ensoleillée", conseil: "l'Alsace produit 1 000 kWh/kWc : l'autoconsommation reste rentable, mais l'orientation plein sud devient déterminante" },
    "68": { prod: "950 à 1 050 kWh/kWc", zone: "modérément ensoleillée", conseil: "le Haut-Rhin offre 1 000 kWh/kWc : privilégiez une toiture plein sud et un angle de 30° pour maximiser la production" },
    "59": { prod: "900 à 1 000 kWh/kWc", zone: "modérément ensoleillée", conseil: "le Nord produit 950 kWh/kWc, le plus faible de France : l'autoconsommation reste rentable grâce à la prime, mais le dimensionnement doit être précis" },
    "51": { prod: "950 à 1 050 kWh/kWc", zone: "modérément ensoleillée", conseil: "la Marne offre 1 000 kWh/kWc : une installation bien orientée couvre l'essentiel des besoins d'une famille" },
    "21": { prod: "1 000 à 1 100 kWh/kWc", zone: "ensoleillée", conseil: "la Côte-d'Or profite d'un ensoleillement correct (1 050 kWh/kWc) avec des hivers clairs favorables" },
    "76": { prod: "950 à 1 050 kWh/kWc", zone: "modérément ensoleillée", conseil: "la Seine-Maritime, malgré son climat humide, offre 1 000 kWh/kWc : les panneaux modernes tolèrent bien les faibles lumières" },
    "95": { prod: "1 000 à 1 100 kWh/kWc", zone: "ensoleillée", conseil: "le Val-d'Oise produit 1 050 kWh/kWc : l'autoconsommation est rentable avec une orientation sud" },
    "94": { prod: "1 000 à 1 100 kWh/kWc", zone: "ensoleillée", conseil: "le Val-de-Marne offre 1 050 kWh/kWc : bon rendement pour l'agglomération parisienne" },
    "60": { prod: "950 à 1 050 kWh/kWc", zone: "modérément ensoleillée", conseil: "l'Oise produit 1 000 kWh/kWc : dimensionnez précisément pour maximiser la rentabilité" },
    "77": { prod: "1 000 à 1 100 kWh/kWc", zone: "ensoleillée", conseil: "la Seine-et-Marne offre 1 050 kWh/kWc : un bon gisement pour l'Est parisien" },
};

const DEFAULT_YIELD = {
    prod: "1 000 à 1 150 kWh/kWc",
    zone: "ensoleillée",
    conseil: "le gisement solaire français varie de 950 à 1 450 kWh/kWc selon la région : l'étude gratuite calcule la production exacte de votre toiture",
};

export interface PseoSolaireContent {
    meta_title: string;
    meta_description: string;
    hero_title: string;
    intro_html: string;
    prix: string;
    yield_html: string;
    faqs: { question: string; reponse: string }[];
    expert_tip: string;
    atouts: string[];
}

function hash(str: string): number {
    return str.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
}

export function getPseoSolaireContent(city: CityConfig, brand: SolarBrand): PseoSolaireContent {
    const deptCode = (city.department || "").substring(0, 2);
    const yieldInfo = YIELD[deptCode] || DEFAULT_YIELD;
    const quartiers = city.neighborhoods || [];
    const quartierMention = quartiers.length >= 2
        ? `Nous intervenons dans tous les secteurs : ${quartiers.slice(0, 3).join(", ")} et communes environnantes.`
        : "";
    const h = hash(city.city + brand.slug);

    const meta_title = `Installation Panneaux Solaires ${brand.name} à ${city.city}${city.department ? ` (${city.department})` : ""} | Prix & Devis`;
    const meta_description = `Installation de panneaux solaires ${brand.name} à ${city.city} par un installateur RGE QualiPV. Production ${yieldInfo.prod}. ${brand.prix} avant aides. Devis gratuit sous 24h.`;

    const hero_title = `Installation <span class="text-amber-600">Panneaux Solaires ${brand.name}</span> à ${city.city}`;

    const yield_html = `<div class="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-6">
        <p class="text-sm text-slate-700">
            <strong>Ensoleillement ${yieldInfo.zone} à ${city.city} :</strong> production estimée de <strong>${yieldInfo.prod}</strong>. ${yieldInfo.conseil}. Notre étude d'ensoleillement gratuite confirme le potentiel exact de votre toiture.
        </p>
    </div>`;

    const intros = [
        `<p class="mb-4">
            Vous cherchez un installateur certifié <strong>RGE QualiPV</strong> pour la pose de panneaux solaires <strong>${brand.name}</strong> à <strong>${city.city}${city.postalCode ? ` (${city.postalCode})` : ""}</strong> ?
            Notre réseau d'artisans qualifiés installe les gammes ${brand.modeles.join(", ")} avec étude d'ensoleillement offerte et raccordement Enedis géré.
            ${quartierMention}
        </p>
        <p>
            Comptez entre <strong>${brand.prix}</strong> pour une installation ${brand.name} clé en main à ${city.city}, avant déduction de la prime à l'autoconsommation (jusqu'à 260€/kWc).
            Nous constituons gratuitement votre dossier de subventions.
        </p>`,
        `<p class="mb-4">
            L'installation de panneaux solaires <strong>${brand.name}</strong> à <strong>${city.city}</strong> par un professionnel <strong>RGE QualiPV</strong> est la garantie d'un rendement optimal (${brand.rendement}) et de l'éligibilité aux aides de l'État.
            ${quartierMention}
        </p>
        <p>
            Budget indicatif à ${city.city} : <strong>${brand.prix}</strong> fourniture et pose comprises, avant aides.
            Notre équipe gère votre prime à l'autoconsommation et votre dossier de revente EDF OA.
        </p>`,
        `<p class="mb-4">
            Avec un gisement de <strong>${yieldInfo.prod}</strong> à ${city.city}, une installation ${brand.name} de 6 kWc produit plus de 6 000 kWh par an et réduit votre facture EDF de 50 à 70%.
            ${quartierMention}
        </p>
        <p>
            Prix indicatif à ${city.city} : <strong>${brand.prix}</strong> avant aides (prime autoconsommation + revente EDF OA).
            Devis gratuit et sans engagement sous 24h.
        </p>`,
        `<p class="mb-4">
            La gamme <strong>${brand.name}</strong> (${brand.modeles.join(", ")}) à <strong>${city.city}</strong> : ${brand.rendement} de rendement, garantie jusqu'à 30 ans et production adaptée au climat ${yieldInfo.zone} de votre région.
            ${quartierMention}
        </p>
        <p>
            Budget à prévoir à ${city.city} : <strong>${brand.prix}</strong> avant aides. Notre étude d'ensoleillement gratuite calcule votre production exacte.
        </p>`,
    ];

    const intro_html = intros[h % intros.length];

    const faqs = [
        {
            question: `Quel est le prix d'une installation ${brand.name} à ${city.city} ?`,
            reponse: `Comptez entre ${brand.prix} pour une installation clé en main à ${city.city}, fourniture et pose comprises, avant déduction de la prime à l'autoconsommation (jusqu'à 260€/kWc). Le devis gratuit sous 24h précise le coût exact après étude d'ensoleillement.`,
        },
        {
            question: `Combien produisent des panneaux ${brand.name} dans le ${city.department || deptCode} ?`,
            reponse: `Dans le ${city.department || deptCode}, la production est estimée à ${yieldInfo.prod} : ${yieldInfo.conseil}. Une installation de 6 kWc produit ainsi entre 5 500 et 8 500 kWh selon votre toiture.`,
        },
        {
            question: `Quelles aides pour des panneaux ${brand.name} dans le ${city.department || deptCode} ?`,
            reponse: `Vous cumulez la prime à l'autoconsommation (jusqu'à 260€/kWc versée sur 5 ans), la revente du surplus à EDF OA (12,69 c€/kWh pendant 20 ans) et la TVA réduite à 10%. Nous validons votre éligibilité avant la signature du devis.`,
        },
        {
            question: `Pourquoi choisir ${brand.name} ?`,
            reponse: `${brand.atouts.join(" ")} ${brand.expertTip}`,
        },
        {
            question: `Combien de temps dure l'installation de panneaux ${brand.name} à ${city.city} ?`,
            reponse: `L'installation par nos techniciens QualiPV à ${city.city} prend 1 à 2 jours : pose des panneaux, raccordement à l'onduleur, mise en service. Le raccordement Enedis est géré de bout en bout (3 à 6 semaines).`,
        },
    ];

    return {
        meta_title,
        meta_description,
        hero_title,
        intro_html,
        prix: brand.prix,
        yield_html,
        faqs,
        expert_tip: brand.expertTip,
        atouts: brand.atouts,
    };
}

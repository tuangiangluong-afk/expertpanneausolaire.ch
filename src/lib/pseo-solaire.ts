import type { CityConfig } from "@/lib/db";
import type { SolarBrand } from "@/data/solar-brands";
import { CANTONS, cantonFromNpa } from "@/data/ch-cantons";
import { MARKET, CH_FACTS } from "@/config/market";

/**
 * Production solaire réelle par canton (kWh/kWc/an) et contrainte locale.
 *
 * ⚠️ Cette table était indexée sur des codes de DÉPARTEMENTS FRANÇAIS (13, 06,
 * 83…). Comme les villes de ce site sont suisses, aucune correspondance
 * n'existait : toutes les pages ville × marque retombaient sur le texte par
 * défaut, qui parlait du « gisement solaire suisse ». Elle est désormais
 * indexée sur les cantons.
 *
 * Information gain local : même marque, production et contrainte différentes
 * selon le canton (foehn en Valais, bise sur le Plateau, neige en altitude).
 */
type YieldInfo = { prod: string; zone: string; conseil: string };

const CANTON_YIELD: Record<string, YieldInfo> = {
    VS: {
        prod: "1 100 à 1 300 kWh/kWc",
        zone: "la plus ensoleillée de Suisse",
        conseil: "le Valais est le canton le plus ensoleillé du pays : une installation de 6 kWc y produit couramment plus de 7 000 kWh par an, mais le foehn impose des fixations calculées pour des rafales de vallée",
    },
    GE: {
        prod: "1 000 à 1 150 kWh/kWc",
        zone: "bien ensoleillée",
        conseil: "le bassin genevois bénéficie d'un ensoleillement régulier, tempéré par les brouillards de plaine en novembre et décembre",
    },
    VD: {
        prod: "1 000 à 1 150 kWh/kWc",
        zone: "bien ensoleillée",
        conseil: "le canton de Vaud combine l'ensoleillement de l'arc lémanique et les secteurs d'altitude où la charge de neige devient déterminante",
    },
    NE: {
        prod: "950 à 1 100 kWh/kWc",
        zone: "ensoleillée",
        conseil: "le Jura neuchâtelois est exposé à la neige dès 800 m d'altitude : les crochets et rails doivent être dimensionnés en conséquence",
    },
    FR: {
        prod: "950 à 1 100 kWh/kWc",
        zone: "ensoleillée",
        conseil: "le canton de Fribourg alterne plateaux dégagés et Préalpes enneigées : la production varie sensiblement selon l'altitude de la parcelle",
    },
    JU: {
        prod: "900 à 1 050 kWh/kWc",
        zone: "modérément ensoleillée",
        conseil: "les crêtes jurassiennes sont très enneigées et exposées au vent d'ouest : l'orientation et le dimensionnement de la structure priment sur la technologie des modules",
    },
    BE: {
        prod: "900 à 1 100 kWh/kWc",
        zone: "modérément ensoleillée",
        conseil: "la région de Bienne et le Jura bernois offrent un gisement correct : l'autoconsommation reste le premier levier de rentabilité",
    },
};

const DEFAULT_YIELD: YieldInfo = {
    prod: "900 à 1 200 kWh/kWc",
    zone: "variable selon l'altitude",
    conseil: `en ${MARKET.country}, une installation produit ${MARKET.typicalYield} : l'étude gratuite calcule la production exacte de votre toiture`,
};

/**
 * Aides réelles en Suisse.
 * (Remplace la rétribution unique, le tarif la rétribution de l'injection et la TVA 10 %,
 * mécanismes exclusivement suisse qui n'ont aucune existence en Suisse.)
 */
const AIDS_SUMMARY = `la ${MARKET.subsidyScheme} versée par ${MARKET.subsidyBody}, complétée selon la commune par un programme cantonal, et la ${MARKET.feedInScheme} versée par le ${MARKET.gridOperatorShort}`;

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
    const npa = city.postalCode || "";
    const cantonCode = cantonFromNpa(npa) || city.department || "";
    const canton = CANTONS[cantonCode];
    const yieldInfo = CANTON_YIELD[cantonCode] || DEFAULT_YIELD;
    const cantonName = canton?.name || "Suisse romande";
    const quartiers = city.neighborhoods || [];
    const quartierMention = quartiers.length >= 2
        ? `Nous intervenons dans tous les secteurs : ${quartiers.slice(0, 3).join(", ")} et communes environnantes.`
        : "";
    const neige = !!canton?.neige;
    const snowNote = neige
        ? ` La charge de neige du canton (${cantonName}) est intégrée au calcul des fixations.`
        : "";
    const h = hash(city.city + brand.slug);

    const meta_title = `Panneaux Solaires ${brand.name} à ${city.city}${cantonCode ? ` (${cantonCode})` : ""} | Prix & Devis`;
    const meta_description = `Installation de panneaux solaires ${brand.name} à ${city.city} par une entreprise du label ${MARKET.installerLabelShort}. Production ${yieldInfo.prod}. ${brand.prix} avant ${MARKET.subsidyScheme}. Devis gratuit sous 24h.`;

    const hero_title = `Installation <span class="text-amber-600">Panneaux Solaires ${brand.name}</span> à ${city.city}`;

    const yield_html = `<div class="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-6">
        <p class="text-sm text-slate-700">
            <strong>Ensoleillement ${yieldInfo.zone} à ${city.city} :</strong> production estimée de <strong>${yieldInfo.prod}</strong> (canton de ${cantonName}). ${yieldInfo.conseil}.${snowNote} Notre étude d'ensoleillement gratuite confirme le potentiel exact de votre toiture.
        </p>
    </div>`;

    const intros = [
        `<p class="mb-4">
            Vous cherchez un installateur porteur du label <strong>${MARKET.installerLabelShort}</strong> pour la pose de panneaux solaires <strong>${brand.name}</strong> à <strong>${city.city}${npa ? ` (${npa})` : ""}</strong> ?
            Nos partenaires installent les gammes ${brand.modeles.join(", ")} avec étude d'ensoleillement offerte et raccordement au ${MARKET.gridOperatorShort} géré de bout en bout.
            ${quartierMention}
        </p>
        <p>
            Comptez entre <strong>${brand.prix}</strong> pour une installation ${brand.name} clé en main à ${city.city}, avant déduction de la ${MARKET.subsidyScheme} versée par ${MARKET.subsidyBody}.
            Nous montons gratuitement votre dossier de subvention.
        </p>`,
        `<p class="mb-4">
            L'installation de panneaux solaires <strong>${brand.name}</strong> à <strong>${city.city}</strong> par une entreprise du label <strong>${MARKET.installerLabelShort}</strong> est la garantie d'un rendement conforme (${brand.rendement}) et d'un dossier de ${MARKET.subsidyScheme} accepté par ${MARKET.subsidyBody}.
            ${quartierMention}
        </p>
        <p>
            Budget indicatif à ${city.city} : <strong>${brand.prix}</strong> fourniture et pose comprises, avant subvention.
            Notre équipe gère votre demande de ${MARKET.subsidyScheme} et le raccordement au ${MARKET.gridOperatorShort}.
        </p>`,
        `<p class="mb-4">
            Avec un gisement de <strong>${yieldInfo.prod}</strong> à ${city.city}, une installation ${brand.name} de 6 kWc produit plus de 5 500 kWh par an et couvre une large part de la consommation d'une maison individuelle.
            ${quartierMention}
        </p>
        <p>
            Prix indicatif à ${city.city} : <strong>${brand.prix}</strong> avant subvention. Comme le kWh acheté coûte environ 30 ct/kWh contre environ 11 ct/kWh pour la reprise de l'injection, autoconsommer rapporte près de trois fois plus que revendre.
            Devis gratuit et sans engagement sous 24h.
        </p>`,
        `<p class="mb-4">
            La gamme <strong>${brand.name}</strong> (${brand.modeles.join(", ")}) à <strong>${city.city}</strong> : ${brand.rendement} de rendement, garantie jusqu'à 30 ans et production adaptée au climat ${yieldInfo.zone} de votre canton.
            ${quartierMention}
        </p>
        <p>
            Budget à prévoir à ${city.city} : <strong>${brand.prix}</strong> avant ${MARKET.subsidyScheme}. Notre étude d'ensoleillement gratuite calcule votre production exacte.
        </p>`,
    ];

    const intro_html = intros[h % intros.length];

    const faqs = [
        {
            question: `Quel est le prix d'une installation ${brand.name} à ${city.city} ?`,
            reponse: `Comptez entre ${brand.prix} pour une installation clé en main à ${city.city}, fourniture et pose comprises, avant déduction de la ${MARKET.subsidyScheme}. En ${MARKET.country}, comptez ${MARKET.pricePerKwc} pour un projet standard. Le devis gratuit sous 24h précise le coût exact après étude d'ensoleillement.`,
        },
        {
            question: `Combien produisent des panneaux ${brand.name} dans le canton de ${cantonName} ?`,
            reponse: `Dans le canton de ${cantonName}, la production est estimée à ${yieldInfo.prod} : ${yieldInfo.conseil}.${snowNote} Une installation de 6 kWc produit ainsi entre 5 400 et 7 800 kWh par an selon l'orientation et l'inclinaison de votre toiture.`,
        },
        {
            question: `Quelles subventions pour des panneaux ${brand.name} dans le canton de ${cantonName} ?`,
            reponse: `Vous mobilisez ${AIDS_SUMMARY}. La ${MARKET.subsidyScheme} est versée par ${MARKET.subsidyBody} après la mise en service ; le ${MARKET.gridOperatorShort} fixe la ${MARKET.feedInScheme}. Les travaux électriques doivent être réalisés dans les règles de l'${MARKET.electricalNorm}. Nous validons votre éligibilité avant la signature du devis.`,
        },
        {
            question: `Pourquoi choisir ${brand.name} ?`,
            reponse: `${brand.atouts.join(" ")} ${brand.expertTip}`,
        },
        {
            question: `Combien de temps dure l'installation de panneaux ${brand.name} à ${city.city} ?`,
            reponse: `L'installation par nos partenaires à ${city.city} prend 1 à 2 jours : pose des panneaux, raccordement à l'onduleur, mise en service. Le raccordement au ${MARKET.gridOperatorShort} est géré de bout en bout (généralement 4 à 8 semaines selon le réseau).`,
        },
        {
            question: `Faut-il une autorisation pour poser des panneaux solaires à ${city.city} ?`,
            reponse: `Sur une toiture existante, l'installation est généralement dispensée d'autorisation de construire dans les communes qui ont adopté la procédure simplifiée ; une annonce reste nécessaire. Les travaux électriques relèvent de l'${MARKET.electricalNorm} et, au-delà de 30 kVA, de l'approbation de l'${MARKET.buildingAuthority}.`,
        },
        {
            question: `Autoconsommation ou revente de la production à ${city.city} ?`,
            reponse: `Autoconsommation d'abord : le kWh évité est facturé autour de ${MARKET.energyPriceRetail}, contre ${MARKET.feedInTariff} pour l'injection. ${CH_FACTS[5]} Le surplus non consommé est repris par le ${MARKET.gridOperatorShort}.`,
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

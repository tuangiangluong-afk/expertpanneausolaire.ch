import type { CityConfig } from "@/lib/db";
import type { SolarBrand } from "@/data/solar-brands";
import { CANTONS, cantonFromNpa } from "@/data/ch-cantons";
import { MARKET, CH_FACTS } from "@/config/market";
import { composeLocalIntro } from "@/lib/pseo-local";

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
    // Communes limitrophes réelles (avec distance), et non la liste de quartiers du maillage.
    const zones = (city.zones || []).map((z) => z.nom);
    const quartierMention = zones.length >= 2
        ? `Nous intervenons à ${city.city} et dans les communes voisines : ${zones.slice(0, 3).join(", ")}.`
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

    // L'intro est assemblée à partir de six emplacements factuels (voir
    // pseo-local.ts) : l'ancienne version piochait 1 texte sur 4 par hash, ce
    // qui donnait des pages identiques à un mot près sur tout le canton.
    const intro_html = composeLocalIntro(
        {
            city: city.city,
            postal: npa,
            deptName: cantonName,
            zones,
            authority: `l'${MARKET.buildingAuthority}`,
        },
        {
            audience: "Les propriétaires et les entreprises",
            service: "l'étude, la fourniture et la pose de l'installation solaire",
            norms: `l'${MARKET.electricalNorm}`,
            document: `le dossier de ${MARKET.subsidyScheme} et le protocole de mise en service`,
            authorityLabel: "l'autorité de contrôle des installations électriques",
            project: "votre projet photovoltaïque",
            terms: { dept: "canton", prefecture: "chef-lieu", region: "canton", city: "localité" },
        },
        {
            openers: [
                (f) => `Panneaux solaires ${brand.name} à ${f.city} : nos partenaires posent la gamme ${brand.modeles.join(", ")}, avec étude d'ensoleillement offerte.`,
                (f) => `À ${f.city}, une installation ${brand.name} couvre le besoin d'une maison individuelle, avec raccordement au ${MARKET.gridOperatorShort} géré de bout en bout.`,
                (f) => `Pour une toiture à ${f.city}, la gamme ${brand.name} (${brand.gamme}) est prévue pour ${brand.surface} de capteurs.`,
                (f) => `La gamme ${brand.name} à ${f.city} : ${brand.atouts[0].toLowerCase()}`,
                (f) => `Nos partenaires installent ${brand.name} à ${f.city} et montent gratuitement le dossier de ${MARKET.subsidyScheme}.`,
                (f) => `Toiture à équiper à ${f.city} : l'étude d'ensoleillement ${brand.name} est gratuite et sans engagement.`,
            ],
            middles: [
                () => `Comptez ${brand.prix} pour une installation ${brand.name} clé en main, fourniture et pose comprises, avant ${MARKET.subsidyScheme}.`,
                (f) => `Le budget à ${f.city} dépend de la puissance installée et du nombre de capteurs, pour un rendement annoncé de ${brand.rendement}.`,
                () => `La ${MARKET.subsidyScheme} est versée par ${MARKET.subsidyBody} après la mise en service : nous montons le dossier avant le début des travaux.`,
                (f) => `Les travaux électriques à ${f.city} relèvent de l'${MARKET.electricalNorm} et sont validés par un installateur autorisé.`,
                () => `Autoconsommer d'abord reste le calcul gagnant : le kWh évité vaut ${MARKET.energyPriceRetail}, contre ${MARKET.feedInTariff}.`,
                (f) => `Le devis remis à ${f.city} distingue le matériel, la pose, le raccordement et les démarches administratives incluses.`,
            ],
        },
        h,
    );

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

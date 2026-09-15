/**
 * PROFIL MARCHÉ — source unique de vérité pour tout ce qui dépend du pays.
 *
 * POURQUOI CE FICHIER EXISTE
 * --------------------------
 * Ce site est un fork d'un site français. Comme le pays était écrit en dur
 * dans des dizaines de fichiers, les mécanismes français (RGE/QualiPV,
 * EDF OA, Enedis, Consuel, prime à l'autoconsommation, TVA 10 %) ont fuité
 * partout : titre de la page d'accueil, données structurées, prix, guides,
 * pages pSEO, formulaires.
 *
 * Conséquence : le même bug se rejoue à chaque nouveau domaine (Suisse,
 * Espagne, Allemagne, Mexique…).
 *
 * Ici, tout ce qui est spécifique au pays est déclaré une seule fois. Les
 * composants et les données lisent ce profil. Ajouter un pays = changer de
 * profil, pas forker le site.
 *
 * Les valeurs ci-dessous sont vérifiables et sourcées (voir `sources`).
 */

export interface MarketProfile {
    /** Identité */
    country: string;
    countryCode: string; // ISO 3166-1 alpha-2
    language: string; // BCP 47 utilisé pour <html lang> et l'OG
    locale: string; // locale Open Graph (fr_CH)
    currency: string; // symbole affiché
    currencyCode: string; // ISO 4217
    /** Cadre administratif */
    gridOperator: string; // qui exploite le réseau de distribution
    gridOperatorShort: string;
    buildingAuthority: string; // qui autorise l'installation électrique
    installerLabel: string; // le label de qualité local
    installerLabelShort: string;
    /** Mécanismes financiers */
    subsidyScheme: string; // subvention à l'investissement
    subsidyBody: string; // organisme qui la verse
    feedInScheme: string; // reprise / rachat de la production
    taxScheme: string; // traitement fiscal / TVA
    /** Chiffres clés (à citer par les moteurs IA) */
    energyPriceRetail: string; // prix du kWh acheté
    feedInTariff: string; // rétribution de l'injection
    typicalYield: string; // produit par kWc selon l'ensoleillement
    pricePerKwc: string; // fourchette de prix au kWc installé
    /** Normes */
    electricalNorm: string;
    structuralNorm: string;
    /** Sources publiques, pour la traçabilité */
    sources: { label: string; url: string }[];
}

export const CH_MARKET: MarketProfile = {
    country: "Suisse",
    countryCode: "CH",
    language: "fr-CH",
    locale: "fr_CH",
    currency: "CHF",
    currencyCode: "CHF",

    gridOperator: "gestionnaire de réseau de distribution local",
    gridOperatorShort: "gestionnaire de réseau",
    buildingAuthority: "ESTI (Inspection fédérale des installations à courant fort)",
    installerLabel: "Les Pros du Solaire, le label de qualité de Swissolar",
    installerLabelShort: "Les Pros du Solaire",

    subsidyScheme: "rétribution unique (RU)",
    subsidyBody: "Pronovo",
    feedInScheme: "rétribution de l'injection (RI)",
    taxScheme: "TVA suisse et imposition des revenus de l'injection selon le canton",

    energyPriceRetail: "environ 30 ct/kWh (tarif moyen suisse, 2026)",
    feedInTariff: "environ 11 ct/kWh au maximum pour les installations jusqu'à 100 kW",
    typicalYield: "900 à 1 200 kWh par kWc et par an selon le canton",
    pricePerKwc: "1 800 à 2 200 CHF par kWc installé",

    electricalNorm: "OIBT (ordonnance sur les installations à basse tension) et autorisation d'installer ESTI",
    structuralNorm: "normes SIA (charges de neige et de vent, SIA 261)",

    sources: [
        { label: "Pronovo — rétribution unique photovoltaïque", url: "https://pronovo.ch/fr/subventions/photovoltaique/" },
        { label: "Swissolar — label de qualité « Les Pros du Solaire »", url: "https://www.swissolar.ch/fr/les-pros-du-solaire/le-label-de-qualite" },
        { label: "Swissolar — normes et prescriptions", url: "https://www.swissolar.ch/fr/connaissances/planification-et-mise-en-oeuvre/normes-et-prescriptions" },
        { label: "ESTI — autorisation d'installer (OIBT art. 7/9 et 14)", url: "https://techniquebatiment.ch/formation/preparation-article-14-oibt/" },
        { label: "SuisseEnergie — estimer sa rétribution unique", url: "https://www.suisseenergie.ch/habiter/retribution-unique/" },
    ],
};

/**
 * Phrases prêtes à l'emploi pour les textes publics.
 * Centralisées ici pour qu'une correction factuelle se fasse à un seul endroit.
 */
export const CH_FACTS = [
    `La rétribution unique est versée par Pronovo, l'institut fédéral qui gère l'encouragement des énergies renouvelables en Suisse.`,
    `Le label « Les Pros du Solaire » est délivré par Swissolar aux entreprises spécialisées qui planifient et installent les centrales solaires.`,
    `Les travaux électriques d'une centrale photovoltaïque relèvent de l'ordonnance sur les installations à basse tension (OIBT) et exigent une autorisation d'installer délivrée par l'ESTI.`,
    `Au-delà de 30 kVA, l'installation est soumise à l'approbation de l'ESTI.`,
    `La rétribution de l'injection est versée par le gestionnaire de réseau local : environ 11 ct/kWh au maximum pour les installations jusqu'à 100 kW.`,
    `Le prix du kWh acheté se situe autour de 30 ct/kWh en Suisse, contre environ 11 ct/kWh pour la reprise de l'injection : autoconsommer rapporte donc près de trois fois plus que revendre.`,
    `Une installation photovoltaïque produit 900 à 1 200 kWh par kWc et par an en Suisse romande, selon l'altitude et l'orientation.`,
    `Le dimensionnement doit tenir compte des charges de neige de la norme SIA 261, nettement plus élevées en montagne qu'en plaine.`,
];

export const MARKET = CH_MARKET;

export default CH_MARKET;

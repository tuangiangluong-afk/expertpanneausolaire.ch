// ========================================
// SOLAR TYPES - Les 4 grandes solutions solaires
// Contexte suisse : rétribution unique Pronovo, rétribution de l'injection
// versée par le gestionnaire de réseau, TVA suisse (aucun taux réduit solaire).
// ========================================

export interface SolarType {
    slug: string;
    name: string;
    shortName: string;
    prix: string;
    production: string;
    aides: string;
    ideal: string;
    description: string;
    points: string[];
    expertTip: string;
    image: string;
}

const IMG = {
    auto: "/images/generated/solar-hero.webp",
    surplus: "/images/generated/solar-realization-1.webp",
    batterie: "/images/generated/solar-realization-2.webp",
    carport: "/images/generated/solar-realization-3.webp",
};

export const SOLAR_TYPES: SolarType[] = [
    {
        slug: "autoconsommation",
        name: "Autoconsommation solaire",
        shortName: "Autoconsommation",
        prix: "6 000 CHF à 27 000 CHF",
        production: "2 700 à 14 400 kWh/an",
        aides: "Rétribution unique (RU) versée par Pronovo",
        ideal: "Foyers présents en journée ou avec équipements électriques (PAC, véhicule électrique)",
        image: IMG.auto,
        description: "L'autoconsommation consiste à produire votre électricité avec des panneaux solaires et à la consommer directement. En Suisse, le kWh acheté coûte environ 30 ct/kWh contre environ 11 ct/kWh pour la reprise de l'injection : chaque kWh consommé sur place rapporte donc près de trois fois plus qu'un kWh revendu.",
        points: [
            "Chaque kWh autoconsommé vaut près de 3 fois un kWh réinjecté au réseau",
            "Rétribution unique versée en une fois par Pronovo après la mise en service",
            "Installation de 3 à 12 kWc pour la plupart des maisons individuelles",
            "Rentable en 10 à 15 ans selon le taux d'autoconsommation, durée de vie de 30 ans"
        ],
        expertTip: "Pilotez votre production : faites tourner lave-linge, lave-vaisselle et pompe à chaleur en journée pour passer de 30 % à 50 % d'autoconsommation sans batterie."
    },
    {
        slug: "vente-surplus",
        name: "Autoconsommation avec reprise du surplus",
        shortName: "Reprise du surplus",
        prix: "6 000 CHF à 27 000 CHF",
        production: "2 700 à 14 400 kWh/an",
        aides: "Rétribution unique Pronovo + rétribution de l'injection (RI) du gestionnaire de réseau",
        ideal: "Foyers absents en journée qui veulent valoriser leur production",
        image: IMG.surplus,
        description: "Vous consommez votre production et le gestionnaire de réseau local reprend le surplus non consommé. C'est la configuration standard en Suisse : l'installation reste raccordée au réseau, qui sert de « batterie virtuelle » gratuite.",
        points: [
            "Rétribution de l'injection : environ 11 ct/kWh au maximum jusqu'à 100 kW",
            "Le tarif est fixé par votre gestionnaire de réseau local, pas par l'État",
            "Compteur bidirectionnel installé par le gestionnaire de réseau",
            "Aucun contrat de 20 ans : les conditions de reprise sont revues régulièrement"
        ],
        expertTip: "En Suisse, la reprise du surplus est un complément, pas le moteur de la rentabilité : dimensionnez d'abord sur votre consommation réelle, le surplus viendra en bonus."
    },
    {
        slug: "batterie-solaire",
        name: "Batterie solaire (stockage)",
        shortName: "Batterie solaire",
        prix: "5 500 CHF à 14 000 CHF",
        production: "+30 à 40 % d'autoconsommation",
        aides: "Certains cantons et communes versent une subvention au stockage",
        ideal: "Foyers avec tarif différencié jour/nuit, exigence d'autonomie, toiture ombragée",
        image: IMG.batterie,
        description: "La batterie stocke le surplus de la journée pour le restituer le soir et la nuit : elle fait passer l'autoconsommation de 30-40 % à 60-80 %. En Suisse, elle se rentabilise d'autant mieux que l'écart entre le prix d'achat du kWh et la rétribution de l'injection est important.",
        points: [
            "Autoconsommation portée à 60-80 % du temps",
            "Alimentation de secours possible selon l'onduleur choisi",
            "Batteries lithium 5 à 20 kWh, garantie 10 ans en général",
            "Plusieurs cantons soutiennent le stockage en complément de la rétribution unique"
        ],
        expertTip: "La batterie ne se justifie qu'après avoir optimisé l'autoconsommation sans stockage : à l'échelle suisse, l'écart de près de 20 ct/kWh entre achat et injection est ce qui la rend rentable."
    },
    {
        slug: "carport-solaire",
        name: "Carport solaire",
        shortName: "Carport solaire",
        prix: "14 000 CHF à 32 000 CHF",
        production: "2 700 à 10 800 kWh/an",
        aides: "Éligible à la rétribution unique Pronovo comme une installation en toiture",
        ideal: "Maisons avec véhicule électrique, parking exposé au sud",
        image: IMG.carport,
        description: "Le carport solaire combine un abri voiture et une centrale photovoltaïque : vous protégez votre véhicule et produisez l'électricité pour le recharger. La structure évite d'engager la toiture de la maison, souvent protégée ou mal orientée.",
        points: [
            "Abri 2 voitures avec toiture solaire de 18 à 40 m²",
            "Recharge du véhicule électrique à l'énergie solaire",
            "Structure aluminium calculée pour les charges de neige et de vent (normes SIA)",
            "Éligible à la rétribution unique au même titre qu'une toiture"
        ],
        expertTip: "Le carport solaire intéressant surtout quand la toiture de la maison est mal orientée ou protégée : la structure devient le support de la centrale, sans toucher au bâtiment."
    },
];

export function getSolarTypeBySlug(slug: string): SolarType | undefined {
    return SOLAR_TYPES.find((t) => t.slug === slug);
}

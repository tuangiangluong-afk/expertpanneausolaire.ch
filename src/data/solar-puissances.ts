// ========================================
// SOLAR PUISSANCES - Dimensionnement par puissance d'installation
// Repères suisses : 1 800 à 2 200 CHF par kWc installé,
// 900 à 1 200 kWh produits par kWc et par an selon le canton.
// ========================================

export interface SolarPuissance {
    slug: string;
    puissance: string;
    puissanceKw: number;
    panneaux: string;
    surface: string;
    production: string;
    prix: string;
    description: string;
    points: string[];
    expertTip: string;
    image: string;
}

const IMG = {
    p3: "https://images.unsplash.com/photo-1559825481-12a05cc00018?q=80&w=2670&auto=format&fit=crop",
    p6: "https://images.unsplash.com/photo-1559087867-ce4c91325525?q=80&w=2670&auto=format&fit=crop",
    p9: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2670&auto=format&fit=crop",
    p12: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2670&auto=format&fit=crop",
};

export const SOLAR_PUISSANCES: SolarPuissance[] = [
    {
        slug: "3kwc",
        puissance: "3 kWc",
        puissanceKw: 3,
        panneaux: "7 à 8 panneaux (450 Wc)",
        image: IMG.p3,
        surface: "14 à 16 m² de toiture",
        production: "2 700 à 3 600 kWh/an",
        prix: "6 000 CHF à 8 500 CHF",
        description: "L'installation 3 kWc convient aux petits consommateurs (2 500 à 3 500 kWh/an) : elle couvre l'essentiel des besoins d'un ménage de deux personnes sans produire de surplus excessif. C'est aussi la puissance la plus simple à faire accepter en zone protégée.",
        points: [
            "7 à 8 panneaux, soit 14 à 16 m² de toiture",
            "Production annuelle de 2 700 à 3 600 kWh selon le canton",
            "Dossier de rétribution unique recevable dès 2 kW de puissance",
            "Raccordement en monophasé dans la plupart des cas"
        ],
        expertTip: "Sous 3 kWc, l'installation reste en monophasé et le dossier Pronovo est simple : c'est la puissance la plus rapide à amortir pour un petit ménage."
    },
    {
        slug: "6kwc",
        puissance: "6 kWc",
        puissanceKw: 6,
        panneaux: "13 à 14 panneaux (450 Wc)",
        image: IMG.p6,
        surface: "26 à 28 m² de toiture",
        production: "5 400 à 7 200 kWh/an",
        prix: "11 500 CHF à 14 500 CHF",
        description: "Le 6 kWc est la configuration la plus posée en Suisse romande : elle couvre la consommation d'une famille de 4 personnes (4 500 à 6 000 kWh/an) et laisse un surplus que le gestionnaire de réseau reprend. C'est le format standard d'une maison individuelle avec pompe à chaleur.",
        points: [
            "13 à 14 panneaux, soit 26 à 28 m² de toiture",
            "Production annuelle de 5 400 à 7 200 kWh selon le canton",
            "Rétribution unique versée par Pronovo après la mise en service",
            "Surplus repris par le gestionnaire de réseau (environ 11 ct/kWh au maximum)"
        ],
        expertTip: "Le 6 kWc est le meilleur compromis surface/rentabilité : avec une pompe à chaleur, il atteint souvent 50 % d'autoconsommation sans batterie."
    },
    {
        slug: "9kwc",
        puissance: "9 kWc",
        puissanceKw: 9,
        panneaux: "20 panneaux (450 Wc)",
        image: IMG.p9,
        surface: "40 m² de toiture",
        production: "8 100 à 10 800 kWh/an",
        prix: "16 500 CHF à 20 500 CHF",
        description: "Le 9 kWc convient aux grandes maisons et aux foyers équipés d'une pompe à chaleur ou d'un véhicule électrique. Contrairement à la Suisse, aucune aide fédérale ne disparaît à ce niveau : la rétribution unique reste versée jusqu'à 100 kW sans autoconsommation propre.",
        points: [
            "20 panneaux, soit 40 m² de toiture",
            "Production annuelle de 8 100 à 10 800 kWh selon le canton",
            "Rétribution unique toujours versée (pas de plafond à 9 kWc en Suisse)",
            "Idéal avec pompe à chaleur, véhicule électrique ou piscine"
        ],
        expertTip: "En Suisse, le raccordement passe souvent en triphasé au-delà d'une dizaine de kW selon les prescriptions du gestionnaire de réseau : à vérifier avant de valider la puissance."
    },
    {
        slug: "12kwc",
        puissance: "12 kWc",
        puissanceKw: 12,
        panneaux: "26 à 27 panneaux (450 Wc)",
        image: IMG.p12,
        surface: "52 à 54 m² de toiture",
        production: "10 800 à 14 400 kWh/an",
        prix: "21 500 CHF à 27 500 CHF",
        description: "Le 12 kWc s'adresse aux très gros consommateurs : maisons tout électrique avec pompe à chaleur, voiture électrique et piscine, ou petites entreprises. La production dépasse largement la consommation d'un ménage, donc le dimensionnement doit être validé par une étude.",
        points: [
            "26 à 27 panneaux, soit plus de 50 m² de toiture",
            "Production annuelle de 10 800 à 14 400 kWh selon le canton",
            "Raccordement généralement triphasé selon le gestionnaire de réseau",
            "Option batterie de 10 à 20 kWh pour maximiser l'autoconsommation"
        ],
        expertTip: "À 12 kWc, l'écart entre le prix d'achat du kWh (environ 30 ct) et la reprise de l'injection (environ 11 ct) rend le stockage réellement attractif."
    },
];

export function getSolarPuissanceBySlug(slug: string): SolarPuissance | undefined {
    return SOLAR_PUISSANCES.find((p) => p.slug === slug);
}

// ========================================
// SOLAR PUISSANCES - Dimensionnement par puissance d'installation
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
        production: "3 000 à 4 200 kWh/an",
        prix: "4 990 € à 7 000 €",
        description: "L'installation 3 kWc est la taille idéale pour les petits consommateurs (2 500 à 4 000 kWh/an) : elle couvre l'essentiel des besoins d'un foyer de 2 personnes sans produire de surplus excessif.",
        points: [
            "7 à 8 panneaux, soit 14 à 16 m² de toiture",
            "Production annuelle de 3 000 à 4 200 kWh selon la région",
            "Prime à l'autoconsommation : 260€/kWc versés sur 5 ans (780€)",
            "TVA réduite à 10% pour les installations de moins de 3 kWc"
        ],
        expertTip: "Sous 3 kWc, vous profitez de la TVA à 10% et d'une procédure de raccordement simplifiée : c'est la puissance la plus rapide à amortir pour les petits foyers."
    },
    {
        slug: "6kwc",
        puissance: "6 kWc",
        puissanceKw: 6,
        panneaux: "13 à 14 panneaux (450 Wc)",
        image: IMG.p6,
        surface: "26 à 28 m² de toiture",
        production: "6 000 à 8 400 kWh/an",
        prix: "7 900 € à 10 500 €",
        description: "Le 6 kWc est la configuration la plus installée en France : elle couvre la consommation d'une famille de 4 personnes (4 500 à 6 000 kWh/an) avec un surplus valorisable à EDF OA.",
        points: [
            "13 à 14 panneaux, soit 26 à 28 m² de toiture",
            "Production annuelle de 6 000 à 8 400 kWh selon la région",
            "Prime à l'autoconsommation : 260€/kWc sur 5 ans (1 560€)",
            "Revente du surplus à EDF OA : 12,69 c€/kWh pendant 20 ans"
        ],
        expertTip: "Le 6 kWc est le meilleur compromis rentabilité/surface : il couvre la consommation d'une famille et génère un revenu de revente suffisant pour amortir l'installation en 7 à 8 ans."
    },
    {
        slug: "9kwc",
        puissance: "9 kWc",
        puissanceKw: 9,
        panneaux: "20 panneaux (450 Wc)",
        image: IMG.p9,
        surface: "40 m² de toiture",
        production: "9 000 à 12 600 kWh/an",
        prix: "10 900 € à 14 000 €",
        description: "Le 9 kWc est le maximum pour un particulier en autoconsommation (au-delà, la revente totale s'impose) : il convient aux grandes maisons, aux foyers équipés d'une PAC ou d'un véhicule électrique.",
        points: [
            "20 panneaux, soit 40 m² de toiture",
            "Production annuelle de 9 000 à 12 600 kWh selon la région",
            "Prime maximale : 1 710€ de prime à l'autoconsommation",
            "Idéal avec PAC, véhicule électrique ou piscine"
        ],
        expertTip: "Au-delà de 9 kWc, la prime disparaît et le raccordement devient triphasé : sauf grosse consommation, 9 kWc est le plafond rentable de l'autoconsommation."
    },
    {
        slug: "12kwc",
        puissance: "12 kWc",
        puissanceKw: 12,
        panneaux: "26 à 27 panneaux (450 Wc)",
        image: IMG.p12,
        surface: "52 à 54 m² de toiture",
        production: "12 000 à 16 800 kWh/an",
        prix: "14 000 € à 19 000 €",
        description: "Le 12 kWc s'adresse aux très gros consommateurs : maisons tout électrique avec PAC + voiture électrique + piscine, ou petites entreprises. Il nécessite un raccordement triphasé.",
        points: [
            "26 à 27 panneaux, soit plus de 50 m² de toiture",
            "Production annuelle de 12 000 à 16 800 kWh selon la région",
            "Raccordement triphasé obligatoire",
            "Option batterie de 10 à 20 kWh pour maximiser l'autoconsommation"
        ],
        expertTip: "À 12 kWc, la batterie devient presque indispensable : sans stockage, une grande partie du surplus serait vendue à bas prix au lieu d'être consommée."
    },
];

export function getSolarPuissanceBySlug(slug: string): SolarPuissance | undefined {
    return SOLAR_PUISSANCES.find((p) => p.slug === slug);
}

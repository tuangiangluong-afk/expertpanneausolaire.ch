// ========================================
// SOLAR TYPES - Les 4 grandes solutions solaires
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
    auto: "https://images.unsplash.com/photo-1559825481-12a05cc00018?q=80&w=2670&auto=format&fit=crop",
    surplus: "https://images.unsplash.com/photo-1559087867-ce4c91325525?q=80&w=2670&auto=format&fit=crop",
    batterie: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2670&auto=format&fit=crop",
    carport: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2670&auto=format&fit=crop",
};

export const SOLAR_TYPES: SolarType[] = [
    {
        slug: "autoconsommation",
        name: "Autoconsommation solaire",
        shortName: "Autoconsommation",
        prix: "4 990 € à 12 000 €",
        production: "3 000 à 12 000 kWh/an",
        aides: "Prime à l'autoconsommation jusqu'à 260€/kWc + TVA 10%",
        ideal: "Foyers présents en journée ou avec équipements électriques (PAC, VE)",
        image: IMG.auto,
        description: "L'autoconsommation consiste à produire votre électricité avec des panneaux solaires et à la consommer directement : vous réduisez votre facture EDF de 50 à 70% sans revente. C'est la solution la plus rentable et la plus simple en 2026.",
        points: [
            "Chaque kWh autoconsommé vaut 2 à 3 fois plus qu'un kWh vendu",
            "Prime à l'autoconsommation versée sur 5 ans (jusqu'à 260€/kWc)",
            "Installation de 3 à 9 kWc pour la plupart des maisons",
            "Rentable en 7 à 10 ans, durée de vie de 30 ans"
        ],
        expertTip: "Pilotez votre production : faites tourner le lave-linge, le lave-vaisselle et la PAC en journée pour passer de 30% à 50% d'autoconsommation sans batterie."
    },
    {
        slug: "vente-surplus",
        name: "Autoconsommation avec vente du surplus",
        shortName: "Vente du surplus",
        prix: "4 990 € à 12 000 €",
        production: "3 000 à 12 000 kWh/an",
        aides: "Prime autoconsommation + revente EDF OA (12,69 c€/kWh) + TVA 10%",
        ideal: "Foyers absents en journée qui veulent valoriser leur production",
        image: IMG.surplus,
        description: "Avec la vente du surplus, vous consommez votre production et revendez à EDF Obligation d'Achat l'électricité non consommée. C'est la configuration recommandée quand la production dépasse les besoins de la journée.",
        points: [
            "Revente du surplus à EDF OA : 12,69 c€/kWh (contrat 20 ans)",
            "Prime à l'autoconsommation cumulable avec la revente",
            "Compteur Linky configuré en mode production",
            "Le contrat de vente EDF OA est garanti 20 ans"
        ],
        expertTip: "L'EDF OA garantit le tarif de revente pendant 20 ans : c'est un revenu indexé et sécurisé. En 2026, la vente du surplus est plus rentable que la revente totale."
    },
    {
        slug: "batterie-solaire",
        name: "Batterie solaire (stockage)",
        shortName: "Batterie solaire",
        prix: "3 500 € à 9 000 €",
        production: "+30 à 40% d'autoconsommation",
        aides: "Pas de prime dédiée, TVA 10% sur l'installation",
        ideal: "Foyers en heures creuses, zones à coupures, maximisation de l'autoconsommation",
        image: IMG.batterie,
        description: "La batterie stocke le surplus de la journée pour le restituer le soir et la nuit : elle fait passer l'autoconsommation de 30-40% à 70-80%. Elle devient rentable avec un compteur heures creuses ou en zone à coupures.",
        points: [
            "Autoconsommation portée à 70-80% du temps",
            "Protection contre les coupures avec l'option secours",
            "Batteries lithium 5 à 20 kWh, garantie 10 ans",
            "Rentable en 8 à 12 ans avec les tarifs actuels"
        ],
        expertTip: "La batterie se rentabilise surtout avec un abonnement heures creuses : chargez la batterie en heures creuses l'hiver et consommez-la en heures pleines."
    },
    {
        slug: "carport-solaire",
        name: "Carport solaire",
        shortName: "Carport solaire",
        prix: "8 000 € à 18 000 €",
        production: "3 000 à 9 000 kWh/an",
        aides: "Prime autoconsommation + TVA 10%",
        ideal: "Maisons avec véhicule électrique, parking exposé au sud",
        image: IMG.carport,
        description: "Le carport solaire combine un abri voiture et une centrale photovoltaïque : vous protégez votre véhicule et produisez l'électricité pour le recharger. La solution idéale des foyers équipés d'une voiture électrique.",
        points: [
            "Abri 2 voitures avec toiture solaire de 18 à 40 m²",
            "Rechargez votre véhicule électrique à l'énergie solaire",
            "Structure aluminium certifiée, pose en 2 à 4 jours",
            "Prime à l'autoconsommation applicable comme une toiture"
        ],
        expertTip: "Le carport solaire est l'installation la plus rentable pour les propriétaires de véhicule électrique : 20 000 km par an deviennent gratuits au soleil."
    },
];

export function getSolarTypeBySlug(slug: string): SolarType | undefined {
    return SOLAR_TYPES.find((t) => t.slug === slug);
}

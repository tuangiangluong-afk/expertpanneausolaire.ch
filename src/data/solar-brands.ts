// ========================================
// SOLAR BRANDS - Top 6 marques les plus posées en Suisse romande
// Prix fourniture + pose, avant subvention, cohérents avec la fourchette
// suisse annoncée sur le site (1 800 à 2 200 CHF par kWc installé)
// ========================================

export interface SolarBrand {
    slug: string;
    name: string;
    type: string;
    rendement: string;
    gamme: string;
    surface: string;
    prix: string;
    modeles: string[];
    atouts: string[];
    limites: string[];
    expertTip: string;
    image: string;
}

const IMG = {
    dualsun: "/images/generated/solar-hero.webp",
    sunpower: "/images/generated/solar-realization-1.webp",
    qcells: "/images/generated/solar-realization-2.webp",
    sunsynk: "/images/generated/solar-realization-3.webp",
    solaredge: "/images/generated/solar-realization-4.webp",
    enphase: "/images/generated/solar-hero.webp",
};

export const SOLAR_BRANDS: SolarBrand[] = [
    {
        slug: "dualsun",
        name: "DualSun",
        type: "Panneau hybride (PV + thermique)",
        rendement: "22,6% (Flash 500)",
        gamme: "400 à 500 Wc",
        surface: "jusqu'à 9 kWc",
        prix: "8 500 CHF à 15 000 CHF",
        modeles: ["Flash 500 Half-Cut Glass-Glass TOPCon", "Flash 425", "Spring 420"],
        image: IMG.dualsun,
        atouts: [
            "Fabricant suisse de référence : panneaux hybrides qui produisent électricité ET eau chaude",
            "L'un des panneaux les plus posés sur les toitures européennes",
            "Verre-verre : très grande durabilité et garantie de 30 ans",
            "Fabriqué en Suisse, éligible à la rétribution unique comme tout autre module certifié"
        ],
        limites: [
            "Prix légèrement supérieur aux panneaux asiatiques standard",
            "Le rendement thermique nécessite un ballon dédié pour être exploité"
        ],
        expertTip: "Le DualSun Flash 500 est le meilleur choix pour maximiser la production sur une petite surface : 500 Wc par panneau, soit 30% de plus qu'un panneau classique."
    },
    {
        slug: "sunpower",
        name: "SunPower",
        type: "Panneau premium (Maxeon)",
        rendement: "22,8% (Maxeon 6)",
        gamme: "420 à 450 Wc",
        surface: "jusqu'à 9 kWc",
        prix: "9 500 CHF à 17 000 CHF",
        modeles: ["Maxeon 6", "Maxeon 5", "Performance 430"],
        image: IMG.sunpower,
        atouts: [
            "La technologie Maxeon : cellules à contact arrière, rendement record",
            "Dégradation de performance la plus faible du marché (0,25%/an)",
            "Garantie produit et puissance de 40 ans",
            "Excellent comportement à l'ombre partielle et en température élevée"
        ],
        limites: [
            "Positionnement premium : le prix le plus élevé du marché",
            "Réseau d'installateurs certifiés moins dense"
        ],
        expertTip: "Pour une toiture complexe ou partiellement ombragée, les panneaux Maxeon conservent la meilleure production du marché : chaque panneau continue de produire même si un autre est ombragé."
    },
    {
        slug: "qcells",
        name: "Q Cells",
        type: "Panneau standard haut rendement",
        rendement: "21,4% (Q.TRON)",
        gamme: "390 à 440 Wc",
        surface: "jusqu'à 9 kWc",
        prix: "7 900 CHF à 14 500 CHF",
        modeles: ["Q.TRON G2", "Q.PEAK DUO", "Q.HOME"],
        image: IMG.qcells,
        atouts: [
            "L'un des meilleurs rapports qualité/prix du marché",
            "Fiabilité coréenne éprouvée (leader mondial des ventes)",
            "Garantie produit 25 ans et performance 25 ans",
            "Bonne performance en faible ensoleillement"
        ],
        limites: [
            "Rendement légèrement inférieur aux références premium",
            "Pas de gamme hybride"
        ],
        expertTip: "Le Q Cells Q.TRON est le choix malin des budgets maîtrisés : 90% des performances des marques premium pour un tarif inférieur de 10 à 15%."
    },
    {
        slug: "sunsynk",
        name: "Sunsynk",
        type: "Onduleur hybride + batterie",
        rendement: "97,5% (onduleur)",
        gamme: "3 à 12 kW",
        surface: "jusqu'à 12 kWc",
        prix: "9 900 CHF à 19 000 CHF",
        modeles: ["Sunsynk 3.6kW", "Sunsynk 5kW", "Sunsynk 8kW + batterie 10kWh"],
        image: IMG.sunsynk,
        atouts: [
            "L'onduleur hybride de référence pour l'autoconsommation avec batterie",
            "Compatible avec la plupart des batteries et gestion intelligente des heures à tarif réduit",
            "Pilotage complet via application (production, consommation, charge)",
            "Excellent rapport qualité/prix du stockage"
        ],
        limites: [
            "Marque moins connue du grand public",
            "Installation réservée à des techniciens formés au stockage"
        ],
        expertTip: "Le Sunsynk est l'arme absolue pour monter à 80% d'autoconsommation : il pilote la batterie, le ballon d'eau chaude et le surplus en toute simplicité."
    },
    {
        slug: "solaredge",
        name: "SolarEdge",
        type: "Onduleur + optimiseurs de puissance",
        rendement: "99% (optimiseurs)",
        gamme: "3 à 10 kW",
        surface: "jusqu'à 12 kWc",
        prix: "9 200 CHF à 16 500 CHF",
        modeles: ["SolarEdge Home Hub", "Optimiseurs P505", "Batterie Home Battery 10kWh"],
        image: IMG.solaredge,
        atouts: [
            "Optimisation individuelle de chaque panneau : +5 à 25% de production à l'ombre",
            "Sécurité DC optimale (arrêt automatique en cas de panne)",
            "Monitoring panneau par panneau avec alertes automatiques",
            "Leader mondial des optimiseurs de puissance"
        ],
        limites: [
            "Coût de l'équipement plus élevé qu'un onduleur central",
            "Dépendance à l'écosystème SolarEdge (optimiseurs + onduleur)"
        ],
        expertTip: "Si votre toiture a des cheminées, lucarnes ou arbres à proximité, les optimiseurs SolarEdge récupèrent la production perdue : c'est l'investissement le plus rentable pour les toitures complexes."
    },
    {
        slug: "enphase",
        name: "Enphase",
        type: "Micro-onduleurs",
        rendement: "97,8% (IQ8)",
        gamme: "290 VA à 480 VA par module",
        surface: "jusqu'à 12 kWc",
        prix: "9 800 CHF à 17 500 CHF",
        modeles: ["IQ8", "IQ8M", "Batterie Enphase IQ Battery 10T"],
        image: IMG.enphase,
        atouts: [
            "Un micro-onduleur par panneau : chaque panneau est indépendant",
            "Tension basse : sécurité maximale, pas de courant continu sur le toit",
            "Monitoring en temps réel par panneau avec l'appli Enphase",
            "Fiabilité exceptionnelle (garantie 25 ans)"
        ],
        limites: [
            "Coût par watt plus élevé qu'un onduleur central",
            "L'écosystème complet (avec batterie) reste premium"
        ],
        expertTip: "Enphase est imbattable pour les toitures complexes ou l'extension progressive : ajoutez des panneaux un par un sans toucher au système existant."
    },
];

export function getSolarBrandBySlug(slug: string): SolarBrand | undefined {
    return SOLAR_BRANDS.find((b) => b.slug === slug);
}

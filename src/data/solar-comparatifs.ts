// ========================================
// SOLAR COMPARATIFS - 6 comparatifs décisionnels
// ========================================

export interface ComparatifRow {
    critere: string;
    a: string;
    b: string;
}

export interface SolarComparatif {
    slug: string;
    title: string;
    a: string;
    b: string;
    intro: string;
    rows: ComparatifRow[];
    verdict: string;
    verdictTitle: string;
    prix: string;
    faqs: { question: string; reponse: string }[];
    image: string;
}

const IMG = {
    c1: "https://images.unsplash.com/photo-1559825481-12a05cc00018?q=80&w=2670&auto=format&fit=crop",
    c2: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2670&auto=format&fit=crop",
    c3: "https://images.unsplash.com/photo-1559087867-ce4c91325525?q=80&w=2670&auto=format&fit=crop",
};

export const SOLAR_COMPARATIFS: SolarComparatif[] = [
    {
        slug: "dualsun-vs-qcells",
        image: IMG.c1,
        title: "DualSun ou Q Cells : quel panneau solaire choisir ?",
        a: "DualSun Flash 500",
        b: "Q Cells Q.TRON",
        intro: "DualSun et Q Cells sont les deux références du marché français : le premier pour son innovation hybride et son made in France, le second pour son rapport qualité/prix imbattable. Le choix dépend de votre toiture et de votre budget.",
        rows: [
            { critere: "Rendement", a: "22,6%", b: "21,4%" },
            { critere: "Puissance par panneau", a: "500 Wc", b: "440 Wc" },
            { critere: "Prix installation 6 kWc", a: "9 000 à 11 000 €", b: "7 900 à 9 500 €" },
            { critere: "Garantie", a: "30 ans produit", b: "25 ans produit" },
            { critere: "Production d'eau chaude", a: "Oui (hybride)", b: "Non" },
            { critere: "Fabrication", a: "France", b: "Corée" }
        ],
        verdictTitle: "Notre verdict",
        verdict: "Choisissez DualSun pour une toiture de petite surface ou pour cumuler production électrique et eau chaude : ses panneaux 500 Wc produisent 30% de plus par m² et la garantie de 30 ans est la meilleure du marché. Choisissez Q Cells pour un budget maîtrisé : 90% des performances pour 10 à 15% de moins.",
        prix: "4 990 € à 12 000 €",
        faqs: [
            { question: "Quel panneau est le plus rentable ?", reponse: "Sur 25 ans, le DualSun Flash 500 produit plus par m² (500 Wc, rendement 22,6%) et sa garantie de 30 ans couvre plus longtemps. Le Q Cells s'amortit plus vite grâce à son prix d'achat inférieur." },
            { question: "Le panneau hybride DualSun en vaut-il la peine ?", reponse: "Oui si vous avez besoin d'eau chaude : il remplace en partie votre chauffe-eau et optimise la surface de toiture. Sans besoin d'eau chaude sanitaire, un panneau photovoltaïque classique suffit." }
        ]
    },
    {
        slug: "autoconsommation-vs-revente-totale",
        image: IMG.c2,
        title: "Autoconsommation ou revente totale : que choisir ?",
        a: "Autoconsommation (avec surplus)",
        b: "Revente totale",
        intro: "Deux façons de valoriser votre production solaire : consommer votre électricité (autoconsommation) ou vendre 100% de votre production à EDF (revente totale). En 2026, la donne a changé : l'autoconsommation est presque toujours gagnante.",
        rows: [
            { critere: "Principe", a: "Consommez + revendez le surplus", b: "Vendez toute la production" },
            { critere: "Tarif de vente", a: "12,69 c€/kWh (surplus)", b: "12,69 c€/kWh (tout)" },
            { critere: "Prime à l'autoconsommation", a: "Jusqu'à 260€/kWc", b: "Aucune" },
            { critere: "Économie sur facture", a: "50 à 70%", b: "0%" },
            { critere: "Rentabilité", a: "7 à 10 ans", b: "12 à 15 ans" },
            { critere: "Adapté à", a: "Particuliers", b: "Grandes toitures industrielles" }
        ],
        verdictTitle: "Notre verdict",
        verdict: "Pour un particulier, l'autoconsommation avec vente du surplus est toujours plus rentable : vous cumulez la prime (jusqu'à 260€/kWc), les économies sur facture et la revente. La revente totale ne se justifie que pour les très grandes installations (> 36 kWc) sans consommation propre.",
        prix: "4 990 € à 19 000 €",
        faqs: [
            { question: "Peut-on vendre toute sa production solaire ?", reponse: "Oui, le contrat EDF Obligation d'Achat existe pour la vente totale. Mais sans prime à l'autoconsommation et sans économie sur facture, l'amortissement est 2 fois plus long qu'en autoconsommation." }
        ]
    },
    {
        slug: "batterie-oui-ou-non",
        image: IMG.c3,
        title: "Batterie solaire : rentable ou pas ?",
        a: "Sans batterie",
        b: "Avec batterie",
        intro: "La question la plus posée en 2026 : faut-il investir dans une batterie pour stocker son électricité solaire ? La réponse dépend de votre abonnement, de vos heures de consommation et du prix de l'électricité.",
        rows: [
            { critere: "Autoconsommation", a: "30 à 50%", b: "70 à 80%" },
            { critere: "Investissement", a: "0 €", b: "3 500 à 9 000 €" },
            { critere: "Rentabilité", a: "7 à 10 ans", b: "8 à 12 ans" },
            { critere: "Heures creuses", a: "Non exploitées", b: "Oui (charge la nuit)" },
            { critere: "Coupures de courant", a: "Pas de secours", b: "Secours possible" },
            { critere: "Idéal pour", a: "Petits foyers", b: "Gros consommateurs" }
        ],
        verdictTitle: "Notre verdict",
        verdict: "Sans batterie pour les petits consommateurs : le coût ne se justifie pas sous 5 000 kWh/an. Avec batterie si vous êtes en heures creuses, si vous subissez des coupures, ou si votre installation dépasse 6 kWc : l'autoconsommation passe à 70-80% et la recharge en heures creuses l'hiver est un vrai bonus.",
        prix: "3 500 € à 9 000 €",
        faqs: [
            { question: "Quand une batterie solaire est-elle rentable ?", reponse: "En 2026, la batterie devient rentable avec un abonnement heures creuses (recharge la nuit, consommation en heures pleines), en zone à coupures, ou pour les installations de plus de 6 kWc." },
            { question: "Quelle taille de batterie choisir ?", reponse: "Règle simple : 1 kWh de batterie pour 1 kWc installé. Pour 6 kWc, une batterie de 5 à 10 kWh couvre la nuit d'un foyer de 4 personnes." }
        ]
    },
    {
        slug: "enphase-vs-solaredge",
        image: IMG.c1,
        title: "Enphase ou SolarEdge : micro-onduleurs ou optimiseurs ?",
        a: "Enphase (micro-onduleurs)",
        b: "SolarEdge (optimiseurs)",
        intro: "Les deux leaders de l'optimisation par panneau : Enphase place un micro-onduleur sous chaque panneau, SolarEdge couple des optimiseurs à un onduleur central. Les deux récupèrent la production des panneaux ombragés, avec des philosophies différentes.",
        rows: [
            { critere: "Principe", a: "1 micro-onduleur par panneau", b: "Optimiseurs + onduleur central" },
            { critere: "Production à l'ombre", a: "+5 à 25%", b: "+5 à 25%" },
            { critere: "Sécurité", a: "Tension basse (très sûr)", b: "Arrêt DC automatique" },
            { critere: "Extension future", a: "Très facile (panneau par panneau)", b: "Possible (taille onduleur)" },
            { critere: "Coût", a: "Plus élevé", b: "Intermédiaire" },
            { critere: "Garantie", a: "25 ans", b: "12 à 25 ans" }
        ],
        verdictTitle: "Notre verdict",
        verdict: "Choisissez Enphase pour la sécurité maximale (pas de courant continu sur le toit), la simplicité d'extension et la garantie de 25 ans. Choisissez SolarEdge pour un budget intermédiaire avec le même gain à l'ombre. Pour une toiture simple et dégagée, un onduleur central classique reste le plus économique.",
        prix: "5 000 € à 12 500 €",
        faqs: [
            { question: "Enphase est-il compatible avec tous les panneaux ?", reponse: "Oui, les micro-onduleurs Enphase fonctionnent avec la plupart des panneaux du marché, y compris DualSun et Q Cells." },
            { question: "Quelle différence de prix entre Enphase et SolarEdge ?", reponse: "Enphase coûte environ 10 à 15% plus cher qu'un système SolarEdge équivalent, mais offre une garantie de 25 ans contre 12 ans pour l'onduleur central SolarEdge." }
        ]
    },
    {
        slug: "carport-vs-toiture",
        image: IMG.c2,
        title: "Carport solaire ou toiture : où poser ses panneaux ?",
        a: "Panneaux sur toiture",
        b: "Carport solaire",
        intro: "Toutes les toitures ne sont pas adaptées au solaire : orientation, ombrage, surface, vétusté. Le carport solaire est l'alternative idéale quand la toiture est inadaptée ou que vous voulez protéger votre véhicule en même temps.",
        rows: [
            { critere: "Surface disponible", a: "Limitée par la toiture", b: "18 à 40 m² (2 voitures)" },
            { critere: "Prix installation 6 kWc", a: "7 900 à 10 500 €", b: "9 000 à 14 000 €" },
            { critere: "Orientation optimale", a: "Contrainte par la toiture", b: "Libre (orientation sud possible)" },
            { critere: "Protection véhicule", a: "Non", b: "Oui (abri)" },
            { critere: "Recharge véhicule électrique", a: "Possible", b: "Idéal (borne intégrée)" },
            { critere: "Travaux", a: "1 à 2 jours", b: "2 à 4 jours" }
        ],
        verdictTitle: "Notre verdict",
        verdict: "Toiture en priorité si elle est bien orientée (sud/est/ouest) et dégagée : c'est la solution la moins chère. Carport solaire si votre toiture est inadaptée (ombrage, mauvaise orientation, ardoise), si vous avez un véhicule électrique ou si vous manquez de place de parking.",
        prix: "7 900 € à 18 000 €",
        faqs: [
            { question: "Le carport solaire est-il plus cher qu'une installation sur toiture ?", reponse: "Oui, comptez 15 à 30% de plus : la structure en aluminium s'ajoute aux panneaux. Mais il combine abri voiture, production solaire et borne de recharge." }
        ]
    },
    {
        slug: "solaire-vs-prix-electricite",
        image: IMG.c3,
        title: "Panneaux solaires ou rester au tarif EDF ?",
        a: "Panneaux solaires 6 kWc",
        b: "Tarif réglementé EDF",
        intro: "La question de fond : est-ce que l'investissement solaire bat le simple fait de continuer à acheter son électricité au tarif réglementé ? Le calcul sur 25 ans est sans appel en 2026, même avec la hausse du tarif de rachat.",
        rows: [
            { critere: "Investissement initial", a: "7 900 à 10 500 €", b: "0 €" },
            { critere: "Coût sur 25 ans (famille 4 pers.)", a: "5 000 à 8 000 € (reste à charge)", b: "25 000 à 35 000 €" },
            { critere: "Revenus de revente", a: "Oui (EDF OA 20 ans)", b: "Non" },
            { critere: "Protection contre hausses", a: "Oui (production fixe)", b: "Non (indexé)" },
            { critere: "Économie cumulée sur 25 ans", a: "15 000 à 25 000 €", b: "0 €" }
        ],
        verdictTitle: "Notre verdict",
        verdict: "Sur 25 ans, une installation de 6 kWc en autoconsommation génère 15 000 à 25 000 € d'économies nettes par rapport au tarif réglementé, malgré un investissement initial de 8 000 à 10 000 €. Avec la prime, la revente du surplus et les hausses du tarif EDF, l'écart se creuse chaque année.",
        prix: "7 900 € à 10 500 €",
        faqs: [
            { question: "Le solaire est-il rentable en 2026 malgré la baisse des prix de rachat ?", reponse: "Oui, car l'essentiel du gain vient de l'autoconsommation : chaque kWh produit remplace un kWh acheté à 25-30 c€. La revente du surplus n'est qu'un complément." }
        ]
    },
];

export function getSolarComparatifBySlug(slug: string): SolarComparatif | undefined {
    return SOLAR_COMPARATIFS.find((c) => c.slug === slug);
}

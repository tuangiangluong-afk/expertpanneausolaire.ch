// ========================================
// SOLAR COMPARATIFS - 6 comparatifs décisionnels
// Contexte suisse : prix du kWh acheté environ 30 ct, reprise de l'injection
// environ 11 ct/kWh au maximum, rétribution unique Pronovo versée une fois.
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
    c1: "/images/generated/solar-hero.webp",
    c2: "/images/generated/solar-realization-1.webp",
    c3: "/images/generated/solar-realization-2.webp",
};

export const SOLAR_COMPARATIFS: SolarComparatif[] = [
    {
        slug: "dualsun-vs-qcells",
        image: IMG.c1,
        title: "DualSun ou Q Cells : quel panneau solaire choisir ?",
        a: "DualSun Flash 500",
        b: "Q Cells Q.TRON",
        intro: "DualSun et Q Cells sont les deux références disponibles sur le marché suisse : le premier pour son innovation hybride et sa fabrication suissee, le second pour son rapport qualité/prix. Le choix dépend de votre toiture et de votre budget.",
        rows: [
            { critere: "Rendement", a: "22,6%", b: "21,4%" },
            { critere: "Puissance par panneau", a: "500 Wc", b: "440 Wc" },
            { critere: "Prix installation 6 kWc", a: "12 500 à 14 500 CHF", b: "11 500 à 13 500 CHF" },
            { critere: "Garantie", a: "30 ans produit", b: "25 ans produit" },
            { critere: "Production d'eau chaude", a: "Oui (hybride)", b: "Non" },
            { critere: "Fabrication", a: "Suisse", b: "Corée du Sud" }
        ],
        verdictTitle: "Notre verdict",
        verdict: "Choisissez DualSun pour une toiture de petite surface ou pour cumuler production électrique et eau chaude : ses panneaux 500 Wc produisent 30% de plus par m² et la garantie de 30 ans est la meilleure du marché. Choisissez Q Cells pour un budget maîtrisé : 90% des performances pour 10 à 15% de moins.",
        prix: "6 000 CHF à 27 000 CHF",
        faqs: [
            { question: "Quel panneau est le plus rentable en Suisse ?", reponse: "Sur 25 ans, le DualSun Flash 500 produit plus par m² (500 Wc, rendement 22,6%) et sa garantie de 30 ans couvre plus longtemps. Le Q Cells s'amortit plus vite grâce à son prix d'achat inférieur. En Suisse, l'écart de prix entre les deux se rattrape d'autant plus vite que le prix du kWh évité est élevé (environ 30 ct/kWh)." },
            { question: "Le panneau hybride DualSun en vaut-il la peine ?", reponse: "Oui si vous avez besoin d'eau chaude : il remplace en partie votre chauffe-eau et optimise la surface de toiture, ce qui compte dans un pays où le potentiel d'une toiture est limité. Sans besoin d'eau chaude sanitaire, un panneau photovoltaïque classique suffit." }
        ]
    },
    {
        slug: "autoconsommation-vs-revente-totale",
        image: IMG.c2,
        title: "Autoconsommation ou revente totale : que choisir ?",
        a: "Autoconsommation (avec reprise du surplus)",
        b: "Revente totale de la production",
        intro: "Deux façons de valoriser votre production solaire : consommer votre électricité sur place, ou réinjecter la totalité au réseau. En Suisse, l'écart entre le prix d'achat du kWh et la rétribution de l'injection rend l'arbitrage très clair.",
        rows: [
            { critere: "Principe", a: "Consommation sur place + surplus repris", b: "Réinjection intégrale au réseau" },
            { critere: "Valeur du kWh", a: "Environ 30 ct (kWh évité)", b: "Environ 11 ct (injection)" },
            { critere: "Rétribution unique Pronovo", a: "Oui (dès 2 kW)", b: "Oui, mais dans le cadre des programmes dédiés" },
            { critere: "Économie sur facture", a: "50 à 70%", b: "0%" },
            { critere: "Rentabilité", a: "10 à 15 ans", b: "20 ans et plus" },
            { critere: "Adapté à", a: "Particuliers et entreprises", b: "Grandes toitures sans usage sur place" }
        ],
        verdictTitle: "Notre verdict",
        verdict: "Pour un particulier en Suisse, l'autoconsommation est presque toujours gagnante : chaque kWh consommé sur place évite environ 30 ct d'achat, contre environ 11 ct pour un kWh réinjecté. La revente totale ne se défend que pour de très grandes toitures sans consommation sur place, où la rétribution unique élevée prend le relais.",
        prix: "6 000 CHF à 27 000 CHF",
        faqs: [
            { question: "Peut-on revendre toute sa production solaire en Suisse ?", reponse: "Oui, l'injection intégrale existe : la production est reprise par le gestionnaire de réseau à la rétribution de l'injection (environ 11 ct/kWh au maximum jusqu'à 100 kW). Mais sans économie sur facture, l'amortissement est nettement plus long qu'en autoconsommation, puisque le kWh évité vaut près de trois fois le kWh réinjecté." }
        ]
    },
    {
        slug: "batterie-oui-ou-non",
        image: IMG.c3,
        title: "Batterie solaire : rentable ou pas ?",
        a: "Sans batterie",
        b: "Avec batterie",
        intro: "La question la plus posée : faut-il investir dans une batterie pour stocker son électricité solaire ? En Suisse, la réponse dépend surtout de l'écart entre votre prix d'achat du kWh et la rétribution de l'injection de votre gestionnaire de réseau.",
        rows: [
            { critere: "Autoconsommation", a: "30 à 50%", b: "60 à 80%" },
            { critere: "Investissement", a: "0 CHF", b: "5 500 à 14 000 CHF" },
            { critere: "Rentabilité", a: "10 à 15 ans", b: "12 à 18 ans" },
            { critere: "Tarif différencié jour/nuit", a: "Non exploité", b: "Exploité" },
            { critere: "Coupures de courant", a: "Pas de secours", b: "Secours possible selon l'onduleur" },
            { critere: "Idéal pour", a: "Petits ménages", b: "Gros consommateurs et sites isolés" }
        ],
        verdictTitle: "Notre verdict",
        verdict: "Sans batterie pour les petits consommateurs : le coût ne se justifie pas sous 3 500 kWh/an. Avec batterie si votre écart achat/reprise est important, si vous avez un tarif différencié, ou si votre installation dépasse 6 kWc : l'autoconsommation passe à 60-80% et le surplus est valorisé au lieu d'être bradé.",
        prix: "5 500 CHF à 14 000 CHF",
        faqs: [
            { question: "Quand une batterie solaire est-elle rentable en Suisse ?", reponse: "La batterie devient rentable quand l'écart entre le prix d'achat (environ 30 ct/kWh) et la rétribution de l'injection (environ 11 ct/kWh) est significatif, soit près de 20 ct par kWh déplacé. Elle l'est aussi en cas de tarif différencié jour/nuit, ou pour les installations de plus de 6 kWc. Certains cantons versent en plus une subvention au stockage." },
            { question: "Quelle taille de batterie choisir ?", reponse: "Règle simple : environ 1 kWh de batterie pour 1 kWc installé. Pour 6 kWc, une batterie de 5 à 10 kWh couvre la nuit d'un ménage de 4 personnes." }
        ]
    },
    {
        slug: "enphase-vs-solaredge",
        image: IMG.c1,
        title: "Enphase ou SolarEdge : micro-onduleurs ou optimiseurs ?",
        a: "Enphase (micro-onduleurs)",
        b: "SolarEdge (optimiseurs)",
        intro: "Les deux leaders de l'optimisation par panneau : Enphase place un micro-onduleur sous chaque panneau, SolarEdge couple des optimiseurs à un onduleur central. Les deux récupèrent la production des panneaux ombragés — un point clé en Suisse, où l'ombrage vient souvent du relief et des arbres.",
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
        prix: "9 200 CHF à 19 000 CHF",
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
        intro: "Toutes les toitures ne sont pas adaptées au solaire : orientation, ombrage, surface, vétusté. Dans les régions où la neige et le relief contraignent la pose, le carport solaire devient l'alternative logique — avec l'abri voiture en prime.",
        rows: [
            { critere: "Surface disponible", a: "Limitée par la toiture", b: "18 à 40 m² (2 voitures)" },
            { critere: "Prix installation 6 kWc", a: "11 500 à 14 500 CHF", b: "18 000 à 28 000 CHF" },
            { critere: "Orientation optimale", a: "Contrainte par la toiture", b: "Libre (orientation sud possible)" },
            { critere: "Protection véhicule", a: "Non", b: "Oui (abri)" },
            { critere: "Recharge véhicule électrique", a: "Possible", b: "Idéal (borne intégrée)" },
            { critere: "Travaux", a: "1 à 2 jours", b: "2 à 4 jours" }
        ],
        verdictTitle: "Notre verdict",
        verdict: "Toiture en priorité si elle est bien orientée (sud/est/ouest) et dégagée : c'est la solution la moins chère. Carport solaire si votre toiture est inadaptée (ombrage, mauvaise orientation, toit protégé), si vous avez un véhicule électrique ou si vous manquez de place de parking. La structure doit être calculée pour les charges de neige et de vent (normes SIA).",
        prix: "11 500 CHF à 32 000 CHF",
        faqs: [
            { question: "Le carport solaire est-il plus cher qu'une installation sur toiture ?", reponse: "Oui, comptez 40 à 70% de plus : la structure porteuse s'ajoute aux panneaux, et elle doit être dimensionnée pour les charges de neige locales. En contrepartie, il combine abri voiture, production solaire et borne de recharge, sans engager la toiture du bâtiment." }
        ]
    },
    {
        slug: "solaire-vs-prix-electricite",
        image: IMG.c3,
        title: "Panneaux solaires ou continuer à acheter son électricité ?",
        a: "Panneaux solaires 6 kWc",
        b: "Achat au tarif du réseau",
        intro: "La question de fond : l'investissement solaire bat-il le simple fait de continuer à acheter son électricité ? Le calcul sur 25 ans est sans appel, d'autant que le prix du kWh suisse a fortement augmenté depuis 2022.",
        rows: [
            { critere: "Investissement initial", a: "11 500 à 14 500 CHF (avant rétribution unique)", b: "0 CHF" },
            { critere: "Coût sur 25 ans (famille 4 pers.)", a: "8 000 à 11 000 CHF (reste à charge)", b: "30 000 à 45 000 CHF" },
            { critere: "Revenus de reprise", a: "Oui (rétribution de l'injection)", b: "Non" },
            { critere: "Protection contre les hausses", a: "Oui (production fixe)", b: "Non (tarif variable)" },
            { critere: "Économie cumulée sur 25 ans", a: "15 000 à 25 000 CHF", b: "0 CHF" }
        ],
        verdictTitle: "Notre verdict",
        verdict: "Sur 25 ans, une installation de 6 kWc en autoconsommation génère de l'ordre de 15 000 à 25 000 CHF d'économies nettes par rapport à l'achat au réseau, malgré un investissement initial de 11 500 à 14 500 CHF. Trois facteurs creusent l'écart chaque année : le prix du kWh acheté, la rétribution unique versée une fois par Pronovo, et la reprise du surplus par le gestionnaire de réseau.",
        prix: "11 500 CHF à 14 500 CHF",
        faqs: [
            { question: "Le solaire est-il rentable malgré la baisse de la rétribution de l'injection ?", reponse: "Oui, car l'essentiel du gain vient de l'autoconsommation : chaque kWh produit remplace un kWh acheté autour de 30 ct/kWh, alors que la réinjection n'est valorisée qu'environ 11 ct/kWh. La reprise du surplus n'est qu'un complément, pas le moteur de la rentabilité." }
        ]
    },
];

export function getSolarComparatifBySlug(slug: string): SolarComparatif | undefined {
    return SOLAR_COMPARATIFS.find((c) => c.slug === slug);
}

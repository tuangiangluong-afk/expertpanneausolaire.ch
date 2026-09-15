// ========================================
// CANTONS SUISSES (Suisse romande + Bienne) — données réelles
// ========================================
// Source : découpage administratif officiel suisse.
// Sert à produire un contenu réellement local sur les pages villes :
// canton, chef-lieu, langue, ensoleillement, vent dominant (bise / foehn)
// et pertinence de la charge de neige (dimensionnement de la pose).

export interface Canton {
    code: string;
    name: string;
    chefLieu: string;
    langue: string;
    /** Ensoleillement annuel moyen constaté */
    soleil: string;
    /** Vent dominant avec nom propre */
    vent: string;
    /** Charge de neige significative → structures et fixations renforcées */
    neige: boolean;
    /** Vignoble / arc lémanique (référence locale utile) */
    note: string;
}

export const CANTONS: Record<string, Canton> = {
    GE: {
        code: "GE",
        name: "Genève",
        chefLieu: "Genève",
        langue: "français",
        soleil: "1 700 – 1 900 h",
        vent: "la bise",
        neige: false,
        note: "bassin lémanique, ensoleillement régulier et brouillards hivernaux en plaine",
    },
    VD: {
        code: "VD",
        name: "Vaud",
        chefLieu: "Lausanne",
        langue: "français",
        soleil: "1 700 – 1 950 h",
        vent: "la bise",
        neige: true,
        note: "contraste marqué entre l'arc lémanique et les Alpes vaudoises, où la neige persiste",
    },
    VS: {
        code: "VS",
        name: "Valais",
        chefLieu: "Sion",
        langue: "français",
        soleil: "2 000 – 2 300 h",
        vent: "le foehn",
        neige: true,
        note: "canton le plus ensoleillé de Suisse, mais foehn violent dans les vallées latérales",
    },
    NE: {
        code: "NE",
        name: "Neuchâtel",
        chefLieu: "Neuchâtel",
        langue: "français",
        soleil: "1 650 – 1 850 h",
        vent: "la bise",
        neige: true,
        note: "Jura neuchâtelois exposé à la neige dès 800 m d'altitude",
    },
    FR: {
        code: "FR",
        name: "Fribourg",
        chefLieu: "Fribourg",
        langue: "français",
        soleil: "1 650 – 1 900 h",
        vent: "la bise",
        neige: true,
        note: "alternance de plateaux agricoles dégagés et de préalpes enneigées",
    },
    JU: {
        code: "JU",
        name: "Jura",
        chefLieu: "Delémont",
        langue: "français",
        soleil: "1 600 – 1 800 h",
        vent: "la bise",
        neige: true,
        note: "crêtes jurassiennes très enneigées et exposées au vent d'ouest",
    },
    BE: {
        code: "BE",
        name: "Berne",
        chefLieu: "Berne",
        langue: "français et allemand (Bienne bilingue)",
        soleil: "1 600 – 1 850 h",
        vent: "la bise",
        neige: true,
        note: "région de Bienne et Jura bernois, largement francophone",
    },
};

/** Retourne le canton depuis un code postal suisse (via la table NPA → canton). */
export { cantonFromNpa } from "@/data/ch-npa-cantons";

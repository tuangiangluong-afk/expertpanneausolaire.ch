import { CityConfig } from "@/lib/db";

export const NATIONAL_CONFIG: CityConfig = {
    slug: "home",
    domain: "expertpanneausolaire.ch",
    name: "Expert Panneau Solaire",
    city: "Suisse",
    phoneNumber: "+41 22 000 00 00",
    email: "contact@expertpanneausolaire.ch",
    heroImage: "/images/generated/solar-hero.webp",
    description: "Le réseau n°1 d'installateurs de panneaux solaires photovoltaïques en Suisse romande. Offre gratuite, étude de rentabilité et partenaires certifiés.",
    meta: {
        title: "Expert Panneau Solaire | Photovoltaïque & Autoconsommation Suisse",
        description: "Installation de panneaux solaires pour particuliers en Suisse romande. Offre gratuite sous 24h. Simulateur d'éligibilité à la rétribution unique Pronovo."
    },
    features: [
        "Rendement Garanti",
        "Devis Gratuit sous 24h",
        "Matériel Garanti 25 Ans",
        "Partenaires certifiés (Les Pros du Solaire / Pronovo)"
    ],
    pricing: {
        base: "Sur Devis",
        description: "Offre gratuite personnalisée selon votre toiture et votre consommation"
    },
    hospitals: [],
    stations: [],
    neighborhoods: [],
    points_of_interest: {
        hotels: [],
        nightlife: [],
        monuments: [],
        parking_difficulty: "N/A"
    }
};

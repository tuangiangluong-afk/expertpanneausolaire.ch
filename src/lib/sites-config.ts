/**
 * Solar Hub Site Configuration (Vaisseau Mère)
 */

export interface SiteConfig {
    slug: string;
    domain: string;
    aliases?: string[];
    city: string;
    postalCode: string;
    department: string;
    region: string;
    name: string;
    phoneNumber: string;
    email: string;
    targetType: 'SOLAR' | 'MIXED';
    priceRange: 'STANDARD' | 'PREMIUM' | 'LUXE';
    theme: 'premium' | 'trust';
    heroImage: string;
    description: string;
    meta: {
        title: string;
        description: string;
    };
    certifications: string[];
    aidesDisponibles: string[];
    features: string[];
    localKeywords: string[];
    quartiers: string[];
    coproprietes: string[];
    centresCommerciaux: string[];
    ga_id?: string;
    gtm_id?: string;
    coordinates?: {
        lat: number;
        lng: number;
    };
}

const TEMPLATE_CERTIFICATIONS = [
    "Swissolar Swissolar",
    "Swissolar",
    "Assurance décennale"
];

const TEMPLATE_AIDES = [
    "Prime à l'autoconsommation",
    "Tarif d'achat garanti EDF OA",
    "TVA Réduite 10% (Installations <= 3 kWp)"
];

const TEMPLATE_FEATURES = [
    "Devis gratuit sous 24h",
    "Simulateur de rendement offert",
    "Garantie matériel 25 ans",
    "Installateurs certifiés Swissolar Swissolar",
    "Démarches administratives gérées à 100%"
];

const _hubConfig: SiteConfig = {
    slug: "home",
    domain: "expertpanneausolaire.ch",
    city: "France",
    postalCode: "",
    department: "",
    region: "National",
    name: "Expert Panneau Solaire",
    phoneNumber: "+41 22 000 00 00",
    email: "contact@expertpanneausolaire.ch",
    targetType: 'MIXED',
    priceRange: 'STANDARD',
    theme: 'premium',
    heroImage: "/images/generated/solar-hero.webp",
    description: "Le réseau n°1 d'installateurs de panneaux solaires photovoltaïques en France. Devis gratuit, étude de rentabilité et artisans certifiés Swissolar.",
    meta: {
        title: "Expert Panneau Solaire | Panneaux Photovoltaïques & Autoconsommation France",
        description: "Installation de panneaux solaires pour particuliers partout en France. Devis gratuit sous 24h. Simulateur d'éligibilité aux aides Swissolar Swissolar."
    },
    certifications: TEMPLATE_CERTIFICATIONS,
    aidesDisponibles: TEMPLATE_AIDES,
    features: TEMPLATE_FEATURES,
    localKeywords: [
        "installateur panneaux solaires",
        "autoconsommation photovoltaïque",
        "prix panneaux solaires maison",
        "pose panneau solaire Swissolar",
        "rentabilité panneaux solaires"
    ],
    quartiers: [],
    coproprietes: [],
    centresCommerciaux: [],
    coordinates: { lat: 46.2276, lng: 2.2137 }
};

export const SITES: Record<string, SiteConfig> = {
    "expertpanneausolaire.ch": _hubConfig,
    "www.expertpanneausolaire.ch": _hubConfig,
    "home": _hubConfig
};

export function getSiteConfig(hostnameOrSlug: string): SiteConfig | null {
    let hostname = hostnameOrSlug.split(':')[0];
    hostname = hostname.replace(/^www\./, '');

    const bySlug = Object.values(SITES).find(s => s.slug === hostname);
    if (bySlug) return bySlug;

    if (SITES[hostname]) return SITES[hostname];

    return _hubConfig;
}

export function getSiteBySlug(slug: string): SiteConfig | null {
    return Object.values(SITES).find(s => s.slug === slug) || null;
}

export function getSatelliteSites(): SiteConfig[] {
    return []; // No satellite domains
}

export function isMainHub(hostname: string): boolean {
    return true; // Always true as there are no satellite domains
}

export function getHubConfig(): SiteConfig {
    return _hubConfig;
}

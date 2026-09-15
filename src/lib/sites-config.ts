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
    "Label « Les Pros du Solaire » (Les Pros du Solaire)",
    "Entreprises d'installation électrique autorisées (ESTI)",
    "Assurance responsabilité civile et garantie de 10 ans"
];

const TEMPLATE_AIDES = [
    "Rétribution unique (RU) versée par Pronovo",
    "Rétribution de l'injection versée par le gestionnaire de réseau",
    "Déduction des frais d'investissement du revenu imposable"
];

const TEMPLATE_FEATURES = [
    "Devis gratuit sous 24h",
    "Simulateur de rendement offert",
    "Garantie matériel 25 ans",
    "Installateurs porteurs du label « Les Pros du Solaire »",
    "Démarches administratives gérées à 100%"
];

const _hubConfig: SiteConfig = {
    slug: "home",
    domain: "expertpanneausolaire.ch",
    city: "Suisse",
    postalCode: "",
    department: "",
    region: "Suisse",
    name: "Expert Panneau Solaire",
    phoneNumber: "+41 22 000 00 00",
    email: "contact@expertpanneausolaire.ch",
    targetType: 'MIXED',
    priceRange: 'STANDARD',
    theme: 'premium',
    heroImage: "/images/generated/solar-hero.webp",
    description: "Installation de panneaux solaires photovoltaïques en Suisse romande. Devis gratuit, étude de rentabilité et installateurs porteurs du label « Les Pros du Solaire » (Les Pros du Solaire).",
    meta: {
        title: "Expert Panneau Solaire | Photovoltaïque & Autoconsommation en Suisse",
        description: "Installation de panneaux solaires en Suisse romande. Devis gratuit sous 24h. Simulateur de rétribution unique (Pronovo) et de rentabilité."
    },
    certifications: TEMPLATE_CERTIFICATIONS,
    aidesDisponibles: TEMPLATE_AIDES,
    features: TEMPLATE_FEATURES,
    localKeywords: [
        "installateur panneaux solaires Suisse",
        "autoconsommation photovoltaïque Suisse romande",
        "prix panneaux solaires Suisse",
        "pose panneau solaire Les Pros du Solaire",
        "rentabilité panneaux solaires rétribution unique"
    ],
    quartiers: [],
    coproprietes: [],
    centresCommerciaux: [],
    // Centre géographique de la Suisse (Älggi-Alp, canton d'Obwald).
    coordinates: { lat: 46.8017, lng: 8.2286 }
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

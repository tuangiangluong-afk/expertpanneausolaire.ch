// ========================================
// NATIONAL TARGETS - 30 HIGH-VALUE ZONES
// Expert Panneau Solaire - Couverture Nationale pSEO
// ========================================

export interface NationalTarget {
    slug: string;
    name: string;
    heroTitle: string;
    geo: { lat: number; lng: number };
    top_places: string[]; // Zones d'intervention (Quartiers, Villes voisines)
    zip: string;
    tier: 'BIG5' | 'GOLDEN' | 'HUB' | 'STRATEGIC';
    heroImage?: string;
    unique_intro?: string;
}

export const NATIONAL_TARGETS: NationalTarget[] = [
    {
        slug: "geneve",
        name: "Genève",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2044, lng: 6.1432 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1201",
        tier: 'BIG5',
        unique_intro: "À Genève et dans les communes du canton, les toitures bien exposées et le fort ensoleillement du bassin lémanique rendent le photovoltaïque particulièrement rentable. Nos installateurs partenaires étudient votre toiture, dimensionnent l'installation et montent le dossier de rétribution unique auprès de Pronovo.",
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop"
    },
    {
        slug: "lausanne",
        name: "Lausanne",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.5197, lng: 6.6323 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1003",
        tier: 'BIG5',
        unique_intro: "À Lausanne et dans le canton de Vaud, la rétribution unique de Pronovo et les programmes cantonaux soutiennent l'autoconsommation solaire. Nos partenaires réalisent l'étude de toiture, le dimensionnement et la mise en service de votre centrale photovoltaïque.",
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop"
    },
    {
        slug: "fribourg",
        name: "Fribourg",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.8065, lng: 7.1619 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1700",
        tier: 'BIG5',
        unique_intro: "Dans le canton de Fribourg, l'ensoleillement et les subventions cantonales complémentaires favorisent les installations photovoltaïques résidentielles. Nos installateurs partenaires vous accompagnent de l'étude à la mise en service, dossier Pronovo inclus.",
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop"
    },
    {
        slug: "neuchatel",
        name: "Neuchâtel",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.9896, lng: 6.9293 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "2000",
        tier: 'BIG5',
        unique_intro: "Dans le canton de Neuchâtel, le potentiel solaire des toitures est élevé et les aides cantonales s'ajoutent à la rétribution unique fédérale. Nos partenaires dimensionnent votre installation solaire et gèrent les démarches administratives.",
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop"
    },
    {
        slug: "sion",
        name: "Sion",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2293, lng: 7.3585 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1950",
        tier: 'BIG5',
        unique_intro: "En Valais, l'un des cantons les plus ensoleillés de Suisse, une installation photovoltaïque s'amortit souvent en moins de dix ans. Nos partenaires à Sion et dans le Valais romand étudient votre projet et montent le dossier de subvention.",
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop"
    },
    {
        slug: "montreux",
        name: "Montreux",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.4312, lng: 6.9107 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1820",
        tier: 'GOLDEN',
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop"
    },
    {
        slug: "vevey",
        name: "Vevey",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.4628, lng: 6.8417 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1800",
        tier: 'GOLDEN',
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop"
    },
    {
        slug: "yverdon-les-bains",
        name: "Yverdon-les-Bains",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.7785, lng: 6.6412 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1400",
        tier: 'GOLDEN',
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop"
    },
    {
        slug: "la-chaux-de-fonds",
        name: "La Chaux-de-Fonds",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 47.1035, lng: 6.8328 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "2300",
        tier: 'GOLDEN',
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop"
    },
    {
        slug: "bienne",
        name: "Bienne",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 47.139, lng: 7.2471 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "2502",
        tier: 'GOLDEN',
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop"
    },
    {
        slug: "sierre",
        name: "Sierre",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.292, lng: 7.535 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "3960",
        tier: 'STRATEGIC',
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop"
    },
    {
        slug: "martigny",
        name: "Martigny",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.105, lng: 7.073 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1920",
        tier: 'STRATEGIC',
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop"
    },
    {
        slug: "nyon",
        name: "Nyon",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.3833, lng: 6.2333 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1260",
        tier: 'STRATEGIC',
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop"
    },
    {
        slug: "morges",
        name: "Morges",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.51, lng: 6.5 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1110",
        tier: 'STRATEGIC',
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop"
    },
    {
        slug: "renens",
        name: "Renens",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.54, lng: 6.59 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1020",
        tier: 'STRATEGIC',
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop"
    },
    {
        slug: "pully",
        name: "Pully",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.51, lng: 6.66 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1009",
        tier: 'STRATEGIC',
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop"
    },
    {
        slug: "carouge",
        name: "Carouge",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.1833, lng: 6.1333 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1227",
        tier: 'STRATEGIC',
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop"
    },
    {
        slug: "vernier",
        name: "Vernier",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2052, lng: 6.0963 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1214",
        tier: 'STRATEGIC',
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop"
    },
    {
        slug: "lancy",
        name: "Lancy",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.1867, lng: 6.113 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1212",
        tier: 'STRATEGIC',
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop"
    },
    {
        slug: "meyrin",
        name: "Meyrin",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.233, lng: 6.0792 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1217",
        tier: 'STRATEGIC',
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop"
    },
    {
        slug: "onex",
        name: "Onex",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.1833, lng: 6.1 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1213",
        tier: 'HUB',
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop"
    },
    {
        slug: "thonex",
        name: "Thônex",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.1833, lng: 6.2 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1226",
        tier: 'HUB',
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop"
    },
    {
        slug: "chene-bougeries",
        name: "Chêne-Bougeries",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.1833, lng: 6.1833 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1224",
        tier: 'HUB',
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop"
    },
    {
        slug: "grand-saconnex",
        name: "Le Grand-Saconnex",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2333, lng: 6.1167 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1218",
        tier: 'HUB',
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop"
    },
    {
        slug: "versoix",
        name: "Versoix",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2833, lng: 6.1667 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1290",
        tier: 'HUB',
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop"
    },
    {
        slug: "gland",
        name: "Gland",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.4167, lng: 6.2667 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1196",
        tier: 'HUB',
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop"
    },
    {
        slug: "rolle",
        name: "Rolle",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.4567, lng: 6.3333 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1180",
        tier: 'HUB',
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop"
    },
    {
        slug: "prilly",
        name: "Prilly",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.5333, lng: 6.6167 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1008",
        tier: 'HUB',
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop"
    },
    {
        slug: "le-locle",
        name: "Le Locle",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 47.056, lng: 6.749 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "2400",
        tier: 'HUB',
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop"
    },
    {
        slug: "bulle",
        name: "Bulle",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.6182, lng: 7.0548 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1630",
        tier: 'HUB',
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop"
    },
    {
        slug: "conthey",
        name: "Conthey",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.228, lng: 7.309 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1964",
        tier: 'HUB',
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop"
    },
    {
        slug: "monthey",
        name: "Monthey",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.255, lng: 6.947 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1870",
        tier: 'HUB',
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop"
    },
    {
        slug: "saint-maurice",
        name: "Saint-Maurice",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.218, lng: 7.0 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1890",
        tier: 'HUB',
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop"
    },
    {
        slug: "delemont",
        name: "Delémont",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 47.363, lng: 7.344 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "2800",
        tier: 'HUB',
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop"
    },
    {
        slug: "porrentruy",
        name: "Porrentruy",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 47.417, lng: 7.077 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "2900",
        tier: 'HUB',
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop"
    },
    {
        slug: "payerne",
        name: "Payerne",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.822, lng: 6.938 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1530",
        tier: 'HUB',
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop"
    },
    {
        slug: "avenches",
        name: "Avenches",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.88, lng: 7.04 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1580",
        tier: 'HUB',
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop"
    },
    {
        slug: "estavayer",
        name: "Estavayer-le-Lac",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.848, lng: 6.847 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1470",
        tier: 'HUB',
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop"
    },
    {
        slug: "saxon",
        name: "Saxon",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.148, lng: 7.176 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1907",
        tier: 'HUB',
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop"
    },
    {
        slug: "fully",
        name: "Fully",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.14, lng: 7.117 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1926",
        tier: 'HUB',
        heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2940&auto=format&fit=crop"
    },
    {
        slug: "yverdon",
        name: "Yverdon-les-Bains",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.55, lng: 6.6 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1400",
        tier: 'HUB'
    },
    {
        slug: "chene-bourg",
        name: "Chêne-Bourg",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 6.14 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1225",
        tier: 'HUB'
    },
    {
        slug: "veyrier",
        name: "Veyrier",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 6.14 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1255",
        tier: 'HUB'
    },
    {
        slug: "plan-les-ouates",
        name: "Plan-les-Ouates",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 6.14 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1228",
        tier: 'HUB'
    },
    {
        slug: "bernex",
        name: "Bernex",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 6.14 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1233",
        tier: 'HUB'
    },
    {
        slug: "satigny",
        name: "Satigny",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 6.14 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1242",
        tier: 'HUB'
    },
    {
        slug: "laconnex",
        name: "Laconnex",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 6.14 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1287",
        tier: 'HUB'
    },
    {
        slug: "soral",
        name: "Soral",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 6.14 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1286",
        tier: 'HUB'
    },
    {
        slug: "avusy",
        name: "Avusy",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 6.14 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1285",
        tier: 'HUB'
    },
    {
        slug: "chancy",
        name: "Chancy",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 6.14 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1284",
        tier: 'HUB'
    },
    {
        slug: "avully",
        name: "Avully",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 6.14 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1237",
        tier: 'HUB'
    },
    {
        slug: "puplinge",
        name: "Puplinge",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 6.14 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1241",
        tier: 'HUB'
    },
    {
        slug: "corsier",
        name: "Corsier",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 6.14 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1246",
        tier: 'HUB'
    },
    {
        slug: "anieres",
        name: "Anières",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 6.14 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1247",
        tier: 'HUB'
    },
    {
        slug: "collonge",
        name: "Collonge-Bellerive",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 6.14 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1245",
        tier: 'HUB'
    },
    {
        slug: "cologny",
        name: "Cologny",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 6.14 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1223",
        tier: 'HUB'
    },
    {
        slug: "vandoeuvres",
        name: "Vandœuvres",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 6.14 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1253",
        tier: 'HUB'
    },
    {
        slug: "choulex",
        name: "Choulex",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 6.14 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1244",
        tier: 'HUB'
    },
    {
        slug: "meinier",
        name: "Meinier",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 6.14 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1252",
        tier: 'HUB'
    },
    {
        slug: "jussy",
        name: "Jussy",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 6.14 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1254",
        tier: 'HUB'
    },
    {
        slug: "presinge",
        name: "Presinge",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 6.14 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1243",
        tier: 'HUB'
    },
    {
        slug: "hermance",
        name: "Hermance",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 6.14 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1248",
        tier: 'HUB'
    },
    {
        slug: "bardonnex",
        name: "Bardonnex",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 6.14 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1257",
        tier: 'HUB'
    },
    {
        slug: "perly",
        name: "Perly-Certoux",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 6.14 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1258",
        tier: 'HUB'
    },
    {
        slug: "pregny",
        name: "Pregny-Chambésy",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 6.14 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1292",
        tier: 'HUB'
    },
    {
        slug: "bellevue",
        name: "Bellevue",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 6.14 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1293",
        tier: 'HUB'
    },
    {
        slug: "genthod",
        name: "Genthod",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 6.14 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1294",
        tier: 'HUB'
    },
    {
        slug: "collex",
        name: "Collex-Bossy",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 6.14 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1239",
        tier: 'HUB'
    },
    {
        slug: "troinex",
        name: "Troinex",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 6.14 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1256",
        tier: 'HUB'
    },
    {
        slug: "confignon",
        name: "Confignon",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 6.14 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1232",
        tier: 'HUB'
    },
    {
        slug: "dardagny",
        name: "Dardagny",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 6.14 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1283",
        tier: 'HUB'
    },
    {
        slug: "russin",
        name: "Russin",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 6.14 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1281",
        tier: 'HUB'
    },
    {
        slug: "aire-la-ville",
        name: "Aire-la-Ville",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 6.14 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1288",
        tier: 'HUB'
    },
    {
        slug: "cartigny",
        name: "Cartigny",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 6.14 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1236",
        tier: 'HUB'
    },
    {
        slug: "ecublens",
        name: "Écublens",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.55, lng: 6.6 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1024",
        tier: 'HUB'
    },
    {
        slug: "crissier",
        name: "Crissier",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.55, lng: 6.6 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1023",
        tier: 'HUB'
    },
    {
        slug: "chavannes",
        name: "Chavannes-près-Renens",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.55, lng: 6.6 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1022",
        tier: 'HUB'
    },
    {
        slug: "mont-sur-lausanne",
        name: "Le Mont-sur-Lausanne",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.55, lng: 6.6 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1052",
        tier: 'HUB'
    },
    {
        slug: "epalinges",
        name: "Epalinges",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.55, lng: 6.6 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1066",
        tier: 'HUB'
    },
    {
        slug: "savigny",
        name: "Savigny",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.55, lng: 6.6 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1073",
        tier: 'HUB'
    },
    {
        slug: "lutry",
        name: "Lutry",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.55, lng: 6.6 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1095",
        tier: 'HUB'
    },
    {
        slug: "bourg-en-lavaux",
        name: "Bourg-en-Lavaux",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.55, lng: 6.6 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1096",
        tier: 'HUB'
    },
    {
        slug: "chexbres",
        name: "Chexbres",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.55, lng: 6.6 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1071",
        tier: 'HUB'
    },
    {
        slug: "puidoux",
        name: "Puidoux",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.55, lng: 6.6 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1070",
        tier: 'HUB'
    },
    {
        slug: "la-tour-de-peilz",
        name: "La Tour-de-Peilz",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.55, lng: 6.6 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1814",
        tier: 'HUB'
    },
    {
        slug: "villeneuve",
        name: "Villeneuve",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.55, lng: 6.6 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1844",
        tier: 'HUB'
    },
    {
        slug: "aigle",
        name: "Aigle",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.55, lng: 6.6 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1860",
        tier: 'HUB'
    },
    {
        slug: "ollon",
        name: "Ollon",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.55, lng: 6.6 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1867",
        tier: 'HUB'
    },
    {
        slug: "bex",
        name: "Bex",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.55, lng: 6.6 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1880",
        tier: 'HUB'
    },
    {
        slug: "grandson",
        name: "Grandson",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.55, lng: 6.6 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1422",
        tier: 'HUB'
    },
    {
        slug: "orbe",
        name: "Orbe",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.55, lng: 6.6 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1350",
        tier: 'HUB'
    },
    {
        slug: "vallorbe",
        name: "Vallorbe",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.55, lng: 6.6 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1337",
        tier: 'HUB'
    },
    {
        slug: "saint-prex",
        name: "Saint-Prex",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.55, lng: 6.6 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1162",
        tier: 'HUB'
    },
    {
        slug: "aubonne",
        name: "Aubonne",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.55, lng: 6.6 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1170",
        tier: 'HUB'
    },
    {
        slug: "prangins",
        name: "Prangins",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.55, lng: 6.6 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1197",
        tier: 'HUB'
    },
    {
        slug: "coppet",
        name: "Coppet",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.55, lng: 6.6 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1296",
        tier: 'HUB'
    },
    {
        slug: "moudon",
        name: "Moudon",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.55, lng: 6.6 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1510",
        tier: 'HUB'
    },
    {
        slug: "echallens",
        name: "Echallens",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.55, lng: 6.6 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1040",
        tier: 'HUB'
    },
    {
        slug: "cossonay",
        name: "Cossonay",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.55, lng: 6.6 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1304",
        tier: 'HUB'
    },
    {
        slug: "la-sarraz",
        name: "La Sarraz",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.55, lng: 6.6 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1315",
        tier: 'HUB'
    },
    {
        slug: "l-isle",
        name: "L'Isle",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.55, lng: 6.6 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1148",
        tier: 'HUB'
    },
    {
        slug: "le-sentier",
        name: "Le Sentier",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.55, lng: 6.6 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1347",
        tier: 'HUB'
    },
    {
        slug: "sainte-croix",
        name: "Sainte-Croix",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.55, lng: 6.6 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1450",
        tier: 'HUB'
    },
    {
        slug: "chateau-d-oex",
        name: "Château-d'Œx",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.55, lng: 6.6 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1660",
        tier: 'HUB'
    },
    {
        slug: "prilly",
        name: "Prilly",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.55, lng: 6.6 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1008",
        tier: 'HUB'
    },
    {
        slug: "chamoson",
        name: "Chamoson",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 7.4 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1955",
        tier: 'HUB'
    },
    {
        slug: "ardon",
        name: "Ardon",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 7.4 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1957",
        tier: 'HUB'
    },
    {
        slug: "vetroz",
        name: "Vétroz",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 7.4 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1963",
        tier: 'HUB'
    },
    {
        slug: "nendaz",
        name: "Nendaz",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 7.4 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1997",
        tier: 'HUB'
    },
    {
        slug: "veysonnaz",
        name: "Veysonnaz",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 7.4 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1993",
        tier: 'HUB'
    },
    {
        slug: "saviese",
        name: "Savièse",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 7.4 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1965",
        tier: 'HUB'
    },
    {
        slug: "grimisuat",
        name: "Grimisuat",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 7.4 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1971",
        tier: 'HUB'
    },
    {
        slug: "ayent",
        name: "Ayent",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 7.4 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1966",
        tier: 'HUB'
    },
    {
        slug: "chalais",
        name: "Chalais",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 7.4 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "3966",
        tier: 'HUB'
    },
    {
        slug: "venthone",
        name: "Venthône",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 7.4 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "3973",
        tier: 'HUB'
    },
    {
        slug: "montana",
        name: "Montana",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 7.4 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "3963",
        tier: 'HUB'
    },
    {
        slug: "randogne",
        name: "Randogne",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 7.4 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "3975",
        tier: 'HUB'
    },
    {
        slug: "chermignon",
        name: "Chermignon",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 7.4 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "3971",
        tier: 'HUB'
    },
    {
        slug: "lens",
        name: "Lens",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 7.4 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1978",
        tier: 'HUB'
    },
    {
        slug: "grone",
        name: "Grône",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 7.4 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "3979",
        tier: 'HUB'
    },
    {
        slug: "saint-leonard",
        name: "Saint-Léonard",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 7.4 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1958",
        tier: 'HUB'
    },
    {
        slug: "salgesch",
        name: "Salgesch",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 7.4 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "3970",
        tier: 'HUB'
    },
    {
        slug: "varen",
        name: "Varen",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 7.4 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "3953",
        tier: 'HUB'
    },
    {
        slug: "bovernier",
        name: "Bovernier",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 7.4 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1932",
        tier: 'HUB'
    },
    {
        slug: "sembrancher",
        name: "Sembrancher",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 7.4 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1933",
        tier: 'HUB'
    },
    {
        slug: "bourg-saint-pierre",
        name: "Bourg-Saint-Pierre",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 7.4 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1946",
        tier: 'HUB'
    },
    {
        slug: "liddes",
        name: "Liddes",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 7.4 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1945",
        tier: 'HUB'
    },
    {
        slug: "vollleges",
        name: "Vollèges",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 7.4 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1941",
        tier: 'HUB'
    },
    {
        slug: "orsieres",
        name: "Orsières",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 7.4 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1937",
        tier: 'HUB'
    },
    {
        slug: "massongex",
        name: "Massongex",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 7.4 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1869",
        tier: 'HUB'
    },
    {
        slug: "verossaz",
        name: "Vérossaz",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 7.4 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1891",
        tier: 'HUB'
    },
    {
        slug: "evionnaz",
        name: "Evionnaz",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 7.4 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1902",
        tier: 'HUB'
    },
    {
        slug: "salvan",
        name: "Salvan",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 7.4 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1922",
        tier: 'HUB'
    },
    {
        slug: "finhaut",
        name: "Finhaut",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 7.4 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1925",
        tier: 'HUB'
    },
    {
        slug: "trient",
        name: "Trient",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 7.4 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1929",
        tier: 'HUB'
    },
    {
        slug: "collombey",
        name: "Collombey-Muraz",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 7.4 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1868",
        tier: 'HUB'
    },
    {
        slug: "troistorrents",
        name: "Troistorrents",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 7.4 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1872",
        tier: 'HUB'
    },
    {
        slug: "champery",
        name: "Champéry",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 7.4 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1874",
        tier: 'HUB'
    },
    {
        slug: "val-d-illiez",
        name: "Val-d'Illiez",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 7.4 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1873",
        tier: 'HUB'
    },
    {
        slug: "vionnaz",
        name: "Vionnaz",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 7.4 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1895",
        tier: 'HUB'
    },
    {
        slug: "vouvry",
        name: "Vouvry",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 7.4 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1896",
        tier: 'HUB'
    },
    {
        slug: "port-valais",
        name: "Port-Valais",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.2, lng: 7.4 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1897",
        tier: 'HUB'
    },
    {
        slug: "boudry",
        name: "Boudry",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.95, lng: 6.8 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "2017",
        tier: 'HUB'
    },
    {
        slug: "colombier",
        name: "Colombier",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.95, lng: 6.8 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "2013",
        tier: 'HUB'
    },
    {
        slug: "cortaillod",
        name: "Cortaillod",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.95, lng: 6.8 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "2016",
        tier: 'HUB'
    },
    {
        slug: "bevaix",
        name: "Bevaix",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.95, lng: 6.8 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "2022",
        tier: 'HUB'
    },
    {
        slug: "saint-aubin",
        name: "Saint-Aubin-Sauges",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.95, lng: 6.8 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "2024",
        tier: 'HUB'
    },
    {
        slug: "auvernier",
        name: "Auvernier",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.95, lng: 6.8 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "2012",
        tier: 'HUB'
    },
    {
        slug: "peseux",
        name: "Peseux",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.95, lng: 6.8 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "2034",
        tier: 'HUB'
    },
    {
        slug: "valangin",
        name: "Valangin",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.95, lng: 6.8 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "2042",
        tier: 'HUB'
    },
    {
        slug: "cernier",
        name: "Cernier",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.95, lng: 6.8 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "2053",
        tier: 'HUB'
    },
    {
        slug: "fontainemelon",
        name: "Fontainemelon",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.95, lng: 6.8 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "2052",
        tier: 'HUB'
    },
    {
        slug: "les-brenets",
        name: "Les Brenets",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.95, lng: 6.8 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "2416",
        tier: 'HUB'
    },
    {
        slug: "la-sagne",
        name: "La Sagne",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.95, lng: 6.8 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "2314",
        tier: 'HUB'
    },
    {
        slug: "le-landeron",
        name: "Le Landeron",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.95, lng: 6.8 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "2525",
        tier: 'HUB'
    },
    {
        slug: "cressier",
        name: "Cressier",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.95, lng: 6.8 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "2087",
        tier: 'HUB'
    },
    {
        slug: "hauterive",
        name: "Hauterive",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.95, lng: 6.8 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "2068",
        tier: 'HUB'
    },
    {
        slug: "saint-blaise",
        name: "Saint-Blaise",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.95, lng: 6.8 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "2072",
        tier: 'HUB'
    },
    {
        slug: "romont",
        name: "Romont",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.75, lng: 7.1 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1680",
        tier: 'HUB'
    },
    {
        slug: "chatel-saint-denis",
        name: "Châtel-Saint-Denis",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.75, lng: 7.1 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1618",
        tier: 'HUB'
    },
    {
        slug: "vaulruz",
        name: "Vaulruz",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.75, lng: 7.1 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1627",
        tier: 'HUB'
    },
    {
        slug: "riaz",
        name: "Riaz",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.75, lng: 7.1 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1632",
        tier: 'HUB'
    },
    {
        slug: "broc",
        name: "Broc",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.75, lng: 7.1 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1636",
        tier: 'HUB'
    },
    {
        slug: "gruyeres",
        name: "Gruyères",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.75, lng: 7.1 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1663",
        tier: 'HUB'
    },
    {
        slug: "charmey",
        name: "Charmey",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.75, lng: 7.1 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1637",
        tier: 'HUB'
    },
    {
        slug: "villars-sur-glane",
        name: "Villars-sur-Glâne",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.75, lng: 7.1 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1752",
        tier: 'HUB'
    },
    {
        slug: "marly",
        name: "Marly",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.75, lng: 7.1 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1723",
        tier: 'HUB'
    },
    {
        slug: "grolley",
        name: "Grolley",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.75, lng: 7.1 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1772",
        tier: 'HUB'
    },
    {
        slug: "corminboeuf",
        name: "Corminboeuf",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.75, lng: 7.1 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1720",
        tier: 'HUB'
    },
    {
        slug: "matran",
        name: "Matran",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 46.75, lng: 7.1 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "1754",
        tier: 'HUB'
    },
    {
        slug: "saint-ursanne",
        name: "Saint-Ursanne",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 47.37, lng: 7.15 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "2882",
        tier: 'HUB'
    },
    {
        slug: "saignelegier",
        name: "Saignelégier",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 47.37, lng: 7.15 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "2350",
        tier: 'HUB'
    },
    {
        slug: "les-breuleux",
        name: "Les Breuleux",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 47.37, lng: 7.15 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "2345",
        tier: 'HUB'
    },
    {
        slug: "le-noirmont",
        name: "Le Noirmont",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 47.37, lng: 7.15 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "2340",
        tier: 'HUB'
    },
    {
        slug: "alle",
        name: "Alle",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 47.37, lng: 7.15 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "2942",
        tier: 'HUB'
    },
    {
        slug: "boncourt",
        name: "Boncourt",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 47.37, lng: 7.15 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "2926",
        tier: 'HUB'
    },
    {
        slug: "courgenay",
        name: "Courgenay",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 47.37, lng: 7.15 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "2950",
        tier: 'HUB'
    },
    {
        slug: "bassecourt",
        name: "Bassecourt",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 47.37, lng: 7.15 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "2854",
        tier: 'HUB'
    },
    {
        slug: "vicques",
        name: "Vicques",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 47.37, lng: 7.15 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "2824",
        tier: 'HUB'
    },
    {
        slug: "moutier",
        name: "Moutier",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 47.05, lng: 7.3 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "2740",
        tier: 'HUB'
    },
    {
        slug: "la-neuveville",
        name: "La Neuveville",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 47.05, lng: 7.3 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "2520",
        tier: 'HUB'
    },
    {
        slug: "tavannes",
        name: "Tavannes",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 47.05, lng: 7.3 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "2710",
        tier: 'HUB'
    },
    {
        slug: "saint-imier",
        name: "Saint-Imier",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 47.05, lng: 7.3 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "2610",
        tier: 'HUB'
    },
    {
        slug: "courtelary",
        name: "Courtelary",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 47.05, lng: 7.3 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "2608",
        tier: 'HUB'
    },
    {
        slug: "tramelan",
        name: "Tramelan",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 47.05, lng: 7.3 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "2720",
        tier: 'HUB'
    },
    {
        slug: "corgemont",
        name: "Corgémont",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 47.05, lng: 7.3 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "2606",
        tier: 'HUB'
    },
    {
        slug: "sonceboz",
        name: "Sonceboz-Sombeval",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 47.05, lng: 7.3 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "2605",
        tier: 'HUB'
    },
    {
        slug: "reconvilier",
        name: "Reconvilier",
        heroTitle: "Panneaux Solaires",
        geo: { lat: 47.05, lng: 7.3 },
        top_places: ["Centre-ville", "Quartier Nord", "Quartier Sud", "Périphérie"],
        zip: "2732",
        tier: 'HUB'
    },
];

// Helper to get a target by slug
export function getTargetBySlug(slug: string): NationalTarget | undefined {
    return NATIONAL_TARGETS.find(t => t.slug === slug);
}

// ========================================
// ADAPTER: Convert NationalTarget to CityConfig
// Uses pSEO for unique content per city
// ========================================
import { CityConfig } from "@/lib/db";

export function getTargetAsCityConfig(slug: string): CityConfig | undefined {
    const target = NATIONAL_TARGETS.find(t => t.slug === slug);
    if (!target) return undefined;

    const priceDisplay = "Sur Devis";
    const priceDesc = "Étude & Devis Solaire Gratuit";

    const title = `Installateur Panneaux Solaires ${target.name} | Devis & Aides Swissolar`;
    const uniqueDescription = `Trouvez votre installateur Swissolar de panneaux solaires à ${target.name} (${target.zip}). Réalisez des économies d'énergie en autoconsommation. Devis gratuit sous 24h.`;
    const uniqueMetaDescription = `Installation panneaux solaires photovoltaïques ${target.name}. Devis gratuit sous 24h avec des poseurs Swissolar Swissolar. Prime à l'autoconsommation déduite.`;

    return {
        slug: target.slug,
        city: target.name,
        name: `Solaire ${target.name}`,
        domain: `expertpanneausolaire.ch/ville/${target.slug}`,
        heroImage: target.heroImage || "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2672&auto=format&fit=crop",

        postalCode: target.zip,
        department: target.zip.substring(0, 2),
        region: "France",

        description: uniqueDescription,
        geo: target.geo,
        unique_intro: target.unique_intro,

        features: [
            "Primes Déduites",
            "Rendement Garanti",
            "Swissolar Swissolar",
            "Matériel 25 ans",
            "Devis sous 24h"
        ],

        stations: [],
        hospitals: [],
        neighborhoods: target.top_places,

        points_of_interest: {
            hotels: [],
            nightlife: [],
            monuments: target.top_places,
            parking_difficulty: "High Demand"
        },

        pricing: {
            base: priceDisplay,
            description: priceDesc,
            km: 0
        },

        phoneNumber: "+41 22 000 00 00",
        email: "contact@expertpanneausolaire.ch",
        type: "PARTNER",
        targetType: "MIXED",

        meta: {
            title,
            description: uniqueMetaDescription
        }
    };
}


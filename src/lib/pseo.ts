import type { CityConfig } from "@/lib/db";
import { CANTONS, cantonFromNpa, type Canton } from "@/data/ch-cantons";
import { composeLocalIntro } from "@/lib/pseo-local";
import { clampTitle, clampDescription } from "@/lib/seo-meta";
import { getLocalFacts, type LocalFacts } from "@/data/local-facts";

export interface PseoPageContent {
    meta_title: string;
    meta_description: string;
    hero_title: string;
    hero_badge: string;
    intro_html: string;
    cta_primary: string;
    pricing_estimated: string;
    regional_subsidy: string;
    expert_tip: string;
    local_climate_info?: string;
    installation_timeline?: string;
    local_compliance_info?: string;
    /** Faits locaux vérifiables, affichés en bloc sur la page ville */
    local_facts?: { label: string; value: string }[];
    /** Contrainte technique locale (bise, foehn, neige...) */
    local_risk_factor?: string;
}

const PRICE_RANGE = "12 000 CHF – 25 000 CHF";
const GUARANTEE = "Garantie de 10 ans sur l'onduleur";

// ========================================
// CONTEXTE LOCAL RÉEL
// ========================================
interface LocalContext {
    /** Slug de la commune, sert à retrouver ses mesures réelles */
    slug: string;
    city: string;
    npa: string;
    zones: string[];
    canton?: Canton;
    cantonCode: string;
    cantonName: string;
    chefLieu: string;
    langue: string;
    soleil: string;
    vent: string;
    neige: boolean;
    note: string;
}

function buildContext(c: CityConfig): LocalContext {
    const npa = c.postalCode || "";
    const code = cantonFromNpa(npa) || c.department || "";
    const canton = CANTONS[code];
    return {
        slug: c.slug,
        city: c.city,
        npa,
        /** Communes limitrophes réelles, et non la liste de quartiers du maillage */
    zones: (c.zones || []).map((z) => z.nom),
        canton,
        cantonCode: code,
        cantonName: canton?.name || "Suisse romande",
        chefLieu: canton?.chefLieu || "",
        langue: canton?.langue || "français",
        soleil: canton?.soleil || "1 700 – 1 900 h",
        vent: canton?.vent || "la bise",
        neige: !!canton?.neige,
        note: canton?.note || "",
    };
}

/** Hash déterministe : deux villes voisines ne doivent pas recevoir le même texte. */
function hash(...parts: (string | number)[]): number {
    const s = parts.join("|");
    let h = 2166136261;
    for (let i = 0; i < s.length; i++) {
        h ^= s.charCodeAt(i);
        h = Math.imul(h, 16777619);
    }
    return Math.abs(h);
}

const pick = <T,>(arr: T[], h: number): T => arr[h % arr.length];

// ========================================
// PARAGRAPHES D'OUVERTURE (canton / chef-lieu / langue)
// ========================================
const OPENERS: ((c: LocalContext) => string)[] = [
    (c) => `<p class="mb-4 leading-relaxed">Vous étudiez un projet photovoltaïque à <strong>${c.city}${c.npa ? ` (${c.npa})` : ""}</strong> ? La commune se situe dans le canton de <strong>${c.cantonName}</strong>, dont le chef-lieu est ${c.chefLieu}. Avec un ensoleillement annuel moyen de ${c.soleil}, une toiture bien orientée y produit de façon régulière sur l'année.</p>`,
    (c) => `<p class="mb-4 leading-relaxed">À <strong>${c.city}</strong>, canton de ${c.cantonName}, la rentabilité d'une installation solaire repose d'abord sur l'<strong>autoconsommation</strong> : la part de production consommée directement sur place évite d'acheter de l'électricité à un prix élevé, tandis que le surplus est repris par le gestionnaire de réseau.</p>`,
    (c) => `<p class="mb-4 leading-relaxed">Recherchez-vous un <strong>installateur photovoltaïque à ${c.city}${c.npa ? ` (${c.npa})` : ""}</strong> ? Dans le canton de ${c.cantonName}, les dossiers de rétribution unique passent par <strong>Pronovo</strong>, complétés selon le lieu par un programme cantonal. Nos partenaires certifiés Les Pros du Solaire prennent l'étude et le montage du dossier en charge.</p>`,
    (c) => `<p class="mb-4 leading-relaxed">À <strong>${c.city}</strong> (canton de ${c.cantonName}), les toitures bénéficient d'un ensoleillement de ${c.soleil} par an. C'est suffisant pour couvrir une large part de la consommation d'une maison individuelle — à condition de dimensionner la puissance sur la consommation réelle, pas sur la surface disponible.</p>`,
    (c) => `<p class="mb-4 leading-relaxed">Un projet de panneaux solaires à <strong>${c.city}</strong> ? Le canton de ${c.cantonName} se caractérise par ${c.note}. Ces particularités locales déterminent le dimensionnement, le type de fixation et la résistance mécanique de l'installation.</p>`,
    (c) => `<p class="mb-4 leading-relaxed">Amortir une installation photovoltaïque à <strong>${c.city}</strong> demande de connaître le contexte local : canton de ${c.cantonName}, ${c.soleil} d'ensoleillement, vent dominant ${c.vent}${c.neige ? " et une charge de neige à prendre en compte sur la structure" : ""}.</p>`,
];

// ========================================
// PARAGRAPHES TECHNIQUES (communes limitrophes réelles + prestations)
// ========================================
const MIDDLES: ((c: LocalContext) => string)[] = [
    (c) => `<p class="mb-4 leading-relaxed">${c.zones.length >= 2 ? `Nos partenaires installateurs interviennent à ${c.city} et dans les communes voisines : <strong>${c.zones.slice(0, 3).join(", ")}</strong>.` : "Nos partenaires installateurs couvrent la commune et les communes voisines."} Étude de toiture, dimensionnement, montage du dossier Pronovo, raccordement et mise en service.</p>`,
    (c) => `<p class="mb-4 leading-relaxed">${c.zones.length >= 2 ? `Interventions régulières à <strong>${c.zones.slice(0, 3).join(", ")}</strong>.` : "Interventions régulières sur la commune."} Modules N-Type TOPCon ou biverre, onduleur centralisé ou micro-onduleurs selon la configuration et l'ombrage réel du toit.</p>`,
    (c) => `<p class="mb-4 leading-relaxed">${c.zones.length >= 2 ? `À ${c.city} comme dans les communes voisines : <strong>${c.zones.slice(0, 3).join(", ")}</strong>,` : `Sur toute la commune de ${c.city},`} nous analysons l'orientation, l'inclinaison et l'ombrage avant de fixer la puissance en kWc. Un chiffrage précis évite le surdimensionnement, principal poste de perte de rentabilité.</p>`,
    (c) => `<p class="mb-4 leading-relaxed">Installateurs actifs dans le canton de ${c.cantonName} : ${c.zones.length >= 2 ? `nous suivons en priorité les zones de <strong>${c.zones.slice(0, 3).join(", ")}</strong>.` : "nous suivons les zones résidentielles de la commune."} Batterie physique ou virtuelle selon votre profil de consommation.</p>`,
    (c) => `<p class="mb-4 leading-relaxed">${c.zones.length >= 2 ? `Zones déjà couvertes par nos partenaires : <strong>${c.zones.slice(0, 3).join(", ")}</strong>.` : "Déjà installés sur la commune."} Montage du dossier de rétribution unique auprès de Pronovo, attestation de sécurité (NIBT) et mise en service par un électricien autorisé.</p>`,
    (c) => `<p class="mb-4 leading-relaxed">${c.zones.length >= 2 ? `Secteurs couverts : <strong>${c.zones.slice(0, 3).join(", ")}</strong> et environs.` : "Couverture communale complète."} Suivi de production après mise en service, pour détecter immédiatement toute baisse de rendement anormale.</p>`,
];

// ========================================
// CONTRAINTE TECHNIQUE LOCALE
// ========================================
function riskParagraph(c: LocalContext): string {
    if (c.vent === "le foehn") {
        return `<p class="leading-relaxed">Contrainte locale : le canton du ${c.cantonName} est connu pour son <strong>foehn</strong>, un vent chaud et rafaleux qui peut souffler très fort dans les vallées. Il impose des fixations de toiture calculées pour des pointes de vent élevées, et non une pose standard.</p>`;
    }
    if (c.neige) {
        return `<p class="leading-relaxed">Contrainte locale : dans le canton de ${c.cantonName}, la <strong>neige</strong> fait partie du dimensionnement. Les crochets et rails doivent être calculés pour la charge de neige de la zone — un point de vigilance central en altitude, notamment à ${c.city} et dans les communes voisines.</p>`;
    }
    return `<p class="leading-relaxed">Contrainte locale : le canton de ${c.cantonName} est marqué par <strong>${c.vent}</strong>, un vent froid qui réduit temporairement la production en hiver et sollicite mécaniquement les fixations. Le calepinage et l'ancrage en tiennent compte.</p>`;
}

// ========================================
// CONSEILS D'EXPERT (ancrés localement, jamais inventés)
// ========================================
/** Énumération à la française : « a, b et c ». */
function joinFr(items: string[]): string {
    if (items.length <= 1) return items.join("");
    return `${items.slice(0, -1).join(", ")} et ${items[items.length - 1]}`;
}

/**
 * Paragraphe bâti sur des mesures réelles : productible calculé par le JRC
 * (PVGIS-SARAH2) et climatologie NASA POWER sur vingt ans. Le chiffre change
 * d'une commune à l'autre, donc le texte aussi.
 */
function measuredLocalParagraph(c: LocalContext, local: LocalFacts | undefined): string {
    if (!local) return "";
    const items: string[] = [];
    if (local.pvYield) {
        items.push(`1 kWc installé y produit ${local.pvYield.toLocaleString("fr-FR")} kWh par an`);
    }
    if (local.pvSlope) {
        items.push(`l'inclinaison optimale des modules y est de ${local.pvSlope} degrés`);
    }
    if (local.sunKwh !== null) {
        items.push(`le rayonnement horizontal reçu atteint ${local.sunKwh.toLocaleString("fr-FR")} kWh/m² par an`);
    }
    if (local.tminJan !== null) {
        items.push(`le minimum moyen de janvier y est de ${local.tminJan.toLocaleString("fr-FR")} °C`);
    }
    if (items.length === 0) return "";
    return `<p class="leading-relaxed">Données locales : à ${c.city}, ${joinFr(items)}. Ces valeurs déterminent le dimensionnement de l'onduleur et l'intérêt réel du stockage en autoconsommation.</p>`;
}

const TIPS: ((c: LocalContext) => string)[] = [
    (c) => `À ${c.city}, l'autoconsommation est le premier levier de rentabilité : chaque kWh consommé sur place évite l'achat d'électricité au réseau, alors que le surplus est repris à un tarif nettement inférieur.`,
    (c) => `La rétribution unique de Pronovo est versée en une seule fois après la mise en service, sur la base de la puissance installée ; le dossier est monté par l'installateur avant les travaux.`,
    (c) => `Dans le canton de ${c.cantonName}, la rétribution fédérale est complétée selon le lieu par un programme cantonal ou communal : il faut vérifier les conditions avant de signer.`,
    (c) => `À ${c.city}, l'orientation et l'inclinaison réelles du toit pèsent plus lourd que la technologie des modules : une toiture mal orientée produira moins, même avec du matériel haut de gamme.`,
    (c) => `${c.zones.length ? `À ${c.city} comme dans les communes voisines : ${c.zones.slice(0, 2).join(" et ")}, ` : `À ${c.city}, `}un ombrage partiel en milieu de journée justifie souvent des micro-onduleurs plutôt qu'un onduleur centralisé, pour limiter la perte de l'ensemble de la chaîne.`,
    (c) => `${c.vent === "le foehn" ? `Face au foehn du ${c.cantonName}, les fixations de toiture doivent être calculées pour des pointes de vent élevées : cette vérification figure dans l'étude technique.` : `La ${c.vent.replace("la ", "")} sollicite mécaniquement les fixations à ${c.city} : le calepinage et l'ancrage doivent être calculés, pas improvisés.`}`,
    (c) => `La rentabilité d'une installation à ${c.city} se calcule sur 25 à 30 ans : un devis sérieux indique la production annuelle estimée, le taux d'autoconsommation et le temps de retour.`,
    (c) => `Le prix d'une installation en Suisse dépend surtout de la complexité de la toiture (échafaudage, accès, remplacement de couverture) plus que du prix des modules.`,
    (c) => `À ${c.city}, une installation déclarée et raccordée dans les règles ouvre droit à la reprise du surplus par le gestionnaire de réseau local.`,
    (c) => `${c.neige ? `En zone de neige (canton de ${c.cantonName}), les panneaux en toiture se nettoient naturellement par glissement : l'important est de vérifier que les crochets supportent la charge.` : `Dans le canton de ${c.cantonName}, le risque principal reste l'ombrage et non la neige : l'étude d'ensoleillement est donc déterminante.`}`,
    (c) => `Faire appel à un installateur certifié Les Pros du Solaire à ${c.city} est une condition pratique pour accéder à la rétribution unique et aux programmes cantonaux.`,
    (c) => `Une batterie n'est rentable que si votre taux d'autoconsommation sans batterie est déjà élevé : à ${c.city}, on dimensionne d'abord le solaire, puis on évalue le stockage.`,
];

// ========================================
// GÉNÉRATEUR
// ========================================
export async function getPseoContent(cityConfig: CityConfig, _targetType: string = "MIXED"): Promise<PseoPageContent> {
    const c = buildContext(cityConfig);
    const h = hash(c.city, c.npa, c.cantonCode);

    const realPrice = cityConfig.pricing?.base || PRICE_RANGE;
    const npaSpan = c.npa ? ` <span class="text-slate-400 text-3xl">(${c.npa})</span>` : "";
    const isSwiss = !!c.canton;

    const metaTitles = [
        `Panneaux Solaires ${c.city} (${c.npa}) | Devis Gratuit 24h`,
        `Installateur Photovoltaïque ${c.city} | Canton de ${c.cantonName}`,
        `Photovoltaïque ${c.city} | Pronovo & Autoconsommation`,
        `Panneaux Solaires à ${c.city} (${c.cantonName}) | Étude Gratuite`,
        `Expert Solaire ${c.city} | Rétribution Unique Pronovo`,
    ];
    const meta_title = isSwiss ? pick(metaTitles, h) : "Expert Panneau Solaire - Panneaux Photovoltaïques & Aides 2026";

    const metaDescs = [
        `Installation de panneaux solaires à ${c.city} (${c.npa}), canton de ${c.cantonName}. Étude de toiture, dossier Pronovo et devis gratuit sous 24h.`,
        `Photovoltaïque à ${c.city} : dimensionnement selon votre consommation réelle, rétribution unique Pronovo et installateurs certifiés Les Pros du Solaire.`,
        `Panneaux solaires à ${c.city} (canton de ${c.cantonName}) : autoconsommation, batterie et reprise du surplus. Étude gratuite en 24h.`,
        `Installateur photovoltaïque à ${c.city} : analyse d'ensoleillement, montage du dossier de rétribution unique et mise en service. Devis gratuit.`,
        `Étude solaire gratuite à ${c.city}, canton de ${c.cantonName} : production estimée, rentabilité et aides fédérales et cantonales.`,
    ];
    const meta_description = pick(metaDescs, h >> 3);

    const hero_title = `Installateur <span class="text-amber-500">Panneaux Solaires</span> à ${c.city}${npaSpan}`;

    const intro_html = composeLocalIntro(
        {
            city: c.city, postal: c.npa, deptCode: c.cantonCode, deptName: c.cantonName,
            region: "Suisse romande", prefecture: c.chefLieu, zones: c.zones,
            authority: "le gestionnaire de réseau de distribution local",
            montagne: c.neige,
        },
        {
            audience: "Les propriétaires et les entreprises",
            service: "l'étude, la fourniture et la pose de panneaux solaires photovoltaïques",
            norms: "les normes SIA et l'ordonnance sur les installations à basse tension (OIBT)",
            document: "le dossier de subvention et le schéma de l'installation",
            authorityLabel: "le gestionnaire de réseau",
            project: "votre projet d'autoconsommation",
            terms: { dept: "canton", prefecture: "chef-lieu", city: "commune" },
        },
        { openers: OPENERS.map((fn) => () => fn(c)), middles: MIDDLES.map((fn) => () => fn(c)) },
        h,
    ) + riskParagraph(c) + measuredLocalParagraph(c, getLocalFacts(c.slug, c.city));
    const expert_tip = pick(TIPS, h >> 7)(c);

    // --- Faits locaux vérifiables, en tête de bloc ---
    // Productible et ensoleillement ne sont plus des appréciations : ce sont les
    // valeurs calculées par le JRC (PVGIS-SARAH2) et mesurées par NASA POWER.
    const local = getLocalFacts(c.slug, c.city);
    const local_facts: { label: string; value: string }[] = [];
    if (local) {
        if (local.pvYield) local_facts.push({ label: "Productible réel", value: `${local.pvYield.toLocaleString("fr-FR")} kWh/kWc/an` });
        if (local.pvSlope) local_facts.push({ label: "Inclinaison optimale", value: `${local.pvSlope}°` });
        if (local.pvSun) local_facts.push({ label: "Irradiation dans le plan", value: `${local.pvSun.toLocaleString("fr-FR")} kWh/m²/an` });
        if (local.sunKwh !== null) local_facts.push({ label: "Rayonnement horizontal", value: `${local.sunKwh.toLocaleString("fr-FR")} kWh/m²/an` });
        if (local.tminJan !== null) local_facts.push({ label: "Minimum moyen de janvier", value: `${local.tminJan.toLocaleString("fr-FR")} °C` });
        if (local.rainMm !== null) local_facts.push({ label: "Précipitations annuelles", value: `${local.rainMm.toLocaleString("fr-FR")} mm` });
        if (local.windDir) local_facts.push({ label: "Vent dominant", value: `${local.windDir} — ${(local.windKmh ?? 0).toLocaleString("fr-FR")} km/h` });
    }
    if (c.cantonCode) local_facts.push({ label: "Canton", value: `${c.cantonName} (${c.cantonCode})` });
    if (c.chefLieu) local_facts.push({ label: "Chef-lieu", value: c.chefLieu });
    local_facts.push({ label: "Langue", value: c.langue });
    if (c.npa) local_facts.push({ label: "NPA", value: c.npa });
    local_facts.push({ label: "Aide fédérale", value: "Rétribution unique Pronovo" });
    if (c.neige) local_facts.push({ label: "Charge de neige", value: "Dimensionnement renforcé" });

    const local_risk_factor = c.vent === "le foehn"
        ? "Foehn (rafales de vallée)"
        : c.neige
            ? "Charge de neige"
            : "Bise en hiver";

    const timelineOptions = [
        "Étude sous 48h, pose en 1 à 2 jours",
        "Devis sous 24h, installation en 4 à 6 semaines",
        "Visite technique gratuite sous 48h",
    ];

    return {
        meta_title: clampTitle(meta_title),
        meta_description: clampDescription(meta_description),
        hero_title,
        hero_badge: c.neige
            ? "Structure dimensionnée pour la neige"
            : "Installateurs certifiés Les Pros du Solaire",
        intro_html,
        cta_primary: pick(
            [
                "Obtenir mon étude gratuite",
                "Estimer ma production solaire",
                "Demander un devis sous 24h",
            ],
            h >> 11
        ),
        pricing_estimated: realPrice,
        regional_subsidy: `Rétribution unique Pronovo + programmes du canton ${c.cantonName}`,
        expert_tip,
        local_climate_info: expert_tip,
        installation_timeline: pick(timelineOptions, h >> 13),
        local_compliance_info: `Mise en service avec attestation de sécurité (NIBT) — canton de ${c.cantonName}`,
        local_facts,
        local_risk_factor,
    };
}

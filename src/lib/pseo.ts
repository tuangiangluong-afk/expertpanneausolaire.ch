import type { CityConfig } from "@/lib/db";

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
}

const DEFAULT_REGIONAL = {
    subsidyName: "Prime à l'Autoconsommation & EDF OA",
    subsidyAmount: "Prime à l'autoconsommation (jusqu'à 350€/kWc) + Vente EDF OA",
    avgPrice: "6 500€ – 14 000€"
};

const TIPS = [
        "À {city}, une orientation Sud, Sud-Est ou Sud-Ouest avec une inclinaison de toiture de 30° à 35° offre le rendement photovoltaïque le plus élevé pour l'autoconsommation.",
        "Pour maximiser vos économies à {city}, nous vous recommandons d'installer un optimiseur d'énergie couplé à votre chauffe-eau pour router le surplus solaire directement vers votre ballon.",
        "Les habitants de {neighborhood_0} plébiscitent les micro-onduleurs Enphase : chaque panneau produit indépendamment, éliminant toute perte de rendement liée aux ombrages partiels.",
        "Avant de signer votre devis solaire à {city}, vérifiez que votre installateur détient le label RGE QualiPV, indispensable pour toucher la prime à l'autoconsommation et vendre votre surplus à EDF OA.",
        "En toiture ardoise ou tuiles à {city}, notre système de fixation surimposé certifié CSTB garantit une étanchéité absolue sans percer l'isolation thermique sous toiture.",
        "La batterie de stockage physique ou virtuelle permet aux foyers de {city} d'atteindre jusqu'à 85% d'autonomie énergétique en réutilisant le soir l'électricité produite en journée.",
        "Une installation photovoltaïque de 3 kWc à 6 kWc à {city} génère entre 3 300 et 7 500 kWh d'électricité propre par an, amortissant votre investissement en 6 à 8 ans.",
        "Nos techniciens à {city} prennent en charge l'ensemble des démarches : déclaration préalable en mairie, demande de raccordement Enedis et attestation de conformité Consuel."
];
const INTROS = [
        "<p class=\"mb-4 leading-relaxed\">Vous souhaitez produire votre propre électricité verte et réduire votre facture EDF à <strong>{city}{postalMention}</strong> ? L'installation de <strong>panneaux solaires photovoltaïques en autoconsommation</strong> avec revente du surplus constitue aujourd'hui l'un des investissements les plus rentables et écologiques pour valoriser votre patrimoine immobilier. {neighborhoodMention}</p><p class=\"mb-4 leading-relaxed\">Nos installateurs locaux certifiés <strong>RGE QualiPV</strong> réalisent une étude d'ensoleillement par satellite pour modéliser précisément votre production annuelle et le nombre optimal de capteurs solaires. Le prix moyen d'une installation clé en main à {city} est compris entre <strong>{avgPrice}</strong> selon la puissance choisie (3 kWc, 6 kWc ou 9 kWc).</p><p class=\"leading-relaxed\">Bénéficiez des aides de l'État : prime à l'autoconsommation versée sur 1 an, tarif d'achat garanti par EDF Obligation d'Achat sur 20 ans et TVA réduite. Demandez votre étude de rentabilité gratuite sous 24h.</p>",
        "<p class=\"mb-4 leading-relaxed\">Passez à l'énergie solaire à <strong>{city}</strong>{deptMention} avec un accompagnement d'experts de proximité. Face aux augmentations tarifaires de l'électricité, autoconsommer votre énergie solaire vous protège de l'inflation tout en contribuant activement à la décarbonation de votre territoire.</p><p class=\"mb-4 leading-relaxed\">{neighborhoodMention} Nous sélectionnons des modules photovoltaïques bi-verre haute performance (Sunpower, DualSun, Trina Solar) garantis jusqu'à 30 ans. Budget moyen constaté pour une pose complète : <strong>{avgPrice}</strong>.</p><p class=\"leading-relaxed\">Nos artisans RGE prennent en charge l'intégralité des formalités : déclaration en mairie, dossier Enedis et obtention de votre attestation Consuel. Obtenez votre chiffrage immédiat sans engagement.</p>",
        "<p class=\"mb-4 leading-relaxed\">À <strong>{city}</strong>, le potentiel solaire permet d'atteindre rapidement jusqu'à 70% d'autonomie électrique sur votre foyer grâce à un dimensionnement adapté et un pilotage intelligent de vos consommations. {neighborhoodMention}</p><p class=\"mb-4 leading-relaxed\">Chaque toiture est unique : orientation, inclinaison, ombrages environnants et typologie de couverture (tuiles, ardoises, bac acier). Nos techniciens étudient précisément ces facteurs pour vous garantir un rendement énergétique maximal. Budget de référence sur le secteur : <strong>{avgPrice}</strong>.</p><p class=\"leading-relaxed\">Tous nos chantiers bénéficient de la garantie décennale couvreur et de la garantie de performance sur 25 ans. Calculez vos économies dès aujourd'hui auprès de nos conseillers solaires locaux.</p>",
        "<p class=\"mb-4 leading-relaxed\">Vous cherchez un <strong>installateur photovoltaïque RGE à {city}{postalMention}</strong> digne de confiance ? Notre réseau rassemble les meilleurs spécialistes du solaire de votre département.</p><p class=\"mb-4 leading-relaxed\">{neighborhoodMention} En couplant vos panneaux solaires avec une application mobile de supervision, vous suivez en direct votre production et votre consommation kWh par kWh depuis votre smartphone. Coût moyen indicatif sur votre ville : <strong>{avgPrice}</strong>.</p><p class=\"leading-relaxed\">Profitez de la prime d'État à l'autoconsommation et vendez votre surplus non consommé à tarif fixe subventionné. Recevez votre étude de faisabilité détaillée en 2 minutes.</p>",
        "<p class=\"mb-4 leading-relaxed\">Faites de votre toiture à <strong>{city}</strong> une source de revenus et d'économies d'énergie. Grâce aux avancées technologiques des cellules photovoltaïques monocristallines, le solaire fonctionne à haut rendement même par temps couvert.</p><p class=\"mb-4 leading-relaxed\">{neighborhoodMention} Nos équipes réalisent une pose en surimposition parfaitement étanche sans toucher à l'intégrité de votre toiture. Le coût moyen d'un projet solaire à {city} est de <strong>{avgPrice}</strong> avant déduction des aides.</p><p class=\"leading-relaxed\">Bénéficiez d'un devis transparent sans frais cachés et d'un accompagnement administratif de A à Z. Lancez votre projet solaire l'esprit tranquille.</p>"
];

function getExpertTip(city: string, dept: string, neighborhoods: string[]): string {
    const hash = city.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
    const n0 = neighborhoods.length > 0 ? neighborhoods[0] : city;
    const t = TIPS[hash % TIPS.length];
    return t
        .replace(/{city}/g, city)
        .replace(/{dept}/g, dept || "votre département")
        .replace(/{neighborhood_0}/g, n0);
}

function getIntroHtml(city: string, dept: string, neighborhoods: string[], postalCode: string, avgPrice: string): string {
    const hash = city.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
    const isFrance = city.toLowerCase() === "france";
    const prep = isFrance ? "en" : "à";

    const neighborhoodMention = neighborhoods.length >= 2
        ? `Nos artisans et techniciens spécialisés interviennent dans tous les secteurs de la commune : <strong>${neighborhoods.slice(0, 3).join(', ')}</strong> ainsi que dans les localités périphériques.`
        : "Nos spécialistes qualifiés assurent une couverture totale de l'ensemble de votre secteur et de ses environs.";

    const postalMention = postalCode ? ` (${postalCode})` : "";
    const deptMention = dept ? ` (${dept})` : "";

    const t = INTROS[hash % INTROS.length];
    return t
        .replace(/{city}/g, city)
        .replace(/{prep}/g, prep)
        .replace(/{postalMention}/g, postalMention)
        .replace(/{deptMention}/g, deptMention)
        .replace(/{neighborhoodMention}/g, neighborhoodMention)
        .replace(/{avgPrice}/g, avgPrice);
}

export async function getPseoContent(cityConfig: CityConfig, targetType: string = 'MIXED'): Promise<PseoPageContent> {
    const { city, department, postalCode, neighborhoods, pricing } = cityConfig;
    const dept = department || "";
    const postal = postalCode || "";
    const quartiers = neighborhoods || [];

    const regionalInfo = DEFAULT_REGIONAL;
    const realPrice = pricing?.base || regionalInfo.avgPrice;

    const isFrance = city.toLowerCase() === "france";
    const prep = isFrance ? "en" : "à";
    const postalSpan = postal ? ` <span class="text-slate-400 text-3xl">(${postal})</span>` : "";

    const meta_title = `Installateur Panneaux Solaires {city}{postal} | Devis RGE Solaire`
        .replace("{city}", isFrance ? "en France" : city)
        .replace("{postal}", postal ? ` (${postal})` : "");

    const meta_description = `Installation de panneaux solaires photovoltaïques à {city} par un artisan certifié RGE QualiPV. {price} avant aides. Prime EDF OA déduite. Devis gratuit.`
        .replace("{city}", city)
        .replace("{price}", realPrice)
        .replace("{prep}", prep);

    const hero_title = `Installateur <span class="text-blue-500">Panneaux Solaires</span> {prep} {city}{postalSpan}`
        .replace("{city}", city)
        .replace("{prep}", prep)
        .replace("{postalSpan}", postalSpan);

    const intro_html = getIntroHtml(city, dept, quartiers, postal, realPrice);
    const expert_tip = getExpertTip(city, dept, quartiers);

    return {
        meta_title,
        meta_description,
        hero_title,
        hero_badge: regionalInfo.subsidyName,
        intro_html,
        cta_primary: "Simuler ma production solaire",
        pricing_estimated: realPrice,
        regional_subsidy: regionalInfo.subsidyAmount,
        expert_tip,
        local_climate_info: expert_tip,
        installation_timeline: "Intervention sous 24h à 48h",
        local_compliance_info: regionalInfo.subsidyAmount
    };
}

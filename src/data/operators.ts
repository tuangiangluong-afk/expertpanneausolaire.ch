export interface SolarOperator {
  slug: string;
  name: string;
  tagline: string;
  type: "Opérateur National" | "Fournisseur d'Énergie Régional" | "Spécialiste Romandie" | "Bureau d'Ingénierie Solaire" | "Réseau d'Artisans Agréés";
  logo?: string;
  rating: number;
  reviewCount: number;
  priceRange: string;
  typicalCostKwc: string;
  marginEstimate: string;
  turnaround: string;
  warranty: string;
  coverage: string;
  certifications: string[];
  equipmentUsed: string[];
  strengths: string[];
  weaknesses: string[];
  arbitrageAdvice: string;
  targetAudience: string;
  featuredReview: {
    author: string;
    canton: string;
    rating: number;
    date: string;
    comment: string;
  };
  publishedAt: string;
  updatedAt: string;
}

export const SOLAR_OPERATORS: SolarOperator[] = [
  {
    slug: "helion",
    name: "Helion Energy",
    tagline: "Leader suisse de la transition énergétique et filiale du groupe AMAG",
    type: "Opérateur National",
    rating: 4.8,
    reviewCount: 420,
    priceRange: "12 500 CHF - 25 000 CHF",
    typicalCostKwc: "1 950 - 2 300 CHF/kWc",
    marginEstimate: "32% - 38%",
    turnaround: "4 à 8 semaines",
    warranty: "25 ans pièces, 10 ans étanchéité, 5 ans main d'œuvre",
    coverage: "Toute la Suisse romande (VD, GE, VS, FR, NE, JU) et Suisse alémanique",
    certifications: ["Les Pros du Solaire (Swissolar)", "Autorisation OIBT / ESTI art. 14", "Partenaire certifié Pronovo", "ISO 9001"],
    equipmentUsed: ["DualSun Flash TOPCon", "SunPower Maxeon", "SolarEdge", "Enphase IQ8", "Batterie Tesla Powerwall"],
    strengths: [
      "Plus de 10 000 centrales solaires installées en Suisse",
      "Écosystème complet : photovoltaïque, pompes à chaleur, bornes de recharge et domotique AMAG",
      "Prise en charge intégrale des démarches administratives Pronovo et gestionnaires de réseau (SIG, Romande Energie, Groupe E)",
      "Service après-vente national avec techniciens salariés OIBT"
    ],
    weaknesses: [
      "Tarifs positionnés dans la tranche haute du marché suisse",
      "Délais d'intervention parfois rallongés en haute saison printanière",
      "Offre packagée avec moins de flexibilité sur les marques alternatives"
    ],
    arbitrageAdvice: "Idéal pour les propriétaires de villas ou PPE cherchant un interlocuteur unique et solvable pour l'ensemble solaire + PAC + borne de recharge, avec garantie décennale solide.",
    targetAudience: "Propriétaires de maisons individuelles, résidences secondaires et PME en Suisse romande.",
    featuredReview: {
      author: "Philippe V.",
      canton: "Vaud (Lausanne)",
      rating: 5,
      date: "2026-08-14",
      comment: "Installation de 8,4 kWc avec micro-onduleurs Enphase et borne de recharge. Dossier Pronovo déposé dès le premier jour, raccordement Romande Energie sans accroc."
    },
    publishedAt: "2025-11-12",
    updatedAt: "2026-09-28"
  },
  {
    slug: "solstis",
    name: "Solstis SA",
    tagline: "Pionnier historique du solaire photovoltaïque en Suisse romande depuis 1986",
    type: "Spécialiste Romandie",
    rating: 4.9,
    reviewCount: 310,
    priceRange: "13 000 CHF - 26 000 CHF",
    typicalCostKwc: "2 000 - 2 400 CHF/kWc",
    marginEstimate: "30% - 35%",
    turnaround: "3 à 6 semaines",
    warranty: "25 à 30 ans constructeur, 10 ans garantie décennale Solstis",
    coverage: "Vaud, Genève, Valais, Fribourg, Neuchâtel",
    certifications: ["Membre fondateur Swissolar", "Les Pros du Solaire", "Maîtrise fédérale électricien OIBT", "Agrément Pronovo"],
    equipmentUsed: ["DualSun Made in Switzerland", "Meyer Burger", "SolarEdge", "Fronius Symo GEN24", "BYD Battery-Box"],
    strengths: [
      "Près de 40 ans d'expertise continue en ingénierie photovoltaïque suisse",
      "Excellence technique sur les toitures complexes (tuiles plates, ardoises, intégration architecturale BIPV)",
      "Bureau d'études interne composé d'ingénieurs spécialisés en simulation météo alpine",
      "Équipes de monteurs et couvreurs salariés hautement qualifiés"
    ],
    weaknesses: [
      "Capacité mensuelle de chantiers contingentée pour maintenir l'exigence artisanale",
      "Devis initial légèrement plus détaillé et technique que la moyenne des plateformes",
      "Moins orienté sur les solutions d'entrée de gamme"
    ],
    arbitrageAdvice: "Le choix numéro 1 pour les toitures exigeantes, les monuments protégés ou les propriétaires souhaitant des panneaux suisses ou européens haut de gamme (DualSun / Meyer Burger).",
    targetAudience: "Villas de standing, toitures historiques, exploitations agricoles et projets architecturaux.",
    featuredReview: {
      author: "Béatrice M.",
      canton: "Genève (Cologny)",
      rating: 5,
      date: "2026-07-22",
      comment: "Toiture complexe avec lucarnes. Solstis a réalisé une intégration esthétique irréprochable avec des panneaux full-black. Suivi de chantier remarquable."
    },
    publishedAt: "2025-11-28",
    updatedAt: "2026-09-25"
  },
  {
    slug: "romande-energie",
    name: "Romande Energie",
    tagline: "Le grand énergéticien de Suisse romande et installateur clé en main de proximité",
    type: "Fournisseur d'Énergie Régional",
    rating: 4.6,
    reviewCount: 540,
    priceRange: "12 000 CHF - 24 500 CHF",
    typicalCostKwc: "1 900 - 2 250 CHF/kWc",
    marginEstimate: "28% - 34%",
    turnaround: "5 à 9 semaines",
    warranty: "25 ans panneaux, 10 ans onduleur, 5 ans installation",
    coverage: "Canton de Vaud, Bas-Valais, Genève et périphérie romande",
    certifications: ["Gestionnaire de réseau de distribution", "Les Pros du Solaire", "Normes ESTI / OIBT", "Pronovo partenaire"],
    equipmentUsed: ["Q Cells Q.TRON", "DualSun Flash", "SolarEdge", "SMA Sunny Boy", "Batteries sonnen / BYD"],
    strengths: [
      "Synergie totale entre statut d'installateur et gestionnaire de réseau électrique cantonal",
      "Raccordement et mise en service directe du compteur bidirectionnel sans friction administrative",
      "Formules de financement direct et rachat bonifié de la reprise d'injection",
      "Solidité financière absolue d'un groupe semi-public vaudois"
    ],
    weaknesses: [
      "Lenteur administrative occasionnelle due à la taille de la structure",
      "Sous-traitance de certaines poses de panneaux à des partenaires locaux certifiés",
      "Service client centralisé pouvant manquer de personnalisation directe"
    ],
    arbitrageAdvice: "Recommandé si vous êtes déjà abonné Romande Energie et que vous privilégiez la simplicité d'un guichet unique pour la facture, l'injection et l'installation.",
    targetAudience: "Propriétaires de maisons individuelles raccordées au réseau Romande Energie.",
    featuredReview: {
      author: "Laurent D.",
      canton: "Vaud (Morges)",
      rating: 4.5,
      date: "2026-06-30",
      comment: "Tout a été géré de A à Z par Romande Energie : panneaux, mise en service du compteur d'injection et déduction directe sur mes acomptes. Très rassurant."
    },
    publishedAt: "2025-12-05",
    updatedAt: "2026-09-22"
  },
  {
    slug: "groupe-e",
    name: "Groupe E",
    tagline: "L'énergéticien de référence en Suisse occidentale (Fribourg, Neuchâtel, Vaud)",
    type: "Fournisseur d'Énergie Régional",
    rating: 4.7,
    reviewCount: 380,
    priceRange: "11 800 CHF - 23 800 CHF",
    typicalCostKwc: "1 880 - 2 200 CHF/kWc",
    marginEstimate: "27% - 33%",
    turnaround: "4 à 7 semaines",
    warranty: "25 ans performance, 12 ans matériel, 10 ans étanchéité",
    coverage: "Cantons de Fribourg, Neuchâtel, Vaud et Berne francophone",
    certifications: ["Les Pros du Solaire", "OIBT art. 7/9/14", "Pronovo certifié", "Swiss Made Energy Partner"],
    equipmentUsed: ["DualSun", "Q Cells", "Fronius", "SolarEdge", "Groupe E Smart Energy Manager"],
    strengths: [
      "Maillage territorial ultra-dense dans les cantons de Fribourg et Neuchâtel",
      "Offre globale 'Maison 360' couplant PV, pompe à chaleur et borne de recharge",
      "Système de pilotage intelligent de l'autoconsommation développé en interne",
      "Conditions de rachat de l'injection transparentes et stables"
    ],
    weaknesses: [
      "Disponibilité géographique limitée hors de sa zone de concession principale",
      "Délais de chiffrage pouvant atteindre 10 jours en période de forte demande",
      "Coût des extensions de batterie un peu élevé"
    ],
    arbitrageAdvice: "Le choix naturel pour les résidents des cantons de Fribourg, Neuchâtel et de la Broye vaudoise souhaitant un installateur local institutionnel.",
    targetAudience: "Propriétaires de villas, agriculteurs et PME de Suisse occidentale.",
    featuredReview: {
      author: "Marc-Antoine B.",
      canton: "Fribourg (Bulle)",
      rating: 5,
      date: "2026-05-18",
      comment: "Installation de 10 kWc avec gestionnaire d'autoconsommation Groupe E. Production conforme aux simulations et équipe de pose très professionnelle."
    },
    publishedAt: "2025-12-19",
    updatedAt: "2026-09-20"
  },
  {
    slug: "sig-solaire",
    name: "SIG (Services Industriels de Genève)",
    tagline: "L'opérateur public genevois pour le solaire en toiture et l'autoconsommation citoyenne",
    type: "Fournisseur d'Énergie Régional",
    rating: 4.7,
    reviewCount: 290,
    priceRange: "12 800 CHF - 25 500 CHF",
    typicalCostKwc: "1 980 - 2 350 CHF/kWc",
    marginEstimate: "26% - 32%",
    turnaround: "5 à 8 semaines",
    warranty: "25 ans fabricant, 10 ans main d'œuvre et étanchéité SIG",
    coverage: "Canton de Genève et communes limitrophes",
    certifications: ["Régie publique cantonale", "Les Pros du Solaire", "OIBT / ESTI", "Pronovo"],
    equipmentUsed: ["SunPower", "DualSun Flash", "SolarEdge", "Enphase", "SIG Éco-Connecteur"],
    strengths: [
      "Expertise inégalée du cadre réglementaire et des subventions cantonales genevoises (GE-Énergie)",
      "Cumul simplifié de la rétribution unique Pronovo et des primes cantonales de Genève",
      "Standards de sécurité et de conformité OIBT les plus stricts de Suisse romande",
      "Option de tiers-financement et de partage d'énergie en communauté (RCP)"
    ],
    weaknesses: [
      "Strictement réservé au canton de Genève",
      "Processus de validation administrative en commission cantonale parfois formel",
      "Grille tarifaire sans remise agressive"
    ],
    arbitrageAdvice: "Indispensable pour tout projet photovoltaïque sur le canton de Genève afin d'optimiser le double guichet subventions Pronovo + cantonales.",
    targetAudience: "Propriétaires genevois, copropriétés PPE et bâtiments commerciaux.",
    featuredReview: {
      author: "Alain G.",
      canton: "Genève (Meyrin)",
      rating: 5,
      date: "2026-07-04",
      comment: "La SIG a pris en charge le montage complet du dossier de subventions. Entre la rétribution Pronovo et l'aide genevoise, le reste à charge a diminué de 35%."
    },
    publishedAt: "2026-01-09",
    updatedAt: "2026-09-18"
  },
  {
    slug: "younergy",
    name: "Younergy Solar",
    tagline: "Le spécialiste suisse du solaire agile : achat direct ou solar-as-a-service sans apport",
    type: "Spécialiste Romandie",
    rating: 4.6,
    reviewCount: 220,
    priceRange: "11 500 CHF - 23 000 CHF",
    typicalCostKwc: "1 850 - 2 150 CHF/kWc",
    marginEstimate: "28% - 35%",
    turnaround: "3 à 6 semaines",
    warranty: "25 ans produit, 10 ans garantie système intégrale",
    coverage: "Suisse romande intégrale (Vaud, Valais, Genève, Neuchâtel, Fribourg)",
    certifications: ["Les Pros du Solaire", "Swissolar", "OIBT art. 14 ESTI", "Pronovo Agréé"],
    equipmentUsed: ["JA Solar DeepBlue", "Trina Solar Vertex S+", "Huawei FusionSolar", "Enphase IQ8"],
    strengths: [
      "Formule pionnière d'abonnement solaire sans investissement initial (Younergy Subscription)",
      "Tarification directe très compétitive pour l'achat comptant grâce à des volumes d'achat massifs",
      "Plateforme numérique de suivi de production en temps réel très intuitive",
      "Mise en œuvre rapide avec délais parmi les plus courts de Romandie"
    ],
    weaknesses: [
      "Modèle d'abonnement moins rentable sur 25 ans qu'un achat comptant amorti",
      "Marques de panneaux principalement asiatiques de rang Tier-1 (moins d'européen)",
      "Interlocuteur commercial digital avant visite technique"
    ],
    arbitrageAdvice: "Excellente alternative si vous cherchez le meilleur rapport prix/kWc en Suisse romande ou si vous souhaitez poser des panneaux sans engager votre trésorerie personnelle.",
    targetAudience: "Propriétaires jeunes, investisseurs locatifs et ménages attentifs au budget immédiat.",
    featuredReview: {
      author: "Sébastien F.",
      canton: "Valais (Sion)",
      rating: 4.5,
      date: "2026-06-12",
      comment: "Devis reçu en 48h, chantier réalisé en 2 jours par une équipe très efficace. Rapport qualité-prix imbattable par rapport aux énergéticiens traditionnels."
    },
    publishedAt: "2026-01-22",
    updatedAt: "2026-09-15"
  },
  {
    slug: "bkw-energie",
    name: "BKW Building Solutions",
    tagline: "Le géant bernois de l'énergie et des techniques du bâtiment en Suisse",
    type: "Opérateur National",
    rating: 4.7,
    reviewCount: 360,
    priceRange: "12 200 CHF - 24 800 CHF",
    typicalCostKwc: "1 920 - 2 280 CHF/kWc",
    marginEstimate: "29% - 36%",
    turnaround: "4 à 8 semaines",
    warranty: "25 ans puissance linéaire, 12 ans onduleurs, 5 ans pose",
    coverage: "Toute la Suisse, forte présence dans l'Arc jurassien et Berne francophone",
    certifications: ["Les Pros du Solaire", "ISO 14001 / ISO 9001", "Agrément OIBT", "Pronovo"],
    equipmentUsed: ["DualSun", "Meyer Burger", "SolarEdge", "Fronius", "Kostel Plenticore"],
    strengths: [
      "Adossement au grand groupe énergétique suisse BKW (chiffre d'affaires multimilliardaire)",
      "Capacité industrielle à équiper aussi bien une villa qu'un entrepôt de 500 kWc",
      "Réseau d'entreprises locales d'électricité intégrées au groupe (installateurs régionaux)",
      "Solutions avancées de batteries industrielles et gestion de réseaux privés"
    ],
    weaknesses: [
      "Processus corporate parfois rigide sur les petits chantiers résidentiels",
      "Chiffrage des options domotiques annexes parfois onéreux",
      "Nombreux intervenants entre le commercial, le chef de projet et l'électricien"
    ],
    arbitrageAdvice: "Idéal pour les grands propriétaires fonciers, les bâtiments mixtes résidentiels/commerciaux et les clients attachés à la solidité d'une grande entreprise suisse cotée.",
    targetAudience: "Grandes villas, toitures agricoles, PME et copropriétés.",
    featuredReview: {
      author: "Christine R.",
      canton: "Neuchâtel (La Chaux-de-Fonds)",
      rating: 5,
      date: "2026-05-29",
      comment: "Projet de 12 kWc avec toiture exposée aux vents et au froid du Jura. Étude de charge neige parfaite et installation conforme aux normes SIA."
    },
    publishedAt: "2026-02-07",
    updatedAt: "2026-09-12"
  },
  {
    slug: "energie-360",
    name: "Energie 360°",
    tagline: "Solutions énergétiques durables, photovoltaïque et décarbonation en Suisse",
    type: "Opérateur National",
    rating: 4.6,
    reviewCount: 190,
    priceRange: "12 600 CHF - 25 200 CHF",
    typicalCostKwc: "1 960 - 2 320 CHF/kWc",
    marginEstimate: "30% - 36%",
    turnaround: "5 à 8 semaines",
    warranty: "25 ans matériel, 10 ans étanchéité",
    coverage: "Suisse romande et Suisse alémanique",
    certifications: ["Les Pros du Solaire", "OIBT ESTI", "Pronovo", "Certifié B Corp"],
    equipmentUsed: ["SunPower Maxeon", "DualSun", "SMA", "SolarEdge", "Batteries BYD"],
    strengths: [
      "Pionnier suisse de la transition vers 100% d'énergies renouvelables",
      "Conception bioclimatique globale (solaire, pompe à chaleur géothermique ou air-eau)",
      "Accompagnement complet pour les regroupements de consommation propre (RCP)",
      "Contrats de maintenance et de monitoring de rendement garantis"
    ],
    weaknesses: [
      "Tarifs positionnés sur le segment premium",
      "Présence opérationnelle plus récente en Romandie qu'en Suisse alémanique",
      "Délais administratifs plus longs pour les petits dossiers"
    ],
    arbitrageAdvice: "Très pertinent pour les rénovations énergétiques globales combinant isolation, changement de chauffage et pose solaire photovoltaïque.",
    targetAudience: "Rénovations globales de villas, éco-quartiers et PPE.",
    featuredReview: {
      author: "Christian P.",
      canton: "Vaud (Nyon)",
      rating: 4.5,
      date: "2026-04-15",
      comment: "Remplacement chaudière à mazout par PAC + 24 panneaux solaires. Coordination impeccable des corps de métier et bilan carbone divisé par cinq."
    },
    publishedAt: "2026-02-18",
    updatedAt: "2026-09-10"
  },
  {
    slug: "soleol",
    name: "Soleol SA",
    tagline: "Le spécialiste historique fribourgeois du photovoltaïque suisse depuis 2008",
    type: "Spécialiste Romandie",
    rating: 4.8,
    reviewCount: 340,
    priceRange: "11 900 CHF - 23 900 CHF",
    typicalCostKwc: "1 890 - 2 220 CHF/kWc",
    marginEstimate: "28% - 34%",
    turnaround: "3 à 6 semaines",
    warranty: "25 ans rendement, 10 ans produit et installation",
    coverage: "Fribourg, Vaud, Neuchâtel, Valais, Genève",
    certifications: ["Les Pros du Solaire (Swissolar)", "OIBT art. 14", "Agrément Pronovo", "Qualité Suisse"],
    equipmentUsed: ["Q Cells", "Trina Solar", "Fronius Symo", "Huawei", "Micro-onduleurs Enphase"],
    strengths: [
      "Plus de 500 MWc installés en Suisse romande et à l'international",
      "Centrale d'achat et stock propre à Estavayer-le-Lac garantissant des approvisionnements immédiats",
      "Équipes de pose 100% internes, pas d'intérimaires non formés",
      "Parfaite maîtrise des toitures agricoles et des toitures en tôle ou tuiles de Romandie"
    ],
    weaknesses: [
      "Forte sollicitation locale pouvant créer des créneaux de pose saturés",
      "Site web et interfaces client un peu austères",
      "Peu d'options sur les gammes très haut de gamme type SunPower Maxeon"
    ],
    arbitrageAdvice: "Le choix de la sécurité artisanale au juste prix pour la Suisse romande, avec un matériel éprouvé et des poseurs expérimentés.",
    targetAudience: "Villas, fermes, hangars artisanaux et copropriétés.",
    featuredReview: {
      author: "Guillaume T.",
      canton: "Fribourg (Estavayer)",
      rating: 5,
      date: "2026-06-25",
      comment: "Chantier de 9,6 kWc plié en une journée et demie par 4 techniciens Soleol. Très propre, raccordement validé du premier coup par le contrôleur OIBT."
    },
    publishedAt: "2026-03-02",
    updatedAt: "2026-09-08"
  },
  {
    slug: "alpiq",
    name: "Alpiq E-Mobility & Solaire",
    tagline: "L'expertise d'un des géants de l'électricité suisse pour les infrastructures solaires",
    type: "Opérateur National",
    rating: 4.5,
    reviewCount: 160,
    priceRange: "13 500 CHF - 27 000 CHF",
    typicalCostKwc: "2 050 - 2 450 CHF/kWc",
    marginEstimate: "31% - 37%",
    turnaround: "6 à 10 semaines",
    warranty: "25 ans constructeur, 10 ans garantie d'ouvrage",
    coverage: "Toute la Suisse",
    certifications: ["Grand producteur d'énergie", "Les Pros du Solaire", "OIBT ESTI", "Pronovo"],
    equipmentUsed: ["Meyer Burger", "SunPower", "SMA", "SolarEdge Commercial", "ABB"],
    strengths: [
      "Expertise reconnue dans les grands couplages photovoltaïque + mobilité électrique (hubs de recharge)",
      "Capacité d'ingénierie pour les réseaux complexes et raccordements moyenne tension",
      "Contrats de gestion de l'énergie et optimisation dynamique du marché spot de l'électricité",
      "Équipements industriels de pointe"
    ],
    weaknesses: [
      "Peu adapté aux petites installations de moins de 6 kWc",
      "Tarification élevée pour les résidences unifamiliales simples",
      "Délai de traitement administratif plus long que les PME artisanales"
    ],
    arbitrageAdvice: "À privilégier pour les grandes propriétés, les bâtiments professionnels avec parc de véhicules électriques ou les projets de toitures d'entreprises.",
    targetAudience: "Bâtiments tertiaires, grandes copropriétés et propriétaires à gros profil de consommation.",
    featuredReview: {
      author: "Jean-Pascal M.",
      canton: "Genève (Vernier)",
      rating: 4.5,
      date: "2026-03-19",
      comment: "Installation de 15 kWc sur bâtiment commercial avec deux bornes de recharge 22 kW. Maîtrise parfaite de la gestion de puissance et de l'équilibrage réseau."
    },
    publishedAt: "2026-03-14",
    updatedAt: "2026-09-05"
  },
  {
    slug: "planair",
    name: "Planair Ingénieurs Conseils",
    tagline: "Bureau d'études et d'ingénierie énergétique indépendant de référence en Romandie",
    type: "Bureau d'Ingénierie Solaire",
    rating: 4.9,
    reviewCount: 140,
    priceRange: "14 000 CHF - 28 000 CHF",
    typicalCostKwc: "2 100 - 2 500 CHF/kWc",
    marginEstimate: "25% - 30%",
    turnaround: "6 à 10 semaines",
    warranty: "Garantie légale SIA, supervision indépendante de la garantie constructeur",
    coverage: "Jura, Neuchâtel, Vaud, Genève, Valais",
    certifications: ["SIA (Société suisse des ingénieurs et architectes)", "Les Pros du Solaire", "Experts CECB certifiés", "Pronovo"],
    equipmentUsed: ["DualSun", "SunPower", "SolarEdge", "Fronius", "Systèmes BIPV sur-mesure"],
    strengths: [
      "Indépendance totale vis-à-vis des fabricants de matériel (aucun parti pris commercial)",
      "Audit thermique et solaire de haute précision avec modélisation 3D des ombrages",
      "Rédaction de cahiers des charges et mise en concurrence transparente des poseurs",
      "Suivi de chantier rigoureux selon les normes suisses SIA et OIBT"
    ],
    weaknesses: [
      "Honoraires d'ingénierie s'ajoutant au coût du matériel et de la pose",
      "Ne réalise pas la pose en direct mais pilote des installateurs partenaires agréés",
      "Surdimensionné pour une toiture de villa standard sans complexité"
    ],
    arbitrageAdvice: "La solution suprême pour les propriétaires fortunés, les PPE ou les bâtiments patrimoniaux exigeant une expertise technique 100% impartiale.",
    targetAudience: "PPE complexes, villas d'architectes, patrimoines communaux et toitures à contraintes fortes.",
    featuredReview: {
      author: "Nicolas S.",
      canton: "Jura (Delémont)",
      rating: 5,
      date: "2026-02-28",
      comment: "Planair a conçu notre centrale en toiture et géré l'appel d'offres. Résultat : une installation sur-mesure, 15% d'économies sur le devis pose et 0 souci technique."
    },
    publishedAt: "2026-03-25",
    updatedAt: "2026-09-02"
  },
  {
    slug: "artisans-pros-du-solaire",
    name: "Collectif Artisans Pros du Solaire Romandie",
    tagline: "Le réseau d'électriciens indépendants brevetés et installateurs locaux agréés Pronovo",
    type: "Réseau d'Artisans Agréés",
    rating: 4.8,
    reviewCount: 680,
    priceRange: "10 800 CHF - 21 500 CHF",
    typicalCostKwc: "1 780 - 2 080 CHF/kWc",
    marginEstimate: "18% - 24%",
    turnaround: "2 à 5 semaines",
    warranty: "25 ans constructeur, 10 ans étanchéité artisanale, 5 ans OIBT",
    coverage: "Tous les cantons romands (Vaud, Valais, Genève, Fribourg, Neuchâtel, Jura)",
    certifications: ["Label Les Pros du Solaire (Swissolar)", "Autorisation d'installer ESTI art. 14 / OIBT", "Agrément Pronovo direct"],
    equipmentUsed: ["DualSun", "Q Cells Q.TRON", "Trina Solar", "Enphase IQ8", "Sunsynk", "Huawei"],
    strengths: [
      "Frais de structure réduits = tarifs les plus compétitifs de Suisse romande",
      "Chaque artisan est titulaire de sa propre autorisation d'installer ESTI (sécurité juridique)",
      "Proximité cantonale immédiate : un interlocuteur unique du devis à la remise du protocole OIBT",
      "Flexibilité totale sur le choix des marques et des onduleurs"
    ],
    weaknesses: [
      "Capacité d'intervention variable selon le planning de chaque artisan cantonal",
      "Moins d'outils marketing ou d'applications mobiles que les grands énergéticiens",
      "Dossier administratif Pronovo à co-valider avec l'artisan"
    ],
    arbitrageAdvice: "Le meilleur choix pour obtenir le meilleur prix au kWc en Suisse romande sans renoncer à la conformité OIBT et à la rétribution unique Pronovo.",
    targetAudience: "Propriétaires de maisons individuelles recherchant le meilleur rapport qualité/prix local.",
    featuredReview: {
      author: "David L.",
      canton: "Vaud (Yverdon-les-Bains)",
      rating: 5,
      date: "2026-08-03",
      comment: "Devis 20% moins cher que celui de mon distributeur cantonal pour exactement le même matériel (DualSun + Enphase). Chantier impeccable et artisan très disponible."
    },
    publishedAt: "2026-04-10",
    updatedAt: "2026-08-30"
  }
];

export function getSolarOperatorBySlug(slug: string): SolarOperator | undefined {
  return SOLAR_OPERATORS.find((op) => op.slug === slug);
}

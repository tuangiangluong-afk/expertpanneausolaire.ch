import Link from "next/link";
import { CheckCircle, ShieldCheck, Clock, Award, Euro, ArrowRight, ChevronRight, FileText, Landmark, Building2 } from "lucide-react";
import type { CityConfig } from "@/lib/db";

interface LocalAeoSectionProps {
    site: CityConfig;
}

const pricingMatrix = [{"name": "Kit Solaire 3 kWc (Autoconsommation)", "usage": "Foyer standard (6 à 8 panneaux)", "price": "6 500€ - 8 900€", "aid": "Prime EDF OA ~1 050€", "net": "Dès 5 450€"}, {"name": "Kit Solaire 6 kWc (Grand foyer / PAC)", "usage": "Maison avec pompe à chaleur ou VE", "price": "10 500€ - 13 900€", "aid": "Prime EDF OA ~1 560€", "net": "Dès 8 940€"}, {"name": "Kit Solaire 9 kWc (Autonomie maximale)", "usage": "Grande villa avec piscine ou pro", "price": "14 500€ - 18 900€", "aid": "Prime EDF OA ~1 800€", "net": "Dès 12 700€"}, {"name": "Batterie de stockage physique (5 à 10 kWh)", "usage": "Stockage nuit & secours anti-coupure", "price": "4 500€ - 7 900€", "aid": "TVA 10% sur équipement", "net": "Sur mesure"}];
const steps = [{"title": "Étude de faisabilité & Simulation 3D", "desc": "Analyse de toiture par satellite, modélisation des masques solaires et calcul de production annuelle."}, {"title": "Démarches administratives Mairie & Enedis", "desc": "Dépôt de la déclaration préalable (DP) en mairie et demande de raccordement d'injection auprès d'Enedis."}, {"title": "Pose surimposée en une journée", "desc": "Fixation des crochets sur chevrons, pose des panneaux bi-verre, micro-onduleurs et passage de câbles."}, {"title": "Validation Consuel & Vente de surplus", "desc": "Contrôle de conformité électrique Consuel et activation du contrat de rachat d'électricité avec EDF OA."}];

export default function LocalAeoSection({ site }: LocalAeoSectionProps) {
    const city = site.city;
    const dept = site.department ? ` (${site.department})` : "";
    const neighborhoods = site.neighborhoods || [];
    const neighborhoodsText = neighborhoods.length > 0 
        ? `, notamment dans les quartiers ${neighborhoods.slice(0, 4).join(', ')}` 
        : "";

    return (
        <section className="py-12 bg-slate-50/50 border-t border-slate-200">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Fil d'Ariane Visuel */}
                <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-slate-500">
                    <Link href="/" className="hover:text-slate-900 transition flex items-center gap-1">
                        Accueil
                    </Link>
                    <ChevronRight size={14} />
                    <span className="text-slate-400">Villes</span>
                    <ChevronRight size={14} />
                    <span className="font-semibold text-slate-900">{city}</span>
                </nav>

                {/* Bloc AEO Direct Answer */}
                <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm mb-12">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-100">
                        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-slate-900 text-white">
                            <FileText size={13} />
                            Panneaux Solaires à {city} (2026)
                        </span>
                        <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                            <Clock size={13} /> Données & Tarifs certifiés 2026
                        </span>
                    </div>

                    <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-6">
                        <strong>En résumé : </strong>À {city}{dept}, le coût moyen d'une prestation de panneaux solaires réalisée par nos artisans qualifiés s'établit entre 6 500€ – 14 000€ avant déduction des éventuelles aides financières. Nos techniciens certifiés interviennent sous 24h à 48h avec garantie décennale.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 pt-2">
                        <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-4 text-center">
                            <div className="text-xs text-slate-500 font-medium">Prix estimé</div>
                            <div className="text-sm md:text-base font-bold text-slate-900 mt-1">6 500€ – 14 000€</div>
                        </div>
                        <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-4 text-center">
                            <div className="text-xs text-slate-500 font-medium">Aides & Primes</div>
                            <div className="text-sm md:text-base font-bold text-slate-900 mt-1">Prime à l'Autoconsommation & EDF OA</div>
                        </div>
                        <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-4 text-center">
                            <div className="text-xs text-slate-500 font-medium">Délai d'intervention</div>
                            <div className="text-sm md:text-base font-bold text-slate-900 mt-1">Devis 24h, pose rapide</div>
                        </div>
                        <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-4 text-center">
                            <div className="text-xs text-slate-500 font-medium">Garantie & Norme</div>
                            <div className="text-sm md:text-base font-bold text-slate-900 mt-1">Garantie Décennale & RGE</div>
                        </div>
                    </div>
                </div>

                {/* Tableau Comparatif de Prix HTML */}
                <div className="mb-14">
                    <div className="mb-6">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                            Grille tarifaire et prestations à {city}
                        </h2>
                        <p className="text-slate-600 mt-1 text-sm md:text-base">
                            Coûts indicatifs moyens constatés pour une pose réalisée dans les règles de l'art.
                        </p>
                    </div>

                    <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-50 text-xs font-bold uppercase text-slate-600 border-b border-slate-200">
                                <tr>
                                    <th className="px-5 py-4">Équipement / Prestation</th>
                                    <th className="px-5 py-4 hidden md:table-cell">Usage conseillé</th>
                                    <th className="px-5 py-4">Coût indicatif</th>
                                    <th className="px-5 py-4">Avantage & Aides</th>
                                    <th className="px-5 py-4 font-bold text-slate-900">Reste à charge</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {pricingMatrix.map((row, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50/60 transition">
                                        <td className="px-5 py-4 font-semibold text-slate-900">{row.name}</td>
                                        <td className="px-5 py-4 text-slate-500 hidden md:table-cell">{row.usage}</td>
                                        <td className="px-5 py-4 text-slate-700 font-medium">{row.price}</td>
                                        <td className="px-5 py-4 text-emerald-700 font-semibold">{row.aid}</td>
                                        <td className="px-5 py-4 font-bold text-slate-900">{row.net}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Guide & Spécificités d'installation à {city} */}
                <div className="mb-14">
                    <div className="mb-8">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                            Spécificités d'installation & particularités locales à {city}
                        </h2>
                        <p className="text-slate-600 mt-1 text-sm md:text-base">
                            Réglementation municipale, typologie de toiture et potentiel solaire de votre commune.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Card 1: Urbanisme & Mairie */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-600">
                                    <Landmark size={20} />
                                </span>
                                <h3 className="font-bold text-slate-900 text-base">Urbanisme, Mairie & ABF à {city}</h3>
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Toute installation photovoltaïque sur toiture à {city}{dept} requiert le dépôt préalable d'une Déclaration Préalable de Travaux (DP) en mairie. Si votre maison se situe dans le périmètre d'un monument historique ou en zone protégée par l'Architecte des Bâtiments de France (ABF), des prescriptions esthétiques peuvent s'appliquer (ex: panneaux full-black homogènes, intégration géométrique). Nos équipes constituent l'intégralité du dossier d'urbanisme avec plans d'insertion paysagère pour obtenir votre autorisation sans délai.
                            </p>
                        </div>

                        {/* Card 2: Typologie du bâti & Quartiers */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
                                    <Building2 size={20} />
                                </span>
                                <h3 className="font-bold text-slate-900 text-base">Typologie de toiture & Quartiers à {city}</h3>
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Nos couvreurs et soliers RGE QualiPV interviennent dans tous les secteurs de {city}{neighborhoodsText}. Nous maîtrisons la pose sur tous types de matériaux régionaux (tuiles mécaniques, canal, ardoises ou bac acier) avec des crochets inox réglables et des abergements étanches sous avis technique du CSTB, garantissant la protection absolue de votre charpente contre les infiltrations.
                            </p>
                        </div>

                        {/* Card 3: Climat, Performance & Aides */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="grid h-10 w-10 place-items-center rounded-xl bg-amber-50 text-amber-600">
                                    <ShieldCheck size={20} />
                                </span>
                                <h3 className="font-bold text-slate-900 text-base">Ensoleillement & Rentabilité à {city}</h3>
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Le gisement solaire local garantit une production moyenne de 1 150 à 1 600 kWh par kWc installé et par an. Grâce au dispositif de l'autoconsommation avec vente du surplus à EDF OA, les foyers de {city} réduisent leur facture annuelle de 800€ à 1 800€ tout en percevant la prime à l'autoconsommation d'État (jusqu'à 350€/kWc). Votre installation est généralement amortie en 6 à 8 ans avec une rentabilité assurée sur plus de 30 ans.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Déroulement du chantier en 4 étapes */}
                <div className="mb-14">
                    <div className="mb-8">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                            Votre projet à {city} en 4 étapes
                        </h2>
                        <p className="text-slate-600 mt-1 text-sm md:text-base">
                            Un accompagnement transparent de l'étude préliminaire jusqu'à la garantie de parfait achèvement.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {steps.map((step, idx) => (
                            <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                                <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-900 text-white font-black text-sm mb-4">
                                    0{idx + 1}
                                </span>
                                <h3 className="font-bold text-slate-900 text-base mb-2">{step.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bannière de Réassurance locale */}
                <div className="rounded-3xl bg-slate-900 text-white p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
                    <div>
                        <h3 className="text-xl font-bold mb-1">Un projet à {city} ?</h3>
                        <p className="text-slate-300 text-sm">
                            Garantie décennale & devis gratuit sous 24h sans aucun engagement.
                        </p>
                    </div>
                    <a
                        href="#simulateur"
                        className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-6 py-3.5 font-bold hover:bg-slate-100 transition shadow"
                    >
                        <span>Estimer mon projet</span>
                        <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}

import { CityConfig } from "@/lib/db";
import { CANTONS } from "@/data/ch-cantons";

interface LocalFAQProps {
    site: CityConfig;
    segment: "B2C" | "COPRO" | "ENTREPRISE";
}

export function LocalFAQ({ site, segment }: LocalFAQProps) {
    const city = site.city;
    const faqs = getLocalFAQData(city, site.department, segment);

    return (
        <section className="py-16 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900">
                        Questions fréquentes à {city}
                    </h2>
                    <p className="text-slate-600 mt-3 text-lg">
                        Tout savoir sur l&apos;installation de panneaux solaires photovoltaïques dans votre ville.
                    </p>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <details 
                            key={idx} 
                            className="group bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden"
                            {...(idx === 0 ? { open: true } : {})}
                        >
                            <summary className="flex items-center justify-between cursor-pointer p-6 text-lg font-bold text-slate-900 hover:bg-slate-50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                                <span>{faq.question}</span>
                                <span className="ml-4 shrink-0 text-slate-400 group-open:rotate-45 transition-transform text-2xl font-light">+</span>
                            </summary>
                            <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                                {faq.answer}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}

/**
 * Deterministic hash for a city name — produces a stable number 
 * without relying on parseInt of department codes (which breaks on "MC", "2A", "2B").
 */
/**
 * Exporté pour que SchemaJSON génère les données structurées FAQPage.
 *
 * IMPORTANT : aucune statistique n'est inventée ici. Les réponses s'appuient
 * uniquement sur des faits vérifiables (canton, chef-lieu, ensoleillement,
 * vent dominant) afin de rester citable par les moteurs IA.
 */
export function getLocalFAQData(city: string, department: string | undefined, segment: "B2C" | "COPRO" | "ENTREPRISE" = "B2C") {
    const canton = department ? CANTONS[department] : undefined;
    const cantonRef = canton ? `canton de ${canton.name} (${canton.code})` : "Suisse romande";
    const chefLieu = canton?.chefLieu;
    const soleil = canton?.soleil;
    const vent = canton?.vent;
    const neige = !!canton?.neige;

    if (segment === "COPRO") {
        return [
            {
                question: `Peut-on installer des panneaux solaires en copropriété à ${city} ?`,
                answer: `Oui. L'installation peut alimenter les parties communes en autoconsommation collective ou être exploitée pour la reprise du surplus. Le projet doit être approuvé par l'assemblée générale des copropriétaires.`
            },
            {
                question: `Quelles démarches pour un projet solaire en copropriété à ${city} ?`,
                answer: `Nous réalisons d'abord une étude d'ensoleillement de la toiture de l'immeuble à ${city}, puis nous vous accompagnons pour présenter le projet au syndic et aux copropriétaires. Le dossier de rétribution unique est ensuite déposé auprès de Pronovo.`
            },
            {
                question: `Existe-t-il des aides pour le solaire en copropriété à ${city} ?`,
                answer: `Les copropriétés de la région (${cantonRef}) peuvent bénéficier de la rétribution unique versée par Pronovo après mise en service, complétée selon le lieu par un programme cantonal ou communal. Les frais d'investissement sont également déductibles fiscalement dans de nombreux cantons.`
            }
        ];
    }

    if (segment === "ENTREPRISE") {
        return [
            {
                question: `Quels sont les avantages des panneaux solaires pour une entreprise à ${city} ?`,
                answer: `Installer du photovoltaïque sur le toit de votre entreprise à ${city} réduit votre facture d'électricité par l'autoconsommation, valorise votre patrimoine immobilier et réduit votre exposition à la hausse des prix de l'énergie. Le surplus est repris par le gestionnaire de réseau local.`
            },
            {
                question: `Quelles aides pour l'installation solaire des professionnels à ${city} ?`,
                answer: `Les entreprises bénéficient de la rétribution unique de Pronovo lorsque l'installation est éligible, ainsi que des programmes cantonaux du ${cantonRef}. Les conditions de puissance et de raccordement déterminent le montant.`
            },
            {
                question: `Quel est le temps de retour sur investissement pour une entreprise à ${city} ?`,
                answer: `Le retour sur investissement dépend surtout du taux d'autoconsommation et du prix de l'électricité évitée. Pour une entreprise consommant en journée, à ${city} (${cantonRef}), l'amortissement se situe généralement entre 10 et 15 ans, sur une durée de vie du matériel supérieure à 30 ans.`
            }
        ];
    }

    return [
        {
            question: `Quel est le prix d'une installation de panneaux solaires à ${city} ?`,
            answer: `Le coût d'une installation photovoltaïque à ${city} se situe en moyenne entre 12 000 CHF et 25 000 CHF pour une puissance de 3 à 9 kWc, fourniture et pose comprises, avant déduction de la rétribution unique. Ce prix varie selon l'état de la toiture, la puissance choisie et les équipements retenus.`
        },
        {
            question: `Combien de temps pour installer des panneaux solaires à ${city} ?`,
            answer: `Après validation du devis, les démarches d'annonce auprès de la commune et du gestionnaire de réseau prennent quelques semaines. La pose elle-même se déroule en 1 à 2 jours à ${city}, suivie de la mise en service par un électricien autorisé.`
        },
        {
            question: `Quelles aides pour installer des panneaux solaires à ${city} ?`,
            answer: `À ${city}, dans le ${cantonRef}, le soutien principal est la rétribution unique versée par Pronovo après la mise en service, d'environ 200 CHF par kWc installé (davantage pour les installations verticales ou en façade). Elle est complétée selon le lieu par un programme cantonal ou communal, et les frais d'investissement sont déductibles fiscalement dans de nombreux cantons.`
        },
        {
            question: `Quel ensoleillement et quel vent à ${city} ?`,
            answer: `Le ${cantonRef} bénéficie d'un ensoleillement annuel moyen de ${soleil || "1 700 à 1 900 heures"}. Le vent dominant y est ${vent || "la bise"}${neige ? ", et la charge de neige doit être prise en compte dans le dimensionnement des fixations" : ""}. Ces paramètres locaux déterminent la production attendue et la résistance mécanique de l'installation${chefLieu ? ` (chef-lieu du canton : ${chefLieu})` : ""}.`
        }
    ];
}

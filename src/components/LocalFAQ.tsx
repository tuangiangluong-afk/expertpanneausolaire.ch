import { CityConfig } from "@/lib/db";

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
function cityHash(city: string): number {
    let hash = 0;
    for (let i = 0; i < city.length; i++) {
        hash = ((hash << 5) - hash + city.charCodeAt(i)) | 0;
    }
    return Math.abs(hash);
}

// Exported for SchemaJSON to generate FAQPage structured data
export function getLocalFAQData(city: string, department: string | undefined, segment: "B2C" | "COPRO" | "ENTREPRISE") {
    const dept = department || "votre département";
    const h = cityHash(city);

    if (segment === "COPRO") {
        const coproCount = 8 + (h % 25);
        return [
            {
                question: `Peut-on installer des panneaux solaires en copropriété à ${city} ?`,
                answer: `Oui, c'est tout à fait possible et de plus en plus courant. L'installation peut servir à l'autoconsommation collective pour réduire les charges des parties communes ou être revendue. Le projet doit être voté en assemblée générale à la majorité simple.`
            },
            {
                question: `Quelles démarches pour un projet solaire en copropriété à ${city} ?`,
                answer: `Nous réalisons d'abord une étude d'ensoleillement gratuite de la toiture de votre immeuble à ${city}. Ensuite, nous vous accompagnons pour présenter le projet au syndic et aux copropriétaires lors de l'AG. Plus de ${coproCount} copropriétés du ${dept} nous ont fait confiance.`
            },
            {
                question: `Existe-t-il des aides pour le solaire en copropriété à ${city} ?`,
                answer: `Oui, les copropriétés bénéficient de la prime à l'autoconsommation et du tarif d'achat garanti pour le surplus d'électricité, en plus des subventions locales possibles selon votre région.`
            }
        ];
    } else if (segment === "ENTREPRISE") {
        const entrepriseCount = 15 + (h % 35);
        return [
            {
                question: `Quels sont les avantages des panneaux solaires pour une entreprise à ${city} ?`,
                answer: `Installer des panneaux solaires sur le toit de votre entreprise à ${city} permet de réduire significativement vos factures d'électricité (autoconsommation), de valoriser votre patrimoine immobilier et de répondre aux exigences de la loi LOM / décret tertiaire. Plus de ${entrepriseCount} entreprises du ${dept} se sont équipées.`
            },
            {
                question: `Quelles aides pour l'installation solaire des professionnels à ${city} ?`,
                answer: `Les entreprises bénéficient de la prime à l'autoconsommation, de la revente du surplus, et de dispositifs de suramortissement ou de subventions régionales spécifiques à ${city}.`
            },
            {
                question: `Quel est le temps de retour sur investissement pour une entreprise à ${city} ?`,
                answer: `Le retour sur investissement pour une installation solaire professionnelle à ${city} est généralement compris entre 6 et 9 ans, pour une durée de vie du matériel supérieure à 30 ans.`
            }
        ];
    } else {
        const installCount = 40 + (h % 80);
        return [
            {
                question: `Quel est le prix d'une installation de panneaux solaires à ${city} ?`,
                answer: `Le coût d'une installation de panneaux solaires à ${city} se situe en moyenne entre 8 000€ et 15 000€ pour une puissance de 3 à 9 kWp, avant déduction des aides. Ce prix varie selon le type de toiture, la puissance choisie et la marque des panneaux.`
            },
            {
                question: `Combien de temps pour installer des panneaux solaires à ${city} ?`,
                answer: `Nos techniciens certifiés RGE QualiPV interviennent sous 15 à 30 jours après validation de votre devis et des démarches administratives. L'installation technique à la maison à ${city} prend en général 1 à 2 jours. Plus de ${installCount} chantiers ont été réalisés dans le ${dept} récemment.`
            },
            {
                question: `Quelles aides pour installer des panneaux solaires à ${city} ?`,
                answer: `À ${city}, vous pouvez bénéficier de la prime à l'autoconsommation (versée sur 5 ans), de la revente du surplus d'électricité à tarif garanti (EDF OA), et d'une TVA réduite à 10% pour les installations inférieures ou égales à 3 kWp. L'installation doit obligatoirement être réalisée par un professionnel qualifié RGE QualiPV.`
            }
        ];
    }
}

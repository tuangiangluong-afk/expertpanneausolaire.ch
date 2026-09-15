"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection({ city }: { city?: string }) {
    // SEO-focused questions based on PAA (People Also Ask)
    
    const cityText = city ? ` à ${city}` : "";
    const cityPlural = city ? ` à ${city} et ses alentours` : "";
    const faqs = [
        {
            question: `Qui a le droit d'installer des panneaux solaires${cityText} ?`,
            answer: `Toute personne peut installer des panneaux solaires, mais pour vendre votre surplus d'électricité et bénéficier des aides de l'État, l'installation doit être réalisée par un installateur certifié RGE (Reconnu Garant de l'Environnement) qualifié QualiPV. Cela garantit la sécurité et la conformité aux normes électriques${cityText}.`
        },
        {
            question: `Quel est le prix moyen d'une installation solaire${cityText} ?`,
            answer: `Le coût d'une installation complète (panneaux + onduleur + pose) se situe généralement entre 8 000€ et 15 000€ TTC selon la puissance choisie (3 kWp à 9 kWp) et les contraintes de pose${cityPlural}. Ce prix est rentabilisé en moyenne sur 8 à 10 ans.`
        },
        {
            question: "Est-ce que l'installation solaire fonctionne en cas de panne de réseau ?",
            answer: "Par sécurité pour les techniciens réseau, la majorité des onduleurs solaires connectés s'éteignent automatiquement lors d'une coupure de courant générale. Pour continuer à être alimenté, il est nécessaire d'installer un système avec batteries physiques équipées d'une fonction de secours ('back-up')."
        },
        {
            question: "Faut-il nettoyer régulièrement les panneaux solaires ?",
            answer: "Grâce à l'inclinaison naturelle de la toiture, la pluie nettoie la majorité des poussières. Cependant, un nettoyage doux à l'eau claire (sans haute pression ni détergent) est recommandé tous les 1 à 2 ans, notamment si vous résidez près de zones arborées ou agricoles, pour conserver un rendement maximal."
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-black text-slate-900 mb-4">
                        Questions fréquentes
                    </h2>
                    <p className="text-slate-600">
                        Tout savoir sur votre projet photovoltaïque.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-slate-200 rounded-xl overflow-hidden">
                            <FAQItem question={faq.question} answer={faq.answer} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
            >
                <span className="font-bold text-slate-900 pr-8">{question}</span>
                {isOpen ? (
                    <Minus className="w-5 h-5 text-amber-600 shrink-0" />
                ) : (
                    <Plus className="w-5 h-5 text-slate-400 shrink-0" />
                )}
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="p-6 pt-0 text-slate-600 border-t border-slate-100 mt-2">
                    {answer}
                </div>
            </div>
        </div>
    );
}

"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQProps {
    city?: string;
    type?: string;
    themeColor?: 'blue' | 'emerald' | 'amber' | 'purple';
}

export default function FAQ({ city, type, themeColor = 'amber' }: FAQProps) {
    const questions = [
        {
            q: "Combien coûte l'installation de panneaux solaires ?",
            a: "Le prix moyen d'une installation photovoltaïque de 3 kWp (environ 8 panneaux) se situe entre 6 000 CHF et 8 500 CHF avant déduction de la rétribution unique. Pour une installation de 6 kWp, comptez entre 12 500 CHF et 15 500 CHF."
        },
        {
            q: "Quelles sont les subventions fédérales pour le solaire en 2026 ?",
            a: "Les particuliers peuvent bénéficier de la rétribution unique (versée en une seule fois), du tarif d'achat garanti pour le surplus d'électricité injecté sur le réseau (la rétribution de l'injection), et d'une TVA suisse (8,1 %) pour les installations de puissance inférieure ou égale à 3 kWp."
        },
        {
            q: "Quelle est la durée de vie de panneaux solaires ?",
            a: "Les panneaux solaires photovoltaïques modernes ont une durée de vie supérieure à 30 ou 40 ans. La plupart des fabricants garantissent aujourd'hui une performance d'au moins 80% à 85% de la puissance initiale après 25 ans d'utilisation."
        },
        {
            q: "Mon toit est-il adapté à l'énergie solaire ?",
            a: "La situation idéale est une orientation plein Sud avec une inclinaison à 30°. Cependant, les orientations Est et Ouest sont également très rentables pour l'autoconsommation (production le matin et en fin de journée). Seule l'orientation plein Nord est à éviter. Nos installateurs réalisent une étude de faisabilité gratuite."
        },
        {
            q: "Pourquoi faire appel à un installateur certifié Les Pros du Solaire ?",
            a: "Le label « Les Pros du Solaire », délivré par Swissolar, distingue les entreprises spécialisées qui planifient et installent les centrales photovoltaïques. Il conditionne l'accès à la rétribution unique et aux programmes cantonaux, et atteste des compétences techniques de l'installateur."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const themeStyles = {
        blue: "bg-blue-100 text-blue-700",
        emerald: "bg-emerald-100 text-emerald-700",
        amber: "bg-amber-100 text-amber-800",
        purple: "bg-purple-100 text-purple-700"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": questions.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a
            }
        }))
    };
    const badgeClass = themeStyles[themeColor] || themeStyles.amber;

    return (
        <section className="py-20 bg-slate-50 border-t border-slate-200">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${badgeClass}`}>
                        Questions Fréquentes
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                        Des questions sur les panneaux solaires ?
                    </h2>
                    <p className="text-xl text-slate-600 mt-4">
                        Nous avons réuni les réponses pour vous guider dans votre projet de transition énergétique.
                    </p>
                </div>

                <div className="space-y-4">
                    {questions.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="font-bold text-lg text-slate-900 pr-8">{item.q}</span>
                                <ChevronDown
                                    className={`text-slate-400 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                                />
                            </button>

                            <div
                                className={`
                                    overflow-hidden transition-all duration-300 ease-in-out
                                    ${openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                                `}
                            >
                                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100">
                                    {item.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

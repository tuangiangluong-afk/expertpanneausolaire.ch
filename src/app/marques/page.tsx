import type { Metadata } from "next";
import Link from "next/link";
import { SOLAR_BRANDS } from "@/data/solar-brands";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { clampTitle, clampDescription, ogImageUrl } from "@/lib/seo-meta";
import { ShieldCheck, ArrowRight, Zap, CheckCircle2 } from "lucide-react";

export const revalidate = 86400;

const pageTitle = clampTitle("Top 6 Marques Panneaux Solaires & Onduleurs Suisse 2026 : Rendement & Prix");
const pageDescription = clampDescription(
  "Comparatif 2026 des meilleures marques solaires en Suisse romande : DualSun, SunPower, Q Cells, Enphase, SolarEdge. Prix en CHF, garanties 25-30 ans et rendement."
);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://www.expertpanneausolaire.ch/marques",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://www.expertpanneausolaire.ch/marques",
    siteName: "Expert Panneau Solaire Suisse",
    locale: "fr_CH",
    type: "website",
    images: [
      {
        url: ogImageUrl({
          title: "Guide des Meilleures Marques Solaires Suisse",
          badge: "Matériel Certifié Romandie 2026",
          description: "DualSun, SunPower, Q Cells, SolarEdge, Enphase : prix et garanties",
        }),
        width: 1200,
        height: 630,
        alt: "Marques Panneaux Solaires Suisse",
      },
    ],
  },
};

export default function MarquesHubPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Guide Comparatif des Marques Solaires en Suisse",
    description: "Audit des principales marques de panneaux photovoltaïques et onduleurs posés en Suisse romande.",
    numberOfItems: SOLAR_BRANDS.length,
    itemListElement: SOLAR_BRANDS.map((b, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: b.name,
      url: `https://www.expertpanneausolaire.ch/marques/${b.slug}`,
      description: `${b.type} - Rendement ${b.rendement} - Gamme ${b.gamme}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quelle est la meilleure marque de panneau solaire en Suisse ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pour les toitures de taille moyenne ou les besoins couplés électricité + eau chaude, le fabricant suisse DualSun (Flash 500 et Spring) offre un rendement record de 22,6% et une garantie de 30 ans. Pour une puissance brute maximale sans thermique, SunPower Maxeon reste la référence premium mondiale. Pour un budget optimisé, Q Cells Q.TRON offre le meilleur rapport qualité/prix.",
        },
      },
      {
        "@type": "Question",
        name: "Micro-onduleurs Enphase ou optimiseurs SolarEdge : que choisir en Suisse ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En Suisse, où le relief et les versants de toiture créent des ombrages fréquents, les deux technologies sont recommandées. Enphase isole chaque panneau avec un micro-onduleur indépendant en courant alternatif (sécurité maximale et garantie 25 ans). SolarEdge combine des optimiseurs en toiture avec un onduleur central, offrant une solution performante pour un coût légèrement inférieur.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header isHub={true} />

      <main className="min-h-screen bg-slate-50 pt-20 pb-16">
        <Breadcrumbs items={[{ name: "Marques Solaires", url: "/marques" }]} />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-500/20">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              Matériel Certifié SIA 261 & OIBT
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Marques de Panneaux Solaires & Onduleurs Recommandées en Suisse
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Toutes les marques ne résistent pas aux contraintes climatiques alpines (charges de neige, amplitudes thermiques).
              Découvrez notre sélection des 6 fabricants leaders posés par les installateurs labellisés <strong>Les Pros du Solaire</strong>.
            </p>
          </div>

          {/* GRID OF BRANDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {SOLAR_BRANDS.map((marque) => (
              <div
                key={marque.slug}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition hover:border-amber-400"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
                      {marque.type}
                    </span>
                    <span className="text-xs font-bold text-slate-700">Rendement {marque.rendement}</span>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    <Link href={`/marques/${marque.slug}`} className="hover:text-amber-600 transition">
                      {marque.name}
                    </Link>
                  </h2>

                  <div className="bg-slate-50 rounded-xl p-3.5 mb-4 text-xs space-y-1.5 border border-slate-100">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Puissance modules :</span>
                      <span className="font-semibold text-slate-900">{marque.gamme}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Budget indicatif :</span>
                      <span className="font-semibold text-amber-700">{marque.prix}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Modèles phares :</span>
                      <span className="font-semibold text-slate-700 truncate max-w-[170px]">{marque.modeles.join(", ")}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="text-xs font-bold text-slate-900 block mb-2">Points forts majeurs :</span>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {marque.atouts.slice(0, 2).map((atout, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{atout}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-amber-50/70 border border-amber-200/50 rounded-xl p-3 text-xs text-slate-700 italic mb-4">
                    💡 <strong>Conseil Pro :</strong> {marque.expertTip}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/marques/${marque.slug}`}
                    className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1"
                  >
                    Fiche {marque.name} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/#simulateur"
                    className="text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white px-3.5 py-1.5 rounded-lg transition"
                  >
                    Devis {marque.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Questions Fréquentes sur le Choix des Panneaux en Suisse
          </h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-base mb-2">{faq.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

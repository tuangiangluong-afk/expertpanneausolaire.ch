import type { Metadata } from "next";
import Link from "next/link";
import { SOLAR_COMPARATIFS } from "@/data/solar-comparatifs";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { clampTitle, clampDescription, ogImageUrl } from "@/lib/seo-meta";
import { Scale, ArrowRight, CheckCircle2 } from "lucide-react";

export const revalidate = 86400;

const pageTitle = clampTitle("Comparatifs Panneaux Solaires & Onduleurs Suisse 2026 : Prix & Choix");
const pageDescription = clampDescription(
  "6 comparatifs techniques et économiques pour votre projet solaire en Suisse : DualSun vs Q Cells, Enphase vs SolarEdge, batterie rentable ou non, autoconsommation vs injection."
);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://www.expertpanneausolaire.ch/comparatifs",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://www.expertpanneausolaire.ch/comparatifs",
    siteName: "Expert Panneau Solaire Suisse",
    locale: "fr_CH",
    type: "website",
    images: [
      {
        url: ogImageUrl({
          title: "Comparatifs Solaire & Photovoltaïque Suisse",
          badge: "Guides Décisionnels 2026",
          description: "DualSun vs Q Cells, Micro-onduleurs, Rentabilité Batterie, Autoconsommation",
        }),
        width: 1200,
        height: 630,
        alt: "Comparatifs Solaires Suisse Romande",
      },
    ],
  },
};

export default function ComparatifsHubPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Comparatifs Décisionnels Photovoltaïque Suisse",
    description: "Comparatifs impartiaux pour arbitrer les technologies, onduleurs et choix d'autoconsommation en Suisse romande.",
    numberOfItems: SOLAR_COMPARATIFS.length,
    itemListElement: SOLAR_COMPARATIFS.map((c, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: c.title,
      url: `https://www.expertpanneausolaire.ch/comparatif/${c.slug}`,
      description: c.intro,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Pourquoi l'autoconsommation est-elle plus rentable que la revente totale en Suisse ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En Suisse, le tarif moyen du kWh acheté au réseau d'électricité est d'environ 30 centimes, tandis que la reprise de l'injection par les gestionnaires de réseau (SIG, Romande Energie, Groupe E) ne dépasse généralement pas 10 à 12 centimes par kWh. Chaque kWh consommé sur place génère donc presque 3 fois plus d'économies qu'un kWh réinjecté au réseau.",
        },
      },
      {
        "@type": "Question",
        name: "Faut-il installer une batterie de stockage avec ses panneaux solaires ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Une batterie physique (5 à 10 kWh) permet de faire passer votre taux d'autoconsommation de 35% à plus de 70%, en stockant le surplus diurne pour la nuit. Elle est particulièrement rentable si votre gestionnaire applique un tarif différencié jour/nuit ou si vous disposez d'un véhicule électrique à recharger en soirée.",
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
        <Breadcrumbs items={[{ name: "Comparatifs Solaire", url: "/comparatifs" }]} />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-500/20">
              <Scale className="w-4 h-4 text-amber-600" />
              Arbitrages Techniques & Économiques 2026
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Comparatifs Solaire : Matériel, Technologies & Rentabilité en Suisse
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Pour éviter les erreurs d&apos;investissement, découvrez nos 6 duels d&apos;arbitrage indépendants basés
              sur les prix réels en CHF, les rendements en climat romand et le cadre légal Pronovo / OIBT.
            </p>
          </div>

          {/* GRID OF COMPARATIFS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {SOLAR_COMPARATIFS.map((comp) => (
              <div
                key={comp.slug}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition hover:border-amber-400"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                      Duel Décisionnel
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">{comp.prix}</span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 mb-2">
                    <Link href={`/comparatif/${comp.slug}`} className="hover:text-amber-600 transition">
                      {comp.title}
                    </Link>
                  </h2>

                  <p className="text-xs text-slate-600 line-clamp-3 mb-4">{comp.intro}</p>

                  <div className="bg-slate-50 rounded-xl p-3 text-xs mb-4 border border-slate-100 space-y-1">
                    <div className="font-semibold text-slate-900">Options confrontées :</div>
                    <div className="flex items-center justify-between text-slate-700">
                      <span className="text-amber-700 font-bold">A : {comp.a}</span>
                      <span className="text-slate-400">vs</span>
                      <span className="text-slate-900 font-bold">B : {comp.b}</span>
                    </div>
                  </div>

                  <div className="bg-amber-50/70 border border-amber-200/50 rounded-xl p-3 text-xs text-slate-700 mb-4">
                    <strong className="text-amber-800">Verdict : </strong>
                    <span className="line-clamp-2">{comp.verdict}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/comparatif/${comp.slug}`}
                    className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1"
                  >
                    Voir le duel complet <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/#simulateur"
                    className="text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-lg transition"
                  >
                    Simuler mon Projet
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Questions Fréquentes sur les Arbitrages Solaires en Suisse
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

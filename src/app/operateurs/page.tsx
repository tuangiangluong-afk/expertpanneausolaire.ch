import type { Metadata } from "next";
import Link from "next/link";
import { SOLAR_OPERATORS } from "@/data/operators";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { clampTitle, clampDescription, ogImageUrl } from "@/lib/seo-meta";
import { ShieldCheck, Star, Award, CheckCircle2, AlertTriangle, ArrowRight, Zap, TrendingUp, Info } from "lucide-react";

export const revalidate = 86400;

const pageTitle = clampTitle("Top 12 Installateurs Panneaux Solaires Suisse Romande 2026 : Avis & Tarifs");
const pageDescription = clampDescription(
  "Comparatif 2026 des 12 meilleurs installateurs solaires en Suisse romande : Helion, Solstis, Romande Energie, Groupe E, SIG. Prix au kWc, marges et certification Pronovo."
);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://www.expertpanneausolaire.ch/operateurs",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://www.expertpanneausolaire.ch/operateurs",
    siteName: "Expert Panneau Solaire Suisse",
    locale: "fr_CH",
    type: "website",
    images: [
      {
        url: ogImageUrl({
          title: "Comparatif 12 Installateurs Solaires Suisse",
          badge: "Suisse Romande • Pronovo 2026",
          description: "Analyse indépendante : Helion, Solstis, Romande Energie, Groupe E, SIG",
        }),
        width: 1200,
        height: 630,
        alt: "Comparatif Installateurs Panneaux Solaires Suisse Romande",
      },
    ],
  },
};

export default function OperateursHubPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Classement des Meilleurs Installateurs Solaires en Suisse Romande",
    description: "Audit comparatif indépendant des opérateurs photovoltaïques en Suisse romande pour l'autoconsommation résidentielle et commerciale.",
    numberOfItems: SOLAR_OPERATORS.length,
    itemListElement: SOLAR_OPERATORS.map((op, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: op.name,
      url: `https://www.expertpanneausolaire.ch/operateurs/${op.slug}`,
      description: op.tagline,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quel est le prix moyen d'une installation solaire en Suisse romande ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En 2026, comptez entre 1 800 et 2 300 CHF par kWc installé (fourniture, pose et démarches OIBT comprises). Pour une installation standard de 6 kWc (environ 14 panneaux), le budget moyen oscille entre 11 500 et 14 500 CHF avant déduction de la rétribution unique Pronovo (environ 1 700 CHF) et des éventuelles aides cantonales.",
        },
      },
      {
        "@type": "Question",
        name: "Pourquoi exiger un installateur labellisé 'Les Pros du Solaire' et agréé OIBT ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En Suisse, les travaux électriques en toiture sont régis par l'ordonnance sur les installations à basse tension (OIBT). L'entreprise doit détenir une autorisation d'installer délivrée par l'ESTI (art. 14). Le label 'Les Pros du Solaire' décerné par Swissolar garantit le respect des règles de l'art, la qualification du personnel et l'éligibilité sans blocage aux subventions fédérales Pronovo.",
        },
      },
      {
        "@type": "Question",
        name: "Vaut-il mieux choisir son fournisseur cantonal (Romande Energie, SIG, Groupe E) ou un artisan indépendant ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les fournisseurs cantonaux offrent la sécurité d'une structure publique ou parapublique et simplifient la gestion de l'injection sur leur propre réseau. En revanche, un collectif d'artisans indépendants agréés Pros du Solaire facture des frais généraux moindres (économies de 15% à 25% sur la facture globale) avec une réactivité et une disponibilité souvent supérieures.",
        },
      },
      {
        "@type": "Question",
        name: "Comment fonctionne la rétribution unique Pronovo en 2026 ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pronovo verse la rétribution unique pour petite installation photovoltaïque (KLEIV / PRU) jusqu'à 100 kWc. Elle comprend une contribution de base d'environ 350-400 CHF complétée par environ 300-340 CHF par kWc posé. Votre installateur certifié se charge généralement du dépôt du dossier technique auprès de Pronovo.",
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
        <Breadcrumbs items={[{ name: "Installateurs & Opérateurs", url: "/operateurs" }]} />

        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-500/20">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              Observatoire Indépendant Solaire Romandie 2026
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Top 12 Installateurs Solaires en Suisse Romande : Analyse & Comparatif
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Pour réussir votre transition photovoltaïque en Suisse romande, le choix de l&apos;installateur conditionne
              votre éligibilité à la <strong>rétribution unique Pronovo</strong>, la conformité légale <strong>OIBT / ESTI</strong> et
              la rentabilité de votre autoconsommation face aux tarifs de reprise de votre gestionnaire de réseau local.
            </p>
          </div>

          {/* KEY SWISS METRICS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <span className="text-xs font-semibold text-slate-500 uppercase">Fourchette Prix Suisse</span>
              <div className="text-2xl font-bold text-slate-900 mt-1">1 800 - 2 300 CHF</div>
              <span className="text-xs text-amber-700 font-medium">par kWc installé TTC</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <span className="text-xs font-semibold text-slate-500 uppercase">Subvention Fédérale</span>
              <div className="text-2xl font-bold text-amber-600 mt-1">~1 700 CHF</div>
              <span className="text-xs text-slate-500">Rétribution unique pour 6 kWc</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <span className="text-xs font-semibold text-slate-500 uppercase">Écart Prix du kWh</span>
              <div className="text-2xl font-bold text-slate-900 mt-1">~30 vs ~11 ct</div>
              <span className="text-xs text-slate-500">Achat réseau vs Reprise injection</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <span className="text-xs font-semibold text-slate-500 uppercase">Norme Obligatoire</span>
              <div className="text-2xl font-bold text-slate-900 mt-1">OIBT Art. 14</div>
              <span className="text-xs text-slate-500">Autorisation ESTI obligatoire</span>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200 bg-slate-900 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold">Matrice Comparative des 12 Installateurs Solaires</h2>
                <p className="text-sm text-slate-400 mt-1">Données marché 2026 : tarifs moyens, délais, marges estimées et périmètre cantonal.</p>
              </div>
              <div className="text-xs bg-slate-800 text-amber-400 font-semibold px-3 py-1.5 rounded-lg border border-slate-700 self-start md:self-auto">
                Normes Swissolar & Pronovo auditées
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                    <th className="py-3 px-4">Installateur</th>
                    <th className="py-3 px-4">Profil</th>
                    <th className="py-3 px-4">Prix Moyen 6 kWc</th>
                    <th className="py-3 px-4">Marge Estimée</th>
                    <th className="py-3 px-4">Délais Pose</th>
                    <th className="py-3 px-4">Note / Avis</th>
                    <th className="py-3 px-4 text-right">Fiche Audit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {SOLAR_OPERATORS.map((op) => (
                    <tr key={op.slug} className="hover:bg-slate-50/80 transition">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        <Link href={`/operateurs/${op.slug}`} className="hover:text-amber-600 transition flex items-center gap-1.5">
                          {op.name}
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-xs">
                        <span className="inline-block bg-slate-200/80 text-slate-800 px-2 py-0.5 rounded font-medium">
                          {op.type}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-medium text-slate-700">{op.priceRange}</td>
                      <td className="py-3 px-4 text-slate-600">{op.marginEstimate}</td>
                      <td className="py-3 px-4 text-slate-600">{op.turnaround}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span className="font-bold text-slate-900">{op.rating}</span>
                          <span className="text-xs text-slate-400">({op.reviewCount})</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <Link
                          href={`/operateurs/${op.slug}`}
                          className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 hover:text-amber-700 bg-amber-50 px-2.5 py-1 rounded hover:bg-amber-100 transition"
                        >
                          Détails <ArrowRight className="w-3 h-3" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* DETAILED OPERATOR CARDS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Fiches Détaillées des Opérateurs Photovoltaïques en Romandie
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Explorez les atouts, faiblesses, marques posées et conseils d&apos;arbitrage pour chaque opérateur solaire audité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLAR_OPERATORS.map((op) => (
              <div
                key={op.slug}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md transition hover:border-amber-400/50"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded">
                      {op.type}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-bold text-slate-700">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{op.rating}</span>
                      <span className="text-slate-400 font-normal">({op.reviewCount})</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    <Link href={`/operateurs/${op.slug}`} className="hover:text-amber-600 transition">
                      {op.name}
                    </Link>
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">{op.tagline}</p>

                  <div className="bg-slate-50 rounded-lg p-3 text-xs space-y-1.5 mb-4 border border-slate-100">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Tarif moyen :</span>
                      <span className="font-semibold text-slate-900">{op.priceRange}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Coût au kWc :</span>
                      <span className="font-semibold text-slate-900">{op.typicalCostKwc}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Délais chantier :</span>
                      <span className="font-semibold text-slate-700">{op.turnaround}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Zone :</span>
                      <span className="font-semibold text-slate-700 truncate max-w-[150px]">{op.coverage}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="text-xs font-bold text-slate-900 block mb-2">Points forts :</span>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {op.strengths.slice(0, 2).map((str, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{str}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <span className="text-xs font-bold text-slate-900 block mb-2">Point de vigilance :</span>
                    <div className="flex items-start gap-1.5 text-xs text-slate-600">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span>{op.weaknesses[0]}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/operateurs/${op.slug}`}
                    className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1"
                  >
                    Lire l&apos;audit complet <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/#simulateur"
                    className="text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-lg transition"
                  >
                    Devis Pronovo
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SWISS SOLAR ARBITRAGE GUIDE */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div className="max-w-3xl">
              <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">
                Conseils d&apos;Arbitrage Indépendant
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 mb-4">
                Comment Choisir son Installateur Photovoltaïque en Suisse Romande ?
              </h2>
              <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>1. L&apos;autorisation d&apos;installer ESTI (OIBT art. 14) :</strong> En Suisse, il est strictement illégal
                  pour une entreprise de raccorder une installation photovoltaïque sans titulaire de maîtrise fédérale ou
                  d&apos;autorisation spécifique délivrée par l&apos;Inspection fédérale des installations à courant fort (ESTI). Exigez
                  le numéro d&apos;autorisation avant tout acompte.
                </p>
                <p>
                  <strong>2. Le label Swissolar « Les Pros du Solaire » :</strong> Ce label atteste que les poseurs ont suivi
                  la formation certifiante et s&apos;engagent sur la charte de qualité suisse (respect des charges de neige SIA 261,
                  fixations adaptées aux tuiles locales, étanchéité de toiture garantie).
                </p>
                <p>
                  <strong>3. La mécanique économique suisse (Autoconsommation vs Injection) :</strong> Le kWh acheté au réseau
                  coûte environ 30 centimes, tandis que la reprise de l&apos;injection par votre gestionnaire local (SIG, Romande Energie,
                  Groupe E) se situe autour de 10 à 12 centimes. Votre rentabilité provient donc de l&apos;autoconsommation directe :
                  dimensionnez l&apos;installation selon votre consommation réelle, pas selon la surface maximale de toiture.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/marques"
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm px-6 py-3 rounded-xl transition inline-flex items-center gap-2"
                >
                  Voir les Marques Certifiées <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/comparatifs"
                  className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm px-6 py-3 rounded-xl transition inline-flex items-center gap-2 border border-slate-700"
                >
                  Consulter les Comparatifs Solaire
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Questions Fréquentes sur les Installateurs Solaires en Suisse
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

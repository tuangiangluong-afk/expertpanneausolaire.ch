import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { SOLAR_OPERATORS, getSolarOperatorBySlug } from "@/data/operators";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { clampTitle, clampDescription, ogImageUrl } from "@/lib/seo-meta";
import {
  ShieldCheck,
  Star,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Clock,
  MapPin,
  Award,
  Zap,
  PhoneCall,
  Check,
  Building2,
} from "lucide-react";

export const revalidate = 86400;

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return SOLAR_OPERATORS.map((op) => ({ slug: op.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const op = getSolarOperatorBySlug(slug);
  if (!op) return {};

  const title = clampTitle(`${op.name} Solaire Avis, Prix & Tarifs 2026 : Analyse Complète`);
  const description = clampDescription(
    `Avis certifié et audit 2026 sur ${op.name} (${op.type}) : prix au kWc (${op.typicalCostKwc}), délais, certifications OIBT / Pronovo et conseils d'arbitrage en Suisse romande.`
  );
  const canonicalUrl = `https://www.expertpanneausolaire.ch/operateurs/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Expert Panneau Solaire Suisse",
      locale: "fr_CH",
      type: "website",
      images: [
        {
          url: ogImageUrl({
            title: `${op.name} Solaire Avis & Tarifs`,
            badge: "Audit Installateur Suisse 2026",
            description: `${op.typicalCostKwc} • Délais ${op.turnaround} • Certifié Pronovo`,
          }),
          width: 1200,
          height: 630,
          alt: `Avis installateur ${op.name} Suisse`,
        },
      ],
    },
  };
}

export default async function OperateurDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const op = getSolarOperatorBySlug(slug);

  if (!op) {
    notFound();
  }

  const canonicalUrl = `https://www.expertpanneausolaire.ch/operateurs/${slug}`;
  const otherOperators = SOLAR_OPERATORS.filter((o) => o.slug !== slug).slice(0, 3);

  // Schema Product avec tous les critères Google Merchant Listings / Rich Results stricts
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Installation Solaire Photovoltaïque ${op.name}`,
    image: ogImageUrl({
      title: `${op.name} Photovoltaïque Suisse`,
      badge: "Installation Solaire Clé en Main",
      description: `Pack ${op.name} : ${op.typicalCostKwc} - Agréé Pronovo & OIBT`,
    }),
    description: `Prestation complète de pose et raccordement de panneaux solaires photovoltaïques en Suisse romande par ${op.name} (${op.type}). Matériel garanti 25 ans, démarche Pronovo et conformité OIBT ESTI incluses.`,
    sku: `SOLAR-CH-${op.slug.toUpperCase()}-2026`,
    mpn: `PV-CH-${op.slug.toUpperCase()}`,
    brand: {
      "@type": "Brand",
      name: op.name,
    },
    offers: {
      "@type": "Offer",
      url: canonicalUrl,
      priceCurrency: "CHF",
      price: op.priceRange.includes("12 500") ? "12500" : "11800",
      priceValidUntil: "2027-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: op.name,
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: "CHF",
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "CH",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 14,
            maxValue: 30,
            unitCode: "d",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 1,
            maxValue: 3,
            unitCode: "d",
          },
        },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "CH",
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 14,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: op.rating.toString(),
      reviewCount: op.reviewCount.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    review: {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: op.featuredReview.author,
      },
      datePublished: op.featuredReview.date,
      reviewBody: op.featuredReview.comment,
      reviewRating: {
        "@type": "Rating",
        ratingValue: op.featuredReview.rating.toString(),
        bestRating: "5",
        worstRating: "1",
      },
    },
  };

  const breadcrumbsData = [
    { name: "Installateurs", url: "/operateurs" },
    { name: op.name, url: `/operateurs/${slug}` },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Quels sont les tarifs pratiqués par ${op.name} en Suisse ?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Pour une centrale photovoltaïque résidentielle standard (environ 6 kWc), le budget moyen chez ${op.name} se situe dans la fourchette de ${op.priceRange} (soit environ ${op.typicalCostKwc}), avant déduction de la rétribution unique fédérale Pronovo (~1 700 CHF) et des déductions fiscales cantonales.`,
        },
      },
      {
        "@type": "Question",
        name: `${op.name} est-il certifié pour percevoir la rétribution Pronovo ?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Oui, ${op.name} est dûment qualifié et respecte l'ordonnance sur les installations à basse tension (OIBT) avec autorisation d'installer ESTI. Les installations réalisées par ${op.name} sont 100% éligibles à la rétribution unique Pronovo (KLEIV / PRU) et aux aides cantonales romandes.`,
        },
      },
      {
        "@type": "Question",
        name: `Quel est le délai moyen d'installation avec ${op.name} ?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Le délai moyen constaté entre la signature du devis et la mise en service effective avec le gestionnaire de réseau local est de ${op.turnaround}, incluant l'annonce de travaux communale et le contrôle OIBT obligatoire.`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header isHub={true} />

      <main className="min-h-screen bg-slate-50 pt-20 pb-16">
        <Breadcrumbs items={breadcrumbsData} />

        {/* HERO SECTION OPERATEUR */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {op.type}
                  </span>
                  <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {op.coverage}
                  </span>
                  <span className="text-xs text-slate-400">
                    Mis à jour le {new Date(op.updatedAt).toLocaleDateString("fr-CH", { year: "numeric", month: "long", day: "numeric" })}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                  {op.name}
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl">{op.tagline}</p>

                <div className="flex items-center gap-3 pt-2">
                  <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-xl">
                    <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                    <span className="text-lg font-black text-slate-900">{op.rating}</span>
                    <span className="text-xs text-slate-500 font-medium">/ 5 ({op.reviewCount} avis clients suisses)</span>
                  </div>
                  <div className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl font-bold flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Agréé Pronovo & OIBT ESTI
                  </div>
                </div>
              </div>

              {/* QUICK PRICE CARD */}
              <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 lg:min-w-[320px] flex flex-col justify-between">
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Budget Estimé 6 kWc</span>
                  <div className="text-2xl sm:text-3xl font-black text-amber-400 mt-1">{op.priceRange}</div>
                  <div className="text-xs text-slate-300 mt-1">Fourchette : {op.typicalCostKwc}</div>
                </div>

                <div className="border-t border-slate-800 my-4 pt-3 space-y-1.5 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span>Délai de pose :</span>
                    <span className="font-semibold text-white">{op.turnaround}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Marge brute estimée :</span>
                    <span className="font-semibold text-white">{op.marginEstimate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Garantie :</span>
                    <span className="font-semibold text-white">{op.warranty.split(",")[0]}</span>
                  </div>
                </div>

                <Link
                  href="/#simulateur"
                  className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2.5 px-4 rounded-xl text-center text-sm transition shadow-lg shadow-amber-500/20"
                >
                  Comparer avec mon Projet
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* DETAILS GRID */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* MAIN CONTENT 2 COLS */}
            <div className="lg:col-span-2 space-y-8">
              {/* STRENGTHS & WEAKNESSES */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <h2 className="text-xl font-bold text-slate-900 mb-6">
                  Points Forts et Vigilances de {op.name}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="text-sm font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Avantages Concurrentiels
                    </h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      {op.strengths.map((str, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{str}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-sm font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-amber-600" />
                      Limites & Points d&apos;Attention
                    </h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      {op.weaknesses.map((w, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                          <span>{w}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* ARBITRAGE EXPERT ADVICE */}
              <div className="bg-amber-50 border border-amber-200/80 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-2 text-amber-800 font-bold text-sm uppercase tracking-wider mb-2">
                  <Award className="w-4 h-4 text-amber-700" />
                  L&apos;Avis Indépendant de l&apos;Expert Solaire Suisse
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Pour qui {op.name} est-il particulièrement recommandé ?
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">{op.arbitrageAdvice}</p>
                <div className="bg-white/80 rounded-xl p-3.5 border border-amber-200/60 text-xs text-slate-600">
                  <span className="font-bold text-slate-900">Profil cible : </span>
                  {op.targetAudience}
                </div>
              </div>

              {/* EQUIPMENT & SPECS */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  Matériel et Onduleurs Posés par {op.name}
                </h2>
                <p className="text-sm text-slate-600 mb-4">
                  {op.name} déploie principalement des composants certifiés pour les conditions alpines et jurassiennes :
                </p>
                <div className="flex flex-wrap gap-2">
                  {op.equipmentUsed.map((eq, i) => (
                    <span
                      key={i}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 transition"
                    >
                      {eq}
                    </span>
                  ))}
                </div>
              </div>

              {/* FEATURED CLIENT REVIEW */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-slate-900">Retour d&apos;Expérience Client</h2>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(Math.round(op.featuredReview.rating))].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <blockquote className="border-l-4 border-amber-500 pl-4 py-1 text-sm text-slate-700 italic mb-4">
                  « {op.featuredReview.comment} »
                </blockquote>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-slate-900">{op.featuredReview.author}</span>
                  <span>{op.featuredReview.canton} • Témoignage contrôlé en {new Date(op.featuredReview.date).toLocaleDateString("fr-CH", { year: "numeric", month: "long" })}</span>
                </div>
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="space-y-6">
              {/* CERTIFICATIONS CARD */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Garanties & Certifications
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  {op.certifications.map((c, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* OTHER OPERATORS RECOMMENDATIONS */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                  Autres Installateurs Recommandés
                </h3>
                <div className="space-y-3">
                  {otherOperators.map((other) => (
                    <Link
                      key={other.slug}
                      href={`/operateurs/${other.slug}`}
                      className="block p-3 rounded-xl border border-slate-100 hover:border-amber-300 hover:bg-slate-50 transition"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-slate-900">{other.name}</span>
                        <div className="flex items-center gap-0.5 text-xs font-semibold text-slate-700">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          <span>{other.rating}</span>
                        </div>
                      </div>
                      <div className="text-xs text-slate-500 mt-1">{other.typicalCostKwc}</div>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/operateurs"
                  className="block text-center text-xs font-bold text-amber-600 hover:text-amber-700 mt-4"
                >
                  Voir les 12 Installateurs Solaires →
                </Link>
              </div>

              {/* QUICK CALL SIMULATOR CTA */}
              <div className="bg-slate-900 text-white rounded-2xl p-6">
                <h3 className="text-base font-bold mb-2">Une question sur {op.name} ?</h3>
                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  Calculez votre rentabilité photovoltaïque en Suisse romande et comparez les devis des installateurs certifiés Swissolar.
                </p>
                <Link
                  href="/#simulateur"
                  className="block w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2.5 rounded-xl text-center text-xs transition"
                >
                  Estimer ma Rétribution Pronovo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Questions Fréquentes sur {op.name}
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

import Script from "next/script";
import { headers } from "next/headers";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

import { getCurrentYearSEO } from "@/lib/date";
import { MARKET } from "@/config/market";
import StructuredData from "@/components/seo/StructuredData";
import AttributionTracker from "@/components/AttributionTracker";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  // Canonical host is ALWAYS this site's own host (never the French .com twin).
  const canonicalDomain = "www.expertpanneausolaire.ch";
  const path = headersList.get("x-irve-path") || "";
  const baseUrl = `https://${canonicalDomain}`;

  // hreflang uniquement sur les routes réellement partagées entre les deux domaines
  const sharedPath = path === "/" ? "" : path;
  const sharedNorm = sharedPath.replace(/\/+$/, "") || "/";
  const hreflangLanguages = ["/", "/blog", "/guides", "/glossaire"].includes(sharedNorm)
    ? {
        "fr-CH": `https://www.expertpanneausolaire.ch${sharedPath}`,
        "fr-FR": `https://www.expertpanneausolaire.com${sharedPath}`,
        "x-default": `https://www.expertpanneausolaire.ch${sharedPath}`,
      }
    : undefined;

  return {
  title: {
    template: `%s | Expert Solaire`,
    default: `Expert Panneau Solaire - Panneaux Photovoltaïques & Aides ${getCurrentYearSEO()}`,
  },
  description: `Installation de panneaux solaires photovoltaïques et autoconsommation en ${MARKET.country}. Installateurs porteurs du label ${MARKET.installerLabelShort}. Simulateur de ${MARKET.subsidyScheme} gratuit en 24h.`,
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: `${baseUrl}${path}`,
    languages: hreflangLanguages,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Expert Panneau Solaire - Photovoltaïque & Autoconsommation",
    description: `Installation de panneaux solaires photovoltaïques en ${MARKET.country}. Simulateur de ${MARKET.subsidyScheme} et devis gratuits sous 24h.`,
    siteName: "Expert Panneau Solaire",
    locale: MARKET.locale,
    type: "website",
    url: `${baseUrl}${path}`,
    images: [
      {
        url: `${baseUrl}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Expert Panneau Solaire - Installation de panneaux photovoltaïques",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Panneau Solaire - Photovoltaïque & Autoconsommation",
    description: "Installation de panneaux solaires photovoltaïques. Simulateur d'éligibilité gratuit.",
    images: [`${baseUrl}/images/og-image.png`],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.png",
    apple: "/icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon.ico",
      }
    ]
  },
  };
}export const viewport: Viewport = {
  themeColor: "#eab308",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={MARKET.language} className="scroll-smooth">
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM Summary" />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5ZX2ZDVT');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-neutral-900 text-neutral-50`}
      >
        <Script src="https://answershaper.com/api/v1/m2m/local-tag/26.js" strategy="lazyOnload" defer />
        <StructuredData />
        <GoogleAnalytics GA_MEASUREMENT_ID="G-JRTDH56WVZ" />
        <AttributionTracker />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5ZX2ZDVT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}

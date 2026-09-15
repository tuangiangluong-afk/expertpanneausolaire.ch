import { SiteConfig } from "@/lib/sites-config";
import { CityConfig } from "@/lib/db";
import { slugify } from "@/lib/slugify";
import { getLocalFAQData } from "@/components/LocalFAQ";
import { MARKET } from "@/config/market";

interface SchemaJSONProps {
    type: "LocalBusiness" | "Organization" | "Breadcrumb" | "FAQPage";
    site?: SiteConfig | CityConfig;
    breadcrumbItems?: { name: string; item: string }[];
    faqSegment?: "B2C" | "COPRO" | "ENTREPRISE";
}

export default function SchemaJSON({ type, site, breadcrumbItems, faqSegment }: SchemaJSONProps) {
    let schema = {};

    const baseUrl = "https://www.expertpanneausolaire.ch";

    if (type === "LocalBusiness" && site) {
        const canonicalUrl = site.slug === 'home' || site.slug === 'expertpanneausolaire.ch' || site.slug === 'www.expertpanneausolaire.ch'
            ? baseUrl
            : `${baseUrl}/ville/${slugify(site.city)}`;

        const geoData = (site as any).geo || null;
        const lat = geoData?.lat || null;
        const lng = geoData?.lng || null;

        schema = {
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "SolarEnergyContractor", "HomeAndConstructionBusiness"],
            "name": site.name,
            "image": site.heroImage,
            "@id": canonicalUrl,
            "url": canonicalUrl,
            "telephone": site.phoneNumber,
            "address": {
                "@type": "PostalAddress",
                "addressLocality": site.city,
                "postalCode": site.postalCode,
                "addressRegion": site.department || undefined,
                "addressCountry": MARKET.countryCode
            },
            ...(lat && lng ? {
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": lat,
                    "longitude": lng
                }
            } : {}),
            "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ],
                "opens": "08:00",
                "closes": "19:00"
            },
            "priceRange": "CHF",
            
            "areaServed": {
                "@type": "City",
                "name": site.city
            }
            };
    } else if (type === "Organization" && site) {
        schema = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Expert Panneau Solaire",
            "url": baseUrl,
            "logo": `${baseUrl}/logo.png`,
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": site.phoneNumber || "+41 22 000 00 00",
                "contactType": "customer service",
                "areaServed": MARKET.countryCode,
                "availableLanguage": [MARKET.language, "de-CH"]
            }
        };
    } else if (type === "Breadcrumb" && breadcrumbItems) {
        schema = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbItems.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": item.name,
                "item": item.item
            }))
        };
    } else if (type === "FAQPage" && site && faqSegment) {
        const faqs = getLocalFAQData(site.city, site.department, faqSegment);
        schema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
            }))
        };
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

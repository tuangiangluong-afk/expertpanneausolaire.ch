import Script from "next/script";
import { MARKET } from "@/config/market";

export default function StructuredData() {
    const baseUrl = "https://www.expertpanneausolaire.ch";

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        "name": "Expert Panneau Solaire",
        "legalName": "Expert Panneau Solaire SA",
        "url": baseUrl,
        "logo": `${baseUrl}/icon.png`,
        "image": `${baseUrl}/icon.png`,
        "description": `Étude, fourniture et pose de panneaux solaires photovoltaïques en autoconsommation en ${MARKET.country}, avec ${MARKET.subsidyScheme} versée par ${MARKET.subsidyBody}.`,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rue du Rhône 14",
            "addressLocality": "Genève",
            "postalCode": "1204",
            "addressCountry": "CH"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+41 22 000 00 00",
            "contactType": "customer service",
            "areaServed": "CH",
            "availableLanguage": [MARKET.language, "de-CH", "en-US"]
        },
        "areaServed": {
            "@type": "Country",
            "name": MARKET.countryCode
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": "Expert Panneau Solaire",
        "description": `Étude, fourniture et pose de panneaux solaires photovoltaïques en autoconsommation en ${MARKET.country}, avec ${MARKET.subsidyScheme} versée par ${MARKET.subsidyBody}.`,
        "inLanguage": MARKET.language,
        "publisher": {
            "@id": `${baseUrl}/#organization`,
            "@type": "Organization",
            "name": "Expert Panneau Solaire"
        }
    };

    // Clean Service Schema: NO aggregateRating or review (Services are not eligible for Google review snippets)
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${baseUrl}/#service`,
        "name": "Installation Panneaux Solaires Photovoltaïques",
        "serviceType": "Installation Panneaux Solaires Photovoltaïques",
        "provider": {
            "@id": `${baseUrl}/#organization`,
            "@type": "Organization",
            "name": "Expert Panneau Solaire"
        },
        "areaServed": {
            "@type": "Country",
            "name": MARKET.countryCode
        },
        "description": `Étude, fourniture et pose de panneaux solaires photovoltaïques en autoconsommation en ${MARKET.country}, avec ${MARKET.subsidyScheme} versée par ${MARKET.subsidyBody}.`,
        "offers": {
            "@type": "Offer",
            "priceCurrency": MARKET.currencyCode,
            "price": "12900",
            "availability": "https://schema.org/InStock",
            "validFrom": "2026-01-01"
        }
    };

    // Eligible Product Schema: 100% compliant with Google Product & Review Snippets
    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": `${baseUrl}/#product`,
        "name": `Kit solaire photovoltaïque clé en main — pose par une entreprise du label ${MARKET.installerLabelShort}`,
        "image": [
            `${baseUrl}/icon.png`
        ],
        "description": `Installation solaire photovoltaïque avec micro-onduleurs, garantie matériel 25 ans et raccordement au ${MARKET.gridOperatorShort} géré de bout en bout.`,
        "sku": "EPS-SOLAR-001",
        "mpn": "EPS-SOLAR-001",
        "brand": {
            "@type": "Brand",
            "name": "Expert Panneau Solaire"
        },
        "offers": {
            "@type": "Offer",
            "url": `${baseUrl}/#simulateur`,
            "priceCurrency": MARKET.currencyCode,
            "price": "12900",
            "validFrom": "2026-01-01",
            "priceValidUntil": "2026-12-31",
            "itemCondition": "https://schema.org/NewCondition",
            "availability": "https://schema.org/InStock",
            "hasMerchantReturnPolicy": {
                "@type": "MerchantReturnPolicy",
                "applicableCountry": MARKET.countryCode,
                "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted"
            },
            "shippingDetails": {
                "@type": "OfferShippingDetails",
                "shippingRate": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": MARKET.currencyCode
                },
                "shippingDestination": {
                    "@type": "DefinedRegion",
                    "addressCountry": MARKET.countryCode
                },
                "deliveryTime": {
                    "@type": "ShippingDeliveryTime",
                    "businessDays": {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": [
                            "https://schema.org/Monday",
                            "https://schema.org/Tuesday",
                            "https://schema.org/Wednesday",
                            "https://schema.org/Thursday",
                            "https://schema.org/Friday"
                        ]
                    },
                    "cutoffTime": "18:00:00Z",
                    "handlingTime": {
                        "@type": "QuantitativeValue",
                        "minValue": 1,
                        "maxValue": 3,
                        "unitCode": "DAY"
                    },
                    "transitTime": {
                        "@type": "QuantitativeValue",
                        "minValue": 1,
                        "maxValue": 5,
                        "unitCode": "DAY"
                    }
                }
            }
        },
    };

    return (
        <>
            <Script
                id="org-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <Script
                id="website-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <Script
                id="product-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
        </>
    );
}

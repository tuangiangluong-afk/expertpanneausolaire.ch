import Script from "next/script";

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
        "description": "Étude, fourniture et pose de panneaux solaires photovoltaïques en autoconsommation en Suisse, avec rétribution unique Pronovo.",
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
            "availableLanguage": ["fr-FR", "en-US"]
        },
        "areaServed": {
            "@type": "Country",
            "name": "FR"
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": "Expert Panneau Solaire",
        "description": "Étude, fourniture et pose de panneaux solaires photovoltaïques en autoconsommation en Suisse, avec rétribution unique Pronovo.",
        "inLanguage": "fr-CH",
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
            "name": "FR"
        },
        "description": "Étude, fourniture et pose de panneaux solaires photovoltaïques en autoconsommation en Suisse, avec rétribution unique Pronovo.",
        "offers": {
            "@type": "Offer",
            "priceCurrency": "EUR",
            "price": "5990",
            "availability": "https://schema.org/InStock",
            "validFrom": "2026-01-01"
        }
    };

    // Eligible Product Schema: 100% compliant with Google Product & Review Snippets
    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": `${baseUrl}/#product`,
        "name": "Kit Solaire Photovoltaïque Clé en Main avec Pose RGE",
        "image": [
            `${baseUrl}/icon.png`
        ],
        "description": "Installation solaire photovoltaïque haute performance avec micro-onduleurs et garantie de production 25 ans.",
        "sku": "EPS-SOLAR-001",
        "mpn": "EPS-SOLAR-001",
        "brand": {
            "@type": "Brand",
            "name": "Expert Panneau Solaire"
        },
        "offers": {
            "@type": "Offer",
            "url": `${baseUrl}/#simulateur`,
            "priceCurrency": "EUR",
            "price": "5990",
            "validFrom": "2026-01-01",
            "priceValidUntil": "2026-12-31",
            "itemCondition": "https://schema.org/NewCondition",
            "availability": "https://schema.org/InStock",
            "hasMerchantReturnPolicy": {
                "@type": "MerchantReturnPolicy",
                "applicableCountry": "FR",
                "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted"
            },
            "shippingDetails": {
                "@type": "OfferShippingDetails",
                "shippingRate": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": "EUR"
                },
                "shippingDestination": {
                    "@type": "DefinedRegion",
                    "addressCountry": "CH"
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
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "275",
            "bestRating": "5",
            "worstRating": "1"
        },
        "review": [
            {
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": "Laurent G."
                },
                "datePublished": "2026-02-04",
                "reviewBody": "Installation photovoltaïque 6 kWc en autoconsommation avec revente. Production optimale et suivi via application très clair.",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5",
                    "worstRating": "1"
                }
            },
            {
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": "Isabelle R."
                },
                "datePublished": "2026-03-22",
                "reviewBody": "Équipe RGE QualiPV au top. Démarches Enedis et Consuel gérées rapidement. Je recommande à 100%.",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5",
                    "worstRating": "1"
                }
            }
        ]
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

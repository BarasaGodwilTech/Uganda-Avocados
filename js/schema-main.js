// schema-main.js - STRUCTURED DATA FOR MAIN SITE
// Load this ONLY on main site

(function() {
    'use strict';
    
    // ============================================
    // 1. ORGANIZATION SCHEMA
    // ============================================
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://ugandaavocados.org/#organization",
        "name": "Uganda Avocados",
        "alternateName": "Uganda Avocado Growers Association",
        "url": "https://ugandaavocados.org/",
        "logo": "https://ugandaavocados.org/images/logo.png",
        "description": "Uganda's leading avocado growers association connecting farmers to global markets.",
        "foundingDate": "2020",
        "founders": [
            {
                "@type": "Person",
                "name": "Richard Welishe",
                "jobTitle": "CEO & Founder",
                "email": "richard.welishe@ugandaavocados.org",
                "telephone": "+256774092470",
                "url": "https://ugandaavocados.org/team/richard-welishe"
            }
        ],
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mbale",
            "addressRegion": "Eastern Region",
            "addressCountry": "UG"
        },
        "contactPoint": [
            {
                "@type": "ContactPoint",
                "telephone": "+256393208717",
                "contactType": "customer service",
                "email": "info@ugandaavocados.org",
                "availableLanguage": ["English", "Swahili"]
            },
            {
                "@type": "ContactPoint",
                "telephone": "+256774092470",
                "contactType": "sales",
                "email": "exports@ugandaavocados.org",
                "availableLanguage": ["English"]
            }
        ],
        "sameAs": [
            "https://twitter.com/UgandaAvocados",
            "https://facebook.com/UgandaAvocados",
            "https://instagram.com/uganda.avocados",
            "https://linkedin.com/company/uganda-avocados",
            "https://youtube.com/@UgandaAvocados"
        ]
    };

    // ============================================
    // 2. PERSON SCHEMA - RICHARD WELISHE
    // ============================================
    const personSchemaRichard = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://ugandaavocados.org/#richardwelishe",
        "name": "Richard Welishe",
        "jobTitle": "CEO & Founder",
        "worksFor": {
            "@type": "Organization",
            "name": "Uganda Avocados"
        },
        "url": "https://ugandaavocados.org/team/richard-welishe",
        "image": "https://ugandaavocados.org/images/team/richard-welishe.jpg",
        "email": "richard.welishe@ugandaavocados.org",
        "telephone": "+256774092470",
        "sameAs": [
            "https://linkedin.com/in/richardwelishe",
            "https://twitter.com/richardwelishe"
        ],
        "knowsAbout": [
            "Avocado agronomy",
            "Export market development",
            "Agricultural value chains",
            "Farmer cooperatives",
            "Sustainable agriculture"
        ],
        "description": "Founder and CEO of Uganda Avocados, leading the avocado revolution in East Africa."
    };

    // ============================================
    // 3. PERSON SCHEMA - BARASA GODWIL (DEVELOPER)
    // ============================================
    const personSchemaDev = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://ugandaavocados.org/#barasagodwil",
        "name": "barasa godwil",
        "jobTitle": "Lead Web Developer",
        "worksFor": {
            "@type": "Organization",
            "name": "barasagodwilTechnologies",
            "url": "https://barasagodwil.tech"
        },
        "email": "dev@barasagodwil.tech",
        "telephone": "+256740165356",
        "url": "https://barasagodwil.tech",
        "sameAs": [
            "https://github.com/barasagodwil",
            "https://linkedin.com/in/barasagodwil"
        ],
        "knowsAbout": [
            "Web Development",
            "SEO",
            "Digital Strategy",
            "Agri-Tech Solutions"
        ]
    };

    // ============================================
    // 4. WEBSITE SCHEMA
    // ============================================
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://ugandaavocados.org/#website",
        "url": "https://ugandaavocados.org/",
        "name": "Uganda Avocados",
        "description": "Uganda's premier avocado growers association",
        "publisher": {
            "@id": "https://ugandaavocados.org/#organization"
        },
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://ugandaavocados.org/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    // ============================================
    // 5. LOCAL BUSINESS SCHEMA
    // ============================================
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "AgriculturalOrganization",
        "name": "Uganda Avocados",
        "image": "https://ugandaavocados.org/images/farm-aerial.jpg",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mbale",
            "addressRegion": "Eastern Region",
            "addressCountry": "UG"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "1.0784",
            "longitude": "34.1810"
        },
        "openingHours": "Mo-Fr 08:00-17:00",
        "telephone": "+256393208717"
    };

    // ============================================
    // 6. FAQ SCHEMA
    // ============================================
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Who is Richard Welishe?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Richard Welishe is the founder and CEO of Uganda Avocados, a visionary leader transforming Uganda's avocado sector with over 15 years of agribusiness experience."
                }
            },
            {
                "@type": "Question",
                "name": "What makes Ugandan avocados unique?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ugandan avocados are grown in rich volcanic soils at optimal altitudes, producing creamy, nutrient-dense fruits with exceptional taste."
                }
            },
            {
                "@type": "Question",
                "name": "How can I export avocados from Uganda?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Contact our export department at exports@ugandaavocados.org. We connect international buyers with certified growers."
                }
            }
        ]
    };

    // ============================================
    // ADD ALL SCHEMAS TO PAGE
    // ============================================
    const schemas = [
        organizationSchema,
        personSchemaRichard,
        personSchemaDev,
        websiteSchema,
        localBusinessSchema,
        faqSchema
    ];

    schemas.forEach(schema => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(schema, null, 2);
        document.head.appendChild(script);
    });

    console.log("✅ Main site structured data added (6 schemas)");
    console.log("📊 Includes: Organization, Richard Welishe, barasa godwil, Website, Local Business, FAQ");
})();

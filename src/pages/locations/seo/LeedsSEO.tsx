import { Helmet } from "react-helmet";
import Navigation from "../../../components/Navigation";
import Breadcrumbs from "../../../components/Breadcrumbs";
import LeedsHero from "../../../components/locations/seo/LeedsHero";
import LocationKeyContent from "../../../components/locations/seo/LocationKeyContent";
import LocationServices from "../../../components/locations/seo/LocationServices";
import LocationFAQ from "../../../components/locations/seo/LocationFAQ";
import CaseStudiesLink from "../../../components/locations/seo/CaseStudiesLink";
import { MapPin } from "lucide-react";

const LeedsSEO = () => {
  const cityName = "Leeds";
  const basePrice = "£360";

  const schemas = {
    localBusiness: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": `${cityName} SEO Services`,
      "description": `Expert SEO services in ${cityName} helping businesses achieve top Google rankings`,
      "priceRange": `Monthly SEO packages start from ${basePrice} per month`,
      "areaServed": {
        "@type": "City",
        "name": cityName
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": cityName,
        "addressCountry": "UK"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "87"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "17:30"
      }
    },
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": `How much does SEO cost in ${cityName}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Monthly SEO packages start from ${basePrice} per month with guaranteed ROI through increased organic traffic and conversions. We provide detailed monthly reports tracking key metrics including rankings, traffic growth, and conversion rates to demonstrate the value of your investment.`
          }
        },
        {
          "@type": "Question",
          "name": `How long does SEO take to work in ${cityName}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `While initial improvements can be seen within 3-6 months, significant results in ${cityName}'s competitive market typically take 6-12 months. We focus on sustainable, long-term growth rather than quick fixes.`
          }
        },
        {
          "@type": "Question",
          "name": "Do you guarantee first page rankings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `While we can't guarantee specific rankings due to Google's ever-changing algorithms, we have a proven track record of achieving first page results for our ${cityName} clients through ethical SEO practices and data-driven strategies.`
          }
        },
        {
          "@type": "Question",
          "name": `What makes your ${cityName} SEO services different?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Our deep understanding of ${cityName}'s market, combined with advanced technical expertise and transparent reporting, sets us apart. We focus on delivering measurable ROI and maintaining long-term client relationships.`
          }
        }
      ]
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://yourdomain.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "SEO Services",
          "item": "https://yourdomain.com/seo-services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": `${cityName} SEO`,
          "item": `https://yourdomain.com/seo-services/${cityName.toLowerCase()}`
        }
      ]
    },
    service: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Search Engine Optimization",
      "provider": {
        "@type": "LocalBusiness",
        "name": `${cityName} SEO Services`
      },
      "areaServed": {
        "@type": "City",
        "name": cityName
      },
      "description": `Professional SEO services in ${cityName} helping businesses achieve higher search engine rankings and increased organic traffic`,
      "offers": {
        "@type": "Offer",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": basePrice.replace("£", ""),
          "priceCurrency": "GBP",
          "unitText": "per month"
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>{`${cityName} SEO Services | Expert SEO Agency ${cityName} | From ${basePrice}`}</title>
        <meta 
          name="description" 
          content={`Leading ${cityName} SEO agency delivering proven results. Our expert SEO services help ${cityName} businesses achieve top Google rankings. Packages from ${basePrice}/month. Free SEO audit available.`}
        />
        <meta name="keywords" content={`SEO ${cityName}, ${cityName} SEO services, ${cityName} SEO agency, ${cityName} SEO company, local SEO ${cityName}, digital marketing ${cityName}`} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`${cityName} SEO Services | Expert SEO Agency ${cityName}`} />
        <meta 
          property="og:description" 
          content={`Leading ${cityName} SEO agency delivering proven results. Our expert SEO services help ${cityName} businesses achieve top Google rankings. Free SEO audit available.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <link rel="canonical" href={`https://yourdomain.com/seo-services/${cityName.toLowerCase()}`} />
        {Object.values(schemas).map((schema, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>

      <Navigation />
      <Breadcrumbs />
      
      <LeedsHero />
      <LocationKeyContent cityName={cityName} />
      <LocationServices cityName={cityName} />

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Areas We Serve in {cityName}</h2>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            {[
              "Leeds City Centre",
              "Headingley",
              "Chapel Allerton",
              "Roundhay",
              "Meanwood",
              "Horsforth",
              "Kirkstall",
              "Moortown",
              "Armley",
              "Hyde Park",
              "Pudsey",
              "Morley"
            ].map((area) => (
              <div key={area} className="backdrop-blur-sm bg-white/5 p-4 rounded-lg border border-white/10">
                <MapPin className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LocationFAQ cityName={cityName} />
      <CaseStudiesLink />
    </div>
  );
};

export default LeedsSEO;
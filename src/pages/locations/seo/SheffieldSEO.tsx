import { Helmet } from "react-helmet";
import Navigation from "../../../components/Navigation";
import Breadcrumbs from "../../../components/Breadcrumbs";
import SheffieldHero from "../../../components/locations/seo/SheffieldHero";
import LocationKeyContent from "../../../components/locations/seo/LocationKeyContent";
import LocationServices from "../../../components/locations/seo/LocationServices";
import LocationFAQ from "../../../components/locations/seo/LocationFAQ";
import CaseStudiesLink from "../../../components/locations/seo/CaseStudiesLink";

const SheffieldSEO = () => {
  const cityName = "Sheffield";
  const basePrice = "£360";
  
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
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "${cityName} SEO Services",
              "description": "Expert SEO services in ${cityName} helping businesses achieve top Google rankings",
              "priceRange": "Monthly SEO packages start from ${basePrice} per month",
              "areaServed": {
                "@type": "City",
                "name": "${cityName}"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "${cityName}",
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
            }
          `}
        </script>
      </Helmet>

      <Navigation />
      <Breadcrumbs />
      
      <SheffieldHero />
      <LocationKeyContent cityName={cityName} />
      <LocationServices cityName={cityName} />
      <LocationFAQ cityName={cityName} />
      <CaseStudiesLink />
    </div>
  );
};

export default SheffieldSEO;
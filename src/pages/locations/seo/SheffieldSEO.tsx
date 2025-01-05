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
        <meta name="description" content={`Leading ${cityName} SEO agency delivering proven results. Our expert SEO services help ${cityName} businesses achieve top Google rankings. Free SEO audit available.`} />
        <meta property="og:title" content={`${cityName} SEO Services | Expert SEO Agency ${cityName}`} />
        <meta property="og:description" content={`Leading ${cityName} SEO agency delivering proven results. Our expert SEO services help ${cityName} businesses achieve top Google rankings.`} />
        <meta property="og:image" content="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&w=1200&h=630&q=80" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
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

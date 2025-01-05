import { Helmet } from "react-helmet";
import Navigation from "../../../components/Navigation";
import Breadcrumbs from "../../../components/Breadcrumbs";
import SheffieldHero from "../../../components/locations/seo/SheffieldHero";
import LocationKeyContent from "../../../components/locations/seo/LocationKeyContent";
import LocationServices from "../../../components/locations/seo/LocationServices";
import LocationFAQ from "../../../components/locations/seo/LocationFAQ";
import CaseStudiesLink from "../../../components/locations/seo/CaseStudiesLink";

const SheffieldSEO = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Sheffield SEO Services | Expert SEO Agency Sheffield</title>
        <meta name="description" content="Leading Sheffield SEO agency delivering proven results. Our expert SEO services help Sheffield businesses achieve top Google rankings. Free SEO audit available." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Sheffield SEO Services",
              "description": "Expert SEO services in Sheffield helping businesses achieve top Google rankings",
              "areaServed": {
                "@type": "City",
                "name": "Sheffield"
              },
              "priceRange": "Monthly SEO packages start from £360 per month",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Sheffield",
                "addressCountry": "UK"
              }
            }
          `}
        </script>
      </Helmet>

      <Navigation />
      <Breadcrumbs />
      
      <SheffieldHero />
      <LocationKeyContent cityName="Sheffield" />
      <LocationServices cityName="Sheffield" />
      <LocationFAQ cityName="Sheffield" />
      <CaseStudiesLink />
    </div>
  );
};

export default SheffieldSEO;
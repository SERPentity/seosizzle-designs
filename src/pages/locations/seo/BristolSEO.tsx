import { Helmet } from "react-helmet";
import Navigation from "../../../components/Navigation";
import Breadcrumbs from "../../../components/Breadcrumbs";
import BristolHero from "../../../components/locations/seo/BristolHero";
import LocationKeyContent from "../../../components/locations/seo/LocationKeyContent";
import LocationServices from "../../../components/locations/seo/LocationServices";
import LocationFAQ from "../../../components/locations/seo/LocationFAQ";
import CaseStudiesLink from "../../../components/locations/seo/CaseStudiesLink";

const BristolSEO = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Bristol SEO Services | Expert SEO Agency Bristol</title>
        <meta 
          name="description" 
          content="Leading Bristol SEO agency delivering proven results. Our expert SEO services help Bristol businesses achieve top Google rankings. Free SEO audit available." 
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Bristol SEO Services",
              "description": "Expert SEO services in Bristol helping businesses achieve top Google rankings",
              "areaServed": {
                "@type": "City",
                "name": "Bristol"
              },
              "priceRange": "Monthly SEO packages start from £360 per month with guaranteed ROI through increased traffic and conversions",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bristol",
                "addressCountry": "UK"
              }
            }
          `}
        </script>
      </Helmet>

      <Navigation />
      <Breadcrumbs />
      
      <BristolHero />
      <LocationKeyContent cityName="Bristol" />
      <LocationServices cityName="Bristol" />
      <LocationFAQ cityName="Bristol" />
      <CaseStudiesLink />
    </div>
  );
};

export default BristolSEO;
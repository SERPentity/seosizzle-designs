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
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Leeds SEO Services | Expert SEO Agency Leeds</title>
        <meta name="description" content="Leading Leeds SEO agency delivering proven results. Our expert SEO services help Leeds businesses achieve top Google rankings. Free SEO audit available." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Leeds SEO Services",
              "description": "Expert SEO services in Leeds helping businesses achieve top Google rankings",
              "areaServed": {
                "@type": "City",
                "name": "Leeds"
              },
              "priceRange": "Monthly SEO packages start from £360 per month",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Leeds",
                "addressCountry": "UK"
              }
            }
          `}
        </script>
      </Helmet>

      <Navigation />
      <Breadcrumbs />
      
      <LeedsHero />
      <LocationKeyContent cityName="Leeds" />
      <LocationServices cityName="Leeds" />

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Areas We Serve in Leeds</h2>
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

      <LocationFAQ cityName="Leeds" />
      <CaseStudiesLink />
    </div>
  );
};

export default LeedsSEO;
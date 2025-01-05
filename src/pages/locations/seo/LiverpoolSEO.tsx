import { Helmet } from "react-helmet";
import Navigation from "../../../components/Navigation";
import Breadcrumbs from "../../../components/Breadcrumbs";
import LiverpoolHero from "../../../components/locations/seo/LiverpoolHero";
import LocationKeyContent from "../../../components/locations/seo/LocationKeyContent";
import LocationServices from "../../../components/locations/seo/LocationServices";
import LocationFAQ from "../../../components/locations/seo/LocationFAQ";
import CaseStudiesLink from "../../../components/locations/seo/CaseStudiesLink";
import { MapPin } from "lucide-react";

const LiverpoolSEO = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Liverpool SEO Services | Expert SEO Agency Liverpool</title>
        <meta name="description" content="Leading Liverpool SEO agency delivering proven results. Our expert SEO services help Liverpool businesses achieve top Google rankings. Free SEO audit available." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Liverpool SEO Services",
              "description": "Expert SEO services in Liverpool helping businesses achieve top Google rankings",
              "areaServed": {
                "@type": "City",
                "name": "Liverpool"
              },
              "priceRange": "££",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Liverpool",
                "addressCountry": "UK"
              }
            }
          `}
        </script>
      </Helmet>

      <Navigation />
      <Breadcrumbs />
      
      <LiverpoolHero />
      <LocationKeyContent cityName="Liverpool" />
      <LocationServices cityName="Liverpool" />

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Areas We Serve in Liverpool</h2>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            {[
              "Liverpool City Centre",
              "Albert Dock",
              "Baltic Triangle",
              "Ropewalks",
              "Georgian Quarter",
              "Anfield",
              "Wavertree",
              "Woolton",
              "Aigburth",
              "Allerton",
              "Mossley Hill",
              "Childwall"
            ].map((area) => (
              <div key={area} className="backdrop-blur-sm bg-white/5 p-4 rounded-lg border border-white/10">
                <MapPin className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LocationFAQ cityName="Liverpool" />
      <CaseStudiesLink />
    </div>
  );
};

export default LiverpoolSEO;
import { Helmet } from "react-helmet";
import Navigation from "../../../components/Navigation";
import Breadcrumbs from "../../../components/Breadcrumbs";
import SouthamptonHero from "../../../components/locations/seo/SouthamptonHero";
import LocationKeyContent from "../../../components/locations/seo/LocationKeyContent";
import LocationServices from "../../../components/locations/seo/LocationServices";
import LocationFAQ from "../../../components/locations/seo/LocationFAQ";
import CaseStudiesLink from "../../../components/locations/seo/CaseStudiesLink";
import { MapPin } from "lucide-react";

const SouthamptonSEO = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Southampton SEO Services | Expert SEO Agency Southampton | From £360</title>
        <meta name="description" content="Leading Southampton SEO agency delivering proven results. Our expert SEO services help Southampton businesses achieve top Google rankings. Free SEO audit available." />
        <meta property="og:title" content="Southampton SEO Services | Expert SEO Agency Southampton" />
        <meta property="og:description" content="Leading Southampton SEO agency delivering proven results. Our expert SEO services help Southampton businesses achieve top Google rankings." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=1200&h=630&q=80" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Southampton SEO Services",
              "description": "Expert SEO services in Southampton helping businesses achieve top Google rankings",
              "priceRange": "Monthly SEO packages start from £360 per month",
              "areaServed": {
                "@type": "City",
                "name": "Southampton"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Southampton",
                "addressCountry": "UK"
              }
            }
          `}
        </script>
      </Helmet>

      <Navigation />
      <Breadcrumbs />
      
      <SouthamptonHero />
      <LocationKeyContent cityName="Southampton" />
      <LocationServices cityName="Southampton" />

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Areas We Serve in Southampton</h2>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            {[
              "Southampton City Centre",
              "Ocean Village",
              "Portswood",
              "Shirley",
              "Bitterne",
              "Woolston",
              "Bassett",
              "Swaythling",
              "St Denys",
              "Millbrook",
              "Freemantle",
              "Northam"
            ].map((area) => (
              <div key={area} className="backdrop-blur-sm bg-white/5 p-4 rounded-lg border border-white/10">
                <MapPin className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LocationFAQ cityName="Southampton" />
      <CaseStudiesLink />
    </div>
  );
};

export default SouthamptonSEO;
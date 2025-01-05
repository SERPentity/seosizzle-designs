import { Helmet } from "react-helmet";
import Navigation from "../../../components/Navigation";
import Breadcrumbs from "../../../components/Breadcrumbs";
import NewcastleHero from "../../../components/locations/seo/NewcastleHero";
import LocationKeyContent from "../../../components/locations/seo/LocationKeyContent";
import LocationServices from "../../../components/locations/seo/LocationServices";
import LocationFAQ from "../../../components/locations/seo/LocationFAQ";
import CaseStudiesLink from "../../../components/locations/seo/CaseStudiesLink";
import { MapPin } from "lucide-react";
import BirminghamTestimonials from "../../../components/locations/seo/BirminghamTestimonials";

const NewcastleSEO = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Newcastle SEO Services | Expert SEO Agency Newcastle | From £360</title>
        <meta name="description" content="Leading Newcastle SEO agency delivering proven results. Our expert SEO services help Newcastle businesses achieve top Google rankings. Free SEO audit available." />
        <meta property="og:title" content="Newcastle SEO Services | Expert SEO Agency Newcastle" />
        <meta property="og:description" content="Leading Newcastle SEO agency delivering proven results. Our expert SEO services help Newcastle businesses achieve top Google rankings." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&h=630&q=80" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Newcastle SEO Services",
              "description": "Expert SEO services in Newcastle helping businesses achieve top Google rankings",
              "priceRange": "Monthly SEO packages start from £360 per month",
              "areaServed": {
                "@type": "City",
                "name": "Newcastle"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Newcastle",
                "addressCountry": "UK"
              }
            }
          `}
        </script>
      </Helmet>

      <Navigation />
      <Breadcrumbs />
      
      <NewcastleHero />
      <LocationKeyContent cityName="Newcastle" />
      <LocationServices cityName="Newcastle" />
      <BirminghamTestimonials />

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Areas We Serve in Newcastle</h2>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            {[
              "Newcastle City Centre",
              "Jesmond",
              "Gosforth",
              "Heaton",
              "Byker",
              "Quayside",
              "Ouseburn",
              "Fenham",
              "West End",
              "Elswick",
              "Walker",
              "Scotswood"
            ].map((area) => (
              <div key={area} className="backdrop-blur-sm bg-white/5 p-4 rounded-lg border border-white/10">
                <MapPin className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LocationFAQ cityName="Newcastle" />
      <CaseStudiesLink />
    </div>
  );
};

export default NewcastleSEO;
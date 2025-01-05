import { Helmet } from "react-helmet";
import Navigation from "../../../components/Navigation";
import Breadcrumbs from "../../../components/Breadcrumbs";
import LondonHero from "../../../components/locations/seo/LondonHero";
import LondonClientTestimonials from "../../../components/locations/seo/LondonClientTestimonials";
import LocationKeyContent from "../../../components/locations/seo/LocationKeyContent";
import LocationServices from "../../../components/locations/seo/LocationServices";
import LocationFAQ from "../../../components/locations/seo/LocationFAQ";
import CaseStudiesLink from "../../../components/locations/seo/CaseStudiesLink";
import { MapPin } from "lucide-react";

const LondonSEO = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>London SEO Services | Expert SEO Agency London | SEO Consultant London</title>
        <meta name="description" content="Leading London SEO agency delivering proven results. Our expert SEO services help London businesses achieve top Google rankings. Free SEO audit available." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "London SEO Services",
              "description": "Expert SEO services in London helping businesses achieve top Google rankings",
              "areaServed": {
                "@type": "City",
                "name": "London"
              },
              "priceRange": "Monthly SEO packages start from £360 per month",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "London",
                "addressCountry": "UK"
              }
            }
          `}
        </script>
      </Helmet>

      <Navigation />
      <Breadcrumbs />
      
      <LondonHero />
      <LocationKeyContent cityName="London" />
      <LondonClientTestimonials />
      <LocationServices cityName="London" />

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Areas We Serve in London</h2>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            {[
              "Central London", 
              "North London", 
              "South London", 
              "East London", 
              "West London", 
              "City of London", 
              "Canary Wharf", 
              "Westminster",
              "Shoreditch",
              "Camden",
              "Islington",
              "Hackney"
            ].map((area) => (
              <div key={area} className="backdrop-blur-sm bg-white/5 p-4 rounded-lg border border-white/10">
                <MapPin className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <LocationFAQ cityName="London" />
      <CaseStudiesLink />
    </div>
  );
};

export default LondonSEO;
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

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>{`${cityName} SEO Services | Expert SEO Agency ${cityName} | From ${basePrice}`}</title>
        <meta 
          name="description" 
          content={`Leading ${cityName} SEO agency delivering proven results. Our expert SEO services help ${cityName} businesses achieve top Google rankings. Packages from ${basePrice}/month. Free SEO audit available.`}
        />
        <meta property="og:title" content={`${cityName} SEO Services | Expert SEO Agency ${cityName}`} />
        <meta 
          property="og:description" 
          content={`Leading ${cityName} SEO agency delivering proven results. Our expert SEO services help ${cityName} businesses achieve top Google rankings.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1487958449943-2429e8be8625" />
        <meta property="og:image:alt" content="Leeds cityscape with modern architectural elements" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="https://images.unsplash.com/photo-1487958449943-2429e8be8625" />
        <meta property="twitter:image:alt" content="Leeds cityscape with modern architectural elements" />
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

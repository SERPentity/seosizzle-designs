import { Helmet } from "react-helmet";
import Navigation from "../../../components/Navigation";
import Breadcrumbs from "../../../components/Breadcrumbs";
import BristolHero from "../../../components/locations/seo/BristolHero";
import CaseStudiesLink from "../../../components/locations/seo/CaseStudiesLink";
import { MapPin } from "lucide-react";

const BristolSEO = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Bristol SEO Services | Expert SEO Agency Bristol</title>
        <meta name="description" content="Leading Bristol SEO agency delivering proven results. Our expert SEO services help Bristol businesses achieve top Google rankings. Free SEO audit available." />
      </Helmet>

      <Navigation />
      <Breadcrumbs />
      
      <BristolHero />

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Bristol SEO Expertise</h2>
                <p className="text-gray-300 mb-6">
                  As Bristol's premier SEO agency, we understand the unique challenges of ranking in the South West's most competitive digital market. Our Bristol-based SEO experts combine local market knowledge with cutting-edge SEO techniques to deliver exceptional results for businesses across the region.
                </p>
                <p className="text-gray-300 mb-6">
                  We specialize in helping Bristol businesses achieve and maintain top search engine rankings through data-driven strategies, comprehensive technical optimization, and content that resonates with your local audience.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Choose Our Bristol SEO Services?</h2>
                <ul className="list-disc pl-6 text-gray-300 space-y-4">
                  <li>Deep understanding of Bristol's digital ecosystem</li>
                  <li>Proven track record of improving local search visibility</li>
                  <li>Comprehensive technical SEO audits and optimization</li>
                  <li>Local content strategy tailored to Bristol audiences</li>
                  <li>Transparent reporting and measurable results</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Areas We Serve in Bristol</h2>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            {[
              "Bristol City Centre",
              "Clifton",
              "Redland",
              "Southville",
              "Bedminster",
              "St Pauls",
              "Stokes Croft",
              "Temple Meads",
              "Harbourside",
              "Gloucester Road",
              "Fishponds",
              "Horfield"
            ].map((area) => (
              <div key={area} className="backdrop-blur-sm bg-white/5 p-4 rounded-lg border border-white/10">
                <MapPin className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CaseStudiesLink />
    </div>
  );
};

export default BristolSEO;
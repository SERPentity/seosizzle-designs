import { Helmet } from "react-helmet";
import Navigation from "../../../components/Navigation";
import Breadcrumbs from "../../../components/Breadcrumbs";
import ManchesterHero from "../../../components/locations/seo/ManchesterHero";
import ManchesterTestimonials from "../../../components/locations/seo/ManchesterTestimonials";
import CaseStudiesLink from "../../../components/locations/seo/CaseStudiesLink";
import { MapPin } from "lucide-react";

const ManchesterSEO = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Manchester SEO Services | Expert SEO Agency Manchester</title>
        <meta name="description" content="Leading Manchester SEO agency delivering proven results. Our expert SEO services help Manchester businesses achieve top Google rankings. Free SEO audit available." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Manchester SEO Services",
              "description": "Expert SEO services in Manchester helping businesses achieve top Google rankings",
              "areaServed": {
                "@type": "City",
                "name": "Manchester"
              },
              "priceRange": "Monthly SEO packages start from £360 per month",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Manchester",
                "addressCountry": "UK"
              }
            }
          `}
        </script>
      </Helmet>

      <Navigation />
      <Breadcrumbs />
      
      <ManchesterHero />

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Manchester SEO Expertise</h2>
                <p className="text-gray-300 mb-6">
                  As Manchester's premier SEO agency, we understand the unique challenges of ranking in the North West's most competitive digital market. Our Manchester-based SEO experts combine local market knowledge with cutting-edge SEO techniques to deliver exceptional results for businesses across the region.
                </p>
                <p className="text-gray-300 mb-6">
                  We specialize in helping Manchester businesses achieve and maintain top search engine rankings through data-driven strategies, comprehensive technical optimization, and content that resonates with your local audience.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Choose Our Manchester SEO Services?</h2>
                <ul className="list-disc pl-6 text-gray-300 space-y-4">
                  <li>Deep understanding of Manchester's digital ecosystem</li>
                  <li>Proven track record of improving local search visibility</li>
                  <li>Comprehensive technical SEO audits and optimization</li>
                  <li>Local content strategy tailored to Manchester audiences</li>
                  <li>Transparent reporting and measurable results</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Comprehensive SEO Services in Manchester</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-4">Local SEO Services Manchester</h3>
                <p className="text-gray-300 mb-4">
                  Dominate local search results with our specialized Manchester SEO services. We optimize your Google Business Profile, build local citations, and implement location-specific keyword strategies to help your business stand out in Manchester's competitive market.
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Google Business Profile optimization</li>
                  <li>Local citation building</li>
                  <li>Location-specific keyword targeting</li>
                  <li>Local link building in Manchester</li>
                </ul>
              </div>

              <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-4">Technical SEO Manchester</h3>
                <p className="text-gray-300 mb-4">
                  Our Manchester technical SEO experts conduct comprehensive audits and implement advanced optimization strategies to ensure your website meets Google's latest requirements and outperforms competitors.
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Site speed optimization</li>
                  <li>Mobile-first optimization</li>
                  <li>Technical infrastructure improvements</li>
                  <li>Schema markup implementation</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-4">Content Strategy Manchester</h3>
                <p className="text-gray-300 mb-4">
                  Data-driven content strategies targeting Manchester's market-specific keywords and topics. Our content team creates engaging, SEO-optimized content that converts visitors into customers.
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Keyword research and analysis</li>
                  <li>Content gap analysis</li>
                  <li>Content creation and optimization</li>
                  <li>Content performance tracking</li>
                </ul>
              </div>

              <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-4">Link Building Services Manchester</h3>
                <p className="text-gray-300 mb-4">
                  Strategic link building campaigns focusing on quality Manchester-based and industry-relevant backlinks to boost your website's authority and search engine rankings.
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Local link building</li>
                  <li>Digital PR services</li>
                  <li>Guest posting</li>
                  <li>Broken link building</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ManchesterTestimonials />

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Areas We Serve in Manchester</h2>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            {[
              "Manchester City Centre",
              "Salford",
              "Spinningfields",
              "Northern Quarter",
              "Ancoats",
              "Didsbury",
              "Chorlton",
              "Media City",
              "Deansgate",
              "Castlefield",
              "Trafford",
              "Stockport"
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

export default ManchesterSEO;

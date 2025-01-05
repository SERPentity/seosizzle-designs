import { Helmet } from "react-helmet";
import Navigation from "../../../components/Navigation";
import Breadcrumbs from "../../../components/Breadcrumbs";
import BirminghamHero from "../../../components/locations/seo/BirminghamHero";
import BirminghamTestimonials from "../../../components/locations/seo/BirminghamTestimonials";
import CaseStudiesLink from "../../../components/locations/seo/CaseStudiesLink";
import { MapPin } from "lucide-react";

const BirminghamSEO = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Birmingham SEO Services | Expert SEO Agency Birmingham</title>
        <meta name="description" content="Leading Birmingham SEO agency delivering proven results. Our expert SEO services help Birmingham businesses achieve top Google rankings. Free SEO audit available." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Birmingham SEO Services",
              "description": "Expert SEO services in Birmingham helping businesses achieve top Google rankings",
              "areaServed": {
                "@type": "City",
                "name": "Birmingham"
              },
              "priceRange": "££",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Birmingham",
                "addressCountry": "UK"
              }
            }
          `}
        </script>
      </Helmet>

      <Navigation />
      <Breadcrumbs />
      
      <BirminghamHero />

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Birmingham SEO Expertise</h2>
                <p className="text-gray-300 mb-6">
                  As Birmingham's premier SEO agency, we understand the unique challenges of ranking in the West Midlands' most competitive digital market. Our Birmingham-based SEO experts combine local market knowledge with cutting-edge SEO techniques to deliver exceptional results for businesses across the region.
                </p>
                <p className="text-gray-300 mb-6">
                  We specialize in helping Birmingham businesses achieve and maintain top search engine rankings through data-driven strategies, comprehensive technical optimization, and content that resonates with your local audience.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Choose Our Birmingham SEO Services?</h2>
                <ul className="list-disc pl-6 text-gray-300 space-y-4">
                  <li>Deep understanding of Birmingham's business landscape</li>
                  <li>Proven track record of improving local search visibility</li>
                  <li>Comprehensive technical SEO audits and optimization</li>
                  <li>Local content strategy tailored to Birmingham audiences</li>
                  <li>Transparent reporting and measurable results</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BirminghamTestimonials />

      {/* Core SEO Services */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Comprehensive SEO Services in Birmingham</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-4">Local SEO Services Birmingham</h3>
                <p className="text-gray-300 mb-4">
                  Dominate local search results with our specialized Birmingham SEO services. We optimize your Google Business Profile, build local citations, and implement location-specific keyword strategies to help your business stand out in Birmingham's competitive market.
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Google Business Profile optimization</li>
                  <li>Local citation building</li>
                  <li>Location-specific keyword targeting</li>
                  <li>Local link building in Birmingham</li>
                </ul>
              </div>

              <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-4">Technical SEO Birmingham</h3>
                <p className="text-gray-300 mb-4">
                  Our Birmingham technical SEO experts conduct comprehensive audits and implement advanced optimization strategies to ensure your website meets Google's latest requirements and outperforms competitors.
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
                <h3 className="text-2xl font-bold mb-4">Content Strategy Birmingham</h3>
                <p className="text-gray-300 mb-4">
                  Data-driven content strategies targeting Birmingham's market-specific keywords and topics. Our content team creates engaging, SEO-optimized content that converts visitors into customers.
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Keyword research and analysis</li>
                  <li>Content gap analysis</li>
                  <li>Content creation and optimization</li>
                  <li>Content performance tracking</li>
                </ul>
              </div>

              <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-4">Link Building Services Birmingham</h3>
                <p className="text-gray-300 mb-4">
                  Strategic link building campaigns focusing on quality Birmingham-based and industry-relevant backlinks to boost your website's authority and search engine rankings.
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

      {/* Areas We Serve */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Areas We Serve in Birmingham</h2>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            {[
              "Birmingham City Centre",
              "Edgbaston",
              "Solihull",
              "Sutton Coldfield",
              "Moseley",
              "Harborne",
              "Kings Heath",
              "Erdington",
              "Digbeth",
              "Jewellery Quarter",
              "Selly Oak",
              "Aston"
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

export default BirminghamSEO;
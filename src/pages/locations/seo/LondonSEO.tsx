import { Helmet } from "react-helmet";
import Navigation from "../../../components/Navigation";
import Breadcrumbs from "../../../components/Breadcrumbs";
import LondonHero from "../../../components/locations/seo/LondonHero";
import LondonTestimonials from "../../../components/locations/seo/LondonTestimonials";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

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
              "priceRange": "££",
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

      {/* Key SEO Content Section - Placed high for Google crawlers */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">London SEO Expertise</h2>
                <p className="text-gray-300 mb-6">
                  As London's premier SEO agency, we understand the unique challenges of ranking in one of the world's most competitive digital markets. Our London-based SEO experts combine local market knowledge with cutting-edge SEO techniques to deliver exceptional results for businesses across the capital.
                </p>
                <p className="text-gray-300 mb-6">
                  We specialize in helping London businesses achieve and maintain top search engine rankings through data-driven strategies, comprehensive technical optimization, and content that resonates with your local audience.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Choose Our London SEO Services?</h2>
                <ul className="list-disc pl-6 text-gray-300 space-y-4">
                  <li>Specialized knowledge of London's competitive digital landscape</li>
                  <li>Proven track record of improving local search visibility</li>
                  <li>Comprehensive technical SEO audits and optimization</li>
                  <li>Local content strategy tailored to London audiences</li>
                  <li>Transparent reporting and measurable results</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LondonTestimonials />

      {/* Core SEO Services */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Comprehensive SEO Services in London</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-4">Local SEO Services London</h3>
                <p className="text-gray-300 mb-4">
                  Dominate local search results with our specialized London SEO services. We optimize your Google Business Profile, build local citations, and implement location-specific keyword strategies to help your business stand out in London's competitive market.
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Google Business Profile optimization</li>
                  <li>Local citation building</li>
                  <li>Location-specific keyword targeting</li>
                  <li>Local link building in London</li>
                </ul>
              </div>

              <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-4">Technical SEO London</h3>
                <p className="text-gray-300 mb-4">
                  Our London technical SEO experts conduct comprehensive audits and implement advanced optimization strategies to ensure your website meets Google's latest requirements and outperforms competitors.
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Site speed optimization</li>
                  <li>Mobile-first optimization</li>
                  <li>Technical infrastructure improvements</li>
                  <li>Schema markup implementation</li>
                </ul>
              </div>

              <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-4">E-commerce SEO London</h3>
                <p className="text-gray-300 mb-4">
                  Specialized e-commerce SEO strategies to increase product visibility and sales for London's online retailers. Our approach combines technical expertise with conversion optimization.
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Product page optimization</li>
                  <li>Category page SEO</li>
                  <li>Shopping feed optimization</li>
                  <li>Conversion rate optimization</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-4">Content Strategy London</h3>
                <p className="text-gray-300 mb-4">
                  Data-driven content strategies targeting London's market-specific keywords and topics. Our content team creates engaging, SEO-optimized content that converts visitors into customers.
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Keyword research and analysis</li>
                  <li>Content gap analysis</li>
                  <li>Content creation and optimization</li>
                  <li>Content performance tracking</li>
                </ul>
              </div>

              <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-4">Link Building Services London</h3>
                <p className="text-gray-300 mb-4">
                  Strategic link building campaigns focusing on quality London-based and industry-relevant backlinks to boost your website's authority and search engine rankings.
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Local link building</li>
                  <li>Digital PR services</li>
                  <li>Guest posting</li>
                  <li>Broken link building</li>
                </ul>
              </div>

              <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-4">SEO Consulting London</h3>
                <p className="text-gray-300 mb-4">
                  Expert SEO consultation services for London businesses seeking strategic guidance and implementation support for their digital marketing efforts.
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>SEO strategy development</li>
                  <li>SEO training for teams</li>
                  <li>Performance monitoring</li>
                  <li>ROI tracking and reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
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
      
      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions About London SEO</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-4">How much does SEO cost in London?</h3>
              <p className="text-gray-300">
                SEO services in London typically range from £1,000 to £10,000+ per month, depending on your business needs, competition level, and campaign objectives. We offer customized packages tailored to your specific requirements and budget.
              </p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-4">How long does SEO take to work in London?</h3>
              <p className="text-gray-300">
                While initial improvements can be seen within 3-6 months, significant results in London's competitive market typically take 6-12 months. We focus on sustainable, long-term growth rather than quick fixes.
              </p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-4">Do you guarantee first page rankings?</h3>
              <p className="text-gray-300">
                While we can't guarantee specific rankings due to Google's ever-changing algorithms, we have a proven track record of achieving first page results for our London clients through ethical SEO practices and data-driven strategies.
              </p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-4">What makes your London SEO services different?</h3>
              <p className="text-gray-300">
                Our deep understanding of London's market, combined with advanced technical expertise and transparent reporting, sets us apart. We focus on delivering measurable ROI and maintaining long-term client relationships.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 inline-block">
            <h2 className="text-2xl font-bold mb-4">Ready to Dominate London's Search Results?</h2>
            <p className="text-lg text-gray-300 mb-6">
              Get a comprehensive SEO audit of your website and discover opportunities for growth
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:opacity-90 transition-all duration-300"
            >
              Start Your SEO Journey
              <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LondonSEO;

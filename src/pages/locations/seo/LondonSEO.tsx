import Navigation from "../../../components/Navigation";
import { ArrowRight, CheckCircle, MapPin, Trophy, Users, Search, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { Helmet } from "react-helmet";

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
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center animate-fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              London SEO Services | Expert SEO Agency
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Award-winning London SEO agency helping businesses dominate search rankings with data-driven strategies and proven results. Serving Central London, Greater London, and surrounding areas.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Your Free SEO Audit
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 text-center">
              <Search className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">9.4M+</h3>
              <p className="text-gray-300">Monthly Local Searches</p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 text-center">
              <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">8.9M</h3>
              <p className="text-gray-300">London Population</p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 text-center">
              <Trophy className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">1M+</h3>
              <p className="text-gray-300">London Businesses</p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 text-center">
              <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">98%</h3>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

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

      {/* London Market Insights */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">London SEO Expertise</h2>
          <div className="prose prose-invert max-w-none">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Why Choose Our London SEO Agency?</h3>
                <p className="text-gray-300 mb-6">
                  As London's premier SEO agency, we understand the unique challenges of ranking in one of the world's most competitive digital markets. Our London-based SEO experts combine local market knowledge with cutting-edge SEO techniques to deliver exceptional results.
                </p>
                <p className="text-gray-300 mb-6">
                  We've helped businesses across London, from startups in Tech City to established enterprises in the Square Mile, achieve and maintain top search engine rankings. Our approach is data-driven, transparent, and focused on delivering measurable ROI.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">London SEO Success Stories</h3>
                <p className="text-gray-300 mb-6">
                  Our proven track record includes helping London businesses achieve:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>300% increase in organic traffic</li>
                  <li>200% growth in qualified leads</li>
                  <li>Top 3 rankings for competitive keywords</li>
                  <li>50% reduction in cost per acquisition</li>
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

      {/* FAQ Section for SEO */}
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
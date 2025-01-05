import Navigation from "../../../components/Navigation";
import { ArrowRight, CheckCircle, MapPin, Trophy, Users, Search } from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";

const LondonSEO = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center animate-fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              London SEO Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Expert SEO agency in London helping businesses dominate search rankings with data-driven strategies and proven results
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

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
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
                <h3 className="text-2xl font-bold mb-4">Local SEO London</h3>
                <p className="text-gray-300 mb-4">
                  Specialized local SEO services helping London businesses dominate local search results. We optimize your Google Business Profile, build local citations, and implement location-specific keyword strategies.
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-4">Technical SEO London</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive technical SEO audits and optimization services ensuring your website meets Google's latest requirements. We focus on site speed, mobile optimization, and technical infrastructure.
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-4">E-commerce SEO London</h3>
                <p className="text-gray-300 mb-4">
                  Specialized e-commerce SEO strategies to increase product visibility and sales. Perfect for London's online retailers looking to boost their digital presence.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-4">Content Strategy London</h3>
                <p className="text-gray-300 mb-4">
                  Data-driven content strategies that target London's market-specific keywords and topics. We create engaging, SEO-optimized content that converts.
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-4">Link Building Services London</h3>
                <p className="text-gray-300 mb-4">
                  Strategic link building campaigns focusing on quality London-based and industry-relevant backlinks to boost your website's authority.
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-4">SEO Consulting London</h3>
                <p className="text-gray-300 mb-4">
                  Expert SEO consultation services for London businesses seeking strategic guidance and implementation support for their digital marketing efforts.
                </p>
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
            <p className="text-gray-300 mb-6">
              As London's premier SEO agency, we understand the unique challenges of ranking in one of the world's most competitive digital markets. Our London-based SEO experts combine local market knowledge with cutting-edge SEO techniques to deliver exceptional results.
            </p>
            <p className="text-gray-300 mb-6">
              We've helped businesses across London, from startups in Tech City to established enterprises in the Square Mile, achieve and maintain top search engine rankings. Our approach is data-driven, transparent, and focused on delivering measurable ROI.
            </p>
            <p className="text-gray-300">
              Whether you're a local business targeting specific London boroughs or a larger organization competing city-wide, our SEO strategies are tailored to your specific needs and market conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Areas We Serve in London</h2>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            {["Central London", "North London", "South London", "East London", "West London", "City of London", "Canary Wharf", "Westminster"].map((area) => (
              <div key={area} className="backdrop-blur-sm bg-white/5 p-4 rounded-lg border border-white/10">
                <MapPin className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <span>{area}</span>
              </div>
            ))}
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
              Start Your Journey
              <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LondonSEO;

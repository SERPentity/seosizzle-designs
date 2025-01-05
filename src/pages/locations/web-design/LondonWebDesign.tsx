import Navigation from "../../../components/Navigation";
import { Monitor, Paintbrush, Code, ArrowRight, CheckCircle, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CaseStudiesLink from "../../../components/locations/seo/CaseStudiesLink";

const LondonWebDesign = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Breadcrumbs />
      
      {/* Hero Section with SEO-optimized content */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center animate-fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Web Design Agency London
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Award-winning web design agency in London creating stunning, conversion-focused websites 
              for businesses across the capital. Our expert team combines creative excellence with 
              technical expertise to deliver websites that drive real business results.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Project
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">London Web Design Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
              <Monitor className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">E-commerce Website Design</h3>
              <p className="text-gray-300">
                Custom e-commerce solutions designed to drive sales and enhance user experience 
                for London businesses. Built with secure payment gateways and mobile-first design.
              </p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
              <Paintbrush className="text-purple-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">WordPress Development</h3>
              <p className="text-gray-300">
                Expert WordPress development services delivering customized, scalable, and 
                user-friendly websites for London businesses.
              </p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
              <Code className="text-pink-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">Responsive Web Design</h3>
              <p className="text-gray-300">
                Mobile-first web design ensuring your website looks and performs perfectly 
                across all devices. Essential for London's tech-savvy audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our London Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
              <blockquote className="text-lg text-gray-300 mb-6">
                "SEOsnafu transformed our online presence with their web design expertise. 
                The new website has significantly improved our conversion rates and user engagement."
              </blockquote>
              <div className="text-white font-semibold">Tom Abbott</div>
              <div className="text-gray-400">Director, The Stair Guys Ltd</div>
            </div>
            <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
              <blockquote className="text-lg text-gray-300 mb-6">
                "Their web design work helped us establish a strong online presence. 
                The website they created perfectly represents our brand and has helped us grow our business."
              </blockquote>
              <div className="text-white font-semibold">Tony Reynolds</div>
              <div className="text-gray-400">Director, Bio UK Fuels Ltd</div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Areas We Serve in London</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Central London",
              "East London",
              "West London",
              "North London",
              "South London",
              "Greater London"
            ].map((area) => (
              <div key={area} className="flex items-center space-x-3 backdrop-blur-sm bg-white/5 p-4 rounded-lg border border-white/10">
                <MapPin className="text-blue-400" size={20} />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our London Web Design Agency</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {[
                "Expert London-based web designers and developers",
                "Proven track record with local businesses",
                "Mobile-first responsive design approach",
                "SEO-friendly development practices",
                "Ongoing support and maintenance",
                "Competitive pricing for London businesses"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-blue-400 flex-shrink-0" size={20} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Our Web Design Process</h3>
              <div className="space-y-4">
                <p className="text-gray-300">
                  We follow a proven process to deliver exceptional results for our London clients:
                </p>
                <ol className="space-y-4 list-decimal pl-4">
                  <li>Initial consultation and requirements gathering</li>
                  <li>Custom design and wireframe creation</li>
                  <li>Development and testing</li>
                  <li>Content integration and optimization</li>
                  <li>Launch and ongoing support</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Link */}
      <CaseStudiesLink />
    </div>
  );
};

export default LondonWebDesign;
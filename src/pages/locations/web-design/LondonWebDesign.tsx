import Navigation from "../../../components/Navigation";
import { ArrowRight, CheckCircle, MapPin, Palette, Code, Gauge } from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";

const LondonWebDesign = () => {
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
              Professional Web Design London
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Award-winning web design agency in London creating stunning, conversion-focused websites for businesses across the capital
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

      {/* Main Services Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Web Design Services in London</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-4">E-commerce Website Design London</h3>
                <p className="text-gray-300 mb-4">
                  Custom e-commerce solutions designed to drive sales and enhance user experience for London businesses. Our e-commerce websites are built with secure payment gateways, inventory management, and mobile-first design principles.
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-4">WordPress Web Design London</h3>
                <p className="text-gray-300 mb-4">
                  Expert WordPress development services delivering customized, scalable, and user-friendly websites. Perfect for London businesses seeking a powerful content management system.
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-4">Responsive Web Design London</h3>
                <p className="text-gray-300 mb-4">
                  Mobile-first web design ensuring your website looks and performs perfectly across all devices. Essential for reaching London's tech-savvy audience.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-4">Corporate Web Design London</h3>
                <p className="text-gray-300 mb-4">
                  Professional web design services for London's corporate sector. We create sophisticated, brand-aligned websites that establish credibility and drive business growth.
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-4">UX Design Services London</h3>
                <p className="text-gray-300 mb-4">
                  User-centered design approach focusing on creating intuitive, engaging web experiences. We help London businesses improve conversion rates through strategic UX design.
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-4">Bespoke Web Design London</h3>
                <p className="text-gray-300 mb-4">
                  Custom web design solutions tailored to your specific business needs. We create unique, branded websites that help London businesses stand out in a competitive market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 text-center">
              <Palette className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Bespoke Design</h3>
              <p className="text-gray-300">Unique designs that capture your brand's essence</p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 text-center">
              <Code className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Clean Code</h3>
              <p className="text-gray-300">Built with the latest technologies</p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 text-center">
              <Gauge className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Lightning Fast</h3>
              <p className="text-gray-300">Optimized for peak performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* London-Specific Content */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Web Design Agency in London</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              As a leading web design agency in London, we understand the unique challenges and opportunities of the city's diverse business landscape. From startups in Shoreditch to established corporations in the City, our web design services are tailored to meet the specific needs of London-based businesses.
            </p>
            <p className="text-gray-300 mb-6">
              Our London web design team combines creative excellence with technical expertise to deliver websites that not only look stunning but also drive real business results. We stay ahead of the latest web design trends while ensuring your website maintains timeless appeal and functionality.
            </p>
            <p className="text-gray-300">
              Whether you're a small business in Camden or a large enterprise in Canary Wharf, our web design services in London are scalable to meet your needs. We pride ourselves on creating websites that reflect London's dynamic business environment while delivering measurable results for your organization.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 inline-block">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Online Presence?</h2>
            <p className="text-lg text-gray-300 mb-6">
              Let's create a website that captures attention and drives results
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:opacity-90 transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LondonWebDesign;

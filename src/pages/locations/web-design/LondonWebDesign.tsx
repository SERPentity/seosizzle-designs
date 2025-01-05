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
              London Web Design Agency
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Creating stunning, conversion-focused websites for London's most ambitious businesses
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

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Web Design Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Design Services</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-400 mr-3 mt-1" size={20} />
                  <span>Custom website design</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-400 mr-3 mt-1" size={20} />
                  <span>E-commerce solutions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-400 mr-3 mt-1" size={20} />
                  <span>Mobile-first approach</span>
                </li>
              </ul>
            </div>
            <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Development Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-purple-400 mr-3 mt-1" size={20} />
                  <span>SEO-friendly development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-purple-400 mr-3 mt-1" size={20} />
                  <span>Fast loading speeds</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-purple-400 mr-3 mt-1" size={20} />
                  <span>Security implementation</span>
                </li>
              </ul>
            </div>
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
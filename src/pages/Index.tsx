import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Index = () => {
  const benefits = [
    "Dominate Google Rankings",
    "Increase Organic Traffic",
    "Boost Conversions",
    "Local SEO Expertise",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center animate-fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
              Transform Your Digital Presence
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Award-winning UK SEO agency and web design studio crafting beautiful, high-performing websites that dominate search rankings.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Journey
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-accent to-white" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Elevate Your Online Success
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-up backdrop-blur-sm bg-white/50 border border-white/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-secondary to-primary p-2 rounded-lg text-white mr-4">
                    <Check size={20} />
                  </div>
                  <span className="text-lg font-medium group-hover:text-secondary transition-colors">
                    {benefit}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-gradient-to-b from-white to-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            UK-Wide Digital Excellence
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              to="/london"
              className="group relative overflow-hidden rounded-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90 group-hover:opacity-95 transition-opacity" />
              <div className="relative p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">London</h3>
                <p className="text-white/90">
                  Innovative SEO strategies for the heart of UK business.
                </p>
                <ArrowRight className="mt-4 transform group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
            <Link
              to="/manchester"
              className="group relative overflow-hidden rounded-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-90 group-hover:opacity-95 transition-opacity" />
              <div className="relative p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Manchester</h3>
                <p className="text-white/90">
                  Results-driven SEO solutions for northern powerhouses.
                </p>
                <ArrowRight className="mt-4 transform group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
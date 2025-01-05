import { ArrowRight, CheckCircle } from "lucide-react";
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
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Dominate Search Rankings Across the UK
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Expert SEO and web design services that drive real business growth. We take your business to the top of Google.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center p-6 bg-white rounded-lg shadow-sm animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="text-secondary mr-3" size={24} />
                <span className="text-lg font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Serving Major Cities Across the UK
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              to="/london"
              className="p-8 bg-accent rounded-lg hover:bg-accent/80 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-2">London</h3>
              <p className="text-gray-600">
                Premier SEO services for businesses in London and surrounding areas.
              </p>
            </Link>
            <Link
              to="/manchester"
              className="p-8 bg-accent rounded-lg hover:bg-accent/80 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-2">Manchester</h3>
              <p className="text-gray-600">
                Expert SEO solutions for Manchester-based businesses.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
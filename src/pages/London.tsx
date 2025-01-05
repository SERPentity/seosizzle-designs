import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Breadcrumbs from "../components/Breadcrumbs";

const London = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center animate-fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
              London SEO Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Expert SEO strategies tailored for London businesses to enhance visibility and drive growth.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started
              <Check className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-accent to-white" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Why Choose Our London SEO Services?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group p-8 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-up backdrop-blur-sm bg-white/50 border border-white/20">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-secondary to-primary p-2 rounded-lg text-white mr-4">
                  <Check size={20} />
                </div>
                <span className="text-lg font-medium group-hover:text-secondary transition-colors">
                  Local Expertise
                </span>
              </div>
            </div>
            <div className="group p-8 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-up backdrop-blur-sm bg-white/50 border border-white/20">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-secondary to-primary p-2 rounded-lg text-white mr-4">
                  <Check size={20} />
                </div>
                <span className="text-lg font-medium group-hover:text-secondary transition-colors">
                  Proven Results
                </span>
              </div>
            </div>
            <div className="group p-8 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-up backdrop-blur-sm bg-white/50 border border-white/20">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-secondary to-primary p-2 rounded-lg text-white mr-4">
                  <Check size={20} />
                </div>
                <span className="text-lg font-medium group-hover:text-secondary transition-colors">
                  Customized Strategies
                </span>
              </div>
            </div>
            <div className="group p-8 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-up backdrop-blur-sm bg-white/50 border border-white/20">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-secondary to-primary p-2 rounded-lg text-white mr-4">
                  <Check size={20} />
                </div>
                <span className="text-lg font-medium group-hover:text-secondary transition-colors">
                  Ongoing Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default London;

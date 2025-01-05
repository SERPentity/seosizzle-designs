import Navigation from "../components/Navigation";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const LocalSEO = () => {
  const features = [
    "Google Business Profile Optimization",
    "Local Citation Building",
    "Local Keyword Research",
    "Review Management",
    "Local Link Building",
    "Local Content Strategy",
    "Competitor Analysis",
    "Local Landing Pages"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
              Local SEO Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dominate local search results and attract nearby customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl animate-fade-up">
              <h2 className="text-2xl font-bold mb-6">What We Offer</h2>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-blue-400 mr-3 mt-1" size={20} />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-6">Why Local SEO Matters</h2>
                <p className="text-gray-300 mb-4">
                  46% of all Google searches are looking for local information. Without proper local SEO, you're missing out on valuable customers in your area.
                </p>
                <p className="text-gray-300">
                  Our local SEO services help you capture this audience by optimizing your online presence for local searches, making sure you're visible when nearby customers are looking for your services.
                </p>
              </div>

              <Link
                to="/contact"
                className="block p-8 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
                <div className="flex items-center text-blue-400">
                  <span>Contact us for a free local SEO audit</span>
                  <ArrowRight className="ml-2" size={20} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalSEO;
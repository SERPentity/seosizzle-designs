import Navigation from "../../components/Navigation";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";

const LocalSEO = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Breadcrumbs />
      
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
              Local SEO Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dominate local search results and attract more customers in your area
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-semibold mb-4">Why Local SEO Matters</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <ArrowRight className="text-blue-400" size={20} />
                  <span>46% of all Google searches are looking for local information</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="text-blue-400" size={20} />
                  <span>88% of local business searches on mobile result in a call or visit within 24 hours</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="text-blue-400" size={20} />
                  <span>97% of people learn more about a local company online than anywhere else</span>
                </li>
              </ul>
            </div>
            
            <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <ArrowRight className="text-blue-400" size={20} />
                  <span>Google Business Profile optimization</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="text-blue-400" size={20} />
                  <span>Local keyword research and targeting</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="text-blue-400" size={20} />
                  <span>Local citation building and management</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="text-blue-400" size={20} />
                  <span>Review generation and management</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:opacity-90 transition-opacity"
            >
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalSEO;
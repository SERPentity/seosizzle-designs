import Navigation from "../../components/Navigation";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";

const SEOServices = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Breadcrumbs />
      
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
              SEO Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive SEO solutions to improve your online visibility and drive organic traffic
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Link to="/seo/technical-seo" className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
              <h3 className="text-xl font-semibold mb-3">Technical SEO</h3>
              <p className="text-gray-300 mb-4">Optimize your website's technical foundation</p>
              <ArrowRight className="text-blue-400" />
            </Link>
            
            <Link to="/seo/local-seo" className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
              <h3 className="text-xl font-semibold mb-3">Local SEO</h3>
              <p className="text-gray-300 mb-4">Dominate local search results</p>
              <ArrowRight className="text-blue-400" />
            </Link>
            
            <Link to="/seo/content-strategy" className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
              <h3 className="text-xl font-semibold mb-3">Content Strategy</h3>
              <p className="text-gray-300 mb-4">Create content that ranks and converts</p>
              <ArrowRight className="text-blue-400" />
            </Link>
            
            <Link to="/seo/audit" className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
              <h3 className="text-xl font-semibold mb-3">SEO Audit</h3>
              <p className="text-gray-300 mb-4">Comprehensive website analysis</p>
              <ArrowRight className="text-blue-400" />
            </Link>
            
            <Link to="/seo/competitor-analysis" className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
              <h3 className="text-xl font-semibold mb-3">Competitor Analysis</h3>
              <p className="text-gray-300 mb-4">Stay ahead of your competition</p>
              <ArrowRight className="text-blue-400" />
            </Link>
            
            <Link to="/seo/link-building" className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
              <h3 className="text-xl font-semibold mb-3">Link Building</h3>
              <p className="text-gray-300 mb-4">Build high-quality backlinks</p>
              <ArrowRight className="text-blue-400" />
            </Link>
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

export default SEOServices;
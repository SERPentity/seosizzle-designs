import Navigation from "../../components/Navigation";
import { Monitor, Paintbrush, Code, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";

const WebDesign = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Breadcrumbs />
      
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
              Professional Web Design Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Creating stunning, modern websites that capture your brand's essence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
              <Monitor className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">Modern Design</h3>
              <p className="text-gray-300">Clean, contemporary layouts that make your brand stand out</p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
              <Paintbrush className="text-purple-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">Custom Solutions</h3>
              <p className="text-gray-300">Tailored designs that match your brand identity perfectly</p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
              <Code className="text-pink-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">Clean Code</h3>
              <p className="text-gray-300">Optimized performance and seamless functionality</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:opacity-90 transition-opacity"
            >
              Start Your Project
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDesign;
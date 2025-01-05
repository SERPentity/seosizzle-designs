import Navigation from "../components/Navigation";
import { Smartphone, Laptop, Monitor, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ResponsiveDesign = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
              Responsive Web Design
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Websites that look and perform beautifully across all devices
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
              <Smartphone className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">Mobile First</h3>
              <p className="text-gray-300">Optimized for the growing mobile audience</p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
              <Laptop className="text-purple-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">Tablet Ready</h3>
              <p className="text-gray-300">Perfect viewing on tablets and iPads</p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
              <Monitor className="text-pink-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">Desktop Optimized</h3>
              <p className="text-gray-300">Full-featured experience on larger screens</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
              <h2 className="text-3xl font-bold mb-6">Benefits</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <ArrowRight className="text-blue-400" size={20} />
                  <span>Improved user experience across all devices</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="text-blue-400" size={20} />
                  <span>Better search engine rankings</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="text-blue-400" size={20} />
                  <span>Increased conversion rates</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="text-blue-400" size={20} />
                  <span>Future-proof design approach</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="text-blue-400" size={20} />
                  <span>Cost-effective maintenance</span>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Approach</h2>
              <div className="space-y-4">
                <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-2">Fluid Grids</h3>
                  <p className="text-gray-300">Flexible layouts that adapt to screen size</p>
                </div>
                <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-2">Flexible Images</h3>
                  <p className="text-gray-300">Images that scale within their containing elements</p>
                </div>
                <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-2">Media Queries</h3>
                  <p className="text-gray-300">Targeted styles for specific device characteristics</p>
                </div>
              </div>
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

export default ResponsiveDesign;
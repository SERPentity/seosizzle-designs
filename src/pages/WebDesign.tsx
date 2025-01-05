import Navigation from "../components/Navigation";
import { Monitor, Paintbrush, Code, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const WebDesign = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
              Professional Web Design Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Creating stunning, modern websites that capture your brand's essence and drive results
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

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Web Design Process</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center">1</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Discovery</h3>
                    <p className="text-gray-300">Understanding your brand, goals, and target audience</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-400 flex items-center justify-center">2</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Design</h3>
                    <p className="text-gray-300">Creating wireframes and visual designs for your approval</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-pink-400 flex items-center justify-center">3</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Development</h3>
                    <p className="text-gray-300">Building your website with clean, efficient code</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center">4</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Launch</h3>
                    <p className="text-gray-300">Testing and deploying your website to go live</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
              <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <ArrowRight className="text-blue-400" size={20} />
                  <span>Expert designers and developers</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="text-blue-400" size={20} />
                  <span>Mobile-first responsive design</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="text-blue-400" size={20} />
                  <span>SEO-friendly development</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="text-blue-400" size={20} />
                  <span>Fast loading speeds</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="text-blue-400" size={20} />
                  <span>Ongoing support and maintenance</span>
                </li>
              </ul>
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
import Navigation from "../components/Navigation";
import { Users, Target, BarChart3, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const UXDesign = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
              User Experience Design
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Creating intuitive, user-centered designs that delight and convert
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
              <Users className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">User Research</h3>
              <p className="text-gray-300">Understanding your users' needs and behaviors</p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
              <Target className="text-purple-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">Usability Testing</h3>
              <p className="text-gray-300">Ensuring your design works for real users</p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
              <BarChart3 className="text-pink-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">Analytics & Optimization</h3>
              <p className="text-gray-300">Data-driven design improvements</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our UX Process</h2>
              <div className="space-y-4">
                <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-2">Research & Discovery</h3>
                  <p className="text-gray-300">Understanding user needs and business goals</p>
                </div>
                <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-2">Information Architecture</h3>
                  <p className="text-gray-300">Organizing content for optimal user flow</p>
                </div>
                <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-2">Interaction Design</h3>
                  <p className="text-gray-300">Creating intuitive user interfaces</p>
                </div>
                <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-2">Testing & Iteration</h3>
                  <p className="text-gray-300">Refining based on user feedback</p>
                </div>
              </div>
            </div>
            <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
              <h2 className="text-3xl font-bold mb-6">Key Benefits</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <ArrowRight className="text-blue-400" size={20} />
                  <span>Increased user satisfaction</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="text-blue-400" size={20} />
                  <span>Higher conversion rates</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="text-blue-400" size={20} />
                  <span>Reduced support costs</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="text-blue-400" size={20} />
                  <span>Better user retention</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="text-blue-400" size={20} />
                  <span>Competitive advantage</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:opacity-90 transition-opacity"
            >
              Improve Your UX
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UXDesign;
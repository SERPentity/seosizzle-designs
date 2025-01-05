import Navigation from "../components/Navigation";
import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
              About SEOsnafu
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading the way in SEO and web design excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl animate-fade-up">
              <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-300">
                At SEOsnafu, we combine technical expertise with creative innovation
                to deliver outstanding results for our clients. Our approach to SEO
                and web design is built on years of experience and a deep
                understanding of digital marketing.
              </p>
            </div>

            <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-2xl font-bold mb-6">Why Choose Us</h2>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="text-blue-400 mr-3" size={20} />
                  <span>Expert SEO strategies that deliver results</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="text-blue-400 mr-3" size={20} />
                  <span>Custom web design solutions</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="text-blue-400 mr-3" size={20} />
                  <span>Proven track record of success</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
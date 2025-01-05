import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SheffieldHero = () => {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center animate-fade-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Sheffield SEO Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Expert SEO strategies tailored for Sheffield businesses to enhance visibility and drive growth.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Started
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SheffieldHero;
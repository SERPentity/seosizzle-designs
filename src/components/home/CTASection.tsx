import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to Grow Your Business?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Get started with a free SEO audit and discover how we can help you achieve your digital goals
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="px-8 py-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white rounded-full hover:opacity-90 transition-opacity"
          >
            Get Your Free SEO Audit
          </Link>
          <Link
            to="/services"
            className="px-8 py-4 border border-white/30 text-white rounded-full hover:bg-white/10 transition-all duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

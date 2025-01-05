import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudiesLink = () => {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 inline-block">
          <h2 className="text-2xl font-bold mb-4">Discover Our Success Stories</h2>
          <p className="text-lg text-gray-300 mb-6">
            See how we've helped businesses achieve remarkable growth through SEO
          </p>
          <Link
            to="/case-studies"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:opacity-90 transition-all duration-300"
          >
            View Case Studies
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesLink;
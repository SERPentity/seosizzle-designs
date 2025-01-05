import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const TechnicalCTA: FC = () => {
  return (
    <section className="text-center">
      <div className="inline-block p-8 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10">
        <h2 className="text-2xl font-bold mb-4">Ready to Improve Your Technical SEO?</h2>
        <p className="text-lg text-gray-300 mb-6">
          Get a comprehensive technical audit of your website and discover opportunities for improvement
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:opacity-90 transition-all duration-300"
        >
          Get Your Free Technical Audit
          <ArrowRight className="ml-2" />
        </Link>
      </div>
    </section>
  );
};

export default TechnicalCTA;
import Navigation from "../../components/Navigation";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";

const SEOAudit = () => {
  const auditFeatures = [
    "Technical SEO analysis",
    "Content quality assessment",
    "Backlink profile review",
    "Mobile optimization check",
    "Site speed analysis",
    "Competitor comparison",
    "Keyword opportunities",
    "User experience evaluation"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Breadcrumbs />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <section className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
              SEO Audit Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get a comprehensive analysis of your website's SEO performance
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {auditFeatures.map((feature, index) => (
              <div key={index} className="flex items-center p-6 backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10">
                <CheckCircle className="text-blue-400 mr-4" />
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:opacity-90 transition-opacity"
            >
              Get Your Free SEO Audit
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SEOAudit;
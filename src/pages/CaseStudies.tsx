import Navigation from "../components/Navigation";
import Breadcrumbs from "../components/Breadcrumbs";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "The Stair Guys Ltd",
      description: "How we helped a local stair installation company achieve #1 rankings and increase their keyword visibility by 350+ terms in just 6 months",
      industry: "Home Improvement",
      image: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?auto=format&fit=crop&w=800&q=80",
      slug: "stair-guys-ltd"
    },
    // Placeholder for future case studies
    {
      title: "Coming Soon",
      description: "More success stories from our valued clients",
      industry: "Various",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      slug: ""
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Breadcrumbs />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real businesses. See how we've helped service-based companies achieve remarkable growth through SEO and web design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-400 mb-2">{study.industry}</div>
                  <h2 className="text-2xl font-bold mb-3">{study.title}</h2>
                  <p className="text-gray-300 mb-4">{study.description}</p>
                  {study.slug && (
                    <Link
                      to={`/case-studies/${study.slug}`}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CaseStudies;
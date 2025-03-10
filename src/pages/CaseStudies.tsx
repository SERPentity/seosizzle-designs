import { Helmet } from "react-helmet";
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
      image: "/lovable-uploads/e8dce3f1-6ee8-44ed-a3a1-e4cd46489d54.png",
      slug: "stair-guys-ltd"
    },
    {
      title: "Bio UK Fuels",
      description: "How we helped the UK's leading cooking oil recycling company achieve 312% growth in organic leads and nationwide coverage",
      industry: "Waste Management",
      image: "/lovable-uploads/12058831-a3de-4815-a87e-dbf5c93b0263.png",
      slug: "bio-uk-fuels"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>SEO Success Stories & Case Studies | SEO Snafu</title>
        <meta name="description" content="Discover how we've helped businesses achieve remarkable growth through SEO. Real results, real businesses - see our proven track record of success." />
        <meta property="og:title" content="SEO Success Stories & Case Studies | SEO Snafu" />
        <meta property="og:description" content="Discover how we've helped businesses achieve remarkable growth through SEO. Real results, real businesses - see our proven track record of success." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80" />
        <meta property="og:image:alt" content="Data analytics dashboard showing successful SEO campaign results for our clients" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="SEO Success Stories & Case Studies | SEO Snafu" />
        <meta property="twitter:description" content="Discover how we've helped businesses achieve remarkable growth through SEO. Real results, real businesses - see our proven track record of success." />
        <meta property="twitter:image" content="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80" />
        <meta property="twitter:image:alt" content="Data analytics dashboard showing successful SEO campaign results for our clients" />
        <link rel="canonical" href="https://seosnafu.co.uk/case-studies" />
      </Helmet>
      
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

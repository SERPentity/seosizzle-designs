import Navigation from "../components/Navigation";
import { CheckCircle, ArrowRight, BarChart3, Search, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

const CompetitorAnalysis = () => {
  const features = [
    {
      icon: <Search className="text-blue-400" />,
      title: "Keyword Gap Analysis",
      description: "Identify valuable keywords your competitors rank for that you don't"
    },
    {
      icon: <Target className="text-purple-400" />,
      title: "Backlink Analysis",
      description: "Discover high-quality link opportunities from competitor backlink profiles"
    },
    {
      icon: <BarChart3 className="text-pink-400" />,
      title: "Market Position Tracking",
      description: "Monitor your position relative to competitors in search rankings"
    },
    {
      icon: <Users className="text-green-400" />,
      title: "Content Gap Analysis",
      description: "Find content topics and formats that drive success for competitors"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <section className="text-center mb-32 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-12">
              Competitor Analysis Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead of your competition with data-driven insights and strategic analysis
            </p>
          </section>

          <section className="mb-20">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4">Know Your Competition</h3>
                <p className="text-gray-300">
                  Understanding your competitors' strategies is crucial for staying competitive in today's digital landscape. Our comprehensive analysis helps you identify opportunities and threats in your market.
                </p>
              </div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4">Data-Driven Insights</h3>
                <p className="text-gray-300">
                  We use advanced tools and methodologies to analyze your competitors' strengths and weaknesses, helping you make informed decisions about your SEO strategy.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Analysis Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-2xl"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center">
            <div className="inline-block p-8 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10">
              <h2 className="text-2xl font-bold mb-4">Ready to Outperform Your Competition?</h2>
              <p className="text-lg text-gray-300 mb-6">
                Get a free competitor analysis and discover opportunities to improve your market position
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:opacity-90 transition-all duration-300"
              >
                Get Your Free Analysis
                <ArrowRight className="ml-2" />
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default CompetitorAnalysis;
import Navigation from "../components/Navigation";
import { CheckCircle, ArrowRight, MapPin, Star, Search, Users, Building2, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const LocalSEO = () => {
  const features = [
    {
      icon: MapPin,
      title: "Google Business Profile Optimization",
      description: "Maximize your local visibility with an optimized Google Business Profile",
      benefits: [
        "Complete business information",
        "Optimized business categories",
        "Enhanced visual content",
        "Regular post updates"
      ]
    },
    {
      icon: Building2,
      title: "Local Citation Building",
      description: "Build consistent business listings across the web",
      benefits: [
        "NAP consistency",
        "Directory submissions",
        "Data aggregator distribution",
        "Citation cleanup"
      ]
    },
    {
      icon: Search,
      title: "Local Keyword Strategy",
      description: "Target location-specific keywords that drive local traffic",
      benefits: [
        "Local keyword research",
        "Competitor analysis",
        "Content optimization",
        "Performance tracking"
      ]
    },
    {
      icon: Star,
      title: "Review Management",
      description: "Build and manage your online reputation",
      benefits: [
        "Review monitoring",
        "Response management",
        "Review generation",
        "Sentiment analysis"
      ]
    }
  ];

  const stats = [
    { value: "46%", label: "of all Google searches have local intent" },
    { value: "88%", label: "of local searches on mobile visit a store within 24 hours" },
    { value: "97%", label: "of users search online to find local businesses" },
    { value: "78%", label: "of local mobile searches result in offline purchases" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <section className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
              Local SEO Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dominate local search results and attract more customers from your area
            </p>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Local SEO Matters</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4">The Local Advantage</h3>
                <p className="text-gray-300 mb-4">
                  Nearly half of all Google searches have local intent. Without proper local SEO, you're missing out on valuable customers in your area who are actively looking for your products or services.
                </p>
                <p className="text-gray-300">
                  Local SEO helps you capture this audience by optimizing your online presence for location-based searches, ensuring you're visible when nearby customers need you most.
                </p>
              </div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4">The Mobile Impact</h3>
                <p className="text-gray-300 mb-4">
                  With the rise of mobile searches, local SEO has become more crucial than ever. Most local searches lead to store visits within 24 hours, making local search optimization a direct driver of foot traffic.
                </p>
                <p className="text-gray-300">
                  Our local SEO services ensure your business is prominently displayed in local search results, driving both online visibility and offline visits.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Local SEO Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-2xl"
                >
                  <div className="mb-4">
                    <feature.icon className="w-12 h-12 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-400">
                        <CheckCircle className="text-blue-400 mr-2" size={16} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Local Search Impact</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                  <p className="text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center">
            <div className="inline-block p-8 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10">
              <h2 className="text-2xl font-bold mb-4">Ready to Dominate Local Search?</h2>
              <p className="text-lg text-gray-300 mb-6">
                Get a free local SEO audit and discover how to improve your local presence
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:opacity-90 transition-all duration-300"
              >
                Get Your Free Local SEO Audit
                <ArrowRight className="ml-2" />
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default LocalSEO;
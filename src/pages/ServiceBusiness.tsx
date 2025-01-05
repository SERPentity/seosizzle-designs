import Navigation from "../components/Navigation";
import Breadcrumbs from "../components/Breadcrumbs";
import { ArrowRight, Trophy, Target, BarChart3, Users, Search, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceBusiness = () => {
  const benefits = [
    {
      icon: <Trophy className="text-yellow-400" />,
      title: "Dominate Local Search",
      description: "Rank higher than your competitors in your service area"
    },
    {
      icon: <Target className="text-blue-400" />,
      title: "Targeted Traffic",
      description: "Attract customers actively searching for your services"
    },
    {
      icon: <MapPin className="text-red-400" />,
      title: "Multi-Location Support",
      description: "Rank in multiple service areas and expand your reach"
    },
    {
      icon: <Star className="text-purple-400" />,
      title: "Build Trust & Authority",
      description: "Showcase your expertise and customer reviews"
    }
  ];

  const results = [
    "350% increase in organic traffic for a local plumbing company",
    "Top 3 rankings for high-value keywords in multiple cities",
    "78% boost in qualified leads for an HVAC service provider",
    "Doubled service area coverage through strategic local SEO"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Breadcrumbs />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <section className="text-center mb-20 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
              SEO for Service-Based Businesses
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized in helping small to medium service businesses dominate Google rankings in their local markets
            </p>
          </section>

          <section className="mb-20">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
                <p className="text-gray-300 mb-4">
                  We understand service businesses. Whether you're a plumber, electrician, lawyer, or consultant, 
                  we know how to get your business in front of customers actively searching for your services.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <Search className="text-blue-400 mr-2" size={20} />
                    Specialized in service business SEO
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Users className="text-purple-400 mr-2" size={20} />
                    Focus on qualified lead generation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <BarChart3 className="text-pink-400 mr-2" size={20} />
                    Proven track record of success
                  </li>
                </ul>
              </div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4">Our Approach</h3>
                <p className="text-gray-300 mb-4">
                  We combine local SEO expertise with industry-specific strategies to help your service business 
                  stand out in Google search results and attract more customers.
                </p>
                <div className="space-y-3">
                  <div className="bg-white/5 p-4 rounded-xl">
                    <p className="text-blue-400 font-semibold">Local Market Analysis</p>
                    <p className="text-gray-300 text-sm">Understand your service area and competition</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl">
                    <p className="text-purple-400 font-semibold">Service-Focused Strategy</p>
                    <p className="text-gray-300 text-sm">Target keywords your customers actually use</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl">
                    <p className="text-pink-400 font-semibold">Results Tracking</p>
                    <p className="text-gray-300 text-sm">Monitor rankings, traffic, and leads</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-2xl"
                >
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Real Results</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {results.map((result, index) => (
                <div 
                  key={index}
                  className="flex items-start p-4 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl"
                >
                  <Trophy className="text-yellow-400 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-300">{result}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center">
            <div className="inline-block p-8 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10">
              <h2 className="text-2xl font-bold mb-4">Ready to Grow Your Service Business?</h2>
              <p className="text-lg text-gray-300 mb-6">
                Get a free SEO audit and discover how we can help you attract more customers
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:opacity-90 transition-all duration-300"
              >
                Get Your Free SEO Audit
                <ArrowRight className="ml-2" />
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ServiceBusiness;
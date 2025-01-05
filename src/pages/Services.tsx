import Navigation from "../components/Navigation";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Technical SEO",
      description: "Optimize your website's technical foundation for better rankings",
      path: "/technical-seo",
      features: [
        "Site Structure Optimization",
        "Speed Optimization",
        "Mobile Responsiveness",
        "Schema Markup",
      ],
    },
    {
      title: "Local SEO",
      description: "Dominate local search results and attract nearby customers",
      path: "/local-seo",
      features: [
        "Google Business Profile Optimization",
        "Local Citation Building",
        "Local Keyword Research",
        "Review Management",
      ],
    },
    {
      title: "Content Strategy",
      description: "Create content that ranks and converts",
      path: "/content-strategy",
      features: [
        "Keyword Research",
        "Content Planning",
        "Content Creation",
        "Content Optimization",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
              Our SEO Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every website we build is engineered from the ground up with SEO best practices
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="group p-8 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400">
                      <CheckCircle className="text-blue-400 mr-2" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block p-6 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 animate-fade-up">
              <p className="text-lg text-gray-300 mb-4">
                Ready to improve your search rankings? Get started with a free SEO audit
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:opacity-90 transition-all duration-300"
              >
                Get Your Free SEO Audit
                <ArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
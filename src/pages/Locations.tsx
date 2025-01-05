import Navigation from "../components/Navigation";
import Breadcrumbs from "../components/Breadcrumbs";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Locations = () => {
  const locationServices = [
    { 
      name: "London SEO Services", 
      path: "/seo-services/london",
      description: "Expert SEO services tailored for London businesses"
    },
    { 
      name: "London Web Design", 
      path: "/web-design/london",
      description: "Professional web design services in London"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Breadcrumbs />
      
      <div className="pt-16 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
              Our Service Locations
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized digital services tailored to your local market
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {locationServices.map((service, index) => (
              <Link
                key={service.name}
                to={service.path}
                className="group p-8 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4">
                  <MapPin className="text-blue-400 group-hover:text-blue-300 transition-colors" size={24} />
                  <h2 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">
                    {service.name}
                  </h2>
                </div>
                <p className="mt-4 text-gray-400 group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-gray-400 group-hover:text-blue-400 transition-colors">
                  <span>View services</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
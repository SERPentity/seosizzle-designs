import Navigation from "../components/Navigation";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Locations = () => {
  const locations = [
    { name: "London", path: "/london" },
    { name: "Manchester", path: "/manchester" },
    // More locations can be added here
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Our Locations
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering SEO excellence across the UK
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location) => (
              <Link
                key={location.name}
                to={location.path}
                className="group p-6 bg-accent rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center space-x-4">
                  <MapPin className="text-secondary" size={24} />
                  <h2 className="text-2xl font-bold group-hover:text-secondary transition-colors">
                    {location.name}
                  </h2>
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
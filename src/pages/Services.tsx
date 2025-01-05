import Navigation from "../components/Navigation";
import { CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Technical SEO",
      description: "Optimize your website's technical foundation for better rankings",
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
      features: [
        "Keyword Research",
        "Content Planning",
        "Content Creation",
        "Content Optimization",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8 text-center">
            Our SEO Services
          </h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-accent rounded-lg animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="text-secondary mr-2" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
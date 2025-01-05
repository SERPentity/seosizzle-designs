import Navigation from "../../components/Navigation";
import { ArrowRight, Share2, Users, BarChart, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";

const SocialMedia = () => {
  const services = [
    {
      icon: Share2,
      title: "Social Strategy",
      description: "Develop effective social media campaigns"
    },
    {
      icon: Users,
      title: "Community Management",
      description: "Build and engage your audience"
    },
    {
      icon: BarChart,
      title: "Performance Analytics",
      description: "Track and optimize social metrics"
    },
    {
      icon: MessageSquare,
      title: "Content Creation",
      description: "Create engaging social content"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Breadcrumbs />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <section className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
              Social Media Marketing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build your brand presence and engage with your audience
            </p>
          </section>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="p-6 backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10">
                <service.icon className="text-blue-400 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:opacity-90 transition-opacity"
            >
              Start Your Social Media Journey
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SocialMedia;
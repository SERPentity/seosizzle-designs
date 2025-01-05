import { ArrowRight, Search, Globe, ChartBar, Code, BarChart3, Target } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: <Search className="text-blue-400" size={32} />,
      title: "SEO-First Development",
      description: "Every website we build is engineered from the ground up with SEO best practices, ensuring maximum visibility on Google",
      features: ["Technical SEO Architecture", "Schema Markup Integration", "Performance Optimization", "Mobile-First Design"]
    },
    {
      icon: <Code className="text-purple-400" size={32} />,
      title: "SEO-Driven Web Design",
      description: "Beautiful websites that not only look great but are structured to rank higher on search engines",
      features: ["Semantic HTML Structure", "Content Strategy", "Conversion Optimization", "User Experience Design"]
    },
    {
      icon: <BarChart3 className="text-pink-400" size={32} />,
      title: "Lead Generation",
      description: "Convert your traffic into qualified leads with data-driven strategies",
      features: ["Conversion Rate Optimization", "A/B Testing", "Lead Magnets", "Sales Funnels"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">SEO-First Approach</h2>
          <p className="text-xl text-gray-300">Every website we build is designed to rank and convert from day one</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-400">
                    <Target className="w-4 h-4 mr-2 text-blue-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link 
                to="/services" 
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-6 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10">
            <p className="text-lg text-gray-300 mb-4">
              Our SEO-first approach means your website is built to rank from day one, 
              not as an afterthought
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
    </section>
  );
};

export default ServicesSection;
import Navigation from "../components/Navigation";
import { CheckCircle, ArrowRight, Code, Gauge, Smartphone, Database } from "lucide-react";
import { Link } from "react-router-dom";

const TechnicalSEO = () => {
  const features = [
    {
      icon: Code,
      title: "Site Structure Optimization",
      description: "Improve your website's architecture and internal linking for better crawlability and indexing",
      benefits: [
        "Enhanced crawl efficiency",
        "Improved site hierarchy",
        "Better link equity distribution",
        "Optimized URL structure"
      ]
    },
    {
      icon: Gauge,
      title: "Speed Optimization",
      description: "Boost your website's loading speed and Core Web Vitals scores",
      benefits: [
        "Faster page load times",
        "Improved user experience",
        "Better mobile performance",
        "Higher conversion rates"
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile Optimization",
      description: "Ensure your website performs flawlessly across all devices",
      benefits: [
        "Responsive design implementation",
        "Mobile-first indexing ready",
        "Touch-friendly navigation",
        "Accelerated mobile pages"
      ]
    },
    {
      icon: Database,
      title: "Technical Infrastructure",
      description: "Build a solid technical foundation for your website",
      benefits: [
        "Schema markup implementation",
        "XML sitemap optimization",
        "Robots.txt configuration",
        "SSL and security setup"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
              Technical SEO Excellence
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build a solid technical foundation for your website's SEO success with our comprehensive technical optimization services
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="w-12 h-12 text-blue-400 mb-6" />
                <h2 className="text-2xl font-bold mb-4">{feature.title}</h2>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-400">
                      <CheckCircle className="text-blue-400 mr-2" size={20} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="inline-block p-8 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 animate-fade-up">
              <h2 className="text-2xl font-bold mb-4">Ready to Improve Your Technical SEO?</h2>
              <p className="text-lg text-gray-300 mb-6">
                Get a comprehensive technical audit of your website and discover opportunities for improvement
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:opacity-90 transition-all duration-300"
              >
                Get Your Free Technical Audit
                <ArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSEO;
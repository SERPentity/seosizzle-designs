import Navigation from "../components/Navigation";
import { CheckCircle, ArrowRight, Globe, ChartBar, Code, BarChart3, Target, Users, FileText, Search, MessageSquare, Layout, Smartphone, Palette, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const seoServices = [
    {
      title: "Technical SEO",
      description: "Optimize your website's technical foundation for better rankings",
      path: "/technical-seo",
      features: [
        "Site Speed Optimization",
        "Mobile Responsiveness",
        "Schema Markup Implementation",
        "XML Sitemap & Robots.txt",
      ],
      icon: <Code className="text-blue-400" size={32} />
    },
    {
      title: "Local SEO",
      description: "Dominate local search results and attract nearby customers",
      path: "/local-seo",
      features: [
        "Google Business Profile Optimization",
        "Local Citation Building",
        "Review Management",
        "Local Keyword Targeting",
      ],
      icon: <Globe className="text-purple-400" size={32} />
    },
    {
      title: "Content Strategy",
      description: "Create content that ranks and converts",
      path: "/content-strategy",
      features: [
        "Content Planning & Calendar",
        "Keyword Research",
        "Content Creation",
        "Content Optimization",
      ],
      icon: <FileText className="text-pink-400" size={32} />
    },
    {
      title: "SEO Audit",
      description: "Comprehensive analysis of your website's SEO health",
      path: "/seo-audit",
      features: [
        "Technical Analysis",
        "Content Audit",
        "Competitor Review",
        "Action Plan Creation",
      ],
      icon: <Search className="text-green-400" size={32} />
    },
    {
      title: "Competitor Analysis",
      description: "Stay ahead of your competition with data-driven insights",
      path: "/competitor-analysis",
      features: [
        "Competitor Keyword Analysis",
        "Backlink Gap Analysis",
        "Content Gap Analysis",
        "Market Position Tracking",
      ],
      icon: <BarChart3 className="text-yellow-400" size={32} />
    },
    {
      title: "Link Building",
      description: "Build authority with high-quality backlinks",
      path: "/link-building",
      features: [
        "Digital PR Outreach",
        "Guest Posting",
        "Broken Link Building",
        "Resource Link Building",
      ],
      icon: <Target className="text-orange-400" size={32} />
    },
    {
      title: "Social Media Integration",
      description: "Amplify your SEO with social signals",
      path: "/social-media",
      features: [
        "Social Profile Optimization",
        "Content Distribution",
        "Social Engagement",
        "Brand Monitoring",
      ],
      icon: <MessageSquare className="text-indigo-400" size={32} />
    }
  ];

  const webDesignServices = [
    {
      title: "Web Design",
      description: "Create stunning, modern websites that capture your brand",
      path: "/web-design",
      features: [
        "Custom Design",
        "Brand Integration",
        "User-Friendly Interface",
        "Performance Optimization",
      ],
      icon: <Layout className="text-blue-400" size={32} />
    },
    {
      title: "Responsive Design",
      description: "Ensure your website looks great on all devices",
      path: "/responsive-design",
      features: [
        "Mobile-First Approach",
        "Cross-Device Testing",
        "Adaptive Layouts",
        "Performance Optimization",
      ],
      icon: <Smartphone className="text-purple-400" size={32} />
    },
    {
      title: "UX Design",
      description: "Create intuitive, user-centered experiences",
      path: "/ux-design",
      features: [
        "User Research",
        "Information Architecture",
        "Interaction Design",
        "Usability Testing",
      ],
      icon: <Palette className="text-pink-400" size={32} />
    },
    {
      title: "E-commerce Design",
      description: "Build powerful online stores that drive sales",
      path: "/ecommerce-design",
      features: [
        "Shopping Experience",
        "Secure Payments",
        "Inventory Management",
        "Order Processing",
      ],
      icon: <ShoppingCart className="text-green-400" size={32} />
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital solutions to help your business grow online
            </p>
          </div>

          {/* SEO Services Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">SEO Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {seoServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="group p-8 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4">{service.icon}</div>
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
          </div>

          {/* Web Design Services Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Web Design Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {webDesignServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="group p-8 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4">{service.icon}</div>
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
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:opacity-90 transition-opacity"
            >
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
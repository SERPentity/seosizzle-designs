import Navigation from "../../components/Navigation";
import { CheckCircle, ArrowRight, Code, Gauge, Smartphone, Database, Search, Settings, Shield, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";

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

  const stats = [
    { value: "47%", label: "of consumers expect websites to load in 2 seconds or less" },
    { value: "40%", label: "of users abandon websites that take more than 3 seconds to load" },
    { value: "88%", label: "of users are less likely to return after a bad experience" },
    { value: "3x", label: "increase in conversions with optimal site speed" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Breadcrumbs />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <section className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
              Technical SEO Excellence
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build a solid technical foundation for your website's SEO success with our comprehensive technical optimization services
            </p>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Technical SEO Matters</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4">The Technical Challenge</h3>
                <p className="text-gray-300 mb-4">
                  In today's competitive digital landscape, having great content isn't enough. Search engines need to be able to effectively crawl, index, and understand your website's structure and content.
                </p>
                <p className="text-gray-300">
                  Technical SEO issues can prevent your website from reaching its full potential, regardless of how good your content is. Our technical SEO services ensure your website meets and exceeds search engine requirements.
                </p>
              </div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4">The Performance Impact</h3>
                <p className="text-gray-300 mb-4">
                  Website performance directly affects user experience and search rankings. Google's Core Web Vitals are now a ranking factor, making technical optimization more crucial than ever.
                </p>
                <p className="text-gray-300">
                  Our technical SEO services focus on optimizing every aspect of your website's performance to improve both user experience and search engine rankings.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Technical SEO Services</h2>
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
            <h2 className="text-3xl font-bold mb-8 text-center">Performance Statistics</h2>
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
          </section>
        </div>
      </main>
    </div>
  );
};

export default TechnicalSEO;
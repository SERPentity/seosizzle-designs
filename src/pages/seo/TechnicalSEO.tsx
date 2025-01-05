import Navigation from "../../components/Navigation";
import { CheckCircle, ArrowRight, Code, Gauge, Smartphone, Database, Search, Settings, Shield, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";
import { Helmet } from "react-helmet";

const TechnicalSEO = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Technical SEO Services | Expert SEO Agency</title>
        <meta name="description" content="Expert technical SEO services to boost your website's performance. Core Web Vitals optimization, site speed improvements, and technical audits." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=2000&q=80" />
        <meta property="og:image:alt" content="Technical dashboard showing website performance metrics and code analysis" />
        <meta property="twitter:image" content="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=2000&q=80" />
        <meta property="twitter:image:alt" content="Technical dashboard showing website performance metrics and code analysis" />
      </Helmet>
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
              <div 
                className="backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-2xl"
              >
                <div className="mb-4">
                  <Code className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Site Structure Optimization</h3>
                <p className="text-gray-300 mb-4">Improve your website's architecture and internal linking for better crawlability and indexing</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-400">
                    <CheckCircle className="text-blue-400 mr-2" size={16} />
                    <span>Enhanced crawl efficiency</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <CheckCircle className="text-blue-400 mr-2" size={16} />
                    <span>Improved site hierarchy</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <CheckCircle className="text-blue-400 mr-2" size={16} />
                    <span>Better link equity distribution</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <CheckCircle className="text-blue-400 mr-2" size={16} />
                    <span>Optimized URL structure</span>
                  </li>
                </ul>
              </div>
              <div 
                className="backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-2xl"
              >
                <div className="mb-4">
                  <Gauge className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Speed Optimization</h3>
                <p className="text-gray-300 mb-4">Boost your website's loading speed and Core Web Vitals scores</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-400">
                    <CheckCircle className="text-blue-400 mr-2" size={16} />
                    <span>Faster page load times</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <CheckCircle className="text-blue-400 mr-2" size={16} />
                    <span>Improved user experience</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <CheckCircle className="text-blue-400 mr-2" size={16} />
                    <span>Better mobile performance</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <CheckCircle className="text-blue-400 mr-2" size={16} />
                    <span>Higher conversion rates</span>
                  </li>
                </ul>
              </div>
              <div 
                className="backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-2xl"
              >
                <div className="mb-4">
                  <Smartphone className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Mobile Optimization</h3>
                <p className="text-gray-300 mb-4">Ensure your website performs flawlessly across all devices</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-400">
                    <CheckCircle className="text-blue-400 mr-2" size={16} />
                    <span>Responsive design implementation</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <CheckCircle className="text-blue-400 mr-2" size={16} />
                    <span>Mobile-first indexing ready</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <CheckCircle className="text-blue-400 mr-2" size={16} />
                    <span>Touch-friendly navigation</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <CheckCircle className="text-blue-400 mr-2" size={16} />
                    <span>Accelerated mobile pages</span>
                  </li>
                </ul>
              </div>
              <div 
                className="backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-2xl"
              >
                <div className="mb-4">
                  <Database className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Technical Infrastructure</h3>
                <p className="text-gray-300 mb-4">Build a solid technical foundation for your website</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-400">
                    <CheckCircle className="text-blue-400 mr-2" size={16} />
                    <span>Schema markup implementation</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <CheckCircle className="text-blue-400 mr-2" size={16} />
                    <span>XML sitemap optimization</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <CheckCircle className="text-blue-400 mr-2" size={16} />
                    <span>Robots.txt configuration</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <CheckCircle className="text-blue-400 mr-2" size={16} />
                    <span>SSL and security setup</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Performance Statistics</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div key={0} className="backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">47%</div>
                <p className="text-gray-300">of consumers expect websites to load in 2 seconds or less</p>
              </div>
              <div key={1} className="backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">40%</div>
                <p className="text-gray-300">of users abandon websites that take more than 3 seconds to load</p>
              </div>
              <div key={2} className="backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">88%</div>
                <p className="text-gray-300">of users are less likely to return after a bad experience</p>
              </div>
              <div key={3} className="backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">3x</div>
                <p className="text-gray-300">increase in conversions with optimal site speed</p>
              </div>
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

import Navigation from "../components/Navigation";
import { CheckCircle, ArrowRight, FileText, Target, BarChart3, Users, Search, Layout } from "lucide-react";
import { Link } from "react-router-dom";

const ContentStrategy = () => {
  const features = [
    {
      icon: <FileText className="text-blue-400" />,
      title: "Content Planning & Calendar",
      description: "Strategic content planning aligned with your business goals and audience needs"
    },
    {
      icon: <Target className="text-purple-400" />,
      title: "Keyword Research",
      description: "In-depth keyword analysis to target high-value search terms"
    },
    {
      icon: <BarChart3 className="text-pink-400" />,
      title: "Performance Tracking",
      description: "Continuous monitoring and optimization of content performance"
    },
    {
      icon: <Users className="text-green-400" />,
      title: "Audience Analysis",
      description: "Deep understanding of your target audience's needs and behaviors"
    }
  ];

  const benefits = [
    "Increased organic traffic through strategic keyword targeting",
    "Higher conversion rates with engaging, value-driven content",
    "Improved brand authority in your industry",
    "Better user engagement and reduced bounce rates",
    "Consistent content publication schedule",
    "Data-driven content optimization",
    "Enhanced social media presence",
    "Stronger backlink profile"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <section className="text-center mb-24 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-8">
              Content Strategy Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your digital presence with data-driven content strategies that drive traffic, engage users, and convert visitors into customers.
            </p>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Your Business Needs a Content Strategy</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4">The Content Crisis</h3>
                <p className="text-gray-300 mb-4">
                  In today's digital landscape, 90% of businesses are creating content, but only 9% are seeing significant results. Why? Because they lack a strategic approach to content creation and distribution.
                </p>
                <p className="text-gray-300">
                  Random content creation without a clear strategy wastes resources and misses opportunities to connect with your target audience at crucial touchpoints in their journey.
                </p>
              </div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4">The Strategic Advantage</h3>
                <p className="text-gray-300 mb-4">
                  Companies with a documented content strategy are 3x more likely to report success in their content marketing efforts. Our approach combines data-driven insights with creative excellence.
                </p>
                <p className="text-gray-300">
                  We help you create content that not only ranks but resonates with your audience and drives meaningful business results.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Content Strategy Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-2xl"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">The Benefits of Strategic Content</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start p-4 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl"
                >
                  <CheckCircle className="text-blue-400 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Process</h2>
            <div className="space-y-6">
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4">1. Research & Analysis</h3>
                <p className="text-gray-300">
                  We begin with comprehensive research of your industry, competitors, and target audience. This includes keyword research, competitor content analysis, and identifying content gaps and opportunities.
                </p>
              </div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4">2. Strategy Development</h3>
                <p className="text-gray-300">
                  Based on our research, we develop a customized content strategy that aligns with your business goals, including content pillars, topics, formats, and distribution channels.
                </p>
              </div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4">3. Content Creation & Optimization</h3>
                <p className="text-gray-300">
                  Our team creates high-quality, SEO-optimized content that engages your audience and drives conversions, following content best practices and your brand guidelines.
                </p>
              </div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4">4. Measurement & Refinement</h3>
                <p className="text-gray-300">
                  We continuously monitor content performance using advanced analytics, making data-driven adjustments to optimize results and ROI.
                </p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="inline-block p-8 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10">
              <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Content Strategy?</h2>
              <p className="text-lg text-gray-300 mb-6">
                Get a free content audit and discover opportunities to improve your content performance
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:opacity-90 transition-all duration-300"
              >
                Get Your Free Content Audit
                <ArrowRight className="ml-2" />
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ContentStrategy;
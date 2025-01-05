import Navigation from "../components/Navigation";
import { CheckCircle, ArrowRight, Link as LinkIcon, Target, MessageSquare, Search } from "lucide-react";
import { Link } from "react-router-dom";

const LinkBuilding = () => {
  const features = [
    {
      icon: <LinkIcon className="text-blue-400" />,
      title: "Digital PR Outreach",
      description: "Build relationships with industry influencers and publications"
    },
    {
      icon: <MessageSquare className="text-purple-400" />,
      title: "Guest Posting",
      description: "Create valuable content for authoritative websites in your niche"
    },
    {
      icon: <Target className="text-pink-400" />,
      title: "Broken Link Building",
      description: "Identify and replace broken links with your quality content"
    },
    {
      icon: <Search className="text-green-400" />,
      title: "Resource Link Building",
      description: "Create valuable resources that naturally attract backlinks"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <section className="text-center mb-32 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-12">
              Link Building Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build authority and improve rankings with high-quality backlinks
            </p>
          </section>

          <section className="mb-20">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4">Quality Over Quantity</h3>
                <p className="text-gray-300">
                  We focus on building high-quality, relevant backlinks that improve your website's authority and drive targeted traffic to your pages.
                </p>
              </div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4">Natural Link Building</h3>
                <p className="text-gray-300">
                  Our approach emphasizes earning links naturally through valuable content and strategic outreach, ensuring long-term SEO success.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Link Building Services</h2>
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

          <section className="text-center">
            <div className="inline-block p-8 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10">
              <h2 className="text-2xl font-bold mb-4">Ready to Build Your Authority?</h2>
              <p className="text-lg text-gray-300 mb-6">
                Get a free backlink analysis and discover opportunities to improve your link profile
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:opacity-90 transition-all duration-300"
              >
                Get Your Free Analysis
                <ArrowRight className="ml-2" />
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default LinkBuilding;
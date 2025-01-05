import Navigation from "../components/Navigation";
import { CheckCircle, ArrowRight, MessageSquare, Users, BarChart3, Search } from "lucide-react";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  const features = [
    {
      icon: <MessageSquare className="text-blue-400" />,
      title: "Profile Optimization",
      description: "Optimize your social media profiles for maximum visibility"
    },
    {
      icon: <Users className="text-purple-400" />,
      title: "Content Distribution",
      description: "Strategic content sharing across social platforms"
    },
    {
      icon: <BarChart3 className="text-pink-400" />,
      title: "Engagement Tracking",
      description: "Monitor and improve social media engagement"
    },
    {
      icon: <Search className="text-green-400" />,
      title: "Brand Monitoring",
      description: "Track and manage your brand's social presence"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <section className="text-center mb-32 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-12">
              Social Media Integration
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Amplify your SEO with strategic social media integration
            </p>
          </section>

          <section className="mb-20">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4">Social Signals Matter</h3>
                <p className="text-gray-300">
                  While social signals aren't direct ranking factors, they contribute to your overall online presence and can indirectly impact your SEO success.
                </p>
              </div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4">Integrated Strategy</h3>
                <p className="text-gray-300">
                  Our approach combines social media with SEO to create a comprehensive digital marketing strategy that drives results.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Social Media Services</h2>
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
              <h2 className="text-2xl font-bold mb-4">Ready to Boost Your Social Presence?</h2>
              <p className="text-lg text-gray-300 mb-6">
                Get a free social media audit and discover opportunities to improve your online presence
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:opacity-90 transition-all duration-300"
              >
                Get Your Free Social Media Audit
                <ArrowRight className="ml-2" />
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default SocialMedia;
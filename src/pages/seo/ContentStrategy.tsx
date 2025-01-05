import Navigation from "../../components/Navigation";
import { CheckCircle, ArrowRight, FileText, Target, BarChart3, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";

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

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Breadcrumbs />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <section className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
              Content Strategy Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your digital presence with data-driven content strategies
            </p>
          </section>

          <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
          </section>

          <section className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:opacity-90 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2" />
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ContentStrategy;
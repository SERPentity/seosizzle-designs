import Navigation from "../../components/Navigation";
import { Helmet } from "react-helmet";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";

const LinkBuilding = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Link Building Services | Quality Backlink Acquisition</title>
        <meta name="description" content="Expert link building services to improve your website's authority. Strategic outreach and quality backlink acquisition services." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=2000&q=80" />
        <meta property="og:image:alt" content="Network of interconnected nodes representing quality backlinks and digital relationships" />
        <meta property="twitter:image" content="https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=2000&q=80" />
        <meta property="twitter:image:alt" content="Network of interconnected nodes representing quality backlinks and digital relationships" />
      </Helmet>
      
      <Navigation />
      <Breadcrumbs />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <section className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
              Link Building Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build authority and improve rankings with high-quality backlinks
            </p>
          </section>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: LinkIcon,
                title: "Quality Link Acquisition",
                description: "Build relationships with authoritative websites"
              },
              {
                icon: Target,
                title: "Strategic Outreach",
                description: "Connect with industry influencers"
              },
              {
                icon: Globe,
                title: "Content Promotion",
                description: "Create and promote linkable assets"
              },
              {
                icon: BarChart,
                title: "Link Profile Analysis",
                description: "Monitor and optimize backlink quality"
              }
            ].map((strategy, index) => (
              <div key={index} className="p-6 backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10">
                <strategy.icon className="text-blue-400 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">{strategy.title}</h3>
                <p className="text-gray-300">{strategy.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:opacity-90 transition-opacity"
            >
              Start Building Quality Links
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LinkBuilding;

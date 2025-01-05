import Navigation from "../../components/Navigation";
import { Helmet } from "react-helmet";

const CompetitorAnalysis = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Competitor Analysis Services | SEO Competition Research</title>
        <meta name="description" content="Expert competitor analysis services to understand your market position. Comprehensive competitor research and gap analysis." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80" />
        <meta property="og:image:alt" content="Business analytics dashboard showing competitive analysis and market trends" />
        <meta property="twitter:image" content="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80" />
        <meta property="twitter:image:alt" content="Business analytics dashboard showing competitive analysis and market trends" />
      </Helmet>
      
      <Navigation />
      <Breadcrumbs />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <section className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
              Competitor Analysis
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Gain insights into your competitors' strategies and stay ahead
            </p>
          </section>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="p-6 backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10">
                <feature.icon className="text-blue-400 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:opacity-90 transition-opacity"
            >
              Start Your Competitor Analysis
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CompetitorAnalysis;

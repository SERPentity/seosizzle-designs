import { Helmet } from "react-helmet";
import Navigation from "../../components/Navigation";
import Breadcrumbs from "../../components/Breadcrumbs";

const ContentStrategy = () => {
  const basePrice = "£360";
  
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Content Strategy Services | SEO Content Creation & Strategy</title>
        <meta name="description" content="Expert content strategy services to boost your SEO rankings. Data-driven content creation, keyword research, and content optimization services." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&w=2000&q=80" />
        <meta property="og:image:alt" content="Content calendar and strategy planning session with laptop and notebooks" />
        <meta property="twitter:image" content="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&w=2000&q=80" />
        <meta property="twitter:image:alt" content="Content calendar and strategy planning session with laptop and notebooks" />
      </Helmet>

      <Navigation />
      <Breadcrumbs />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Content Strategy Services</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Transform your online presence with our data-driven content strategy services. 
            We help businesses create engaging, SEO-optimized content that drives traffic and conversions.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold mb-4">Content Strategy Services</h2>
              <ul className="space-y-4 text-gray-300">
                <li>• Comprehensive content audits</li>
                <li>• Keyword research and analysis</li>
                <li>• Content calendar planning</li>
                <li>• Competitor content analysis</li>
                <li>• Content gap analysis</li>
              </ul>
            </div>
            
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold mb-4">Content Creation</h2>
              <ul className="space-y-4 text-gray-300">
                <li>• SEO-optimized blog posts</li>
                <li>• Landing page content</li>
                <li>• Product descriptions</li>
                <li>• Service page content</li>
                <li>• Content optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContentStrategy;

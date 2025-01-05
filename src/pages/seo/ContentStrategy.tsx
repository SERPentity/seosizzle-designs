import { Helmet } from "react-helmet";
import Navigation from "../../components/Navigation";
import Breadcrumbs from "../../components/Breadcrumbs";

const ContentStrategy = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Content Strategy Services | SEO Content Creation & Strategy</title>
        <meta 
          name="description" 
          content="Expert content strategy services to boost your SEO rankings. Data-driven content creation, keyword research, and content optimization services. Free content audit available." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://seosnafu.co.uk/seo/content-strategy" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Content Strategy Services | SEO Content Creation & Strategy" />
        <meta property="og:description" content="Expert content strategy services to boost your SEO rankings. Data-driven content creation, keyword research, and content optimization services." />
        <meta property="og:url" content="https://seosnafu.co.uk/seo/content-strategy" />
        <meta property="og:type" content="website" />
        
        {/* Schema Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Content Strategy Services",
              "description": "Expert content strategy services to boost your SEO rankings",
              "provider": {
                "@type": "Organization",
                "name": "SEO Snafu",
                "url": "https://seosnafu.co.uk"
              },
              "areaServed": "United Kingdom",
              "serviceType": "Content Strategy",
              "offers": {
                "@type": "Offer",
                "price": "360.00",
                "priceCurrency": "GBP",
                "availability": "https://schema.org/InStock"
              }
            }
          `}
        </script>
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
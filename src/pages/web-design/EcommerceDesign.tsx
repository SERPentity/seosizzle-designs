import { Helmet } from "react-helmet";
import Navigation from "../../components/Navigation";
import Breadcrumbs from "../../components/Breadcrumbs";

const EcommerceDesign = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>E-commerce Website Design UK | Online Store Development</title>
        <meta 
          name="description" 
          content="Professional e-commerce website design services. Custom online store development, secure payment integration, and conversion-focused design. Start selling online today." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://seosnafu.co.uk/web-design/ecommerce" />
        
        <meta property="og:title" content="E-commerce Website Design UK | Online Store Development" />
        <meta property="og:description" content="Professional e-commerce website design services. Custom online store development, secure payment integration, and conversion-focused design." />
        <meta property="og:url" content="https://seosnafu.co.uk/web-design/ecommerce" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "E-commerce Website Design Services",
              "description": "Professional e-commerce website design and development services",
              "provider": {
                "@type": "Organization",
                "name": "SEO Snafu",
                "url": "https://seosnafu.co.uk"
              },
              "areaServed": "United Kingdom",
              "serviceType": "E-commerce Web Design"
            }
          `}
        </script>
      </Helmet>

      <Navigation />
      <Breadcrumbs />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">E-commerce Website Design</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Launch your online store with our professional e-commerce website design services.
            We create secure, user-friendly online shops that drive sales and grow your business.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold mb-4">E-commerce Features</h2>
              <ul className="space-y-4 text-gray-300">
                <li>• Secure payment gateways</li>
                <li>• Product management</li>
                <li>• Inventory tracking</li>
                <li>• Order management</li>
                <li>• Customer accounts</li>
              </ul>
            </div>
            
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold mb-4">Benefits</h2>
              <ul className="space-y-4 text-gray-300">
                <li>• 24/7 sales capability</li>
                <li>• Automated processes</li>
                <li>• Global reach</li>
                <li>• Scalable solution</li>
                <li>• Analytics integration</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EcommerceDesign;
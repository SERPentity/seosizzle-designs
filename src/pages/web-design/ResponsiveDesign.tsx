import { Helmet } from "react-helmet";
import Navigation from "../../components/Navigation";
import Breadcrumbs from "../../components/Breadcrumbs";

const ResponsiveDesign = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Responsive Web Design Services UK | Mobile-First Design</title>
        <meta 
          name="description" 
          content="Expert responsive web design services ensuring your website looks perfect on all devices. Mobile-first approach, seamless user experience, and modern design principles." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://seosnafu.co.uk/web-design/responsive-design" />
        
        <meta property="og:title" content="Responsive Web Design Services UK | Mobile-First Design" />
        <meta property="og:description" content="Expert responsive web design services ensuring your website looks perfect on all devices. Mobile-first approach, seamless user experience." />
        <meta property="og:url" content="https://seosnafu.co.uk/web-design/responsive-design" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Responsive Web Design Services",
              "description": "Expert responsive web design services ensuring your website looks perfect on all devices",
              "provider": {
                "@type": "Organization",
                "name": "SEO Snafu",
                "url": "https://seosnafu.co.uk"
              },
              "areaServed": "United Kingdom",
              "serviceType": "Responsive Web Design"
            }
          `}
        </script>
      </Helmet>

      <Navigation />
      <Breadcrumbs />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Responsive Web Design Services</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Ensure your website looks and functions perfectly on all devices with our responsive web design services.
            We use mobile-first design principles to create seamless user experiences across all screen sizes.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold mb-4">Responsive Design Features</h2>
              <ul className="space-y-4 text-gray-300">
                <li>• Mobile-first approach</li>
                <li>• Fluid grid layouts</li>
                <li>• Flexible images</li>
                <li>• Media queries</li>
                <li>• Touch-friendly navigation</li>
              </ul>
            </div>
            
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold mb-4">Benefits</h2>
              <ul className="space-y-4 text-gray-300">
                <li>• Improved user experience</li>
                <li>• Better SEO rankings</li>
                <li>• Increased conversion rates</li>
                <li>• Wider audience reach</li>
                <li>• Future-proof design</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResponsiveDesign;
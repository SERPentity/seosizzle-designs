import { Helmet } from "react-helmet";
import Navigation from "../../components/Navigation";
import Breadcrumbs from "../../components/Breadcrumbs";

const UXDesign = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>UX Design Services UK | User Experience Design</title>
        <meta 
          name="description" 
          content="Professional UX design services focused on creating intuitive, user-friendly websites. Data-driven design decisions, user research, and conversion optimization." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://seosnafu.co.uk/web-design/ux-design" />
        
        <meta property="og:title" content="UX Design Services UK | User Experience Design" />
        <meta property="og:description" content="Professional UX design services focused on creating intuitive, user-friendly websites. Data-driven design decisions and conversion optimization." />
        <meta property="og:url" content="https://seosnafu.co.uk/web-design/ux-design" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "UX Design Services",
              "description": "Professional UX design services focused on creating intuitive, user-friendly websites",
              "provider": {
                "@type": "Organization",
                "name": "SEO Snafu",
                "url": "https://seosnafu.co.uk"
              },
              "areaServed": "United Kingdom",
              "serviceType": "UX Design"
            }
          `}
        </script>
      </Helmet>

      <Navigation />
      <Breadcrumbs />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">UX Design Services</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Create intuitive, user-friendly websites that convert with our professional UX design services.
            We combine user research, data analysis, and design best practices to deliver exceptional user experiences.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold mb-4">UX Design Services</h2>
              <ul className="space-y-4 text-gray-300">
                <li>• User research</li>
                <li>• Usability testing</li>
                <li>• Information architecture</li>
                <li>• Wireframing</li>
                <li>• Prototyping</li>
              </ul>
            </div>
            
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold mb-4">Benefits</h2>
              <ul className="space-y-4 text-gray-300">
                <li>• Higher conversion rates</li>
                <li>• Reduced bounce rates</li>
                <li>• Improved user satisfaction</li>
                <li>• Better brand perception</li>
                <li>• Increased customer loyalty</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UXDesign;
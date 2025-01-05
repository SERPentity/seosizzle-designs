import Navigation from "../../components/Navigation";
import { Link as LinkIcon, Target, Globe, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Breadcrumbs from "../../components/Breadcrumbs";

const LinkBuilding = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Link Building Services | Boost Your Website Authority</title>
        <meta name="description" content="Enhance your website's authority and search engine rankings with our expert link building services. Drive organic traffic and improve your online presence." />
        <meta property="og:title" content="Link Building Services | Boost Your Website Authority" />
        <meta property="og:description" content="Enhance your website's authority and search engine rankings with our expert link building services. Drive organic traffic and improve your online presence." />
        <meta property="og:image" content="/lovable-uploads/photo-1506748686214-e9df14d4d9d0.jpg" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://seosizzle.com/seo/link-building" />
      </Helmet>

      <Navigation />
      <Breadcrumbs />

      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Link Building Services</h1>
          <p className="text-xl text-gray-300 mb-8">
            Our link building services are designed to enhance your website's authority and improve your search engine rankings. We focus on building high-quality backlinks that drive organic traffic and boost your online presence.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Why Link Building Matters</h3>
              <p className="text-gray-300">
                Link building is a crucial aspect of SEO that helps search engines determine the credibility and authority of your website. By acquiring quality backlinks, you can improve your rankings and visibility in search results.
              </p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
              <p className="text-gray-300">
                We take a strategic approach to link building, focusing on acquiring links from reputable sources within your industry. Our team conducts thorough research to identify the best opportunities for your website.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6">Our Link Building Services Include:</h2>
          <ul className="list-disc list-inside space-y-4 text-gray-300">
            <li>Guest Blogging</li>
            <li>Resource Page Link Building</li>
            <li>Broken Link Building</li>
            <li>Competitor Backlink Analysis</li>
            <li>Social Media Link Building</li>
          </ul>

          <div className="text-center mt-16">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:opacity-90 transition-opacity"
            >
              Get Started with Link Building
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LinkBuilding;

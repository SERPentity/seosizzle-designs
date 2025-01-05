import Navigation from "../../components/Navigation";
import { Monitor, Paintbrush, Code, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Breadcrumbs from "../../components/Breadcrumbs";

const WebDesign = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Professional Web Design Services | Custom Website Development</title>
        <meta name="description" content="Transform your online presence with our professional web design services. Custom website development, responsive design, and user-focused solutions for businesses." />
        <meta property="og:title" content="Professional Web Design Services | Custom Website Development" />
        <meta property="og:description" content="Transform your online presence with our professional web design services. Custom website development, responsive design, and user-focused solutions for businesses." />
        <meta property="og:image" content="/lovable-uploads/photo-1486312338219-ce68d2c6f44d.jpg" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://seosizzle.com/web-design" />
      </Helmet>
      
      <Navigation />
      <Breadcrumbs />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Web Design Services</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Create a stunning online presence with our professional web design services. 
            We design beautiful, responsive websites that engage your audience and drive conversions.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold mb-4">Design Services</h2>
              <ul className="space-y-4 text-gray-300">
                <li>• Custom website design</li>
                <li>• Responsive development</li>
                <li>• UI/UX design</li>
                <li>• E-commerce websites</li>
                <li>• Website redesign</li>
              </ul>
            </div>
            
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold mb-4">Features</h2>
              <ul className="space-y-4 text-gray-300">
                <li>• Mobile-first design</li>
                <li>• SEO optimization</li>
                <li>• Fast loading speeds</li>
                <li>• Security features</li>
                <li>• Analytics integration</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WebDesign;

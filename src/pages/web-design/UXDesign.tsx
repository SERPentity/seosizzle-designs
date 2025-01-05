import Navigation from "../../components/Navigation";
import { Users, Target, BarChart3, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Breadcrumbs from "../../components/Breadcrumbs";

const UXDesign = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>UX Design Services | User Experience Optimization</title>
        <meta name="description" content="Create intuitive, user-centered designs that delight and convert. Expert UX design services focused on improving user satisfaction and driving business results." />
        <meta property="og:title" content="UX Design Services | User Experience Optimization" />
        <meta property="og:description" content="Create intuitive, user-centered designs that delight and convert. Expert UX design services focused on improving user satisfaction and driving business results." />
        <meta property="og:image" content="/lovable-uploads/photo-1487058792275-0ad4aaf24ca7.jpg" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://seosizzle.com/web-design/ux-design" />
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

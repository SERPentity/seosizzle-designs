import Navigation from "../../components/Navigation";
import { Building2, Users, BarChart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Breadcrumbs from "../../components/Breadcrumbs";

const ServiceBusiness = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Service Business Website Design | Professional Web Solutions</title>
        <meta name="description" content="Custom website design solutions for service-based businesses. Create a professional online presence that attracts clients and grows your service business." />
        <meta property="og:title" content="Service Business Website Design | Professional Web Solutions" />
        <meta property="og:description" content="Custom website design solutions for service-based businesses. Create a professional online presence that attracts clients and grows your service business." />
        <meta property="og:image" content="/lovable-uploads/photo-1649972904349-6e44c42644a7.jpg" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://seosizzle.com/web-design/service-business" />
      </Helmet>

      <Navigation />
      <Breadcrumbs />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Service Business Website Design</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Create a professional online presence for your service business.
            We design websites that showcase your services and convert visitors into clients.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-4 text-gray-300">
                <li>• Service showcases</li>
                <li>• Booking systems</li>
                <li>• Contact forms</li>
                <li>• Testimonial sections</li>
                <li>• Portfolio galleries</li>
              </ul>
            </div>
            
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold mb-4">Benefits</h2>
              <ul className="space-y-4 text-gray-300">
                <li>• Professional image</li>
                <li>• Lead generation</li>
                <li>• 24/7 availability</li>
                <li>• Automated booking</li>
                <li>• Client testimonials</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServiceBusiness;

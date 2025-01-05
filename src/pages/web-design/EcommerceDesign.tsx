import Navigation from "../../components/Navigation";
import { ShoppingCart, CreditCard, Package, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Breadcrumbs from "../../components/Breadcrumbs";

const EcommerceDesign = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Ecommerce Website Design | Online Store Development</title>
        <meta name="description" content="Build a powerful online store with our expert ecommerce website design services. Custom solutions for businesses looking to sell products online effectively." />
        <meta property="og:title" content="Ecommerce Website Design | Online Store Development" />
        <meta property="og:description" content="Build a powerful online store with our expert ecommerce website design services. Custom solutions for businesses looking to sell products online effectively." />
        <meta property="og:image" content="/lovable-uploads/photo-1461749280684-dccba630e2f6.jpg" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://seosizzle.com/web-design/ecommerce" />
      </Helmet>

      <Navigation />
      <Breadcrumbs />
      
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
              Ecommerce Website Design
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build a powerful online store with our expert ecommerce website design services. Custom solutions for businesses looking to sell products online effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
              <ShoppingCart className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">Custom Ecommerce Solutions</h3>
              <p className="text-gray-300">Tailored ecommerce websites designed to meet your business needs and drive sales.</p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
              <CreditCard className="text-purple-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">Secure Payment Integration</h3>
              <p className="text-gray-300">Implement secure payment gateways to ensure safe transactions for your customers.</p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
              <Package className="text-pink-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">Inventory Management</h3>
              <p className="text-gray-300">Manage your products and inventory seamlessly with our integrated solutions.</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:opacity-90 transition-opacity"
            >
              Start Your Ecommerce Project
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceDesign;

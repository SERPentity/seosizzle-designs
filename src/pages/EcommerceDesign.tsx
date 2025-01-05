import Navigation from "../components/Navigation";
import { ShoppingCart, CreditCard, Package, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const EcommerceDesign = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
              E-commerce Website Design
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build a powerful online store that drives sales and delights customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
              <ShoppingCart className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">Shopping Experience</h3>
              <p className="text-gray-300">Intuitive product browsing and cart management</p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
              <CreditCard className="text-purple-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">Secure Payments</h3>
              <p className="text-gray-300">Multiple payment options and SSL security</p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
              <Package className="text-pink-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">Order Management</h3>
              <p className="text-gray-300">Streamlined inventory and shipping solutions</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
              <h2 className="text-3xl font-bold mb-6">Features</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <ArrowRight className="text-blue-400" size={20} />
                  <span>Product catalog management</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="text-blue-400" size={20} />
                  <span>Secure payment gateway integration</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="text-blue-400" size={20} />
                  <span>Inventory tracking system</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="text-blue-400" size={20} />
                  <span>Order management dashboard</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="text-blue-400" size={20} />
                  <span>Customer account management</span>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Platform Options</h2>
              <div className="space-y-4">
                <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-2">Shopify Development</h3>
                  <p className="text-gray-300">Custom Shopify themes and apps</p>
                </div>
                <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-2">WooCommerce</h3>
                  <p className="text-gray-300">WordPress-based e-commerce solutions</p>
                </div>
                <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
                  <p className="text-gray-300">Bespoke e-commerce platforms</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:opacity-90 transition-opacity"
            >
              Start Selling Online
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceDesign;
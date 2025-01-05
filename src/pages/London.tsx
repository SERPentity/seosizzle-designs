import Navigation from "../components/Navigation";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const London = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-primary mb-4">
              SEO Services in London
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Helping London businesses achieve top rankings on Google with our expert SEO services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Why Choose SEOsnafu in London?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-secondary mr-3 mt-1" size={20} />
                  <span>Local SEO experts who understand the London market</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-secondary mr-3 mt-1" size={20} />
                  <span>Proven track record with London businesses</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-secondary mr-3 mt-1" size={20} />
                  <span>Customized strategies for your industry</span>
                </li>
              </ul>

              <div className="pt-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>

            <div className="bg-accent p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Contact Our London Office</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="text-secondary mr-3" size={20} />
                  <span>123 SEO Street, London, EC1A 1BB</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-secondary mr-3" size={20} />
                  <span>020 1234 5678</span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-secondary mr-3" size={20} />
                  <span>london@seosnafu.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default London;
import { Link } from "react-router-dom";
import { Mail, Phone, Facebook, Twitter, Linkedin, Globe } from "lucide-react";
import { seoServices, webDesignServices } from "../data/serviceMenuData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white mt-20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">SEO Sizzle Designs</h3>
            <p className="text-gray-400">Transforming businesses through expert SEO and stunning web design solutions.</p>
            <div className="space-y-2">
              <a href="mailto:seosnafu@gmail.com" className="flex items-center text-gray-400 hover:text-blue-400">
                <Mail className="h-4 w-4 mr-2" />
                seosnafu@gmail.com
              </a>
              <a href="tel:07590505601" className="flex items-center text-gray-400 hover:text-blue-400">
                <Phone className="h-4 w-4 mr-2" />
                07590505601
              </a>
            </div>
          </div>

          {/* SEO Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">SEO Services</h3>
            <ul className="space-y-2">
              {seoServices.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Web Design Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Web Design</h3>
            <ul className="space-y-2">
              {webDesignServices.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/locations" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Locations
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              © {currentYear} SEO Sizzle Designs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
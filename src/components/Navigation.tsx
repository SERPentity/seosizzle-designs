import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Locations", path: "/locations" },
    { name: "SEO Audit", path: "/seo-audit" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50">
      <div className="backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link 
                to="/" 
                className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
              >
                SEOsnafu
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-300 hover:text-white transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-blue-400 after:via-purple-400 after:to-pink-400 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className="md:hidden animate-fade-in">
              <div className="pt-2 pb-3 space-y-1 backdrop-blur-md bg-black/50 rounded-lg mt-2 mb-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
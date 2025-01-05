import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const mainNavItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Locations", path: "/locations" },
    { name: "Contact", path: "/contact" },
  ];

  const serviceItems = [
    {
      category: "SEO Services",
      items: [
        { name: "Technical SEO", path: "/technical-seo" },
        { name: "Local SEO", path: "/local-seo" },
        { name: "Content Strategy", path: "/content-strategy" },
        { name: "SEO Audit", path: "/seo-audit" },
        { name: "Competitor Analysis", path: "/competitor-analysis" },
        { name: "Link Building", path: "/link-building" },
        { name: "Social Media", path: "/social-media" },
      ]
    },
    {
      category: "Web Design",
      items: [
        { name: "Web Design", path: "/web-design" },
        { name: "Responsive Design", path: "/responsive-design" },
        { name: "UX Design", path: "/ux-design" },
        { name: "E-commerce Design", path: "/ecommerce-design" },
      ]
    }
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
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-300 hover:text-white transition-all duration-300"
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center text-gray-300 hover:text-white transition-all duration-300"
                >
                  Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="absolute left-0 mt-2 w-64 rounded-xl backdrop-blur-md bg-black/90 border border-white/10 shadow-xl">
                    {serviceItems.map((category) => (
                      <div key={category.category} className="py-2">
                        <div className="px-4 py-2 text-sm font-semibold text-gray-400">
                          {category.category}
                        </div>
                        {category.items.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
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
                {mainNavItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Services Menu */}
                {serviceItems.map((category) => (
                  <div key={category.category} className="px-4 py-2">
                    <div className="text-sm font-semibold text-gray-400 mb-2">
                      {category.category}
                    </div>
                    {category.items.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
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
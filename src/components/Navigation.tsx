import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { mainNavItems } from "../data/serviceMenuData";
import ServicesDropdown from "./ServicesDropdown";
import MobileMenu from "./MobileMenu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSEOOpen, setIsSEOOpen] = useState(false);
  const [isWebDesignOpen, setIsWebDesignOpen] = useState(false);

  return (
    <header className="fixed w-full z-50">
      <nav className="backdrop-blur-md bg-black/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link 
                to="/" 
                className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                aria-label="SEOsnafu - Home"
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
                  aria-label={item.name}
                >
                  {item.name}
                </Link>
              ))}
              
              <ServicesDropdown 
                type="seo"
                isOpen={isSEOOpen} 
                setIsOpen={setIsSEOOpen}
                onOpen={() => setIsWebDesignOpen(false)}
              />
              
              <ServicesDropdown 
                type="webdesign"
                isOpen={isWebDesignOpen} 
                setIsOpen={setIsWebDesignOpen}
                onOpen={() => setIsSEOOpen(false)}
              />
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white transition-colors"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
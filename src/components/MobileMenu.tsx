import { Link } from "react-router-dom";
import { mainNavItems, seoServices, webDesignServices } from "../data/serviceMenuData";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface MobileMenuProps {
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu = ({ setIsOpen }: MobileMenuProps) => {
  const [isSEOOpen, setIsSEOOpen] = useState(false);
  const [isWebDesignOpen, setIsWebDesignOpen] = useState(false);

  const handleSEOClick = () => {
    setIsSEOOpen(!isSEOOpen);
    if (!isSEOOpen) {
      setIsWebDesignOpen(false);
    }
  };

  const handleWebDesignClick = () => {
    setIsWebDesignOpen(!isWebDesignOpen);
    if (!isWebDesignOpen) {
      setIsSEOOpen(false);
    }
  };

  return (
    <div className="md:hidden animate-fade-in">
      <div className="pt-2 pb-3 space-y-1 backdrop-blur-md bg-black/80 rounded-lg mt-2 mb-4 max-h-[80vh] overflow-y-auto">
        {/* Main Navigation Items */}
        <div className="px-4 py-2 border-b border-white/10">
          {mainNavItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors rounded-lg text-lg"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        {/* SEO Services Section */}
        <div className="px-4 py-2">
          <button 
            onClick={handleSEOClick}
            className="flex items-center justify-between w-full px-4 py-3 text-gray-300 hover:text-white transition-colors rounded-lg text-lg font-semibold"
          >
            SEO Services
            <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isSEOOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isSEOOpen && (
            <div className="ml-4 mt-2 space-y-1 border-l-2 border-blue-500/30 pl-4">
              {seoServices.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-4 py-2.5 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Web Design Services Section */}
        <div className="px-4 py-2">
          <button 
            onClick={handleWebDesignClick}
            className="flex items-center justify-between w-full px-4 py-3 text-gray-300 hover:text-white transition-colors rounded-lg text-lg font-semibold"
          >
            Web Design Services
            <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isWebDesignOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isWebDesignOpen && (
            <div className="ml-4 mt-2 space-y-1 border-l-2 border-purple-500/30 pl-4">
              {webDesignServices.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-4 py-2.5 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
import { Link } from "react-router-dom";
import { seoServices, webDesignServices } from "../data/serviceMenuData";
import { ChevronDown } from "lucide-react";

interface ServicesDropdownProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const ServicesDropdown = ({ isOpen, setIsOpen }: ServicesDropdownProps) => {
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-gray-300 hover:text-white transition-all duration-300"
      >
        Services
        <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute left-0 mt-2 w-64 rounded-xl backdrop-blur-md bg-black/90 border border-white/10 shadow-xl">
          <div className="py-2">
            <div className="px-4 py-2 text-sm font-semibold text-gray-400">
              SEO Services
            </div>
            {seoServices.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="py-2">
            <div className="px-4 py-2 text-sm font-semibold text-gray-400">
              Web Design Services
            </div>
            {webDesignServices.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesDropdown;
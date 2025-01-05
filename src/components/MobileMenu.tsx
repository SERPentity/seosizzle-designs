import { Link } from "react-router-dom";
import { mainNavItems, seoServices, webDesignServices } from "../data/serviceMenuData";

interface MobileMenuProps {
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu = ({ setIsOpen }: MobileMenuProps) => {
  return (
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
        
        <div className="px-4 py-2">
          <div className="text-sm font-semibold text-gray-400 mb-2">
            SEO Services
          </div>
          {seoServices.map((item) => (
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

        <div className="px-4 py-2">
          <div className="text-sm font-semibold text-gray-400 mb-2">
            Web Design Services
          </div>
          {webDesignServices.map((item) => (
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
      </div>
    </div>
  );
};

export default MobileMenu;
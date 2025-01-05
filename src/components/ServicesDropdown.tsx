import { Link } from "react-router-dom";
import { seoServices, webDesignServices } from "../data/serviceMenuData";
import { ChevronDown } from "lucide-react";

interface ServicesDropdownProps {
  type: "seo" | "webdesign";
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onOpen: () => void;
}

const ServicesDropdown = ({ type, isOpen, setIsOpen, onOpen }: ServicesDropdownProps) => {
  const services = type === "seo" ? seoServices : webDesignServices;
  const title = type === "seo" ? "SEO Services" : "Web Design Services";
  const borderColor = type === "seo" ? "border-blue-500/30" : "border-purple-500/30";

  const handleClick = () => {
    if (!isOpen) {
      onOpen();
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className="flex items-center text-gray-300 hover:text-white transition-all duration-300"
      >
        {title}
        <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className={`absolute left-0 mt-2 w-64 rounded-xl backdrop-blur-md bg-black/90 border ${borderColor} shadow-xl`}>
          <div className="py-2">
            {services.map((item) => (
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
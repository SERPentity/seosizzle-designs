import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Create mapping for prettier names
  const nameMap: { [key: string]: string } = {
    "local-seo": "Local SEO",
    "link-building": "Link Building",
    "responsive-design": "Responsive Design",
    "seo-audit": "SEO Audit",
    "technical-seo": "Technical SEO",
    "content-strategy": "Content Strategy",
    "competitor-analysis": "Competitor Analysis",
    "social-media": "Social Media",
    "web-design": "Web Design",
    "ux-design": "UX Design",
    "ecommerce-design": "Ecommerce Design",
    "service-business": "Service Business",
    "case-studies": "Case Studies",
    "services": "Services",
    "locations": "Locations",
    "contact": "Contact",
    "about": "About",
    "london": "London",
    "manchester": "Manchester",
    "birmingham": "Birmingham",
    "leeds": "Leeds",
    "liverpool": "Liverpool",
    "bristol": "Bristol",
    "sheffield": "Sheffield",
    "newcastle": "Newcastle",
    "southampton": "Southampton",
    "seo-services": "SEO Services",
  };

  return (
    <div className="pt-16">
      <nav className="bg-black/80 border-b border-white/10">
        <div className="flex items-center space-x-2 text-sm text-gray-400 px-4 sm:px-6 lg:px-8 py-3 max-w-7xl mx-auto">
          <Link 
            to="/" 
            className="flex items-center hover:text-white transition-colors"
            aria-label="Home"
          >
            <Home size={16} />
          </Link>
          
          {pathnames.length > 0 && (
            <ChevronRight size={16} className="text-gray-600" />
          )}

          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;

            return (
              <div key={name} className="flex items-center">
                <Link
                  to={routeTo}
                  className={`hover:text-white transition-colors ${
                    isLast ? "text-white" : ""
                  }`}
                >
                  {nameMap[name] || name.charAt(0).toUpperCase() + name.slice(1)}
                </Link>
                {!isLast && (
                  <ChevronRight size={16} className="text-gray-600 ml-2" />
                )}
              </div>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">SEO Services</h3>
            <ul className="space-y-2">
              <li><Link to="/technical-seo" className="hover:text-blue-400">Technical SEO</Link></li>
              <li><Link to="/local-seo" className="hover:text-blue-400">Local SEO</Link></li>
              <li><Link to="/content-strategy" className="hover:text-blue-400">Content Strategy</Link></li>
              <li><Link to="/seo-audit" className="hover:text-blue-400">SEO Audit</Link></li>
              <li><Link to="/competitor-analysis" className="hover:text-blue-400">Competitor Analysis</Link></li>
              <li><Link to="/link-building" className="hover:text-blue-400">Link Building</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Web Design</h3>
            <ul className="space-y-2">
              <li><Link to="/web-design" className="hover:text-blue-400">Web Design</Link></li>
              <li><Link to="/responsive-design" className="hover:text-blue-400">Responsive Design</Link></li>
              <li><Link to="/ux-design" className="hover:text-blue-400">UX Design</Link></li>
              <li><Link to="/ecommerce-design" className="hover:text-blue-400">E-commerce Design</Link></li>
              <li><Link to="/service-business" className="hover:text-blue-400">Service Business</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
              <li><Link to="/case-studies" className="hover:text-blue-400">Case Studies</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 mb-2">Email: hello@seosnafu.com</p>
            <p className="text-gray-400 mb-2">Phone: +44 (0) 123 456 789</p>
            <p className="text-gray-400">Address: 123 SEO Street, London, UK</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">&copy; {new Date().getFullYear()} SEOsnafu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
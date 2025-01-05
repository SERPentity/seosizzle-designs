import Navigation from "../components/Navigation";
import Breadcrumbs from "../components/Breadcrumbs";
import CaseHero from "../components/case-studies/CaseHero";
import CaseStats from "../components/case-studies/CaseStats";
import CaseContent from "../components/case-studies/CaseContent";
import { Link } from "react-router-dom";
import { Recycle, Truck, Package, MapPin } from "lucide-react";

const BioUKFuelsCase = () => {
  const solution = [
    "Developed a modern, conversion-focused website highlighting their free collection service",
    "Implemented local SEO strategies targeting businesses across England and Wales",
    "Created content emphasizing environmental benefits and compliance with regulations",
    "Optimized for commercial kitchen and restaurant-specific keywords",
    "Built a streamlined online booking system for waste oil collections"
  ];

  const results = [
    "Achieved #1 rankings for key terms like 'cooking oil disposal' and 'waste oil collection'",
    "Increased monthly organic leads by 312% year-over-year",
    "Expanded service coverage from regional to nationwide operations",
    "Reduced customer acquisition costs by 67% through organic growth",
    "Established Bio UK Fuels as the leading cooking oil recycling company in the UK",
    "Generated over 1,500 monthly organic visitors from targeted commercial audiences"
  ];

  const stats = [
    {
      icon: <Recycle className="text-green-400" size={32} />,
      stat: "312%",
      label: "Lead Growth"
    },
    {
      icon: <Truck className="text-green-400" size={32} />,
      stat: "1,500+",
      label: "Monthly Visitors"
    },
    {
      icon: <MapPin className="text-green-400" size={32} />,
      stat: "#1",
      label: "Industry Position"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Breadcrumbs />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <CaseHero 
            title="Nationwide Growth Through Digital Excellence"
            description="How we helped Bio UK Fuels become the UK's leading cooking oil recycling company with a 312% increase in organic leads"
            image="/lovable-uploads/12058831-a3de-4815-a87e-dbf5c93b0263.png"
          />

          {/* Custom Stats Section for Bio UK Fuels */}
          <div className="grid md:grid-cols-3 gap-8 animate-fade-up my-16">
            {stats.map((item, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 text-center"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <div className="text-3xl font-bold mb-2">{item.stat}</div>
                <div className="text-gray-300">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Growth Metrics */}
          <div className="grid md:grid-cols-2 gap-8 my-16">
            <div className="rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 p-8">
              <h3 className="text-2xl font-bold mb-6">Service Area Growth</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Initial Coverage</span>
                  <span className="text-green-400">Regional</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Current Coverage</span>
                  <span className="text-green-400">Nationwide</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Service Locations</span>
                  <span className="text-green-400">England & Wales</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 p-8">
              <h3 className="text-2xl font-bold mb-6">Digital Performance</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Organic Traffic</span>
                  <span className="text-green-400">1,500+ monthly</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Lead Conversion</span>
                  <span className="text-green-400">8.5%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Cost per Lead</span>
                  <span className="text-green-400">-67%</span>
                </div>
              </div>
            </div>
          </div>

          <CaseContent 
            challenge="Bio UK Fuels needed to transition from traditional marketing methods to establish a strong digital presence in the waste oil collection industry. They required a strategy to reach commercial kitchens and restaurants across England and Wales while competing with established waste management companies."
            solution={solution}
            results={results}
          />

          {/* Testimonial */}
          <div className="bg-white/5 rounded-2xl p-8 animate-fade-up mt-16">
            <blockquote className="text-xl text-gray-300 italic mb-6">
              "The digital transformation of our business has been remarkable. We've gone from a regional player to becoming the go-to company for cooking oil recycling across England and Wales. The consistent flow of organic leads has allowed us to scale our operations significantly."
            </blockquote>
            <div className="flex items-center">
              <div className="ml-4">
                <div className="font-semibold">Operations Director</div>
                <div className="text-gray-400">Bio UK Fuels</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16 animate-fade-up">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 rounded-full hover:opacity-90 transition-opacity"
            >
              Transform Your Business Today
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BioUKFuelsCase;
import Navigation from "../components/Navigation";
import Breadcrumbs from "../components/Breadcrumbs";
import CaseHero from "../components/case-studies/CaseHero";
import CaseStats from "../components/case-studies/CaseStats";
import CaseContent from "../components/case-studies/CaseContent";
import { Link } from "react-router-dom";
import { ChartBarIcon, ChartLineUp, Globe, Percent } from "lucide-react";

const BioUKFuelsCase = () => {
  const solution = [
    "Implemented comprehensive technical SEO optimizations for nationwide visibility",
    "Developed targeted content strategy focusing on high-intent transactional keywords",
    "Built strong backlink profile with 437+ referring domains",
    "Created conversion-focused landing pages for key service areas",
    "Optimized for non-branded traffic to capture new market share"
  ];

  const results = [
    "Achieved 4.5K+ monthly organic traffic with consistent growth trends",
    "Secured top rankings for high-intent transactional keywords",
    "Generated 100% of traffic from non-branded discovery searches",
    "Established strong presence across UK (42% traffic) and US (42% traffic)",
    "Built authority score of 23 with 437 referring domains",
    "Maintained consistent organic traffic growth showing sustained performance"
  ];

  const stats = [
    {
      icon: <ChartLineUp className="text-green-400" size={32} />,
      stat: "4.5K+",
      label: "Monthly Visitors"
    },
    {
      icon: <Globe className="text-green-400" size={32} />,
      stat: "437",
      label: "Referring Domains"
    },
    {
      icon: <Percent className="text-green-400" size={32} />,
      stat: "100%",
      label: "Non-Branded Traffic"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Breadcrumbs />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <CaseHero 
            title="Leading the Industry in Organic Growth"
            description="How Bio UK Fuels became the #1 lead generation website for cooking oil collection and recycling services across the UK"
            image="/lovable-uploads/12058831-a3de-4815-a87e-dbf5c93b0263.png"
          />

          {/* Custom Stats Section */}
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

          {/* Traffic Analysis Section */}
          <div className="grid md:grid-cols-2 gap-8 my-16">
            <div className="rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 p-8">
              <h3 className="text-2xl font-bold mb-6">Traffic Distribution</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">UK Traffic</span>
                  <span className="text-green-400">42%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">US Traffic</span>
                  <span className="text-green-400">42%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Other Regions</span>
                  <span className="text-green-400">16%</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 p-8">
              <h3 className="text-2xl font-bold mb-6">Search Performance</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Authority Score</span>
                  <span className="text-green-400">23</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Keywords</span>
                  <span className="text-green-400">1K+ Total</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Monthly Growth</span>
                  <span className="text-green-400">10.9%</span>
                </div>
              </div>
            </div>
          </div>

          <CaseContent 
            challenge="Bio UK Fuels needed to establish themselves as the leading website for cooking oil collection and recycling services across the UK. They required a strategy to attract high-intent, non-branded traffic and generate consistent leads through organic search."
            solution={solution}
            results={results}
          />

          {/* Testimonial */}
          <div className="bg-white/5 rounded-2xl p-8 animate-fade-up mt-16">
            <blockquote className="text-xl text-gray-300 italic mb-6">
              "Through strategic SEO and technical excellence, we've achieved consistent organic growth and established ourselves as the industry leader in cooking oil collection. The focus on non-branded traffic has been particularly valuable for our lead generation efforts."
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
import Navigation from "../components/Navigation";
import Breadcrumbs from "../components/Breadcrumbs";
import CaseHero from "../components/case-studies/CaseHero";
import CaseStats from "../components/case-studies/CaseStats";
import CaseContent from "../components/case-studies/CaseContent";
import { Link } from "react-router-dom";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { Area, AreaChart, XAxis, YAxis } from "recharts";

const StairGuysCase = () => {
  const keywordData = [
    { month: "Apr", keywords: 0 },
    { month: "May", keywords: 50 },
    { month: "Jun", keywords: 150 },
    { month: "Jul", keywords: 250 },
    { month: "Aug", keywords: 350 },
    { month: "Sep", keywords: 450 },
    { month: "Oct", keywords: 550 },
    { month: "Nov", keywords: 593 },
  ];

  const trafficData = {
    worldwide: 918,
    uk: 507,
    india: 132,
    us: 100,
    other: 179
  };

  const solution = [
    "Creating a new website with modern design and optimal user experience",
    "Implementing a comprehensive SEO strategy targeting 1,006+ keywords",
    "Developing content-driven SEO strategies that established them as an industry authority",
    "Targeting strategic keywords across multiple countries (55% UK traffic, 14% India, 11% US)",
    "Building a strong digital foundation resulting in 918 monthly organic visitors"
  ];

  const results = [
    "Achieved 593 keyword rankings in the UK market alone",
    "Generated 918 monthly organic visitors worldwide",
    "Secured 55% market share in the UK with 507 monthly visitors",
    "Expanded reach to international markets including India (132 visitors) and US (100 visitors)",
    "Established global presence with visitors from multiple countries"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Breadcrumbs />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <CaseHero 
            title="Revolutionizing Online Presence - The Stair Guys Journey"
            description="How we took The Stair Guys from zero to ranking for 593+ keywords and 918 monthly organic visitors"
            image="/lovable-uploads/d2a9804f-afdf-46e7-bd6e-7213b2384dbb.png"
          />

          <CaseStats />

          {/* SEMrush Data Visualization Section */}
          <div className="space-y-12 mt-16">
            {/* Keyword Rankings Graph */}
            <div className="rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 p-6">
              <h3 className="text-2xl font-bold mb-4">Keyword Growth Over Time</h3>
              <div className="aspect-[16/9] w-full">
                <img 
                  src="/semrush-keyword-graph.png" 
                  alt="SEMrush Keyword Growth Graph"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <p className="mt-4 text-gray-400 text-sm">Source: SEMrush Analytics</p>
            </div>

            {/* Traffic Overview */}
            <div className="rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 p-6">
              <h3 className="text-2xl font-bold mb-4">Traffic Distribution</h3>
              <div className="aspect-[16/9] w-full">
                <img 
                  src="/semrush-traffic-graph.png" 
                  alt="SEMrush Traffic Distribution"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <p className="mt-4 text-gray-400 text-sm">Source: SEMrush Analytics</p>
            </div>

            {/* Position Tracking */}
            <div className="rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 p-6">
              <h3 className="text-2xl font-bold mb-4">Keyword Position Tracking</h3>
              <div className="aspect-[16/9] w-full">
                <img 
                  src="/semrush-position-tracking.png" 
                  alt="SEMrush Position Tracking"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <p className="mt-4 text-gray-400 text-sm">Source: SEMrush Analytics</p>
            </div>
          </div>

          {/* Traffic Distribution Cards */}
          <div className="grid md:grid-cols-5 gap-4 mt-12">
            {Object.entries(trafficData).map(([country, visitors]) => (
              <div key={country} className="p-6 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 text-center">
                <div className="text-gray-400 mb-2 capitalize">{country}</div>
                <div className="text-2xl font-bold">{visitors}</div>
                <div className="text-sm text-gray-400">Monthly Visitors</div>
              </div>
            ))}
          </div>

          <CaseContent 
            challenge="The Stair Guys needed to establish a strong digital presence in the highly competitive staircase industry. Starting from zero online visibility, they needed to compete with established brands while targeting both UK and international markets."
            solution={solution}
            results={results}
          />

          {/* Testimonial */}
          <div className="bg-white/5 rounded-2xl p-8 animate-fade-up mt-16">
            <blockquote className="text-xl text-gray-300 italic mb-6">
              "We noticed an increase in leads within weeks of working with Martin and his team! Working alongside Martin has opened my eyes to what is possible for my business online. My company is now on the first page of Google and is competing with the top staircase brands in the industry."
            </blockquote>
            <div className="flex items-center">
              <div className="ml-4">
                <div className="font-semibold">Tom Abbott</div>
                <div className="text-gray-400">Director, The Stair Guys Ltd</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16 animate-fade-up">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:opacity-90 transition-opacity"
            >
              Get Similar Results for Your Business
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StairGuysCase;
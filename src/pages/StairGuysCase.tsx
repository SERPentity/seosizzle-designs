import Navigation from "../components/Navigation";
import Breadcrumbs from "../components/Breadcrumbs";
import CaseHero from "../components/case-studies/CaseHero";
import CaseStats from "../components/case-studies/CaseStats";
import CaseContent from "../components/case-studies/CaseContent";
import { Link } from "react-router-dom";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { Area, AreaChart, XAxis, YAxis, ResponsiveContainer } from "recharts";

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

          {/* Keyword Growth Chart */}
          <div className="mt-16 p-6 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10">
            <h3 className="text-2xl font-bold mb-6">Keyword Growth Over Time</h3>
            <div className="h-[400px] w-full">
              <ChartContainer
                config={{
                  keywords: {
                    theme: {
                      light: "rgb(96, 165, 250)",
                      dark: "rgb(96, 165, 250)",
                    },
                  },
                }}
              >
                <AreaChart data={keywordData}>
                  <defs>
                    <linearGradient id="colorKeywords" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#60A5FA" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#60A5FA" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="month" 
                    stroke="#94A3B8"
                    tickLine={false}
                  />
                  <YAxis 
                    stroke="#94A3B8"
                    tickLine={false}
                    axisLine={false}
                  />
                  <ChartTooltip />
                  <Area
                    type="monotone"
                    dataKey="keywords"
                    stroke="#60A5FA"
                    fillOpacity={1}
                    fill="url(#colorKeywords)"
                  />
                </AreaChart>
              </ChartContainer>
            </div>
          </div>

          {/* Traffic Distribution */}
          <div className="grid md:grid-cols-5 gap-4 mt-8">
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
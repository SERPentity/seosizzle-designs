import Navigation from "../components/Navigation";
import Breadcrumbs from "../components/Breadcrumbs";
import CaseHero from "../components/case-studies/CaseHero";
import CaseStats from "../components/case-studies/CaseStats";
import CaseContent from "../components/case-studies/CaseContent";
import { Link } from "react-router-dom";
import { ChartLine, Star, Award } from "lucide-react";

const StairGuysCase = () => {
  const stats = [
    {
      icon: <ChartLine className="text-orange-500" size={32} />,
      stat: "350+",
      label: "Keywords Ranked"
    },
    {
      icon: <Star className="text-orange-500" size={32} />,
      stat: "#1",
      label: "Google Rankings"
    },
    {
      icon: <Award className="text-orange-500" size={32} />,
      stat: "6",
      label: "Months to Success"
    }
  ];

  const solution = [
    "Creating a new website with modern design and optimal user experience",
    "Implementing a comprehensive SEO strategy targeting 1,006+ keywords",
    "Developing content-driven SEO strategies that established them as an industry authority",
    "Targeting strategic keywords across multiple countries (55% UK traffic, 14% India, 11% US)",
    "Building a strong digital foundation resulting in 918 monthly organic visitors"
  ];

  const results = [
    "Completely eliminated Google Ads spend while maintaining lead generation",
    "Now outranking major staircase industry competitors for key terms",
    "Achieved 593 keyword rankings in the UK market alone",
    "Generated 918 monthly organic visitors worldwide at zero cost",
    "Secured 55% market share in the UK with 507 monthly visitors",
    "Expanded reach to international markets including India (132 visitors) and US (100 visitors)",
    "Established sustainable organic lead generation without paid advertising"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Breadcrumbs />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <CaseHero 
            title="From Paid Ads to Organic Success - The Stair Guys Journey"
            description="How we helped The Stair Guys eliminate Google Ads spend while outperforming industry giants with 593+ keyword rankings and 918 monthly organic visitors"
            image="/lovable-uploads/d2a9804f-afdf-46e7-bd6e-7213b2384dbb.png"
          />

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

          <div className="space-y-12 mt-16">
            <div className="rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 p-8">
              <h3 className="text-2xl font-bold mb-6">Organic Traffic Growth</h3>
              <div className="relative aspect-[21/9] w-full bg-gradient-to-b from-black/20 to-black/5 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/70cf1a9b-1742-43d2-81eb-80d8a0fd2fa8.png"
                  alt="SEMrush Organic Traffic Growth showing increase to 507 monthly visitors"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-sm">
                <p className="text-gray-400">Source: SEMrush Analytics</p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <p className="text-orange-500">507 Monthly Organic Visitors</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 p-8">
              <h3 className="text-2xl font-bold mb-6">Keyword Rankings Growth</h3>
              <div className="relative aspect-[21/9] w-full bg-gradient-to-b from-black/20 to-black/5 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/3f9f98d4-c96e-45fa-959c-b537725398d3.png"
                  alt="SEMrush Keyword Rankings showing growth to 593 keywords"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-sm">
                <p className="text-gray-400">Source: SEMrush Analytics</p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <p className="text-orange-500">593 Total Keywords</p>
                </div>
              </div>
            </div>
          </div>

          <CaseContent 
            challenge="The Stair Guys were heavily dependent on expensive Google Ads for lead generation, struggling to compete with established industry giants. They needed to break free from paid advertising while building a sustainable organic presence that could rival larger competitors."
            solution={solution}
            results={results}
          />

          <div className="bg-white/5 rounded-2xl p-8 animate-fade-up mt-16">
            <blockquote className="text-xl text-gray-300 italic mb-6">
              "We noticed an increase in leads within weeks of working with Martin and his team! Working alongside Martin has opened my eyes to what is possible for my business online. My company is now on the first page of Google, competing with the top staircase brands in the industry, and best of all - we no longer need to spend money on Google Ads!"
            </blockquote>
            <div className="flex items-center">
              <div className="ml-4">
                <div className="font-semibold">Tom Abbott</div>
                <div className="text-gray-400">Director, The Stair Guys Ltd</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16 animate-fade-up">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-full transition-colors"
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
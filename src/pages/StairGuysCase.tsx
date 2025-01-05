import Navigation from "../components/Navigation";
import Breadcrumbs from "../components/Breadcrumbs";
import CaseHero from "../components/case-studies/CaseHero";
import CaseStats from "../components/case-studies/CaseStats";
import CaseContent from "../components/case-studies/CaseContent";
import { Link } from "react-router-dom";

const StairGuysCase = () => {
  const solution = [
    "Creating a new website with modern design and optimal user experience",
    "Implementing a comprehensive SEO strategy to help them punch above their weight online",
    "Developing content-driven SEO strategies that established them as an industry authority",
    "Targeting and optimizing for strategic keywords to compete with established brands",
    "Building a strong digital foundation to support long-term growth"
  ];

  const results = [
    "Ranked number one on Google for multiple search terms",
    "Achieved rankings for over 350 keywords",
    "Secured over 20 target keywords in Google's top 10 within 6 months",
    "Successfully competed with established industry leaders",
    "Transformed from a local business to a recognized industry authority"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Breadcrumbs />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <CaseHero 
            title="Revolutionizing Online Presence - The Stair Guys Journey"
            description="How we took The Stair Guys from zero to ranking for over 350 keywords in 6 months"
            image="https://images.unsplash.com/photo-1439337153520-7082a56a81f4?auto=format&fit=crop&w=1400&q=80"
          />

          <CaseStats />

          <CaseContent 
            challenge="The primary challenge was clear: they needed a digital platform that had the strength to compete in the highly competitive online market. The Stair Guys Ltd needed to transition from great offline success to a strong online presence to compete with established industry leaders who had been fixtures in the industry for decades."
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
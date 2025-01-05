import Navigation from "../components/Navigation";
import Breadcrumbs from "../components/Breadcrumbs";
import { Award, ChartBar, Star } from "lucide-react";
import { Link } from "react-router-dom";

const StairGuysCase = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Breadcrumbs />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 animate-fade-up">
            <Link 
              to="/case-studies"
              className="text-blue-400 hover:text-blue-300 transition-colors mb-4 inline-block"
            >
              ← Back to Case Studies
            </Link>
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
              Revolutionizing Online Presence - The Stair Guys Journey
            </h1>
            <p className="text-xl text-gray-300">
              How we took The Stair Guys from zero to ranking for over 350 keywords in 6 months
            </p>
          </div>

          <div className="grid gap-12">
            {/* Hero Image */}
            <div className="rounded-2xl overflow-hidden animate-fade-up">
              <img 
                src="https://images.unsplash.com/photo-1439337153520-7082a56a81f4?auto=format&fit=crop&w=1400&q=80"
                alt="The Stair Guys Ltd Project"
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Key Results */}
            <div className="grid md:grid-cols-3 gap-8 animate-fade-up">
              {[
                {
                  icon: <ChartBar className="text-blue-400" size={32} />,
                  stat: "350+",
                  label: "Keywords Ranked"
                },
                {
                  icon: <Star className="text-yellow-400" size={32} />,
                  stat: "#1",
                  label: "Google Rankings"
                },
                {
                  icon: <Award className="text-purple-400" size={32} />,
                  stat: "6",
                  label: "Months to Success"
                }
              ].map((item, index) => (
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

            {/* Challenge */}
            <div className="prose prose-invert max-w-none animate-fade-up">
              <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
              <p className="text-gray-300">
                The primary challenge was clear: they needed a digital platform that had the strength to compete in the highly competitive online market. The Stair Guys Ltd needed to transition from great offline success to a strong online presence to compete with established industry leaders who had been fixtures in the industry for decades.
              </p>
            </div>

            {/* Solution */}
            <div className="prose prose-invert max-w-none animate-fade-up">
              <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
              <p className="text-gray-300">
                We developed a comprehensive strategy focused on:
              </p>
              <ul className="space-y-4 text-gray-300">
                <li>Creating a new website with modern design and optimal user experience</li>
                <li>Implementing a comprehensive SEO strategy to help them punch above their weight online</li>
                <li>Developing content-driven SEO strategies that established them as an industry authority</li>
                <li>Targeting and optimizing for strategic keywords to compete with established brands</li>
                <li>Building a strong digital foundation to support long-term growth</li>
              </ul>
            </div>

            {/* Results */}
            <div className="prose prose-invert max-w-none animate-fade-up">
              <h2 className="text-3xl font-bold mb-6">The Results</h2>
              <p className="text-gray-300">
                Within just 6 months, The Stair Guys Ltd achieved remarkable results:
              </p>
              <ul className="space-y-4 text-gray-300">
                <li>Ranked number one on Google for multiple search terms</li>
                <li>Achieved rankings for over 350 keywords</li>
                <li>Secured over 20 target keywords in Google's top 10 within 6 months</li>
                <li>Successfully competed with established industry leaders</li>
                <li>Transformed from a local business to a recognized industry authority</li>
              </ul>
            </div>

            {/* Testimonial */}
            <div className="bg-white/5 rounded-2xl p-8 animate-fade-up">
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
            <div className="text-center mt-8 animate-fade-up">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:opacity-90 transition-opacity"
              >
                Get Similar Results for Your Business
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StairGuysCase;
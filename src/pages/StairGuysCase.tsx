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
              The Stair Guys Ltd Success Story
            </h1>
            <p className="text-xl text-gray-300">
              How we transformed a local stair installation company's online presence and doubled their qualified leads
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
                  stat: "200%",
                  label: "Increase in Qualified Leads"
                },
                {
                  icon: <Star className="text-yellow-400" size={32} />,
                  stat: "#1",
                  label: "Ranking for 'Stair Installation'"
                },
                {
                  icon: <Award className="text-purple-400" size={32} />,
                  stat: "150%",
                  label: "Increase in Organic Traffic"
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
                The Stair Guys Ltd came to us with a common problem: despite their excellent craftsmanship and service, 
                they were struggling to reach potential customers online. Their website was outdated, and they weren't 
                ranking for important local search terms related to stair installation and renovation.
              </p>
            </div>

            {/* Solution */}
            <div className="prose prose-invert max-w-none animate-fade-up">
              <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
              <ul className="space-y-4 text-gray-300">
                <li>Comprehensive local SEO strategy targeting specific service areas</li>
                <li>Complete website redesign with focus on user experience and conversion optimization</li>
                <li>Creation of detailed service pages for each type of stair installation and renovation</li>
                <li>Implementation of a review management system to showcase customer testimonials</li>
                <li>Development of a content strategy focusing on educational content about stair design and installation</li>
              </ul>
            </div>

            {/* Results */}
            <div className="prose prose-invert max-w-none animate-fade-up">
              <h2 className="text-3xl font-bold mb-6">The Results</h2>
              <p className="text-gray-300">
                Within 6 months of implementing our strategy, The Stair Guys Ltd saw remarkable improvements:
              </p>
              <ul className="space-y-4 text-gray-300">
                <li>Achieved #1 ranking for "stair installation" in their primary service area</li>
                <li>200% increase in qualified leads through organic search</li>
                <li>150% increase in organic traffic</li>
                <li>Expanded service area due to increased online visibility</li>
                <li>Improved conversion rate from 2% to 5% on service pages</li>
              </ul>
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
import Navigation from "../components/Navigation";
import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
              About SEOsnafu
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
              Real Business Experience. Real SEO Results.
            </p>
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              From Situation F*cked Up to Situation Fixed Up
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
              We transform underperforming websites into SEO powerhouses. While 99% of websites never make it to page one, 
              we specialize in breaking that cycle and putting our clients ahead of the competition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl animate-fade-up">
              <h2 className="text-2xl font-bold mb-6">Meet Martin Simpkins</h2>
              <p className="text-gray-300 mb-4">
                I'm a serial entrepreneur with multiple successful business ventures under my belt. What sets me apart? 
                I've been in your shoes. I've built and scaled businesses from the ground up, generating over a million 
                pounds in leads through SEO strategies I developed and refined for my own companies.
              </p>
              <p className="text-gray-300">
                Unlike traditional digital agencies staffed by designers fresh out of university with theoretical knowledge, 
                I bring real-world business experience to the table. I understand the challenges you face because I've faced 
                them myself. This practical experience is what enables me to deliver exceptional results for my clients.
              </p>
            </div>

            <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-2xl font-bold mb-6">The SEOsnafu Difference</h2>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="text-blue-400 mr-3 flex-shrink-0" size={20} />
                  <span>Proven track record of generating £1M+ in leads through SEO</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="text-blue-400 mr-3 flex-shrink-0" size={20} />
                  <span>Real business owner perspective on digital marketing</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="text-blue-400 mr-3 flex-shrink-0" size={20} />
                  <span>Practical strategies that deliver measurable results</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="text-blue-400 mr-3 flex-shrink-0" size={20} />
                  <span>Deep understanding of business environments and market dynamics</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl animate-fade-up">
            <h2 className="text-2xl font-bold mb-6">My Approach</h2>
            <p className="text-gray-300 mb-4">
              When you work with me, you're not just getting another SEO consultant – you're getting a business partner 
              who understands the complete picture. I've spent years perfecting SEO strategies that actually work in 
              the real world, not just in theory.
            </p>
            <p className="text-gray-300">
              My success comes from combining technical SEO expertise with practical business acumen. I don't just focus 
              on rankings – I focus on generating real leads and revenue for your business. This comprehensive approach 
              is why my clients consistently achieve outstanding results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
import Navigation from "../components/Navigation";
import { CheckCircle, AlertOctagon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useState } from "react";
import { Card } from "@/components/ui/card";

const About = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isFlipped, setIsFlipped] = useState(false);

  const onSubmit = (data: any) => {
    console.log(data);
    toast.success("Message sent successfully!");
    reset();
  };

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
              Transforming SEO Performance
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
              We transform underperforming websites into SEO powerhouses. While 99% of websites never make it to page one, 
              we specialize in breaking that cycle and putting our clients ahead of the competition.
            </p>
          </div>

          {/* SNAFU Explanation Card */}
          <div className="max-w-md mx-auto mb-16 relative z-10">
            <div 
              className="relative preserve-3d cursor-pointer hover:scale-105 transition-transform duration-300" 
              style={{ perspective: "1000px", height: "300px" }}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <Card
                className={`absolute w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                  isFlipped ? "rotate-y-180" : ""
                }`}
              >
                {/* Front of card */}
                <div className={`absolute w-full h-full backface-hidden bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 ${
                  isFlipped ? "invisible" : ""
                }`}>
                  <div className="flex flex-col items-center justify-center space-y-6 text-center h-full text-white">
                    <AlertOctagon className="w-16 h-16 text-yellow-300 animate-pulse" />
                    <h3 className="text-2xl font-bold">Curious About Our Name?</h3>
                    <p className="text-lg">Click to reveal the military origin of "SNAFU"<br /><span className="text-yellow-300">(Contains explicit content)</span></p>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-yellow-200 animate-bounce">
                      Click to flip →
                    </div>
                  </div>
                </div>

                {/* Back of card */}
                <div className={`absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg ${
                  !isFlipped ? "invisible" : ""
                }`}>
                  <div className="text-white space-y-4 p-8 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-yellow-300">SNAFU Explained</h3>
                      <p className="text-gray-200 leading-relaxed">
                        SNAFU is a military acronym that stands for "Situation Normal: All F***ed Up." 
                        It originated during WWII, reflecting how chaos was the normal state of affairs.
                      </p>
                      <p className="text-gray-200 leading-relaxed mt-4">
                        In the context of websites, it's sadly still relevant - most sites are in a 
                        state of SEO chaos. That's where we come in: we transform this "normal" 
                        situation into exceptional results.
                      </p>
                      <p className="text-yellow-300 font-bold mt-4 text-lg">
                        We take websites from F*cked Up to Fixed Up!
                      </p>
                    </div>
                    <div className="text-sm text-yellow-200 text-center animate-bounce mt-2">
                      Click to flip back →
                    </div>
                  </div>
                </div>
              </Card>
            </div>
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

          {/* Contact Form Section */}
          <div className="mt-16 backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl animate-fade-up">
            <h2 className="text-2xl font-bold mb-6 text-center">Get in Touch</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-6">
              <div>
                <Input
                  {...register("name")}
                  placeholder="Your Name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              <div>
                <Input
                  {...register("email")}
                  type="email"
                  placeholder="Your Email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              <div>
                <Textarea
                  {...register("message")}
                  placeholder="Your Message"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  rows={4}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

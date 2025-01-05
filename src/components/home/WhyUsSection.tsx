import { Shield, Target, Zap, ChartBarIcon, Frown, Smile } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const WhyUsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold text-white mb-4">Why "SEOsnafu"?</h2>
          <p className="text-xl text-gray-300">Because the state of most websites' rankings is... well, let's just say there's room for improvement!</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm animate-fade-up">
            <CardContent className="p-6 text-center">
              <div className="mb-4 flex justify-center">
                <Frown className="h-12 w-12 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">The Reality</h3>
              <p className="text-gray-300">99% of websites never make it to Google's first page</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-6 text-center">
              <div className="mb-4 flex justify-center">
                <Zap className="h-12 w-12 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">The Solution</h3>
              <p className="text-gray-300">We transform chaotic rankings into structured success</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <CardContent className="p-6 text-center">
              <div className="mb-4 flex justify-center">
                <Smile className="h-12 w-12 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">The Result</h3>
              <p className="text-gray-300">Your website, optimized and ranking exactly where it should be</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <div className="inline-flex items-center space-x-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-8 py-4">
            <Target className="h-6 w-6 text-blue-400" />
            <p className="text-lg text-white">From chaos to clarity - that's the SEOsnafu way</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
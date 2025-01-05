import React from "react";
import { Award, Target, ChartBar, Rocket } from "lucide-react";

const StatsSection = () => {
  return (
    <section className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              icon: <Target className="w-8 h-8 text-blue-400" />,
              label: "Strategic SEO Planning",
              description: "Customized strategies aligned with your business goals"
            },
            { 
              icon: <Rocket className="w-8 h-8 text-purple-400" />,
              label: "Rapid Growth",
              description: "Accelerated online visibility and market presence"
            },
            { 
              icon: <ChartBar className="w-8 h-8 text-pink-400" />,
              label: "Data-Driven Results",
              description: "Decisions backed by analytics and performance metrics"
            },
            { 
              icon: <Award className="w-8 h-8 text-yellow-400" />,
              label: "Industry Expertise",
              description: "Years of experience across diverse business sectors"
            }
          ].map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <div className="text-xl font-bold text-white mb-2">{benefit.label}</div>
              <div className="text-gray-300">{benefit.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
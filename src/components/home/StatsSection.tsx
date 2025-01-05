import React from "react";

const StatsSection = () => {
  return (
    <section className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: "350%", label: "Average Traffic Increase" },
            { number: "4,000+", label: "Monthly Leads Generated" },
            { number: "10x", label: "Lead Generation Growth" },
            { number: "593+", label: "Keywords Ranked" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10"
            >
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
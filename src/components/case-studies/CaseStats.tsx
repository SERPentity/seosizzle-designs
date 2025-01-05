import { ChartBar, Star, Award } from "lucide-react";

const CaseStats = () => {
  const stats = [
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
  ];

  return (
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
  );
};

export default CaseStats;
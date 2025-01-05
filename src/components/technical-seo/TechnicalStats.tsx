import { FC } from 'react';

const TechnicalStats: FC = () => {
  const stats = [
    {
      value: "47%",
      description: "of consumers expect websites to load in 2 seconds or less"
    },
    {
      value: "40%",
      description: "of users abandon websites that take more than 3 seconds to load"
    },
    {
      value: "88%",
      description: "of users are less likely to return after a bad experience"
    },
    {
      value: "3x",
      description: "increase in conversions with optimal site speed"
    }
  ];

  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Performance Statistics</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
            <p className="text-gray-300">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalStats;
interface CaseContentProps {
  challenge: string;
  solution: string[];
  results: string[];
}

const CaseContent = ({ challenge, solution, results }: CaseContentProps) => {
  return (
    <div className="space-y-16">
      <div className="prose prose-invert max-w-none animate-fade-up">
        <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
        <p className="text-gray-300">{challenge}</p>
      </div>

      <div className="prose prose-invert max-w-none animate-fade-up">
        <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
        <p className="text-gray-300">We developed a comprehensive strategy focused on:</p>
        <ul className="space-y-4 text-gray-300">
          {solution.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="prose prose-invert max-w-none animate-fade-up">
        <h2 className="text-3xl font-bold mb-6">The Results</h2>
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-6 mb-8">
          <h3 className="text-xl font-semibold text-blue-400 mb-4">Key Achievement Highlights</h3>
          <ul className="space-y-3 text-white">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✓</span>
              Eliminated dependency on paid Google Ads completely
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✓</span>
              Now generating consistent organic leads at zero cost
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✓</span>
              Outperforming major staircase industry competitors
            </li>
          </ul>
        </div>
        <p className="text-gray-300">Within just 6 months, The Stair Guys Ltd achieved remarkable results:</p>
        <ul className="space-y-4 text-gray-300">
          {results.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CaseContent;
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
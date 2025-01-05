import { Link } from "react-router-dom";

interface CaseHeroProps {
  title: string;
  description: string;
  image: string;
}

const CaseHero = ({ title, description, image }: CaseHeroProps) => {
  return (
    <div className="mb-16 animate-fade-up">
      <Link 
        to="/case-studies"
        className="text-blue-400 hover:text-blue-300 transition-colors mb-4 inline-block"
      >
        ← Back to Case Studies
      </Link>
      <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
        {title}
      </h1>
      <p className="text-xl text-gray-300">
        {description}
      </p>
      <div className="mt-8 rounded-2xl overflow-hidden">
        <img 
          src={image}
          alt={title}
          className="w-full h-[400px] object-cover"
        />
      </div>
    </div>
  );
};

export default CaseHero;
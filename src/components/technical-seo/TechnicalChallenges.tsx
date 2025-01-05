import { FC } from 'react';

const TechnicalChallenges: FC = () => {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Why Technical SEO Matters</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-4">The Technical Challenge</h3>
          <p className="text-gray-300 mb-4">
            In today's competitive digital landscape, having great content isn't enough. Search engines need to be able to effectively crawl, index, and understand your website's structure and content.
          </p>
          <p className="text-gray-300">
            Technical SEO issues can prevent your website from reaching its full potential, regardless of how good your content is. Our technical SEO services ensure your website meets and exceeds search engine requirements.
          </p>
        </div>
        <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-4">The Performance Impact</h3>
          <p className="text-gray-300 mb-4">
            Website performance directly affects user experience and search rankings. Google's Core Web Vitals are now a ranking factor, making technical optimization more crucial than ever.
          </p>
          <p className="text-gray-300">
            Our technical SEO services focus on optimizing every aspect of your website's performance to improve both user experience and search engine rankings.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnicalChallenges;
import { FC } from 'react';

interface LocationKeyContentProps {
  cityName: string;
}

const LocationKeyContent: FC<LocationKeyContentProps> = ({ cityName }) => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-invert max-w-none">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">{cityName} SEO Expertise</h2>
              <p className="text-gray-300 mb-6">
                As {cityName}'s premier SEO agency, we understand the unique challenges of ranking in one of the most competitive digital markets. Our {cityName}-based SEO experts combine local market knowledge with cutting-edge SEO techniques to deliver exceptional results for businesses across the region.
              </p>
              <p className="text-gray-300 mb-6">
                We specialize in helping {cityName} businesses achieve and maintain top search engine rankings through data-driven strategies, comprehensive technical optimization, and content that resonates with your local audience.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our {cityName} SEO Services?</h2>
              <ul className="list-disc pl-6 text-gray-300 space-y-4">
                <li>Specialized knowledge of {cityName}'s competitive digital landscape</li>
                <li>Proven track record of improving local search visibility</li>
                <li>Comprehensive technical SEO audits and optimization</li>
                <li>Local content strategy tailored to {cityName} audiences</li>
                <li>Transparent reporting and measurable results</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationKeyContent;
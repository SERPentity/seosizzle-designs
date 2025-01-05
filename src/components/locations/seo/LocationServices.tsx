import { FC } from 'react';

interface LocationServicesProps {
  cityName: string;
}

const LocationServices: FC<LocationServicesProps> = ({ cityName }) => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Comprehensive SEO Services in {cityName}</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Local SEO Services {cityName}</h3>
              <p className="text-gray-300 mb-4">
                Dominate local search results with our specialized {cityName} SEO services. We optimize your Google Business Profile, build local citations, and implement location-specific keyword strategies to help your business stand out in {cityName}'s competitive market.
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Google Business Profile optimization</li>
                <li>Local citation building</li>
                <li>Location-specific keyword targeting</li>
                <li>Local link building in {cityName}</li>
              </ul>
            </div>

            <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Technical SEO {cityName}</h3>
              <p className="text-gray-300 mb-4">
                Our {cityName} technical SEO experts conduct comprehensive audits and implement advanced optimization strategies to ensure your website meets Google's latest requirements and outperforms competitors.
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Site speed optimization</li>
                <li>Mobile-first optimization</li>
                <li>Technical infrastructure improvements</li>
                <li>Schema markup implementation</li>
              </ul>
            </div>

            <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4">E-commerce SEO {cityName}</h3>
              <p className="text-gray-300 mb-4">
                Specialized e-commerce SEO strategies to increase product visibility and sales for {cityName}'s online retailers. Our approach combines technical expertise with conversion optimization.
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Product page optimization</li>
                <li>Category page SEO</li>
                <li>Shopping feed optimization</li>
                <li>Conversion rate optimization</li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Content Strategy {cityName}</h3>
              <p className="text-gray-300 mb-4">
                Data-driven content strategies targeting {cityName}'s market-specific keywords and topics. Our content team creates engaging, SEO-optimized content that converts visitors into customers.
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Keyword research and analysis</li>
                <li>Content gap analysis</li>
                <li>Content creation and optimization</li>
                <li>Content performance tracking</li>
              </ul>
            </div>

            <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Link Building Services {cityName}</h3>
              <p className="text-gray-300 mb-4">
                Strategic link building campaigns focusing on quality {cityName}-based and industry-relevant backlinks to boost your website's authority and search engine rankings.
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Local link building</li>
                <li>Digital PR services</li>
                <li>Guest posting</li>
                <li>Broken link building</li>
              </ul>
            </div>

            <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4">SEO Consulting {cityName}</h3>
              <p className="text-gray-300 mb-4">
                Expert SEO consultation services for {cityName} businesses seeking strategic guidance and implementation support for their digital marketing efforts.
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>SEO strategy development</li>
                <li>SEO training for teams</li>
                <li>Performance monitoring</li>
                <li>ROI tracking and reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationServices;
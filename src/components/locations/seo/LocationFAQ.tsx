import { FC } from 'react';

interface LocationFAQProps {
  cityName: string;
}

const LocationFAQ: FC<LocationFAQProps> = ({ cityName }) => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions About {cityName} SEO</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold mb-4">How much does SEO cost in {cityName}?</h3>
            <p className="text-gray-300">
              Monthly SEO packages start from £360 per month.
            </p>
          </div>
          <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold mb-4">How long does SEO take to work in {cityName}?</h3>
            <p className="text-gray-300">
              While initial improvements can be seen within 3-6 months, significant results in {cityName}'s competitive market typically take 6-12 months. We focus on sustainable, long-term growth rather than quick fixes.
            </p>
          </div>
          <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold mb-4">Do you guarantee first page rankings?</h3>
            <p className="text-gray-300">
              While we can't guarantee specific rankings due to Google's ever-changing algorithms, we have a proven track record of achieving first page results for our {cityName} clients through ethical SEO practices and data-driven strategies.
            </p>
          </div>
          <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold mb-4">What makes your {cityName} SEO services different?</h3>
            <p className="text-gray-300">
              Our deep understanding of {cityName}'s market, combined with advanced technical expertise and transparent reporting, sets us apart. We focus on delivering measurable ROI and maintaining long-term client relationships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationFAQ;
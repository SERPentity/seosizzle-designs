import React, { useState } from 'react';

const FlippingCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full max-w-xl mx-auto my-12 h-[300px] preserve-3d perspective-1000">
      <div 
        className={`relative w-full h-full duration-500 transform-style-preserve-3d cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="w-full h-full p-8 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl font-bold mb-4">Curious About Our Name?</h3>
            <p className="text-lg mb-4">
              Discover how a bold WWII military term perfectly captures the state of modern websites - and why it inspired our mission to transform digital chaos into success.
            </p>
            <p className="text-sm text-yellow-300">(Contains explicit content)</p>
            <p className="mt-8 text-sm text-white/80">Click to flip →</p>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="w-full h-full p-8 rounded-2xl bg-gray-900 text-white flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">SNAFU Explained</h3>
            <p className="mb-4">
              SNAFU is a military acronym that stands for "Situation Normal: All F***ed Up." It originated during WWII, reflecting how chaos was the normal state of affairs.
            </p>
            <p className="mb-4">
              In the context of websites, it's sadly still relevant - most sites are in a state of SEO chaos. That's where we come in: we transform this "normal" situation into exceptional results.
            </p>
            <p className="text-lg font-bold text-yellow-300">
              We take websites from F*cked Up to Fixed Up!
            </p>
            <p className="mt-8 text-sm text-white/80">Click to flip back ←</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlippingCard;
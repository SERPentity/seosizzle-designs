import { useState } from "react";
import Hero from "@/components/sb-construction/Hero";
import ServiceSelection from "@/components/sb-construction/ServiceSelection";
import ServiceAreas from "@/components/sb-construction/ServiceAreas";
import KeywordSection from "@/components/sb-construction/KeywordSection";

interface ServiceDetail {
  name: string;
  isPriority: boolean;
  description: string;
}

const SBConstruction = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [customServices, setCustomServices] = useState<string[]>([]);
  const [serviceDetails, setServiceDetails] = useState<{ [key: string]: ServiceDetail }>({});
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [customAreas, setCustomAreas] = useState<string[]>([]);
  const [keywords, setKeywords] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-black">
      <main className="container mx-auto px-4">
        <Hero />
        <ServiceSelection 
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}
          customServices={customServices}
          setCustomServices={setCustomServices}
          serviceDetails={serviceDetails}
          setServiceDetails={setServiceDetails}
        />
        <ServiceAreas 
          selectedAreas={selectedAreas}
          setSelectedAreas={setSelectedAreas}
          customAreas={customAreas}
          setCustomAreas={setCustomAreas}
        />
        <KeywordSection 
          keywords={keywords}
          setKeywords={setKeywords}
        />
      </main>
    </div>
  );
};

export default SBConstruction;
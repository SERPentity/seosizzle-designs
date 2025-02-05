import { useState } from "react";
import Hero from "@/components/sb-construction/Hero";
import ServiceSelection from "@/components/sb-construction/ServiceSelection";
import ServiceAreas from "@/components/sb-construction/ServiceAreas";
import KeywordSection from "@/components/sb-construction/KeywordSection";
import DesignPreferences from "@/components/sb-construction/DesignPreferences";
import DesignThemeSection from "@/components/sb-construction/DesignThemeSection";
import AdditionalInfo from "@/components/sb-construction/AdditionalInfo";

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
  const [colorSources, setColorSources] = useState<string[]>([]);
  const [websiteUrl, setWebsiteUrl] = useState<string>("");
  const [brandingNotes, setBrandingNotes] = useState<string>("");
  const [designTheme, setDesignTheme] = useState("light");
  const [designStyle, setDesignStyle] = useState("modern");
  const [socialMedia, setSocialMedia] = useState<{ [key: string]: string }>({});
  const [projectTimeline, setProjectTimeline] = useState("");
  const [specialFeatures, setSpecialFeatures] = useState("");
  const [businessHours, setBusinessHours] = useState("");
  const [providesEmergencyService, setProvidesEmergencyService] = useState(false);

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
        <DesignThemeSection 
          onThemeChange={setDesignTheme}
          onStyleChange={setDesignStyle}
        />
        <DesignPreferences 
          onColorSourceChange={setColorSources}
          onWebsiteUrlChange={setWebsiteUrl}
          onBrandingNotesChange={setBrandingNotes}
        />
        <KeywordSection 
          keywords={keywords}
          setKeywords={setKeywords}
        />
        <AdditionalInfo
          onSocialMediaChange={setSocialMedia}
          onProjectTimelineChange={setProjectTimeline}
          onSpecialFeaturesChange={setSpecialFeatures}
          onBusinessHoursChange={setBusinessHours}
          onEmergencyServiceChange={setProvidesEmergencyService}
        />
      </main>
    </div>
  );
};

export default SBConstruction;
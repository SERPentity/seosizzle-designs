import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Confetti from 'react-confetti';
import { supabase } from "@/integrations/supabase/client";
import Hero from "@/components/sb-construction/Hero";
import ServiceSelection from "@/components/sb-construction/ServiceSelection";
import ServiceAreas from "@/components/sb-construction/ServiceAreas";
import KeywordSection from "@/components/sb-construction/KeywordSection";
import DesignPreferences from "@/components/sb-construction/DesignPreferences";
import DesignThemeSection from "@/components/sb-construction/DesignThemeSection";
import AdditionalInfo from "@/components/sb-construction/AdditionalInfo";
import PDFDocument from "@/components/sb-construction/PDFGenerator";
import { useWindowSize } from "@/hooks/useWindowSize";
import type { Database, Json } from "@/integrations/supabase/types";

interface ServiceDetail {
  name: string;
  isPriority: boolean;
  description: string;
}

type ConstructionSubmission = Database['public']['Tables']['construction_submissions']['Insert']

const SBConstruction = () => {
  const navigate = useNavigate();
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [customServices, setCustomServices] = useState<string[]>([]);
  const [serviceDetails, setServiceDetails] = useState<{ [key: string]: ServiceDetail }>({});
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [customAreas, setCustomAreas] = useState<string[]>([]);
  const [keywords, setKeywords] = useState<string[]>([]);
  const [colorSources, setColorSources] = useState<string[]>([]);
  const [websiteUrl, setWebsiteUrl] = useState<string>("");
  const [brandingNotes, setBrandingNotes] = useState<string>("");
  const [designTheme, setDesignTheme] = useState<string>("light");
  const [designStyle, setDesignStyle] = useState<string>("modern");
  const [socialMedia, setSocialMedia] = useState<{ [key: string]: string }>({});
  const [projectTimeline, setProjectTimeline] = useState<string>("");
  const [specialFeatures, setSpecialFeatures] = useState<string>("");
  const [businessHours, setBusinessHours] = useState<string>("");
  const [providesEmergencyService, setProvidesEmergencyService] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      // Insert data into Supabase
      const submission: ConstructionSubmission = {
        selected_services: selectedServices,
        service_details: serviceDetails as Json,
        selected_areas: selectedAreas,
        keywords,
        color_sources: colorSources,
        website_url: websiteUrl,
        branding_notes: brandingNotes,
        design_theme: designTheme,
        design_style: designStyle,
        social_media: socialMedia as Json,
        project_timeline: projectTimeline,
        special_features: specialFeatures,
        business_hours: businessHours,
        provides_emergency_service: providesEmergencyService,
      };

      const { data, error } = await supabase
        .from('construction_submissions')
        .insert(submission)
        .select()
        .single();

      if (error) throw error;

      // Show success animation
      setShowConfetti(true);
      toast.success("Submission successful!");

      // Send email with PDF
      const emailResponse = await supabase.functions.invoke('send-construction-pdf', {
        body: {
          id: data.id,
          pdfUrl: "PDF URL will be generated" // TODO: Implement PDF storage
        },
      });

      if (emailResponse.error) {
        console.error("Error sending email:", emailResponse.error);
        toast.error("Submission saved but there was an error sending the email");
      }

      // Hide confetti after 5 seconds
      setTimeout(() => {
        setShowConfetti(false);
      }, 5000);

    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {showConfetti && <Confetti width={width} height={height} />}
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
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Submit Website Requirements"}
          </button>
        </div>
      </main>
    </div>
  );
};

export default SBConstruction;
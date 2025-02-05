import { useState } from "react";
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
import { Button } from "@/components/ui/button";
import { PDFDownloadLink, pdf } from '@react-pdf/renderer';
import { Mail, MessageSquare } from "lucide-react";
import type { Database } from "@/integrations/supabase/types";
import type { Json } from "@/integrations/supabase/types";

interface ServiceDetail {
  name: string;
  isPriority: boolean;
  description: string;
}

type ConstructionSubmission = Database['public']['Tables']['construction_submissions']['Insert']

const SBConstruction = () => {
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
  const [isComplete, setIsComplete] = useState(false);

  const handleSubmit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const submission: ConstructionSubmission = {
        selected_services: selectedServices,
        service_details: serviceDetails as unknown as Json,
        selected_areas: selectedAreas,
        keywords,
        color_sources: colorSources,
        website_url: websiteUrl,
        branding_notes: brandingNotes,
        design_theme: designTheme,
        design_style: designStyle,
        social_media: socialMedia as unknown as Json,
        project_timeline: projectTimeline,
        special_features: specialFeatures,
        business_hours: businessHours,
        provides_emergency_service: providesEmergencyService,
      };

      const { error } = await supabase
        .from('construction_submissions')
        .insert(submission)
        .select()
        .single();

      if (error) throw error;

      setIsComplete(true);
      toast.success("Questionnaire completed! You can now download your PDF.");

    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };

  const formData = {
    selectedServices,
    serviceDetails,
    selectedAreas,
    keywords,
    colorSources,
    websiteUrl,
    brandingNotes,
    designTheme,
    designStyle,
    socialMedia,
    projectTimeline,
    specialFeatures,
    businessHours,
    providesEmergencyService,
  };

  const handleEmailPDF = async () => {
    const pdfBlob = await pdf(<PDFDocument data={formData} />).toBlob();
    const mailtoLink = `mailto:info@serpentity.co.uk?subject=Construction Requirements PDF&body=Please find attached my construction requirements.`;
    
    // Create a temporary link to trigger the email client
    const a = document.createElement('a');
    a.href = mailtoLink;
    
    // Create a temporary form for the file
    const formDataToSend = new FormData();
    formDataToSend.append('attachment', pdfBlob, 'construction-requirements.pdf');
    
    // Open the email client
    window.open(mailtoLink, '_blank');
    toast.success("Email client opened! Please attach the downloaded PDF to your email.");
  };

  const handleWhatsAppClick = () => {
    const whatsappLink = `https://wa.me/447590505601?text=Hi, I have completed the construction questionnaire and would like to discuss my requirements.`;
    window.open(whatsappLink, '_blank');
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
        <div className="mt-8 flex flex-col items-center gap-4">
          {!isComplete ? (
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Complete Questionnaire"}
            </Button>
          ) : (
            <div className="flex flex-col items-center gap-6">
              <div className="text-center space-y-2">
                <h3 className="text-xl font-semibold text-white">Download and Share Your Requirements</h3>
                <p className="text-gray-300">Please download your PDF and share it with us through email or WhatsApp</p>
              </div>
              
              <PDFDownloadLink
                document={<PDFDocument data={formData} />}
                fileName="construction-requirements.pdf"
              >
                {({ loading }) => (
                  <Button
                    onClick={handleConfetti}
                    disabled={loading}
                    className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    {loading ? "Generating PDF..." : "🎉 Download PDF 🎉"}
                  </Button>
                )}
              </PDFDownloadLink>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleEmailPDF}
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Email PDF to Serpentity
                </Button>

                <Button
                  onClick={handleWhatsAppClick}
                  className="px-8 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  Contact via WhatsApp
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default SBConstruction;

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import ImageUploadSection from "./ImageUploadSection";
import WebsiteReferenceSection from "./WebsiteReferenceSection";

interface DesignPreferencesProps {
  onColorSourceChange: (source: string[]) => void;
  onWebsiteUrlChange: (url: string) => void;
  onBrandingNotesChange: (notes: string) => void;
}

const DesignPreferences = ({
  onColorSourceChange,
  onWebsiteUrlChange,
  onBrandingNotesChange
}: DesignPreferencesProps) => {
  const [selectedSources, setSelectedSources] = useState<string[]>([]);
  const [websiteUrls, setWebsiteUrls] = useState<string[]>(['']);

  const handleColorSourceChange = (source: string, checked: boolean) => {
    let newSources = [...selectedSources];
    
    if (checked) {
      newSources.push(source);
      if (source === 'reference') {
        setWebsiteUrls(['', '']);
      }
    } else {
      newSources = newSources.filter(s => s !== source);
      if (source === 'reference') {
        setWebsiteUrls([]);
      }
    }
    
    setSelectedSources(newSources);
    onColorSourceChange(newSources);
  };

  const handleWebsiteUrlChange = (index: number, value: string) => {
    const newUrls = [...websiteUrls];
    newUrls[index] = value;
    setWebsiteUrls(newUrls);
    onWebsiteUrlChange(newUrls.join(','));
  };

  return (
    <Card className="w-full p-8 bg-black/[0.96] relative mt-8 animate-fade-up">
      <h2 className="text-2xl font-semibold text-neutral-50 mb-6">Design Preferences</h2>
      <p className="text-neutral-400 mb-6">How would you like us to determine the color scheme for your website?</p>

      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="existing"
            checked={selectedSources.includes('existing')}
            onCheckedChange={(checked) => handleColorSourceChange("existing", checked as boolean)}
          />
          <Label htmlFor="existing" className="text-neutral-200">
            Use colors from existing website/logo/branding
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox 
            id="upload"
            checked={selectedSources.includes('upload')}
            onCheckedChange={(checked) => handleColorSourceChange("upload", checked as boolean)}
          />
          <Label htmlFor="upload" className="text-neutral-200">
            Upload inspiration images
          </Label>
        </div>

        {selectedSources.includes('upload') && (
          <ImageUploadSection 
            onImagesChange={(images) => {
              // Handle images change if needed
            }} 
          />
        )}

        <div className="flex items-center space-x-2">
          <Checkbox 
            id="reference"
            checked={selectedSources.includes('reference')}
            onCheckedChange={(checked) => handleColorSourceChange("reference", checked as boolean)}
          />
          <Label htmlFor="reference" className="text-neutral-200">
            Reference other websites
          </Label>
        </div>

        {selectedSources.includes('reference') && (
          <WebsiteReferenceSection 
            websiteUrls={websiteUrls}
            onWebsiteUrlChange={handleWebsiteUrlChange}
          />
        )}

        {selectedSources.includes('existing') && (
          <div className="mt-6">
            <Label htmlFor="website-url" className="text-neutral-50 block mb-2">
              Existing Website URL
            </Label>
            <Input
              id="website-url"
              placeholder="https://example.com"
              onChange={(e) => onWebsiteUrlChange(e.target.value)}
              className="bg-neutral-900 border-neutral-800 text-neutral-100"
            />
          </div>
        )}

        <div className="mt-6">
          <Label htmlFor="branding-notes" className="text-neutral-50 block mb-2">
            Additional Branding Notes
          </Label>
          <Textarea
            id="branding-notes"
            placeholder="Share any specific color preferences, brand guidelines, or other design notes..."
            onChange={(e) => onBrandingNotesChange(e.target.value)}
            className="bg-neutral-900 border-neutral-800 text-neutral-100 min-h-[100px]"
          />
        </div>
      </div>
    </Card>
  );
};

export default DesignPreferences;
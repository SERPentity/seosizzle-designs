import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

interface DesignPreferencesProps {
  onColorSourceChange: (source: string) => void;
  onWebsiteUrlChange: (url: string) => void;
  onBrandingNotesChange: (notes: string) => void;
}

const DesignPreferences = ({
  onColorSourceChange,
  onWebsiteUrlChange,
  onBrandingNotesChange
}: DesignPreferencesProps) => {
  const [colorSource, setColorSource] = useState<string>("existing");
  const [websiteUrl, setWebsiteUrl] = useState<string>("");
  const [brandingNotes, setBrandingNotes] = useState<string>("");

  const handleColorSourceChange = (value: string) => {
    setColorSource(value);
    onColorSourceChange(value);
  };

  const handleWebsiteUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWebsiteUrl(e.target.value);
    onWebsiteUrlChange(e.target.value);
  };

  const handleBrandingNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBrandingNotes(e.target.value);
    onBrandingNotesChange(e.target.value);
  };

  return (
    <Card className="w-full p-8 bg-black/[0.96] relative mt-8 animate-fade-up">
      <h2 className="text-2xl font-semibold text-neutral-50 mb-6">Design Preferences</h2>
      <p className="text-neutral-400 mb-6">Help us understand your color preferences and branding:</p>

      <div className="space-y-8">
        <RadioGroup
          defaultValue="existing"
          onValueChange={handleColorSourceChange}
          className="space-y-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="existing" id="existing" />
            <Label htmlFor="existing" className="text-neutral-200">
              Use colors from existing website/branding
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="upload" id="upload" />
            <Label htmlFor="upload" className="text-neutral-200">
              Upload example images for color inspiration
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="websites" id="websites" />
            <Label htmlFor="websites" className="text-neutral-200">
              Reference specific websites for color palette
            </Label>
          </div>
        </RadioGroup>

        {colorSource === "existing" && (
          <div className="space-y-4">
            <Label htmlFor="website-url" className="text-neutral-200">
              Your current website URL (if available)
            </Label>
            <Input
              id="website-url"
              placeholder="https://your-website.com"
              value={websiteUrl}
              onChange={handleWebsiteUrlChange}
              className="bg-neutral-900 border-neutral-800 text-neutral-100"
            />
          </div>
        )}

        {colorSource === "upload" && (
          <div className="space-y-4">
            <Label className="text-neutral-200">Upload inspiration images</Label>
            <div className="border-2 border-dashed border-neutral-800 rounded-lg p-8 text-center">
              <Button variant="outline" className="bg-neutral-900 text-neutral-200">
                <Upload className="w-4 h-4 mr-2" />
                Choose Files
              </Button>
              <p className="mt-2 text-sm text-neutral-400">
                Upload logos, brand guidelines, or inspiration images
              </p>
            </div>
          </div>
        )}

        {colorSource === "websites" && (
          <div className="space-y-4">
            <Label htmlFor="website-references" className="text-neutral-200">
              Reference websites for color inspiration
            </Label>
            <Input
              id="website-references"
              placeholder="https://example.com, https://another-example.com"
              value={websiteUrl}
              onChange={handleWebsiteUrlChange}
              className="bg-neutral-900 border-neutral-800 text-neutral-100"
            />
          </div>
        )}

        <div className="space-y-4">
          <Label htmlFor="branding-notes" className="text-neutral-200">
            Additional branding notes or color preferences
          </Label>
          <Textarea
            id="branding-notes"
            placeholder="Share any specific color preferences, brand guidelines, or design elements you'd like us to consider..."
            value={brandingNotes}
            onChange={handleBrandingNotesChange}
            className="bg-neutral-900 border-neutral-800 text-neutral-100 min-h-[100px]"
          />
        </div>
      </div>
    </Card>
  );
};

export default DesignPreferences;
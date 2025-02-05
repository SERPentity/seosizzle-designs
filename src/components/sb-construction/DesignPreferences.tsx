import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { Cell, Pie, PieChart } from "recharts";
import { toast } from "sonner";
import ImageUploadSection from "./ImageUploadSection";
import WebsiteReferenceSection from "./WebsiteReferenceSection";

interface DesignPreferencesProps {
  onColorSourceChange: (source: string[]) => void;
  onWebsiteUrlChange: (url: string) => void;
  onBrandingNotesChange: (notes: string) => void;
}

const colorPalette = [
  { name: 'Neutral Gray', value: 1, color: '#8E9196' },
  { name: 'Primary Purple', value: 1, color: '#9b87f5' },
  { name: 'Soft Green', value: 1, color: '#F2FCE2' },
  { name: 'Soft Yellow', value: 1, color: '#FEF7CD' },
  { name: 'Ocean Blue', value: 1, color: '#0EA5E9' },
  { name: 'Vivid Purple', value: 1, color: '#8B5CF6' },
  { name: 'Magenta Pink', value: 1, color: '#D946EF' },
  { name: 'Bright Orange', value: 1, color: '#F97316' },
];

const DesignPreferences = ({
  onColorSourceChange,
  onWebsiteUrlChange,
  onBrandingNotesChange
}: DesignPreferencesProps) => {
  const [selectedSources, setSelectedSources] = useState<string[]>([]);
  const [websiteUrls, setWebsiteUrls] = useState<string[]>(['']);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

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

  const handleColorSelect = (color: string, name: string) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter(c => c !== color));
      toast.info(`Removed ${name} from selected colors`);
    } else {
      if (selectedColors.length >= 5) {
        toast.warning("Maximum 5 colors can be selected");
        return;
      }
      setSelectedColors([...selectedColors, color]);
      toast.success(`Added ${name} to selected colors`);
    }
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

        <div className="flex items-center space-x-2">
          <Checkbox 
            id="colorPicker"
            checked={selectedSources.includes('colorPicker')}
            onCheckedChange={(checked) => handleColorSourceChange("colorPicker", checked as boolean)}
          />
          <Label htmlFor="colorPicker" className="text-neutral-200">
            Choose from color palette
          </Label>
        </div>

        {selectedSources.includes('colorPicker') && (
          <div className="mt-6 p-4 bg-neutral-900 rounded-lg">
            <p className="text-neutral-200 mb-4">Select up to 5 colors for your website (click on colors to select/deselect)</p>
            <div className="flex justify-center mb-4">
              <ChartContainer className="h-[300px] w-[300px]" config={{}}>
                <PieChart>
                  <Pie
                    data={colorPalette}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    innerRadius={60}
                    onClick={(data) => handleColorSelect(data.color, data.name)}
                  >
                    {colorPalette.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                        stroke={selectedColors.includes(entry.color) ? "#fff" : "transparent"}
                        strokeWidth={selectedColors.includes(entry.color) ? 3 : 0}
                        className="cursor-pointer hover:opacity-80 transition-opacity"
                      />
                    ))}
                  </Pie>
                  <ChartTooltip />
                </PieChart>
              </ChartContainer>
            </div>
            {selectedColors.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-center">
                {selectedColors.map((color, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 rounded-full border-2 border-white"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            )}
          </div>
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
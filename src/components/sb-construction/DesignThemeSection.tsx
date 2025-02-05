import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Phone } from "lucide-react";

interface DesignThemeSectionProps {
  onThemeChange: (theme: string) => void;
  onStyleChange: (style: string) => void;
}

const DesignThemeSection = ({ onThemeChange, onStyleChange }: DesignThemeSectionProps) => {
  const [selectedTheme, setSelectedTheme] = useState("light");
  const [selectedStyle, setSelectedStyle] = useState("modern");

  return (
    <Card className="w-full p-8 bg-black/[0.96] relative mt-8 animate-fade-up">
      <h2 className="text-2xl font-semibold text-neutral-50 mb-6">Design Theme</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Theme Selection */}
        <div>
          <Label className="text-neutral-200 mb-4 block">Choose your theme</Label>
          <RadioGroup
            defaultValue="light"
            onValueChange={(value) => {
              setSelectedTheme(value);
              onThemeChange(value);
            }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="relative">
              <RadioGroupItem
                value="light"
                id="light"
                className="peer sr-only"
              />
              <Label
                htmlFor="light"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-neutral-900 p-4 hover:bg-neutral-800 peer-data-[state=checked]:border-neutral-50 cursor-pointer"
              >
                <div className="w-16 h-28 rounded-xl bg-white border border-neutral-200 relative mb-2">
                  <Phone className="w-full h-full text-neutral-800 p-2" />
                  <div className="absolute inset-2 rounded-lg">
                    <div className="w-full h-3 bg-neutral-100 rounded-sm mb-1" />
                    <div className="w-2/3 h-3 bg-neutral-200 rounded-sm" />
                  </div>
                </div>
                <span className="text-neutral-200">Light Theme</span>
              </Label>
            </div>

            <div className="relative">
              <RadioGroupItem
                value="dark"
                id="dark"
                className="peer sr-only"
              />
              <Label
                htmlFor="dark"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-neutral-900 p-4 hover:bg-neutral-800 peer-data-[state=checked]:border-neutral-50 cursor-pointer"
              >
                <div className="w-16 h-28 rounded-xl bg-neutral-900 border border-neutral-700 relative mb-2">
                  <Phone className="w-full h-full text-neutral-200 p-2" />
                  <div className="absolute inset-2 rounded-lg">
                    <div className="w-full h-3 bg-neutral-800 rounded-sm mb-1" />
                    <div className="w-2/3 h-3 bg-neutral-700 rounded-sm" />
                  </div>
                </div>
                <span className="text-neutral-200">Dark Theme</span>
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Design Style */}
        <div>
          <Label className="text-neutral-200 mb-4 block">Design aesthetic</Label>
          <RadioGroup
            defaultValue="modern"
            onValueChange={(value) => {
              setSelectedStyle(value);
              onStyleChange(value);
            }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="relative">
              <RadioGroupItem
                value="modern"
                id="modern"
                className="peer sr-only"
              />
              <Label
                htmlFor="modern"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-neutral-900 p-4 hover:bg-neutral-800 peer-data-[state=checked]:border-neutral-50 cursor-pointer"
              >
                <div className="w-16 h-28 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 relative mb-2">
                  <div className="absolute inset-2 rounded-lg bg-white/10 backdrop-blur-sm" />
                </div>
                <span className="text-neutral-200">Modern & Minimal</span>
              </Label>
            </div>

            <div className="relative">
              <RadioGroupItem
                value="classic"
                id="classic"
                className="peer sr-only"
              />
              <Label
                htmlFor="classic"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-neutral-900 p-4 hover:bg-neutral-800 peer-data-[state=checked]:border-neutral-50 cursor-pointer"
              >
                <div className="w-16 h-28 rounded-xl bg-gradient-to-br from-amber-500 to-red-600 relative mb-2">
                  <div className="absolute inset-2 rounded-lg bg-black/20" />
                </div>
                <span className="text-neutral-200">Classic & Bold</span>
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium text-neutral-50 mb-2">Theme Preview</h3>
        <p className="text-neutral-400">
          {selectedTheme === "light" ? "Light theme" : "Dark theme"} with {selectedStyle === "modern" ? "modern & minimal" : "classic & bold"} aesthetic.
          {selectedTheme === "light" 
            ? " Clean, bright interface with subtle shadows and plenty of whitespace."
            : " Rich, dark interface with careful contrast and reduced eye strain."
          }
          {selectedStyle === "modern"
            ? " Featuring glass morphism effects, subtle gradients, and minimal design elements."
            : " Incorporating bold colors, strong typography, and traditional design patterns."
          }
        </p>
      </div>
    </Card>
  );
};

export default DesignThemeSection;
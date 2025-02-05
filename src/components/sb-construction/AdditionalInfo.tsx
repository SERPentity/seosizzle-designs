import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

interface AdditionalInfoProps {
  onSocialMediaChange: (urls: { [key: string]: string }) => void;
  onProjectTimelineChange: (timeline: string) => void;
  onSpecialFeaturesChange: (features: string) => void;
  onBusinessHoursChange: (hours: string) => void;
  onEmergencyServiceChange: (provides: boolean) => void;
}

const AdditionalInfo = ({
  onSocialMediaChange,
  onProjectTimelineChange,
  onSpecialFeaturesChange,
  onBusinessHoursChange,
  onEmergencyServiceChange
}: AdditionalInfoProps) => {
  return (
    <Card className="w-full p-8 bg-black/[0.96] relative mt-8 animate-fade-up">
      <h2 className="text-2xl font-semibold text-neutral-50 mb-6">Additional Information</h2>
      <p className="text-neutral-400 mb-6">Please provide any additional details that will help us create your perfect website:</p>

      <div className="space-y-6">
        <div>
          <Label htmlFor="social-media" className="text-neutral-50 block mb-2">
            Social Media Profiles
          </Label>
          <div className="space-y-3">
            <Input
              id="facebook"
              placeholder="Facebook URL"
              className="bg-neutral-900 border-neutral-800 text-neutral-100"
              onChange={(e) => onSocialMediaChange({ facebook: e.target.value })}
            />
            <Input
              id="instagram"
              placeholder="Instagram URL"
              className="bg-neutral-900 border-neutral-800 text-neutral-100"
              onChange={(e) => onSocialMediaChange({ instagram: e.target.value })}
            />
            <Input
              id="linkedin"
              placeholder="LinkedIn URL"
              className="bg-neutral-900 border-neutral-800 text-neutral-100"
              onChange={(e) => onSocialMediaChange({ linkedin: e.target.value })}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="project-timeline" className="text-neutral-50 block mb-2">
            Typical Project Timeline
          </Label>
          <Textarea
            id="project-timeline"
            placeholder="How long do your typical projects take? E.g., Small renovations: 2-3 weeks, Large projects: 3-6 months"
            className="bg-neutral-900 border-neutral-800 text-neutral-100 min-h-[100px]"
            onChange={(e) => onProjectTimelineChange(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="special-features" className="text-neutral-50 block mb-2">
            Special Features or Equipment
          </Label>
          <Textarea
            id="special-features"
            placeholder="Do you have any special equipment, certifications, or unique features that set you apart?"
            className="bg-neutral-900 border-neutral-800 text-neutral-100 min-h-[100px]"
            onChange={(e) => onSpecialFeaturesChange(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="business-hours" className="text-neutral-50 block mb-2">
            Business Hours
          </Label>
          <Textarea
            id="business-hours"
            placeholder="What are your regular business hours? Include any variations for different days."
            className="bg-neutral-900 border-neutral-800 text-neutral-100"
            onChange={(e) => onBusinessHoursChange(e.target.value)}
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox 
            id="emergency-service"
            onCheckedChange={(checked) => onEmergencyServiceChange(checked as boolean)}
          />
          <Label 
            htmlFor="emergency-service"
            className="text-neutral-200 cursor-pointer"
          >
            We provide emergency/24-hour service
          </Label>
        </div>
      </div>
    </Card>
  );
};

export default AdditionalInfo;
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface WebsiteReferenceSectionProps {
  websiteUrls: string[];
  onWebsiteUrlChange: (index: number, value: string) => void;
}

const WebsiteReferenceSection = ({ websiteUrls, onWebsiteUrlChange }: WebsiteReferenceSectionProps) => {
  return (
    <div className="ml-6 space-y-4">
      {websiteUrls.map((url, index) => (
        <div key={index} className="mt-2">
          <Label htmlFor={`website-url-${index}`} className="text-neutral-50 block mb-2">
            Reference Website URL {index + 1}
          </Label>
          <Input
            id={`website-url-${index}`}
            placeholder="https://example.com"
            value={url}
            onChange={(e) => onWebsiteUrlChange(index, e.target.value)}
            className="bg-neutral-900 border-neutral-800 text-neutral-100"
          />
        </div>
      ))}
    </div>
  );
};

export default WebsiteReferenceSection;
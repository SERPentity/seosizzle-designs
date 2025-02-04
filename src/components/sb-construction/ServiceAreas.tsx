import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface ServiceAreasProps {
  selectedAreas: string[];
  setSelectedAreas: (areas: string[]) => void;
  customAreas: string[];
  setCustomAreas: (areas: string[]) => void;
}

const ServiceAreas = ({
  selectedAreas,
  setSelectedAreas,
  customAreas,
  setCustomAreas
}: ServiceAreasProps) => {
  const [customArea, setCustomArea] = useState("");

  const serviceAreas = [
    "Lincoln",
    "Boston",
    "Grantham",
    "Spalding",
    "Sleaford",
    "Gainsborough",
    "Stamford",
    "Skegness",
    "Louth",
    "Market Rasen",
    "Horncastle",
    "Bourne",
    "Woodhall Spa",
    "Mablethorpe",
    "Newark",
    "Retford",
    "Scunthorpe",
    "Grimsby"
  ];

  const handleAreaChange = (area: string, checked: boolean) => {
    if (checked) {
      setSelectedAreas([...selectedAreas, area]);
    } else {
      setSelectedAreas(selectedAreas.filter(a => a !== area));
    }
  };

  const handleAddCustomArea = () => {
    if (customArea.trim() && !customAreas.includes(customArea.trim())) {
      const newArea = customArea.trim();
      setCustomAreas([...customAreas, newArea]);
      setSelectedAreas([...selectedAreas, newArea]);
      setCustomArea("");
    }
  };

  return (
    <Card className="w-full p-8 bg-black/[0.96] relative mt-8 animate-fade-up">
      <h2 className="text-2xl font-semibold text-neutral-50 mb-6">Service Areas</h2>
      <p className="text-neutral-400 mb-6">Select all the areas where you provide your construction services:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {serviceAreas.map((area) => (
          <div key={area} className="flex items-center space-x-2">
            <Checkbox 
              id={`area-${area}`}
              checked={selectedAreas.includes(area)}
              onCheckedChange={(checked) => handleAreaChange(area, checked as boolean)}
            />
            <Label 
              htmlFor={`area-${area}`}
              className="text-neutral-200 cursor-pointer"
            >
              {area}
            </Label>
          </div>
        ))}
        
        {customAreas.map((area) => (
          <div key={area} className="flex items-center space-x-2">
            <Checkbox 
              id={`area-${area}`}
              checked={selectedAreas.includes(area)}
              onCheckedChange={(checked) => handleAreaChange(area, checked as boolean)}
            />
            <Label 
              htmlFor={`area-${area}`}
              className="text-neutral-200 cursor-pointer"
            >
              {area}
            </Label>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-neutral-50 mb-4">Add Custom Areas</h3>
        <p className="text-neutral-400 mb-4">If you cover any large towns on the edge like Doncaster, Nottingham or Hull let me know here, maybe you consider them for certain jobs? Let me know.</p>
        <div className="flex gap-2">
          <Input
            placeholder="Enter additional area..."
            value={customArea}
            onChange={(e) => setCustomArea(e.target.value)}
            className="bg-neutral-900 border-neutral-800 text-neutral-100"
          />
          <Button 
            onClick={handleAddCustomArea}
            variant="secondary"
            className="bg-neutral-800 text-white hover:bg-neutral-700"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Area
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ServiceAreas;
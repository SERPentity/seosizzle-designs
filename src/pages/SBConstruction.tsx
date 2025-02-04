import { Card } from "@/components/ui/card";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface ServiceDetail {
  name: string;
  isPriority: boolean;
  description: string;
}

const SBConstruction = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [customService, setCustomService] = useState("");
  const [customServices, setCustomServices] = useState<string[]>([]);
  const [serviceDetails, setServiceDetails] = useState<{ [key: string]: ServiceDetail }>({});
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [customArea, setCustomArea] = useState("");
  const [customAreas, setCustomAreas] = useState<string[]>([]);
  const [keywords, setKeywords] = useState<string[]>([]);
  const [newKeyword, setNewKeyword] = useState("");

  const constructionServices = [
    "New Build Construction",
    "Home Renovations",
    "Extensions",
    "Loft Conversions",
    "Kitchen Fitting",
    "Bathroom Installation",
    "Commercial Construction",
    "Property Maintenance",
    "Landscaping",
    "Other Building Works"
  ];

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
    "Newark", // Surrounding areas
    "Retford",
    "Scunthorpe",
    "Grimsby"
  ];

  const handleServiceChange = (service: string, checked: boolean) => {
    setSelectedServices(prev => 
      checked 
        ? [...prev, service]
        : prev.filter(s => s !== service)
    );

    if (checked && !serviceDetails[service]) {
      setServiceDetails(prev => ({
        ...prev,
        [service]: {
          name: service,
          isPriority: false,
          description: ""
        }
      }));
    }
  };

  const handleAddCustomService = () => {
    if (customService.trim() && !customServices.includes(customService.trim())) {
      const newService = customService.trim();
      setCustomServices(prev => [...prev, newService]);
      setSelectedServices(prev => [...prev, newService]);
      setServiceDetails(prev => ({
        ...prev,
        [newService]: {
          name: newService,
          isPriority: false,
          description: ""
        }
      }));
      setCustomService("");
    }
  };

  const handlePriorityToggle = (service: string) => {
    setServiceDetails(prev => ({
      ...prev,
      [service]: {
        ...prev[service],
        isPriority: !prev[service].isPriority
      }
    }));
  };

  const handleDescriptionChange = (service: string, description: string) => {
    setServiceDetails(prev => ({
      ...prev,
      [service]: {
        ...prev[service],
        description
      }
    }));
  };

  const handleAreaChange = (area: string, checked: boolean) => {
    setSelectedAreas(prev => 
      checked 
        ? [...prev, area]
        : prev.filter(a => a !== area)
    );
  };

  const handleAddCustomArea = () => {
    if (customArea.trim() && !customAreas.includes(customArea.trim())) {
      const newArea = customArea.trim();
      setCustomAreas(prev => [...prev, newArea]);
      setSelectedAreas(prev => [...prev, newArea]);
      setCustomArea("");
    }
  };

  const handleAddKeyword = () => {
    if (newKeyword.trim() && !keywords.includes(newKeyword.trim())) {
      setKeywords(prev => [...prev, newKeyword.trim()]);
      setNewKeyword("");
    }
  };

  const handleRemoveKeyword = (keywordToRemove: string) => {
    setKeywords(prev => prev.filter(keyword => keyword !== keywordToRemove));
  };

  return (
    <div className="min-h-screen bg-black">
      <main className="container mx-auto px-4">
        <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden mt-8">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
          />
          
          <div className="flex flex-col md:flex-row h-full">
            <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                Welcome Sam and the SB Construction team
              </h1>
              <p className="mt-4 text-neutral-300 max-w-lg">
                A quick questionnaire rather than countless emails backward and forwards
              </p>
            </div>

            <div className="flex-1 relative">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
        
        <Card className="w-full p-8 bg-black/[0.96] relative mt-8 animate-fade-up">
          <h2 className="text-2xl font-semibold text-neutral-50 mb-6">What services do you provide?</h2>
          <p className="text-neutral-400 mb-6">Select all the construction services that your company offers:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {constructionServices.map((service) => (
              <div key={service} className="flex items-center space-x-2">
                <Checkbox 
                  id={service}
                  checked={selectedServices.includes(service)}
                  onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                />
                <Label 
                  htmlFor={service}
                  className="text-neutral-200 cursor-pointer"
                >
                  {service}
                </Label>
              </div>
            ))}
            
            {customServices.map((service) => (
              <div key={service} className="flex items-center space-x-2">
                <Checkbox 
                  id={service}
                  checked={selectedServices.includes(service)}
                  onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                />
                <Label 
                  htmlFor={service}
                  className="text-neutral-200 cursor-pointer"
                >
                  {service}
                </Label>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-neutral-50 mb-4">Add Custom Services</h3>
            <div className="flex gap-2">
              <Input
                placeholder="Enter additional service..."
                value={customService}
                onChange={(e) => setCustomService(e.target.value)}
                className="bg-neutral-900 border-neutral-800 text-neutral-100"
              />
              <Button 
                onClick={handleAddCustomService}
                variant="outline"
                className="border-neutral-800 text-neutral-100 hover:bg-neutral-800"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Service
              </Button>
            </div>
          </div>

          {selectedServices.length > 0 && (
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-neutral-50 mb-6">Service Details</h3>
              <p className="text-neutral-400 mb-6">For each selected service, indicate if it's a priority and add any relevant details:</p>
              
              <div className="space-y-8">
                {selectedServices.map((service) => (
                  <div key={`detail-${service}`} className="p-6 rounded-lg border border-neutral-800">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-medium text-neutral-100">{service}</h4>
                      <Toggle
                        pressed={serviceDetails[service]?.isPriority}
                        onPressedChange={() => handlePriorityToggle(service)}
                        className="data-[state=on]:bg-green-500"
                      >
                        {serviceDetails[service]?.isPriority ? "Priority" : "Not Priority"}
                      </Toggle>
                    </div>
                    <Textarea
                      placeholder="Add details about this service (e.g., specializations, experience, preferred projects)..."
                      value={serviceDetails[service]?.description || ""}
                      onChange={(e) => handleDescriptionChange(service, e.target.value)}
                      className="bg-neutral-900 border-neutral-800 text-neutral-100 min-h-[100px]"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </Card>
        
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
                variant="outline"
                className="border-neutral-800 text-neutral-100 hover:bg-neutral-800"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Area
              </Button>
            </div>
          </div>
        </Card>

        <Card className="w-full p-8 bg-black/[0.96] relative mt-8 animate-fade-up">
          <h2 className="text-2xl font-semibold text-neutral-50 mb-6">Target Keywords (Optional)</h2>
          <p className="text-neutral-400 mb-6">
            What search terms would you like your business to rank for? For example: "construction company lincoln" or "house extensions grantham"
          </p>

          <div className="space-y-4">
            <div className="flex gap-2">
              <Input
                placeholder="Enter keyword or phrase..."
                value={newKeyword}
                onChange={(e) => setNewKeyword(e.target.value)}
                className="bg-neutral-900 border-neutral-800 text-neutral-100"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddKeyword();
                  }
                }}
              />
              <Button 
                onClick={handleAddKeyword}
                variant="outline"
                className="border-neutral-800 text-neutral-100 hover:bg-neutral-800"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Keyword
              </Button>
            </div>

            {keywords.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {keywords.map((keyword) => (
                  <div
                    key={keyword}
                    className="flex items-center gap-2 bg-neutral-800 text-neutral-100 px-3 py-1 rounded-full"
                  >
                    <span>{keyword}</span>
                    <button
                      onClick={() => handleRemoveKeyword(keyword)}
                      className="text-neutral-400 hover:text-neutral-200"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Card>
      </main>
    </div>
  );
};

export default SBConstruction;

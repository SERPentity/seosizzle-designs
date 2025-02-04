import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { Textarea } from "@/components/ui/textarea";

interface ServiceDetail {
  name: string;
  isPriority: boolean;
  description: string;
}

interface ServiceSelectionProps {
  selectedServices: string[];
  setSelectedServices: (services: string[]) => void;
  customServices: string[];
  setCustomServices: (services: string[]) => void;
  serviceDetails: { [key: string]: ServiceDetail };
  setServiceDetails: (details: { [key: string]: ServiceDetail }) => void;
}

const ServiceSelection = ({
  selectedServices,
  setSelectedServices,
  customServices,
  setCustomServices,
  serviceDetails,
  setServiceDetails
}: ServiceSelectionProps) => {
  const [customService, setCustomService] = useState("");

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

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setSelectedServices([...selectedServices, service]);
      if (!serviceDetails[service]) {
        setServiceDetails({
          ...serviceDetails,
          [service]: {
            name: service,
            isPriority: false,
            description: ""
          }
        });
      }
    } else {
      setSelectedServices(selectedServices.filter(s => s !== service));
    }
  };

  const handleAddCustomService = () => {
    if (customService.trim() && !customServices.includes(customService.trim())) {
      const newService = customService.trim();
      setCustomServices([...customServices, newService]);
      setSelectedServices([...selectedServices, newService]);
      setServiceDetails({
        ...serviceDetails,
        [newService]: {
          name: newService,
          isPriority: false,
          description: ""
        }
      });
      setCustomService("");
    }
  };

  const handlePriorityToggle = (service: string) => {
    setServiceDetails({
      ...serviceDetails,
      [service]: {
        ...serviceDetails[service],
        isPriority: !serviceDetails[service].isPriority
      }
    });
  };

  const handleDescriptionChange = (service: string, description: string) => {
    setServiceDetails({
      ...serviceDetails,
      [service]: {
        ...serviceDetails[service],
        description
      }
    });
  };

  return (
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
            variant="secondary"
            className="bg-neutral-800 text-white hover:bg-neutral-700"
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
  );
};

export default ServiceSelection;
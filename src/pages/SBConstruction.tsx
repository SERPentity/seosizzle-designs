import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const SBConstruction = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

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
    setSelectedServices(prev => 
      checked 
        ? [...prev, service]
        : prev.filter(s => s !== service)
    );
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
          </div>
        </Card>
      </main>
    </div>
  );
};

export default SBConstruction;
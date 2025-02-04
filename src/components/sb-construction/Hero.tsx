import { Card } from "@/components/ui/card";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

const Hero = () => {
  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden mt-8">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" />
      
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
  );
};

export default Hero;
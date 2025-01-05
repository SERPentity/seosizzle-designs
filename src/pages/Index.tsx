import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { useState, useEffect } from "react";

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    "https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&w=2000&q=80"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navigation />
      
      {/* Hero Section with Dynamic Background */}
      <section className="relative h-screen">
        {/* Background Images */}
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentImageIndex === index ? "opacity-40" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
        
        {/* Content Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />
        
        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="space-y-8 max-w-4xl">
            {/* Greeting */}
            <p className="text-lg text-gray-300 animate-fade-up">
              👋 Hi, we're a creative studio
            </p>
            
            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                A web design and branding agency
              </span>
            </h1>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Link
                to="/work"
                className="group relative px-8 py-4 bg-white text-black rounded-full overflow-hidden hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  View our work
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              
              <Link
                to="/contact"
                className="group px-8 py-4 border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center"
              >
                Meet the team
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>
    </div>
  );
};

export default Index;
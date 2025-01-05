import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import ServicesSection from "../components/home/ServicesSection";
import WhyUsSection from "../components/home/WhyUsSection";
import StatsSection from "../components/home/StatsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CTASection from "../components/home/CTASection";
import { useState, useEffect } from "react";

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=2000&q=80"
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
      
      {/* Hero Section */}
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
            {/* Hero Content */}
            <p className="text-lg text-gray-300 animate-fade-up">
              Transform Your Online Presence
            </p>
            
            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Expert SEO & Web Design Solutions
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-300 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              Boost your rankings and captivate your audience with stunning designs that convert
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Link
                to="/services"
                className="group relative px-8 py-4 bg-white text-black rounded-full overflow-hidden hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  Explore Services
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              
              <Link
                to="/contact"
                className="group px-8 py-4 border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center"
              >
                Get Free SEO Audit
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 sm:mt-20 animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <div className="backdrop-blur-sm bg-white/5 p-4 sm:p-6 rounded-2xl border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">SEO Excellence</h3>
                <p className="text-sm sm:text-base text-gray-400">Data-driven strategies to boost your search rankings</p>
              </div>
              <div className="backdrop-blur-sm bg-white/5 p-4 sm:p-6 rounded-2xl border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Creative Design</h3>
                <p className="text-sm sm:text-base text-gray-400">Stunning websites that capture your brand essence</p>
              </div>
              <div className="backdrop-blur-sm bg-white/5 p-4 sm:p-6 rounded-2xl border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Results Driven</h3>
                <p className="text-sm sm:text-base text-gray-400">Measurable improvements in traffic and conversions</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Why Us Section */}
      <WhyUsSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default Index;

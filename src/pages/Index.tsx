import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import ServicesSection from "../components/home/ServicesSection";
import WhyUsSection from "../components/home/WhyUsSection";
import StatsSection from "../components/home/StatsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CTASection from "../components/home/CTASection";
import { useState, useEffect } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { Helmet } from "react-helmet";
import { SplineScene } from "../components/ui/splite";
import { Card } from "../components/ui/card";
import { Spotlight } from "../components/ui/spotlight";
import { Button } from "../components/ui/neon-button";

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    {
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80",
      alt: "Professional workspace with laptop showing SEO analytics dashboard, highlighting digital marketing expertise"
    },
    {
      url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&q=80",
      alt: "Modern development environment with code displayed on screen, representing web development and SEO optimization"
    },
    {
      url: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=2000&q=80",
      alt: "Team collaboration on digital marketing strategy, showcasing SEO and web design solutions"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <Helmet>
        <title>SEOsnafu | Expert SEO & Web Design Services UK</title>
        <meta name="description" content="Transform your online presence with SEOsnafu's expert SEO and web design services. Get higher rankings and stunning websites that convert." />
        <link rel="canonical" href="https://seosnafu.co.uk" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navigation />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <article className="relative min-h-screen pt-16 md:pt-0">
        {/* Background Images */}
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentImageIndex === index ? "opacity-40" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            role="img"
            aria-label={image.alt}
          />
        ))}
        
        {/* Content Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />
        
        {/* Main Content */}
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center min-h-screen">
          <div className="space-y-6 sm:space-y-8 max-w-4xl pt-8 md:pt-0">
            {/* Hero Content */}
            <p className="text-lg text-gray-300 animate-fade-up px-2 sm:px-0">
              Transform Your Online Presence
            </p>
            
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight animate-fade-up px-2 sm:px-0" style={{ animationDelay: "0.2s" }}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Expert SEO & Web Design Solutions
              </span>
            </h1>

            {/* Subheading */}
            <h2 className="text-lg sm:text-xl text-gray-300 animate-fade-up px-2 sm:px-0" style={{ animationDelay: "0.3s" }}>
              Boost your rankings and captivate your audience with stunning designs that convert
            </h2>
            
            {/* CTA Buttons */}
            <nav className="flex flex-col sm:flex-row gap-4 animate-fade-up px-2 sm:px-0" style={{ animationDelay: "0.4s" }}>
              <Link
                to="/services"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full overflow-hidden hover:scale-105 transition-all duration-300 text-center"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Explore Services
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              
              <Link
                to="/seo-audit"
                className="group px-6 sm:px-8 py-3 sm:py-4 border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                Get Free SEO Audit
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </nav>

            {/* Key Features */}
            <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-20 animate-fade-up px-2 sm:px-0" style={{ animationDelay: "0.5s" }}>
              <article className="backdrop-blur-sm bg-white/5 p-4 sm:p-6 rounded-2xl border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">SEO Excellence</h3>
                <p className="text-sm sm:text-base text-gray-400">Data-driven strategies to boost your search rankings</p>
              </article>
              <article className="backdrop-blur-sm bg-white/5 p-4 sm:p-6 rounded-2xl border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Creative Design</h3>
                <p className="text-sm sm:text-base text-gray-400">Stunning websites that capture your brand essence</p>
              </article>
              <article className="backdrop-blur-sm bg-white/5 p-4 sm:p-6 rounded-2xl border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Results Driven</h3>
                <p className="text-sm sm:text-base text-gray-400">Measurable improvements in traffic and conversions</p>
              </article>
            </section>
          </div>
        </section>
        
        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </article>

      {/* 3D Robot Section */}
      <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden mx-auto max-w-7xl my-12">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        
        <div className="flex h-full flex-col md:flex-row">
          <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Next-Gen SEO Tools
            </h2>
            <p className="mt-4 text-neutral-300 max-w-lg">
              Experience the future of SEO with our cutting-edge tools and AI-powered solutions that help your business stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button 
                variant="solid" 
                size="lg"
                onClick={() => window.location.href = '/seo/technical-seo'}
              >
                Technical SEO
              </Button>
              <Button 
                variant="default" 
                size="lg"
                onClick={() => window.location.href = '/seo/local-seo'}
              >
                Local SEO
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                onClick={() => window.location.href = '/seo/content-strategy'}
              >
                Content Strategy
              </Button>
            </div>
          </div>

          <div className="flex-1 relative">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>

      <ServicesSection />
      <WhyUsSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
};

export default Index;

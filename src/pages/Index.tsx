import { ArrowRight, Search, Globe, Users, ChartBar, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import ServicesSection from "../components/home/ServicesSection";
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
            {/* Greeting */}
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-semibold mb-2">SEO Excellence</h3>
                <p className="text-gray-400">Data-driven strategies to boost your search rankings</p>
              </div>
              <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-semibold mb-2">Creative Design</h3>
                <p className="text-gray-400">Stunning websites that capture your brand essence</p>
              </div>
              <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-semibold mb-2">Results Driven</h3>
                <p className="text-gray-400">Measurable improvements in traffic and conversions</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Stats Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Clients Served" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "250%", label: "Average ROI" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10"
              >
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-primary to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-300">What our clients say about us</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "SEOsnafu transformed our online presence. Our traffic increased by 200% in just 3 months!",
                author: "Sarah Johnson",
                role: "Marketing Director"
              },
              {
                quote: "The best investment we've made. Their web design work is outstanding and the results speak for themselves.",
                author: "Michael Chen",
                role: "CEO"
              },
              {
                quote: "Professional, responsive, and incredibly skilled. They delivered beyond our expectations.",
                author: "Emma Williams",
                role: "E-commerce Manager"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10"
              >
                <div className="mb-6">
                  <Award className="text-yellow-400" size={32} />
                </div>
                <blockquote className="text-lg text-gray-300 mb-6">"{testimonial.quote}"</blockquote>
                <div className="text-white font-semibold">{testimonial.author}</div>
                <div className="text-gray-400">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get started with a free SEO audit and discover how we can help you achieve your digital goals
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white rounded-full hover:opacity-90 transition-opacity"
            >
              Get Your Free SEO Audit
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border border-white/30 text-white rounded-full hover:bg-white/10 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

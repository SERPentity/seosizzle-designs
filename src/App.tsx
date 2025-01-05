import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Locations from "./pages/Locations";
import TechnicalSEO from "./pages/TechnicalSEO";
import LocalSEO from "./pages/LocalSEO";
import ContentStrategy from "./pages/ContentStrategy";
import SEOAudit from "./pages/SEOAudit";
import CompetitorAnalysis from "./pages/CompetitorAnalysis";
import LinkBuilding from "./pages/LinkBuilding";
import SocialMedia from "./pages/SocialMedia";
import WebDesign from "./pages/WebDesign";
import ResponsiveDesign from "./pages/ResponsiveDesign";
import UXDesign from "./pages/UXDesign";
import EcommerceDesign from "./pages/EcommerceDesign";
import ServiceBusiness from "./pages/ServiceBusiness";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/technical-seo" element={<TechnicalSEO />} />
          <Route path="/local-seo" element={<LocalSEO />} />
          <Route path="/content-strategy" element={<ContentStrategy />} />
          <Route path="/seo-audit" element={<SEOAudit />} />
          <Route path="/competitor-analysis" element={<CompetitorAnalysis />} />
          <Route path="/link-building" element={<LinkBuilding />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/responsive-design" element={<ResponsiveDesign />} />
          <Route path="/ux-design" element={<UXDesign />} />
          <Route path="/ecommerce-design" element={<EcommerceDesign />} />
          <Route path="/service-business" element={<ServiceBusiness />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
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
import CaseStudies from "./pages/CaseStudies";
import StairGuysCase from "./pages/StairGuysCase";
import BioUKFuelsCase from "./pages/BioUKFuelsCase";
import LondonSEO from "./pages/locations/seo/LondonSEO";
import BirminghamSEO from "./pages/locations/seo/BirminghamSEO";
import ManchesterSEO from "./pages/locations/seo/ManchesterSEO";
import LondonWebDesign from "./pages/locations/web-design/LondonWebDesign";
import BristolSEO from "./pages/locations/seo/BristolSEO";
import SheffieldSEO from "./pages/locations/seo/SheffieldSEO";
import LeedsSEO from "./pages/locations/seo/LeedsSEO";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
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
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/stair-guys-ltd" element={<StairGuysCase />} />
          <Route path="/case-studies/bio-uk-fuels" element={<BioUKFuelsCase />} />
          <Route path="/seo-services/london" element={<LondonSEO />} />
          <Route path="/seo-services/birmingham" element={<BirminghamSEO />} />
          <Route path="/seo-services/manchester" element={<ManchesterSEO />} />
          <Route path="/web-design/london" element={<LondonWebDesign />} />
          <Route path="/seo-services/bristol" element={<BristolSEO />} />
          <Route path="/seo-services/sheffield" element={<SheffieldSEO />} />
          <Route path="/seo-services/leeds" element={<LeedsSEO />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Locations from "./pages/Locations";

import SEOServices from "./pages/seo/SEOServices";
import TechnicalSEO from "./pages/seo/TechnicalSEO";
import LocalSEO from "./pages/seo/LocalSEO";
import ContentStrategy from "./pages/seo/ContentStrategy";
import SEOAudit from "./pages/seo/SEOAudit";
import CompetitorAnalysis from "./pages/seo/CompetitorAnalysis";
import LinkBuilding from "./pages/seo/LinkBuilding";
import SocialMedia from "./pages/seo/SocialMedia";

import WebDesign from "./pages/web-design/WebDesign";
import ResponsiveDesign from "./pages/web-design/ResponsiveDesign";
import UXDesign from "./pages/web-design/UXDesign";
import EcommerceDesign from "./pages/web-design/EcommerceDesign";
import ServiceBusiness from "./pages/web-design/ServiceBusiness";

import CaseStudies from "./pages/CaseStudies";
import StairGuysCase from "./pages/StairGuysCase";
import BioUKFuelsCase from "./pages/BioUKFuelsCase";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

import LondonSEO from "./pages/locations/seo/LondonSEO";
import BirminghamSEO from "./pages/locations/seo/BirminghamSEO";
import ManchesterSEO from "./pages/locations/seo/ManchesterSEO";
import LondonWebDesign from "./pages/locations/web-design/LondonWebDesign";
import BristolSEO from "./pages/locations/seo/BristolSEO";
import SheffieldSEO from "./pages/locations/seo/SheffieldSEO";
import LeedsSEO from "./pages/locations/seo/LeedsSEO";
import LiverpoolSEO from "./pages/locations/seo/LiverpoolSEO";
import NewcastleSEO from "./pages/locations/seo/NewcastleSEO";
import SouthamptonSEO from "./pages/locations/seo/SouthamptonSEO";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/contact" element={<Contact />} />
        
        <Route path="/seo" element={<SEOServices />} />
        <Route path="/seo/technical-seo" element={<TechnicalSEO />} />
        <Route path="/seo/local-seo" element={<LocalSEO />} />
        <Route path="/seo/content-strategy" element={<ContentStrategy />} />
        <Route path="/seo/audit" element={<SEOAudit />} />
        <Route path="/seo/competitor-analysis" element={<CompetitorAnalysis />} />
        <Route path="/seo/link-building" element={<LinkBuilding />} />
        <Route path="/seo/social-media" element={<SocialMedia />} />
        
        <Route path="/web-design" element={<WebDesign />} />
        <Route path="/web-design/responsive-design" element={<ResponsiveDesign />} />
        <Route path="/web-design/ux-design" element={<UXDesign />} />
        <Route path="/web-design/ecommerce" element={<EcommerceDesign />} />
        <Route path="/web-design/service-business" element={<ServiceBusiness />} />
        
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/stair-guys-ltd" element={<StairGuysCase />} />
        <Route path="/case-studies/bio-uk-fuels" element={<BioUKFuelsCase />} />
        
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        
        <Route path="/locations/seo/london" element={<LondonSEO />} />
        <Route path="/locations/seo/birmingham" element={<BirminghamSEO />} />
        <Route path="/locations/seo/manchester" element={<ManchesterSEO />} />
        <Route path="/locations/web-design/london" element={<LondonWebDesign />} />
        <Route path="/locations/seo/bristol" element={<BristolSEO />} />
        <Route path="/locations/seo/sheffield" element={<SheffieldSEO />} />
        <Route path="/locations/seo/leeds" element={<LeedsSEO />} />
        <Route path="/locations/seo/liverpool" element={<LiverpoolSEO />} />
        <Route path="/locations/seo/newcastle" element={<NewcastleSEO />} />
        <Route path="/locations/seo/southampton" element={<SouthamptonSEO />} />
      </Routes>
      <CookieConsent />
      <Footer />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

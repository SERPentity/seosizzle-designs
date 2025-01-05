import { Helmet } from "react-helmet";
import Navigation from "../../components/Navigation";
import Breadcrumbs from "../../components/Breadcrumbs";
import TechnicalHero from "../../components/technical-seo/TechnicalHero";
import TechnicalChallenges from "../../components/technical-seo/TechnicalChallenges";
import TechnicalServices from "../../components/technical-seo/TechnicalServices";
import TechnicalStats from "../../components/technical-seo/TechnicalStats";
import TechnicalCTA from "../../components/technical-seo/TechnicalCTA";

const TechnicalSEO = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Technical SEO Services | Expert SEO Agency</title>
        <meta 
          name="description" 
          content="Expert technical SEO services to boost your website's performance. Core Web Vitals optimization, site speed improvements, and technical audits." 
        />
        <meta 
          property="og:image" 
          content="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=2000&q=80" 
        />
        <meta 
          property="og:image:alt" 
          content="Technical dashboard showing website performance metrics and code analysis" 
        />
        <meta 
          property="twitter:image" 
          content="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=2000&q=80" 
        />
        <meta 
          property="twitter:image:alt" 
          content="Technical dashboard showing website performance metrics and code analysis" 
        />
      </Helmet>
      
      <Navigation />
      <Breadcrumbs />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <TechnicalHero />
          <TechnicalChallenges />
          <TechnicalServices />
          <TechnicalStats />
          <TechnicalCTA />
        </div>
      </main>
    </div>
  );
};

export default TechnicalSEO;
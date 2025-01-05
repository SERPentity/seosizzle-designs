import Navigation from "../../../components/Navigation";
import Breadcrumbs from "../../../components/Breadcrumbs";
import LiverpoolHero from "../../../components/locations/seo/LiverpoolHero";
import CaseStudiesLink from "../../../components/locations/seo/CaseStudiesLink";
import { Helmet } from "react-helmet";

const LiverpoolSEO = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Liverpool SEO Services | Expert SEO Agency</title>
        <meta name="description" content="Transform your Liverpool business with our expert SEO services. Get higher rankings, more traffic, and better ROI with our proven strategies." />
      </Helmet>
      <Navigation />
      <Breadcrumbs />
      <LiverpoolHero />
      <CaseStudiesLink />
    </div>
  );
};

export default LiverpoolSEO;
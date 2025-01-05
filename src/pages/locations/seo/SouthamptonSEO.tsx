import Navigation from "../../../components/Navigation";
import Breadcrumbs from "../../../components/Breadcrumbs";
import SouthamptonHero from "../../../components/locations/seo/SouthamptonHero";
import CaseStudiesLink from "../../../components/locations/seo/CaseStudiesLink";
import { Helmet } from "react-helmet";

const SouthamptonSEO = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Southampton SEO Services | Expert SEO Agency</title>
        <meta name="description" content="Transform your Southampton business with our expert SEO services. Get higher rankings, more traffic, and better ROI with our proven strategies." />
      </Helmet>
      <Navigation />
      <Breadcrumbs />
      <SouthamptonHero />
      <CaseStudiesLink />
    </div>
  );
};

export default SouthamptonSEO;
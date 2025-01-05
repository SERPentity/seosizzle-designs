import Navigation from "../../../components/Navigation";
import Breadcrumbs from "../../../components/Breadcrumbs";
import NewcastleHero from "../../../components/locations/seo/NewcastleHero";
import CaseStudiesLink from "../../../components/locations/seo/CaseStudiesLink";
import { Helmet } from "react-helmet";

const NewcastleSEO = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Newcastle SEO Services | Expert SEO Agency</title>
        <meta name="description" content="Transform your Newcastle business with our expert SEO services. Get higher rankings, more traffic, and better ROI with our proven strategies." />
      </Helmet>
      <Navigation />
      <Breadcrumbs />
      <NewcastleHero />
      <CaseStudiesLink />
    </div>
  );
};

export default NewcastleSEO;
import Navigation from "../../components/Navigation";
import { ArrowRight, Search, BarChart, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Breadcrumbs from "../../components/Breadcrumbs";

const CompetitorAnalysis = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Competitor Analysis Services | Stay Ahead of the Competition</title>
        <meta name="description" content="Comprehensive competitor analysis services to help you understand your market landscape and outperform your rivals." />
        <meta property="og:title" content="Competitor Analysis Services | Stay Ahead of the Competition" />
        <meta property="og:description" content="Comprehensive competitor analysis services to help you understand your market landscape and outperform your rivals." />
        <meta property="og:image" content="/lovable-uploads/photo-1506748686214-e9df14d4d9d0.jpg" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://seosizzle.com/seo/competitor-analysis" />
      </Helmet>

      <Navigation />
      <Breadcrumbs />

      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Competitor Analysis</h1>
          <p className="text-xl text-gray-300 mb-8">
            Understanding your competitors is crucial for your business success. Our competitor analysis services provide you with insights into your market landscape, helping you to identify opportunities and threats.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4">What We Offer</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <ArrowRight className="text-blue-400" size={20} />
                  <span>In-depth competitor research</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="text-blue-400" size={20} />
                  <span>Market positioning analysis</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="text-blue-400" size={20} />
                  <span>SWOT analysis of competitors</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="text-blue-400" size={20} />
                  <span>Actionable insights and recommendations</span>
                </li>
              </ul>
            </div>

            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <p className="text-gray-300 mb-4">
                Our team of experts utilizes advanced tools and methodologies to provide you with a comprehensive understanding of your competitors. We help you stay ahead in the competitive landscape.
              </p>
              <Link to="/contact" className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity">
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6">Our Process</h2>
          <p className="text-gray-300 mb-4">
            We follow a structured approach to competitor analysis:
          </p>
          <ol className="list-decimal pl-6 text-gray-300 space-y-2">
            <li>Identify key competitors in your industry.</li>
            <li>Analyze their strengths and weaknesses.</li>
            <li>Evaluate their marketing strategies and tactics.</li>
            <li>Provide a detailed report with insights and recommendations.</li>
          </ol>
        </div>
      </main>
    </div>
  );
};

export default CompetitorAnalysis;

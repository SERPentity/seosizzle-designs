import { Helmet } from "react-helmet";
import Navigation from "../components/Navigation";
import Breadcrumbs from "../components/Breadcrumbs";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Privacy Policy | SEO Snafu Digital Marketing Agency</title>
        <meta name="description" content="Our privacy policy outlines how we collect, use, and protect your personal information. Learn about your data rights and our commitment to privacy." />
        <meta property="og:title" content="Privacy Policy | SEO Snafu Digital Marketing Agency" />
        <meta property="og:description" content="Our privacy policy outlines how we collect, use, and protect your personal information. Learn about your data rights and our commitment to privacy." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <Navigation />
      <Breadcrumbs />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Contact information (name, email, phone number)</li>
                <li>Business information</li>
                <li>Website details for SEO analysis</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide and improve our services</li>
                <li>Communicate with you about our services</li>
                <li>Send you marketing communications (with your consent)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Data Protection</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request data portability</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <p>Email: privacy@seosnafu.com</p>
              <p>Phone: +44 (0) 123 456 789</p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;

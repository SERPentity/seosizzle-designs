import Navigation from "../components/Navigation";
import Breadcrumbs from "../components/Breadcrumbs";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Breadcrumbs />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
              <p>By accessing our services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
              <p>We provide SEO and web design services including but not limited to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Technical SEO optimization</li>
                <li>Content strategy</li>
                <li>Web design and development</li>
                <li>Local SEO services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Payment Terms</h2>
              <p>Payment terms will be agreed upon in writing before any work commences. All invoices must be paid within the agreed timeframe.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
              <p>All materials, including designs, code, and content created by us remain our property until full payment is received.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
              <p>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Termination</h2>
              <p>Either party may terminate the service agreement with 30 days written notice. Any outstanding payments must be settled upon termination.</p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;
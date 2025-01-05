import { Helmet } from "react-helmet";
import Navigation from "../components/Navigation";
import Breadcrumbs from "../components/Breadcrumbs";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Contact Us | SEOsnafu - UK SEO & Web Design Agency</title>
        <meta name="description" content="Get in touch with SEOsnafu for expert SEO and web design services. Contact us today for a free consultation and discover how we can help your business grow." />
        <link rel="canonical" href="https://seosnafu.co.uk/contact" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navigation />
      <Breadcrumbs />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <section className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-gray-300 mb-4">
              We'd love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to help.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Fill out the form below or reach out to us directly at <a href="mailto:info@seosnafu.co.uk" className="text-blue-400">info@seosnafu.co.uk</a>.
            </p>
          </section>

          <form className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <input type="text" id="name" required className="mt-1 block w-full p-2 rounded-md bg-black border border-white/10 focus:border-blue-500 focus:ring focus:ring-blue-500/50" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input type="email" id="email" required className="mt-1 block w-full p-2 rounded-md bg-black border border-white/10 focus:border-blue-500 focus:ring focus:ring-blue-500/50" />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea id="message" rows={4} required className="mt-1 block w-full p-2 rounded-md bg-black border border-white/10 focus:border-blue-500 focus:ring focus:ring-blue-500/50"></textarea>
            </div>
            <button type="submit" className="mt-4 inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:opacity-90 transition-opacity">
              Send Message
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;
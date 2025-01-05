import { Helmet } from "react-helmet";
import Navigation from "../components/Navigation";
import Breadcrumbs from "../components/Breadcrumbs";

const Services = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Our Services | SEO & Web Design Solutions | SEOsnafu</title>
        <meta name="description" content="Explore SEOsnafu's comprehensive SEO and web design services. From technical SEO to responsive web design, we deliver solutions that drive results." />
        <link rel="canonical" href="https://seosnafu.co.uk/services" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navigation />
      <Breadcrumbs />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <section className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
              Our Services
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              At SEOsnafu, we offer a range of services designed to enhance your online presence and drive results. Our expertise spans across SEO, web design, and digital marketing strategies tailored to your business needs.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4">SEO Services</h3>
              <p className="text-gray-300">
                Our SEO services include keyword research, on-page optimization, technical SEO, and link building strategies to improve your website's visibility and rankings on search engines.
              </p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4">Web Design</h3>
              <p className="text-gray-300">
                We create stunning, responsive websites that not only look great but also provide a seamless user experience, ensuring your visitors stay engaged and convert into customers.
              </p>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4">Content Marketing</h3>
              <p className="text-gray-300">
                Our content marketing strategies focus on creating valuable, relevant content that attracts and engages your target audience, driving traffic and conversions.
              </p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4">Digital Marketing</h3>
              <p className="text-gray-300">
                We offer comprehensive digital marketing services, including social media management, PPC advertising, and email marketing to help you reach your business goals.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Services;

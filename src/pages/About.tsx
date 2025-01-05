import { Helmet } from "react-helmet";
import Navigation from "../components/Navigation";
import Breadcrumbs from "../components/Breadcrumbs";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>About SEOsnafu | Leading UK SEO & Web Design Agency</title>
        <meta name="description" content="Learn about SEOsnafu's journey to becoming a leading UK SEO and web design agency. Discover our values, expertise, and commitment to client success." />
        <link rel="canonical" href="https://seosnafu.co.uk/about" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navigation />
      <Breadcrumbs />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <article className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
              About SEOsnafu
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're a team of passionate digital experts committed to helping businesses succeed online
            </p>
          </article>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-300">
                To empower businesses with data-driven SEO strategies and stunning web designs that drive real results. We believe in transparency, innovation, and measurable success.
              </p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
              <p className="text-gray-300">
                We combine technical expertise with creative innovation to deliver customized solutions that help our clients stand out in their competitive landscapes.
              </p>
            </div>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
                <p className="text-gray-300">
                  Our specialists bring years of experience in SEO, web design, and digital marketing.
                </p>
              </div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
                <p className="text-gray-300">
                  We've helped numerous businesses achieve significant growth through our services.
                </p>
              </div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold mb-3">Transparent Process</h3>
                <p className="text-gray-300">
                  We keep you informed every step of the way with clear communication and reporting.
                </p>
              </div>
            </div>
          </section>

          <section className="text-center mb-16">
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Online Presence?</h2>
              <p className="text-lg text-gray-300 mb-6">
                Let's discuss how we can help your business grow with our expert SEO and web design services.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:opacity-90 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2" />
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-gray-300">
                  We stay ahead of industry trends and continuously evolve our strategies to deliver the best results.
                </p>
              </div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-gray-300">
                  We're committed to delivering exceptional quality in everything we do.
                </p>
              </div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                <p className="text-gray-300">
                  We believe in honest communication and ethical business practices.
                </p>
              </div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold mb-3">Client Success</h3>
                <p className="text-gray-300">
                  Your success is our success. We're dedicated to helping you achieve your goals.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;
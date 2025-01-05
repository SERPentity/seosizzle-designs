import { Helmet } from "react-helmet";
import Navigation from "../components/Navigation";
import Breadcrumbs from "../components/Breadcrumbs";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import FlippingCard from "../components/FlippingCard";

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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
              Real Business Experience. Real SEO Results.
            </p>
            <h2 className="text-3xl font-bold text-purple-400 mb-6">
              Transforming SEO Performance
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We transform underperforming websites into SEO powerhouses. While 99% of websites never make it to page one, we specialize in breaking that cycle and putting our clients ahead of the competition.
            </p>
          </article>

          <FlippingCard />

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4">Meet Martin Simpkins</h2>
              <p className="text-gray-300 mb-4">
                I'm a serial entrepreneur with multiple successful business ventures under my belt. What sets me apart? I've been in your shoes. I've built and scaled businesses from the ground up, generating over a million pounds in leads through SEO strategies I developed and refined for my own companies.
              </p>
              <p className="text-gray-300">
                Unlike traditional digital agencies staffed by designers fresh out of university with theoretical knowledge, I bring real-world business experience to the table. I understand the challenges you face because I've faced them myself. This practical experience is what enables me to deliver exceptional results for my clients.
              </p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4">My Approach</h2>
              <p className="text-gray-300 mb-4">
                When you work with me, you're not just getting another SEO consultant – you're getting a business partner who understands the complete picture. I've spent years perfecting SEO strategies that actually work in the real world, not just in theory.
              </p>
              <p className="text-gray-300">
                My success comes from combining technical SEO expertise with practical business acumen. I don't just focus on rankings – I focus on generating real leads and revenue for your business. This comprehensive approach is why my clients consistently achieve outstanding results.
              </p>
            </div>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">The SEOsnafu Difference</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="text-green-400" />
                  <p className="text-gray-300">Proven track record of generating £1M+ in leads through SEO</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-green-400" />
                  <p className="text-gray-300">Real business owner perspective on digital marketing</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-green-400" />
                  <p className="text-gray-300">Practical strategies that deliver measurable results</p>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-green-400" />
                  <p className="text-gray-300">Deep understanding of business environments and market dynamics</p>
                </div>
              </div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold mb-3">Why Choose Us</h3>
                <p className="text-gray-300 mb-4">
                  Our specialists bring years of experience in SEO, web design, and digital marketing. We've helped numerous businesses achieve significant growth through our services.
                </p>
                <p className="text-gray-300">
                  We keep you informed every step of the way with clear communication and reporting. Our transparent process ensures you always know exactly what we're doing and why.
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
        </div>
      </main>
    </div>
  );
};

export default About;
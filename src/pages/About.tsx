import Navigation from "../components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-primary mb-4">
              About SEOsnafu
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the way in SEO and web design excellence
            </p>
          </div>

          <div className="prose prose-lg mx-auto">
            <p>
              At SEOsnafu, we combine technical expertise with creative innovation
              to deliver outstanding results for our clients. Our approach to SEO
              and web design is built on years of experience and a deep
              understanding of digital marketing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
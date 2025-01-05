import { Award } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-primary to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Client Success Stories</h2>
          <p className="text-xl text-gray-300">What our clients say about us</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              quote: "SEOsnafu transformed our online presence. Our traffic increased by 200% in just 3 months!",
              author: "Sarah Johnson",
              role: "Marketing Director"
            },
            {
              quote: "The best investment we've made. Their web design work is outstanding and the results speak for themselves.",
              author: "Michael Chen",
              role: "CEO"
            },
            {
              quote: "Professional, responsive, and incredibly skilled. They delivered beyond our expectations.",
              author: "Emma Williams",
              role: "E-commerce Manager"
            }
          ].map((testimonial, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10"
            >
              <div className="mb-6">
                <Award className="text-yellow-400" size={32} />
              </div>
              <blockquote className="text-lg text-gray-300 mb-6">"{testimonial.quote}"</blockquote>
              <div className="text-white font-semibold">{testimonial.author}</div>
              <div className="text-gray-400">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

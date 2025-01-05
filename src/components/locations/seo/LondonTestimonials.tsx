import { Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const LondonTestimonials = () => {
  const testimonials = [
    {
      quote: "The SEO strategies implemented by the team have significantly improved our local visibility in London. Our organic traffic has increased by 200% in just 6 months.",
      author: "Sarah Thompson",
      role: "Marketing Director, London Fashion House",
    },
    {
      quote: "Working with this London SEO team has transformed our online presence. We're now ranking for competitive local keywords and seeing a steady increase in qualified leads.",
      author: "James Wilson",
      role: "Owner, London Property Services",
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">What Our London Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10"
            >
              <div className="mb-6">
                <Award className="text-yellow-400" size={32} />
              </div>
              <blockquote className="text-lg text-gray-300 mb-6">"{testimonial.quote}"</blockquote>
              <div className="text-white font-semibold">{testimonial.author}</div>
              <div className="text-gray-400 mb-4">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LondonTestimonials;
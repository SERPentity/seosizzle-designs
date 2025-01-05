import { Award } from "lucide-react";

const ManchesterTestimonials = () => {
  const testimonials = [
    {
      quote: "Their SEO strategies have revolutionized our online presence in Manchester. We've seen a 180% increase in organic traffic since working with them.",
      author: "Michael Roberts",
      role: "CEO, Manchester Digital Solutions"
    },
    {
      quote: "The most effective SEO agency in Manchester. They helped us achieve first page rankings for all our key services within 6 months.",
      author: "Emma Wilson",
      role: "Marketing Director, Northern Tech Hub"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Manchester Clients Say</h2>
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

export default ManchesterTestimonials;
import { Award } from "lucide-react";

const BirminghamTestimonials = () => {
  const testimonials = [
    {
      quote: "Their SEO expertise has transformed our online presence in Birmingham. Our organic traffic has increased by 150% in just 6 months.",
      author: "David Thompson",
      role: "Director, Birmingham Business Solutions"
    },
    {
      quote: "The best SEO agency in Birmingham. They helped us achieve top rankings for our key services and significantly increased our local customer base.",
      author: "Sarah Mitchell",
      role: "Marketing Manager, Midlands Tech Ltd"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Birmingham Clients Say</h2>
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

export default BirminghamTestimonials;
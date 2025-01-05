import { Award } from "lucide-react";

const ManchesterTestimonials = () => {
  const testimonials = [
    {
      quote: "Working with Martin and His team has propelled Bio UK Fuels online presence to new heights, reaching over 10k visitors per month and generating over 4000 leads from new customers in 12 months",
      author: "Tony Reynolds",
      role: "Director, Bio UK Fuels"
    },
    {
      quote: "Their SEO expertise completely transformed our online presence. We've eliminated dependency on paid ads and now generate consistent organic leads at zero cost.",
      author: "Tom Abbott",
      role: "Director, The Stair Guys Ltd"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
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

export default ManchesterTestimonials;
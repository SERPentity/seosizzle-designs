import { Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const LondonTestimonials = () => {
  const testimonials = [
    {
      quote: "Working with Martin and His team has propelled Bio UK Fuels online presence to new heights, reaching over 10k visitors per month and generating over 4000 leads from new customers in 12 months",
      author: "Tony Reynolds",
      role: "Director, Bio UK Fuels",
      link: "/case-studies/bio-uk-fuels"
    },
    {
      quote: "We noticed an increase in leads within weeks of working with Martin and his team! My company is now on the first page of Google, competing with the top staircase brands in the industry.",
      author: "Tom Abbott",
      role: "Director, The Stair Guys Ltd",
      link: "/case-studies/stair-guys-ltd"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Success Stories from London Businesses</h2>
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
              <Link
                to={testimonial.link}
                className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center"
              >
                View Case Study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LondonTestimonials;
import Navigation from "../components/Navigation";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to improve your search rankings? Get in touch with our SEO experts today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-accent p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    rows={4}
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="text-secondary mr-3" size={20} />
                    <span>0800 123 4567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="text-secondary mr-3" size={20} />
                    <span>hello@seosnafu.com</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Office Hours</h2>
                <div className="space-y-2">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
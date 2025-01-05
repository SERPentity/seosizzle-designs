import { Helmet } from "react-helmet";
import Navigation from "../components/Navigation";
import Breadcrumbs from "../components/Breadcrumbs";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { useToast } from "../components/ui/use-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    // Here you would typically send the data to your backend
    console.log("Form submitted:", data);
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Contact SEO Snafu | Get Expert SEO & Web Design Help</title>
        <meta name="description" content="Ready to transform your website's performance? Contact our SEO experts today. Get in touch for professional SEO and web design services that deliver results." />
        <meta property="og:title" content="Contact SEO Snafu | Get Expert SEO & Web Design Help" />
        <meta property="og:description" content="Ready to transform your website's performance? Contact our SEO experts today. Get in touch for professional SEO and web design services that deliver results." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=2000&q=80" />
        <meta property="og:image:alt" content="Modern office space representing our professional SEO and web design services" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Contact SEO Snafu | Get Expert SEO & Web Design Help" />
        <meta property="twitter:description" content="Ready to transform your website's performance? Contact our SEO experts today. Get in touch for professional SEO and web design services that deliver results." />
        <meta property="twitter:image" content="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=2000&q=80" />
        <meta property="twitter:image:alt" content="Modern office space representing our professional SEO and web design services" />
        <link rel="canonical" href="https://seosnafu.co.uk/contact" />
      </Helmet>
      <Navigation />
      <Breadcrumbs />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to improve your search rankings? Get in touch with our SEO experts today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl animate-fade-up">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Name</FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-white"
                            placeholder="Your name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Email</FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            type="email"
                            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-white"
                            placeholder="your@email.com"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Message</FormLabel>
                        <FormControl>
                          <textarea
                            {...field}
                            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-white"
                            rows={4}
                            placeholder="How can we help?"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center"
                  >
                    Send Message
                    <ArrowRight className="ml-2" />
                  </button>
                </form>
              </Form>
            </div>

            <div className="space-y-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <Phone className="text-blue-400 mr-3" size={20} />
                    <span>07590505601</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Mail className="text-blue-400 mr-3" size={20} />
                    <span>seosnafu@gmail.com</span>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-6">Office Hours</h2>
                <div className="space-y-2 text-gray-300">
                  <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                  <p>Sunday: Closed</p>
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

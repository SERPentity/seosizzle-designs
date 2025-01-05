import { FC } from 'react';
import { Code, Gauge, Smartphone, Database } from 'lucide-react';
import { CheckCircle } from 'lucide-react';

const TechnicalServices: FC = () => {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Technical SEO Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ServiceCard
          icon={<Code className="w-12 h-12 text-blue-400" />}
          title="Site Structure Optimization"
          description="Improve your website's architecture and internal linking for better crawlability and indexing"
          features={[
            "Enhanced crawl efficiency",
            "Improved site hierarchy",
            "Better link equity distribution",
            "Optimized URL structure"
          ]}
        />
        <ServiceCard
          icon={<Gauge className="w-12 h-12 text-blue-400" />}
          title="Speed Optimization"
          description="Boost your website's loading speed and Core Web Vitals scores"
          features={[
            "Faster page load times",
            "Improved user experience",
            "Better mobile performance",
            "Higher conversion rates"
          ]}
        />
        <ServiceCard
          icon={<Smartphone className="w-12 h-12 text-blue-400" />}
          title="Mobile Optimization"
          description="Ensure your website performs flawlessly across all devices"
          features={[
            "Responsive design implementation",
            "Mobile-first indexing ready",
            "Touch-friendly navigation",
            "Accelerated mobile pages"
          ]}
        />
        <ServiceCard
          icon={<Database className="w-12 h-12 text-blue-400" />}
          title="Technical Infrastructure"
          description="Build a solid technical foundation for your website"
          features={[
            "Schema markup implementation",
            "XML sitemap optimization",
            "Robots.txt configuration",
            "SSL and security setup"
          ]}
        />
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: FC<ServiceCardProps> = ({ icon, title, description, features }) => {
  return (
    <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-2xl">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-400">
            <CheckCircle className="text-blue-400 mr-2" size={16} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechnicalServices;
import React from 'react';
import { motion } from 'framer-motion';
import { Check, BarChart3, Code } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-heading font-bold text-3xl md:text-4xl mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Specialized Services
          </motion.h2>
          <motion.p 
            className="text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Tailored digital marketing solutions designed specifically for NDIS providers.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Google Ads Service */}
          <motion.div 
            className="service-card bg-white rounded-lg shadow-lg overflow-hidden"
            variants={item}
          >
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Google Ads Analytics Dashboard" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <BarChart3 className="text-primary h-6 w-6 mr-3" />
                <h3 className="font-heading font-bold text-2xl">Google Ads Management</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Targeted advertising campaigns designed to attract NDIS participants and support coordinators to your services. Our approach focuses on high-intent keywords that convert.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="text-secondary h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Specialized NDIS keyword research</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-secondary h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                  <span>NDIS-compliant ad copy creation</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-secondary h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Conversion tracking and optimization</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-secondary h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Monthly performance reporting</span>
                </li>
              </ul>
              <a href="#contact" className="inline-block font-heading font-medium text-primary hover:text-primary/80 transition-colors">
                Learn More <span className="ml-1">→</span>
              </a>
            </div>
          </motion.div>
          
          {/* Website Building Service */}
          <motion.div 
            className="service-card bg-white rounded-lg shadow-lg overflow-hidden"
            variants={item}
          >
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Website design and development" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <Code className="text-primary h-6 w-6 mr-3" />
                <h3 className="font-heading font-bold text-2xl">Website Development</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Custom, accessible websites built specifically for NDIS providers. We create user-friendly experiences that meet NDIS compliance requirements and attract participants.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="text-secondary h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                  <span>WCAG accessibility compliance</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-secondary h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Responsive mobile-friendly design</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-secondary h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                  <span>SEO optimization for NDIS providers</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-secondary h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Secure participant portals</span>
                </li>
              </ul>
              <a href="#contact" className="inline-block font-heading font-medium text-primary hover:text-primary/80 transition-colors">
                Learn More <span className="ml-1">→</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

import React from 'react';
import { motion } from 'framer-motion';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              Physiotherapy Marketing Specialists With Over 10 Years Experience
            </h2>
            <p className="text-gray-700 mb-6">
              At Inclusively Digital Marketing, we understand the unique challenges faced by physiotherapy clinics in the digital space. Our team brings over a decade of specialized experience to help you navigate the complex digital landscape while maintaining compliance and reaching your ideal patients.
            </p>
            <p className="text-gray-700 mb-8">
              We've helped hundreds of physiotherapy clinics across Australia improve their online presence, increase qualified patient leads, and grow their practice through strategic digital marketing and custom website solutions.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col items-center bg-lightgray p-6 rounded-lg">
                <span className="text-4xl font-heading font-bold text-primary mb-2">10+</span>
                <span className="text-center text-gray-700">Years Experience</span>
              </div>
              <div className="flex flex-col items-center bg-lightgray p-6 rounded-lg">
                <span className="text-4xl font-heading font-bold text-primary mb-2">20+</span>
                <span className="text-center text-gray-700">Physio Clients</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Digital marketing team meeting" 
                className="rounded-lg h-64 w-full object-cover mb-4"
              />
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Marketing professional analyzing data" 
                className="rounded-lg h-64 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Physiotherapy digital marketing team" 
                className="rounded-lg h-64 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Marketing team collaboration" 
                className="rounded-lg h-64 w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

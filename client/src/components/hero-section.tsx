import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Digital Marketing Specialists for <span className="text-secondary">Physiotherapy</span> Clinics
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-2xl">
              Transform your physiotherapy clinic with strategic digital marketing and custom websites designed to reach more patients and improve your online presence.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-heading font-semibold px-8">
                <a href="#services">Explore Our Services</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-heading font-semibold px-8">
                <a href="#contact">Book an Obligation-Free Trial</a>
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Physiotherapy professionals using digital technology" 
              className="rounded-lg shadow-xl w-full" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

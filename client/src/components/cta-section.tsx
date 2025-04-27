import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const CTASection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4 text-center text-white">
        <motion.h2 
          className="font-heading font-bold text-3xl md:text-4xl mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Grow Your Physiotherapy Clinic?
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Take the first step toward a stronger online presence that connects you with new patients. Contact us today for a complimentary digital marketing assessment.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 font-heading font-semibold px-8 py-3">
            <a href="#contact">Get Your Free Assessment</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

import React from 'react';
import { motion } from 'framer-motion';
import { UserRound, HeartHandshake, Shield } from 'lucide-react';

export const PhysiotherapySpecialization: React.FC = () => {
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-heading font-bold text-3xl md:text-4xl mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Physiotherapy Marketing Specialists
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We understand the unique challenges and patient-driven requirements in physiotherapy clinic marketing.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-white/10 backdrop-blur-sm p-8 rounded-lg"
            variants={cardVariant}
          >
            <div className="text-4xl mb-4">
              <UserRound className="h-12 w-12" />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3">Physio Clinic Marketing</h3>
            <p>Tailored digital marketing solutions for physiotherapy clinics to attract more patients and grow your practice.</p>
          </motion.div>
          
          <motion.div 
            className="bg-white/10 backdrop-blur-sm p-8 rounded-lg"
            variants={cardVariant}
          >
            <div className="text-4xl mb-4">
              <HeartHandshake className="h-12 w-12" />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3">Patient Acquisition</h3>
            <p>Specialized marketing strategies to reach patients seeking physiotherapy services with relevant, engaging messaging.</p>
          </motion.div>
          
          <motion.div 
            className="bg-white/10 backdrop-blur-sm p-8 rounded-lg"
            variants={cardVariant}
          >
            <div className="text-4xl mb-4">
              <Shield className="h-12 w-12" />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3">Healthcare Compliance-Focused</h3>
            <p>All our marketing strategies adhere to healthcare advertising guidelines and physiotherapy industry best practices.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhysiotherapySpecialization;
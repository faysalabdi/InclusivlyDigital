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
            NDIS Marketing Specialists
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We understand the unique challenges and compliance requirements in NDIS marketing.
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
            <h3 className="font-heading font-bold text-xl mb-3">NDIS Provider Marketing</h3>
            <p>Tailored digital marketing solutions for NDIS providers to attract more participants and grow their services.</p>
          </motion.div>
          
          <motion.div 
            className="bg-white/10 backdrop-blur-sm p-8 rounded-lg"
            variants={cardVariant}
          >
            <div className="text-4xl mb-4">
              <HeartHandshake className="h-12 w-12" />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3">Participant Acquisition</h3>
            <p>Specialized marketing strategies to reach NDIS participants and support coordinators with compliant messaging.</p>
          </motion.div>
          
          <motion.div 
            className="bg-white/10 backdrop-blur-sm p-8 rounded-lg"
            variants={cardVariant}
          >
            <div className="text-4xl mb-4">
              <Shield className="h-12 w-12" />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3">Compliance-Focused</h3>
            <p>All our marketing strategies adhere to NDIS Quality and Safeguards Commission requirements and guidelines.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhysiotherapySpecialization;
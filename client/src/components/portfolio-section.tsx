import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const portfolioItems = [
  {
    id: 1,
    category: "Website Design",
    categoryColor: "primary",
    title: "Sydney NDIS Support Services",
    description: "Complete website redesign with participant portal and service booking integration.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    category: "Google Ads",
    categoryColor: "secondary",
    title: "Brisbane NDIS Services",
    description: "Google Ads campaign resulting in 210% increase in qualified NDIS participant leads.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    category: "Full Digital Strategy",
    categoryColor: "accent",
    title: "Melbourne NDIS Provider Group",
    description: "Comprehensive digital marketing strategy for a network of NDIS support providers.",
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export const PortfolioSection: React.FC = () => {
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
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Helper function to get the right background color class
  const getCategoryColorClass = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary/10 text-primary';
      case 'secondary':
        return 'bg-secondary/10 text-secondary';
      case 'accent':
        return 'bg-accent/10 text-accent';
      default:
        return 'bg-primary/10 text-primary';
    }
  };

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-heading font-bold text-3xl md:text-4xl mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Portfolio
          </motion.h2>
          <motion.p 
            className="text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            See our work for NDIS providers across Australia.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {portfolioItems.map(project => (
            <motion.div 
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
              variants={item}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className={`inline-block ${getCategoryColorClass(project.categoryColor)} text-sm font-medium px-3 py-1 rounded-full mb-3`}>
                  {project.category}
                </span>
                <h3 className="font-heading font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a href="#" className="text-primary font-medium hover:text-primary/80 transition-colors">
                  View Case Study <span className="ml-1">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-primary hover:bg-primary/90 text-white font-heading font-semibold px-8 py-3">
            <a href="#contact">Ready to Work Together?</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Inclusively Digital Marketing completely transformed our online presence. Our website now ranks on the first page for key NDIS terms, and we've seen a 65% increase in new participant inquiries.",
    authorName: "Sarah Johnson",
    authorCompany: "Sydney NDIS Support Services",
    authorImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    id: 2,
    quote: "As an NDIS provider, we needed a marketing partner who understood the complexities of the sector. Inclusively Digital Marketing delivered a compliant website and Google Ads campaign that brought us qualified leads.",
    authorName: "Michael Thomas",
    authorCompany: "Brisbane Disability Support",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    id: 3,
    quote: "Working with Inclusively has been a game-changer for our NDIS services. Their understanding of NDIS marketing compliance while still driving results is impressive. Highly recommended!",
    authorName: "Emma Wilson",
    authorCompany: "Perth NDIS Provider Group",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
  }
];

export const TestimonialsSection: React.FC = () => {
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

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-heading font-bold text-3xl md:text-4xl mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            className="text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hear from NDIS providers who've transformed their digital presence with us.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {testimonials.map(testimonial => (
            <motion.div 
              key={testimonial.id}
              className="testimonial-card bg-white p-8 rounded-lg shadow-lg border border-gray-100"
              variants={item}
            >
              <div className="text-primary mb-4">
                <Quote className="h-8 w-8" />
              </div>
              <p className="text-gray-700 mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <img 
                    src={testimonial.authorImage}
                    alt={`${testimonial.authorName} avatar`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg">{testimonial.authorName}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.authorCompany}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

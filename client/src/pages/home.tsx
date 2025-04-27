import React, { useEffect } from 'react';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import ServicesSection from '@/components/services-section';
import AboutSection from '@/components/about-section';
import NDISSpecialization from '@/components/ndis-specialization';
import PortfolioSection from '@/components/portfolio-section';
import TestimonialsSection from '@/components/testimonials-section';
import CTASection from '@/components/cta-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  // Implement smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetId = href;
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <NDISSpecialization />
        <PortfolioSection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

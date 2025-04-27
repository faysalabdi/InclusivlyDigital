import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Logo from './logo';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when clicking on a nav link
  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={cn(
      "fixed w-full bg-white z-50 transition-all duration-300",
      scrolled ? "shadow-md py-2" : "py-3",
      className
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="nav-link font-heading font-medium text-dark hover:text-primary transition-colors">Home</a>
          <a href="#services" className="nav-link font-heading font-medium text-dark hover:text-primary transition-colors">Services</a>
          <a href="#about" className="nav-link font-heading font-medium text-dark hover:text-primary transition-colors">About</a>
          <a href="#portfolio" className="nav-link font-heading font-medium text-dark hover:text-primary transition-colors">Portfolio</a>
          <a href="#testimonials" className="nav-link font-heading font-medium text-dark hover:text-primary transition-colors">Testimonials</a>
          <Button asChild className="bg-primary hover:bg-primary/90 font-heading">
            <a href="#contact">Contact Us</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden bg-white transition-all duration-300 overflow-hidden",
        mobileMenuOpen ? "max-h-80" : "max-h-0"
      )}>
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
          <a href="#home" onClick={handleNavLinkClick} className="font-heading font-medium text-dark hover:text-primary transition-colors py-2">Home</a>
          <a href="#services" onClick={handleNavLinkClick} className="font-heading font-medium text-dark hover:text-primary transition-colors py-2">Services</a>
          <a href="#about" onClick={handleNavLinkClick} className="font-heading font-medium text-dark hover:text-primary transition-colors py-2">About</a>
          <a href="#portfolio" onClick={handleNavLinkClick} className="font-heading font-medium text-dark hover:text-primary transition-colors py-2">Portfolio</a>
          <a href="#testimonials" onClick={handleNavLinkClick} className="font-heading font-medium text-dark hover:text-primary transition-colors py-2">Testimonials</a>
          <Button asChild className="bg-primary text-white font-heading w-full">
            <a href="#contact" onClick={handleNavLinkClick}>Contact Us</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

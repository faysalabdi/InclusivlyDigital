import React from 'react';
import Logo from './logo';
import { MapPin, Mail, Phone } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Logo invert className="mb-6" />
            <p className="text-gray-400 mb-6">
              Specialized digital marketing for healthcare and NDIS providers across Australia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Google Ads Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Website Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Digital Strategy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">SEO for Healthcare</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">NDIS Marketing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Healthcare Marketing Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">NDIS Marketing Compliance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Digital Marketing FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="text-primary h-5 w-5 mt-1 mr-2" />
                <span className="text-gray-400">123 Marketing Street, Sydney NSW 2000</span>
              </li>
              <li className="flex items-start">
                <Mail className="text-primary h-5 w-5 mt-1 mr-2" />
                <span className="text-gray-400">hello@inclusivelydigital.com.au</span>
              </li>
              <li className="flex items-start">
                <Phone className="text-primary h-5 w-5 mt-1 mr-2" />
                <span className="text-gray-400">1300 123 456</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Inclusively Digital Marketing. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

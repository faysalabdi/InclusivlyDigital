import React from 'react';
import { Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <img
                src="/new-logo.jpeg"
                alt="Inclusively Digital Logo"
                className="h-16 w-auto object-contain invert"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Breaking barriers with every step.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-black">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Website Development</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Google Ads Management</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-black">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="text-primary h-5 w-5 mt-1 mr-2" />
                <span className="text-gray-400">faysal@inclusivly.com.au</span>
              </li>
              <li className="flex items-start">
                <Phone className="text-primary h-5 w-5 mt-1 mr-2" />
                <span className="text-gray-400">0424811212</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Inclusively Digital. All rights reserved.
          </p>
          {/* <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

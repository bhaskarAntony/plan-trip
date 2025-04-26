import React from 'react';
import { School, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <School className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-serif font-bold">SVHS Reunion</span>
            </div>
            <p className="text-primary-200 mb-4">
              Sri Venkateshara Vidya Samshte (SVHS)
              <br />
              2009 Batch Reunion
            </p>
            <p className="text-primary-200">
              <span className="font-semibold">Date:</span> May 18, 2025 (Sunday)
              <br />
              <span className="font-semibold">Time:</span> 9:00 AM - 5:30 PM
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Schedule', href: '#schedule' },
                { name: 'Venue', href: '#venue' },
                { name: 'Activities', href: '#activities' },
                { name: 'Payment', href: '#payment' },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-primary-200 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-200 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                {/* <span className="text-primary-200">svhsreunion2025@gmail.com</span> */}
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-200 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-primary-200">+919008054165</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-200 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-primary-200">
                  GK Hill Resort No.93, Near Kaiwara Cross, 
                  <br />
                  Muthukadahalli Road
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-300 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SVHS 2009 Batch. All rights reserved.
          </p>
          <div className="flex items-center text-primary-300 text-sm">
            <span>Made </span>
            <Heart className="h-4 w-4 mx-1 text-accent-500" />
            <span>by Bhaskar Antony - <a href="tel:9606729320">9606729320</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
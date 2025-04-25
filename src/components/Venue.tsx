import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { MapPin, Phone, ExternalLink } from 'lucide-react';

const Venue: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="venue" ref={ref} className="section bg-primary-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="section-title"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          Venue
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Located amidst the serene beauty of nature, GK Hill View Resort is the perfect place for our reunion
        </motion.p>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            className="rounded-xl overflow-hidden shadow-lg relative h-64 lg:h-full"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDM4JzIyLjIiTiA3N8KwMzgnMTAuMiJF!5e0!3m2!1sen!2sin!4v1626267772111!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="GK Hill View Resort location"
            ></iframe>
          </motion.div>
          
          <motion.div 
            className="card p-8"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-serif font-bold text-primary-700 mb-6">GK Hill View Resort</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-primary-600 h-6 w-6 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-secondary-800 mb-1">Address</h4>
                  <p className="text-secondary-600">
                    GK Hill Resort No.93, Near Kaiwara Cross, 
                    <br />Muthukadahalli Road
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-primary-600 h-6 w-6 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-secondary-800 mb-1">Contact</h4>
                  <p className="text-secondary-600">+91 9876543210</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <ExternalLink className="text-primary-600 h-6 w-6 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-secondary-800 mb-1">Directions</h4>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 hover:underline inline-flex items-center"
                  >
                    Get directions on Google Maps
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-primary-50 rounded-lg border border-primary-100">
              <h4 className="font-bold text-primary-700 mb-2">Resort Highlights</h4>
              <ul className="space-y-2 text-secondary-700">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Scenic hillside location with panoramic views</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Ample parking space for all attendees</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Multiple activity areas for all ages</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
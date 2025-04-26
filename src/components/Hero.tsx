import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import { Calendar, Clock, MapPin, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden mt-15"
      ref={ref}
    >
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/002/190/454/non_2x/vertical-banner-with-red-travel-handbag-on-red-background-vector.jpg)`,
          filter: 'blur(30px)'
        }}
      ></div>
      
      <div className="absolute inset-0  z-10"></div>
      
      <div className="relative z-20 w-full px-4">
        <motion.div 
          className="max-w-lg mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className=" rounded-3xl p-6 mb-8 bg-black mt-20"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={loaded ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 mt-20">
            Sri venkateshara Vidya Samshte 2009 Batch Reunion
            </h1>
            <p className="text-xl text-white/90 mb-6">
              16 Years of Memories, 1 Unforgettable Day
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 gap-4 mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={loaded ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className=" bg-black rounded-2xl p-4">
              <Calendar className="w-8 h-8 text-white mb-2 mx-auto" />
              <p className="text-white text-sm">May 18, 2025</p>
            </div>
            <div className=" bg-black rounded-2xl p-4">
              <Clock className="w-8 h-8 text-white mb-2 mx-auto" />
              <p className="text-white text-sm">9:00 AM - 5:30 PM</p>
            </div>
            <div className="col-span-2  bg-black rounded-2xl p-4">
              <MapPin className="w-8 h-8 text-white mb-2 mx-auto" />
              <p className="text-white text-sm">GK Hill View Resort</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="mb-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={loaded ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            
          >
            <CountdownTimer />
          </motion.div>
          
          {/* <motion.div 
            className="space-y-4"
            initial={{ y: 20, opacity: 0 }}
            animate={loaded ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <a 
              href="#payment" 
              className="block w-full bg-accent-500 text-white py-4 rounded-xl font-medium hover:bg-accent-600 transition-colors"
            >
              Register Now
            </a>
            <a 
              href="#about" 
              className="block w-full bg-white/20 bg-black text-white py-4 rounded-xl font-medium hover:bg-white/30 transition-colors"
            >
              Learn More
            </a>
          </motion.div> */}
          
          <motion.div
            className="mt-8 text-white/80 flex items-center justify-center text-sm mb-10"
            initial={{ opacity: 0 }}
            animate={loaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <Heart className="w-4 h-4 text-accent-400 mr-2" />
            <span>Join us for a day of memories</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
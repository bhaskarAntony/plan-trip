import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Users, HeartHandshake, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" ref={ref} className="section bg-primary-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="section-title"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          After 16 Years, We Meet Again
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Join us for a day filled with nostalgia, laughter, and the joy of reconnecting with our school friends after all these years.
        </motion.p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Users size={48} className="text-primary-600 mb-4" />,
              title: "Reconnect",
              description: "Reunite with classmates and teachers who shaped our formative years at Sri Venkateshara Vidya Samshte."
            },
            {
              icon: <Sparkles size={48} className="text-primary-600 mb-4" />,
              title: "Reminisce",
              description: "Share stories, recall pranks, and laugh about the good old days of our school life."
            },
            {
              icon: <HeartHandshake size={48} className="text-primary-600 mb-4" />,
              title: "Recreate",
              description: "Create new memories together at the beautiful GK Hill View Resort with fun activities and entertainment."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="card p-8 text-center"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
            >
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-bold text-primary-700 mb-2">{item.title}</h3>
              <p className="text-secondary-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 bg-white p-8 rounded-xl shadow-md text-center"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-serif font-bold text-primary-700 mb-4">
            Remember when...
          </h3>
          <p className="text-lg text-secondary-600 italic">
            "Time flies, but memories last forever. It's been 16 years since we walked through the corridors of SVHS together, sharing dreams, laughter, and sometimes even tears. This reunion is our chance to bridge the gap that time and distance have created, to celebrate the bonds we formed, and to see how far we've all come."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Clock, Coffee, Utensils, Users, Music, CookingPot as SwimmingPool } from 'lucide-react';

const Schedule: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const timeline = [
    { 
      time: '09:00 AM', 
      title: 'Arrival & Registration', 
      description: 'Welcome drink, meet and greet with old friends', 
      icon: <Clock /> 
    },
    { 
      time: '10:00 AM', 
      title: 'Welcome Ceremony', 
      description: 'Opening remarks and batch introduction', 
      icon: <Users />
    },
    { 
      time: '11:00 AM', 
      title: 'Morning Activities', 
      description: 'Indoor and outdoor games, swimming, and other resort facilities', 
      icon: <SwimmingPool />
    },
    { 
      time: '01:00 PM', 
      title: 'Lunch', 
      description: 'Delicious buffet lunch with variety of options', 
      icon: <Utensils />
    },
    { 
      time: '02:30 PM', 
      title: 'Memory Lane', 
      description: 'Sharing school memories, photos, and school-day stories', 
      icon: <Coffee />
    },
    { 
      time: '03:45 PM', 
      title: 'Rain Dance & Group Activities', 
      description: 'Fun group activities including rain dance, musical chairs, and tug of war', 
      icon: <Music />
    },
    { 
      time: '05:00 PM', 
      title: 'Closing Ceremony', 
      description: 'Vote of thanks and group photo session', 
      icon: <Users />
    },
  ];

  return (
    <section id="schedule" ref={ref} className="section py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="section-title"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          Event Schedule
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We've planned a day filled with fun activities, conversations, and nostalgia
        </motion.p>
        
        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-200"></div>
          
          {/* Timeline items */}
          {timeline.map((item, index) => (
            <motion.div 
              key={index}
              className="relative mb-12"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Time */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                  <div className="bg-primary-100 inline-block px-4 py-2 rounded-lg text-primary-700 font-bold mb-2">
                    {item.time}
                  </div>
                  <h3 className="text-xl text-primary-700 font-bold">{item.title}</h3>
                  <p className="text-secondary-600">{item.description}</p>
                </div>
                
                {/* Circle in middle */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-12 h-12 rounded-full bg-primary-600 text-white items-center justify-center shadow-lg">
                  {item.icon}
                </div>
                
                {/* Empty div for layout */}
                <div className="md:w-1/2"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
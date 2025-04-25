import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Table as TableTennis, Ticket as Cricket, Waves, Gamepad2, Dices, Users } from 'lucide-react';

const Activities: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const categories = [
    {
      icon: <Gamepad2 size={40} className="text-primary-600" />,
      title: "Indoor Games",
      activities: [
        "Table Tennis", "Carrom", "Chess", "Foos Ball", 
        "Snooker", "Disco Table", "Archery", "Dart Board"
      ]
    },
    {
      icon: <Cricket size={40} className="text-primary-600" />,
      title: "Outdoor Games",
      activities: [
        "Cricket", "Volley Ball", "Football", "Basket Ball", 
        "Shuttle Badminton", "Water Polo", "Swimming Pool"
      ]
    },
    {
      icon: <Users size={40} className="text-primary-600" />,
      title: "Kids Area",
      activities: [
        "Kids Play Area", "Kids Swimming Pool", 
        "Children Play Area", "Children Cycle"
      ]
    },
    {
      icon: <Waves size={40} className="text-primary-600" />,
      title: "Special Events",
      activities: [
        "Rain Dance (3:45 PM - 4:30 PM)", 
        "Musical Chair (Minimum 20 Pax required)", 
        "Tug of War (Minimum 20 Pax required)"
      ]
    }
  ];

  return (
    <section id="activities" ref={ref} className="section py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="section-title"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          Resort Activities & Facilities
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          GK Hill View Resort offers a wide range of activities for everyone to enjoy
        </motion.p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div 
              key={index}
              className="card overflow-hidden"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <div className="p-6 bg-primary-50 flex items-center">
                <div className="mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-700">{category.title}</h3>
              </div>
              
              <div className="p-6">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                  {category.activities.map((activity, idx) => (
                    <li key={idx} className="flex items-center text-secondary-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 bg-primary-50 p-8 rounded-xl shadow-md text-center"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h3 className="text-xl font-bold text-primary-700 mb-4">Package Includes</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Welcome Drink", "Lunch", "Hi-Tea", "All Activities", "Full-Day Access"].map((item, idx) => (
              <span key={idx} className="bg-white px-4 py-2 rounded-full text-primary-700 shadow-sm">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Activities;
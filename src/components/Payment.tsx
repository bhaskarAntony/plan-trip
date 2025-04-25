import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Smartphone, CreditCard, IndianRupee, QrCode, Gift } from 'lucide-react';

const Payment: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const packages = [
    {
      name: "Supporter's Contribution",
      amount: "₹500+",
      description: "Basic contribution for those who want to join the celebration",
      includes: ["Welcome Drink", "Access to Activities", "Evening Hi-Tea"]
    },
    {
      name: "Standard Package",
      amount: "₹1,000+",
      description: "Recommended contribution for full event participation",
      includes: ["Welcome Drink", "Lunch Buffet", "Hi-Tea", "All Activities", "Full-Day Access"]
    },
    {
      name: "Premium Contribution",
      amount: "₹2,000+",
      description: "Extra support for those who wish to contribute more to the event",
      includes: ["All Standard Benefits", "Special Recognition", "Exclusive Memorabilia", "Priority Activity Access"]
    }
  ];

  return (
    <section id="payment" ref={ref} className="section bg-primary-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="section-title"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          Support Our Reunion
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Choose your preferred contribution level to support our reunion celebration
        </motion.p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className="card p-8 flex flex-col"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <div className="flex items-center justify-center mb-6">
                <Gift className="h-12 w-12 text-primary-600" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary-700 text-center mb-4">
                {pkg.name}
              </h3>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-primary-600">{pkg.amount}</span>
              </div>
              <p className="text-secondary-600 text-center mb-6">{pkg.description}</p>
              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.includes.map((item, idx) => (
                  <li key={idx} className="flex items-center text-secondary-700">
                    <span className="h-2 w-2 bg-accent-500 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="btn btn-primary w-full mt-auto">Choose Package</button>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 bg-white p-8 rounded-xl shadow-md"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h3 className="text-xl font-bold text-primary-700 mb-6 text-center">Payment Methods</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-primary-50 p-4 rounded-xl mb-4">
                <img 
                  src="https://images.pexels.com/photos/13597940/pexels-photo-13597940.jpeg" 
                  alt="QR Code"
                  className="w-48 h-48 object-cover rounded-lg"
                />
              </div>
              <p className="text-secondary-600 text-center">Scan QR code using PhonePe</p>
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <div className="flex items-center space-x-4">
                <Smartphone className="h-6 w-6 text-primary-600" />
                <div>
                  <h4 className="font-bold text-secondary-800">UPI ID</h4>
                  <p className="text-secondary-600">sathisha@upi</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <CreditCard className="h-6 w-6 text-primary-600" />
                <div>
                  <h4 className="font-bold text-secondary-800">Bank Transfer</h4>
                  <p className="text-secondary-600">Details available on request</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Payment;
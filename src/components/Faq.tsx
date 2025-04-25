import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-secondary-200 last:border-0">
      <button
        className="flex justify-between items-center w-full py-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-primary-700">{question}</h3>
        <span className="ml-4 flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-primary-600" />
          ) : (
            <ChevronDown className="h-5 w-5 text-primary-600" />
          )}
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-secondary-600">{answer}</p>
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const faqs = [
    {
      question: "How do I register for the reunion?",
      answer: "To register, simply make a payment of ₹1,000 per person using the PhonePe QR code provided in the payment section. After payment, take a screenshot and send it to the organizer or the WhatsApp group for confirmation."
    },
    {
      question: "What is the last date for registration?",
      answer: "The last date for registration is May 10, 2025. We recommend registering early to help us better plan the event and make necessary arrangements."
    },
    {
      question: "Can I bring family members to the reunion?",
      answer: "Yes, you can bring your family members. The cost is ₹1,000 per adult, ₹500 for children between 5-12 years, and free for children below 5 years."
    },
    {
      question: "What should I bring to the reunion?",
      answer: "You should bring your payment confirmation, a change of clothes if you plan to participate in water activities, and any school memorabilia you'd like to share. Don't forget your enthusiasm and energy!"
    },
    {
      question: "Is transportation provided?",
      answer: "Transportation is not included in the package. Attendees are responsible for their own transportation to and from the venue. However, we can help coordinate carpooling through our WhatsApp group."
    },
    {
      question: "What if I need to cancel my registration?",
      answer: "Cancellations made before May 5, 2025, will receive a full refund. Cancellations between May 6-15 will receive a 50% refund. No refunds will be provided for cancellations after May 15, 2025."
    },
    {
      question: "Who should I contact if I have more questions?",
      answer: "For any further questions or clarifications, please contact the organizing committee through the WhatsApp group or reach out directly to Sathisha S at +91 9876543210."
    }
  ];

  return (
    <section id="faq" ref={ref} className="section bg-primary-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="section-title"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Find answers to common questions about our reunion
        </motion.p>
        
        <motion.div 
          className="mt-12 bg-white rounded-xl shadow-md overflow-hidden"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="divide-y divide-secondary-200">
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-12 bg-primary-600 rounded-xl p-8 text-center text-white"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-serif font-bold mb-4">Still have questions?</h3>
          <p className="mb-6 text-primary-50">
            Feel free to reach out to us directly if you have any other questions or concerns about the reunion.
          </p>
          <a 
            href="https://wa.me/919876543210" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-white text-primary-700 hover:bg-primary-50 inline-flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
import React from 'react';
import Navbar from './components/Navbar';
import MobileNav from './components/MobileNav';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import Venue from './components/Venue';
import Activities from './components/Activities';
import Payment from './components/Payment';
import Gallery from './components/Gallery';
import ChatBot from './components/ChatBot';
import Faq from './components/Faq';
import Footer from './components/Footer';
import PaymentSection from './components/PaymentSection'

function App() {
  return (
    <div className="min-h-screen bg-secondary-50 text-secondary-900 pb-16 md:pb-0">
      <Navbar />
      <Hero />
      <About />
      <Schedule />
      <Venue />
      <Activities />
      {/* <Payment /> */}
      <Gallery />
      <ChatBot />
      <Faq />
      <PaymentSection/>
      <Footer />
      <MobileNav />
    </div>
  );
}

export default App;
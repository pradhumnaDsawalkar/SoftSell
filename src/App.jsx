// src/App.jsx
import React from 'react';
import Hero from './components/Hero/Hero';
import HowItWorks from './components/HowItWorks/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Testimonials from './components/Testimonials/Testimonials';
import ContactForm from './components/ContactForm/ContactForm';
import ChatWidget from './components/ChatWidget/ChatWidget';

import './App.css';

const App = () => {
  return (
    <div className="bg-gray-50">
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <ChatWidget />
    </div>
  );
};

export default App;

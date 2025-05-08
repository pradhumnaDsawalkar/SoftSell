import React from 'react';
import './WhyChooseUs.css'; // Import the CSS file for WhyChooseUs component

import { FaShieldAlt, FaRocket, FaRegClock } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2 className="why-choose-us-title">Why Choose Us?</h2>
      <div className="benefits-container">
        <div className="benefit">
          <FaShieldAlt className="benefit-icon" />
          <p className="benefit-text">Trusted by Businesses</p>
        </div>
        <div className="benefit">
          <FaRocket className="benefit-icon" />
          <p className="benefit-text">Fast Valuations</p>
        </div>
        <div className="benefit">
          <FaRegClock className="benefit-icon" />
          <p className="benefit-text">Quick Payments</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

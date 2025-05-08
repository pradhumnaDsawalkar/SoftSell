import React from 'react';
import './HowItWorks.css'; // Import the CSS file for HowItWorks component

import { FaUpload, FaDollarSign, FaCheck } from 'react-icons/fa';

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2 className="how-it-works-title">How It Works</h2>
      <div className="steps-container">
        <div className="step">
          <FaUpload className="step-icon" />
          <p className="step-text">Upload License</p>
        </div>
        <div className="step">
          <FaDollarSign className="step-icon" />
          <p className="step-text">Get Valuation</p>
        </div>
        <div className="step">
          <FaCheck className="step-icon" />
          <p className="step-text">Get Paid</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

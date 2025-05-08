import React from 'react';
import './Hero.css'; // Import the CSS file for Hero component

const Hero = () => {
  return (
    <section className="hero-section">
      <h1 className="hero-title">Turn Unused Software Into Cash</h1>
      <p className="hero-subtitle">SoftSell helps businesses resell software licenses they no longer need.</p>
      <button className="hero-button">
        Sell My Licenses
      </button>
    </section>
  );
};

export default Hero;

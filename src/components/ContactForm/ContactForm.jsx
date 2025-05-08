import React, { useState } from 'react';
import './ContactForm.css'; // Import the CSS file for ContactForm component

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <section className="contact-form">
      <h2 className="contact-form-title">Contact Us</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className="form-input"
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="form-input"
          type="text"
          name="company"
          placeholder="Your Company"
          value={formData.company}
          onChange={handleChange}
        />
        <select
          className="form-input"
          name="licenseType"
          value={formData.licenseType}
          onChange={handleChange}
        >
          <option value="">Select License Type</option>
          <option value="Software">Software</option>
          <option value="OS">Operating System</option>
        </select>
        <textarea
          className="form-input"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        />
        <button className="submit-button">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;

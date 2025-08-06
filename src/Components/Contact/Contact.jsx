import React from 'react';
import './Contact.css';
import Navbar from '../Navbar/Navbar';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact-page">
        <h1 className="contact-title"><FaEnvelope /> Contact Me</h1>

        <div className="contact-details">
          <p><FaEnvelope className="icon" />  <a href="mailto:alakajelili4@gmail.com">alakajelili4@gmail.com</a></p>
          <p><FaPhone className="icon" />  +2348169031713, +2348115453623</p>
          <p><FaMapMarkerAlt className="icon" />  Nigeria</p>

          <a href="mailto:alakajelili4@gmail.com" className="contact-button">Send a Message</a>
        </div>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/alaka-jelil-olamilekan-4b0545278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://x.com/alakmania?t=iGoITrcTCApG5fBqRcQdaA&s=09" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;

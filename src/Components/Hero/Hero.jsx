import React from 'react';
import './Hero.css';
import Atti from '../../assets/Atti.jpg';
import Navbar from '../Navbar/Navbar';

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className='hero'>
        <img src={Atti} className="Atti" alt="Alaka Jelil" />
        
        <h1>
          <span>I'm Alaka Jelil,</span> A Nigerian Front-End Developer | UI/UX Designer
        </h1>

        <p>
          I build modern, responsive websites with a focus on clean design and seamless user experiences.
          As a Nigerian front-end developer with a strong eye for UI/UX, I combine creativity with code
          to deliver intuitive digital products that not only look great but also perform flawlessly.
          Passionate about creating user-first solutions—one pixel and one line of code at a time.
        </p>

        <div className='hero-action'>
          <a
            href="https://wa.me/2348169031713" 
            className='hero-connect'
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect with Me 
          </a>

          <div className='hero-resume'>My resume</div>
        </div>
      </div>
    </>
  );
};

export default Hero;

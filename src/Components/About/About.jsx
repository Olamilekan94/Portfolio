import React from 'react';
import './About.css'
import dev_image from '../../assets/dev.jpg';
import Navbar from '../Navbar/Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <div className='about'>
        <div className="about-title">
          <h1>About Me</h1>
        </div>
        <div className="about-sections">
          <div className="about-left">
            <img src={dev_image} className="img" alt="Developer" />
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>I'm a passionate Frontend Developer dedicated to crafting clean, responsive, and user-friendly web interfaces. With a strong eye for design and detail, I turn ideas into interactive digital experiences. I thrive on learning, building, and bringing creativity to every line of code.</p>
              <p>Beyond the code, I enjoy solving real-world problems through design thinking and collaboration. Whether working solo or in a team, my goal is to build seamless digital experiences that make a lasting impact.</p>

            </div>
            <div className="about-skills">
              <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "80%" }} /></div>
              <div className="about-skill"><p>React JS</p><hr style={{ width: "55%" }} /></div>
              <div className="about-skill"><p>Javascript</p><hr style={{ width: "50%" }} /></div>
              <div className="about-skill"><p>Bootstrap</p><hr style={{ width: "60%" }} /></div>
              <div className="about-skill"><p>UI/UX</p><hr style={{ width: "90%" }} /></div>
            </div>
          </div>
        </div>
        <div className="about-achievements">
          <div className="about-achievement">
            <h1>1+</h1>
            <p>YEAR OF EXPERIENCE</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>5+</h1>
            <p>HAPPY CLIENTS</p>
          </div>
        </div>
      </div>
    </>

  );
};

export default About;

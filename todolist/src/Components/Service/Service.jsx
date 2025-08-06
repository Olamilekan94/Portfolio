import React from 'react';
import './Service.css';
import { FaLaptopCode, FaMobileAlt, FaPaintBrush } from 'react-icons/fa';
import Navbar from '../Navbar/Navbar';

import Project1 from '../../assets/Project1.jpg'
import Project2 from '../../assets/Project2.jpg'
import Project3 from '../../assets/Project3.png'
import Project4 from '../../assets/Project4.jpg'


const services = [
  {
    icon: <FaLaptopCode />,
    title: 'Frontend Development',
    description: 'I build responsive, accessible, and performant websites using HTML, CSS, JavaScript, and React.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Mobile Optimization',
    description: 'Ensure smooth and fast experience on all screen sizes. Mobile-first approach included.',
  },
  {
    icon: <FaPaintBrush />,
    title: 'UI/UX Design',
    description: 'Create user-friendly interfaces with strong focus on aesthetics and usability.',
  },
];

const projects = [
  { image:Project1, title: 'Credit Card Design'},
  { image: Project2, title: 'Landing Page of a foodstuff and fruits website' },
  { image: Project3, title: 'Design of a Profile Page' },
  { image: Project4, title: 'Business Card design for a particular brand' },
];

const Service = () => {
  return (
    <>
      <Navbar />
      <div className="service">
        <h2>My Services</h2>
        <div className="service-container">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <h2 className="projects-title">My Projects</h2>
        <div className="project-gallery">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} />
              <h4>{project.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;

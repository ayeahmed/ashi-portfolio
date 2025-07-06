// src/components/Projects.tsx
import React from 'react';
import './Projects.css'; // optional for styling
import { FaHome, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import visaImg from '../assets/imgs/visafriend.png'; // replace with actual image used
import VIPSImg from '../assets/imgs/image-3.png'
import arduino from '../assets/imgs/game-over.jpg'


const Projects = () => {
  return (
    <div className="projects-page">
      <div className="projects-container">
        <div className='projects-header'>
            <a href="/"><FaHome size={28} color="#d94c86" /></a>
            <a href= "mailto:ayeshaahmed2145@gmail.com"><FaEnvelope size={28} color="#d94c86"/></a>
            <a href="https://linkedin.com/in/ayesha-a-ahmed" target="_blank"><FaLinkedin size={28} color="#d94c86"/></a>
        </div>
        <h2>some projects i have worked on!</h2>
        <section className="project-card1">
          <h3>Visa Friend</h3>
          <p className='project-text'>
            Visa Friend was made in 24 hours when I participated in my first hackathon -- MHacks 2024. With group members Bridget Lin and Casseia Watson, we developed Visa Friend, an AI-backed solution to improve the U.S Visa experience for immigrants who don't speak English. I got to learn a lot about utilizing different APIs and LLM tools, and worked on both frontend and backend development for the first time. We were honored to receive Major League Hacking's award for Best DEI Hack sponsored by Fidelity Investments. I had a great first Hackathon and it was a wonderful experience!
          </p>
          <img src={visaImg} alt="Visa Friend demo" className="project-img" />
        </section>
        <section className="project-card2">
          <h3>VIP Partners</h3>
          <div className="project2-content">
            <img src={VIPSImg} alt="VIPS Landing" className="VIPSImg" />
            <p className='project-text'>
              Through the University of Michigan's Multidisciplinary Design Program, I have gotten to collaborate with fellow students as well as faculty from U-M School of Nursing to work on VIP Partners -- a virtual, client-centered mobile-friendly platform that provides comprehensive resources and personalized coaching for pregnant people and infant caregivers.
              Through this initiative, I've gotten considerable handson experience with frontend development and UI design as well as backend programming and generative AI integration.
            </p>
          </div>
        </section>
        <section className="project-card3">
          <h3>Space Invaders with Arduino</h3>
          <div className='project3-content'>
            <img
              src={arduino}
              alt="Game over screen"
              className="arduino-pic"
            />
            <p className='project-text'>
              Space Invaders was an especially fun project as it was apart of my introductory coding course at the University of Michigan. I used C++ with the Arduino IDE along with an Adafruit LED Screen to program Space Invaders, playable with a potentiometer and button. We presented this project at our class showcase to hundreds of fellow students and U-M faculty. With the colorful touch me and my groupmates added, we won the grand prize and were recognized by JPMorgan Chase & Co.
              This project was especially special as it helped me discover my love for intersecting software and hardware, leading me to discover my interest in computer engineering, and declare my major a semester later!
            </p>
          </div>
        </section>
        <p4 className="footer-note">💬 ask me about more projects from my courses too!</p4>
      </div>
    </div>
  );
};

export default Projects;

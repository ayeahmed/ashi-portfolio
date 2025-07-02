import React from 'react';
import './Home.css';
import { FaHome, FaEnvelope, FaLinkedin, FaLink } from 'react-icons/fa';
import profileImg from '../assets/imgs/home-pic.jpg'; // replace with your actual image

const Home = () => {
  return (
    <div className='home-wrapper'>
      <div className="home-container">
        <div className='header-tab'>
          <a href="/"><FaHome size={28} color="d94c86" /></a>
          <a href= "mailto:ayeshaahmed2145@gmail.com"><FaEnvelope size={28} color="d94c86"/></a>
          <a href="https://linkedin.com/in/ayesha-a-ahmed" target="_blank"><FaLinkedin size={28} color="d94c86"/></a>
        </div>
        <img src={profileImg} alt="Ayesha" className="profile-img" />
        <h1>hi, i’m ayesha!</h1>
        {/* // TODO: make this mobile friendly*/}
        <p>
          my name is ayesha (eye-shuh) and i am a senior studying computer engineering
          at the university of michigan. i also have a minor in mathematics. i have research
          experience in machine learning and AI, and a publication in process. i am currently
          working a fullstack team at pnc! i am also interested in web
          development and UX/UI design, which i have started learning more about :&#41;
        </p>
        <div className="cloud-links">
          <a href="/projects">projects</a>
          <a href="/experience">experience</a>
          <a href="mailto:your@email.com">contact me~~</a>
        </div>
        <p1 className="footer-note">♫⋆｡♪ ₊˚♬ﾟ. currently playing: for lovers who hesitate by JANNABI</p1>
      </div>
    </div>
    
  );
};

export default Home;

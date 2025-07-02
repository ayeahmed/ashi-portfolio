// src/components/Experience.tsx
import React from 'react';
import './Experience.css';
import { FaHome, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import researchImg from '../assets/imgs/sjsuposter.jpg'; // or whichever is the poster image

const Experience = () => {
  return (
    <div className="experience-page">
      <div className="experience-container">
        <div className="experience-header">
          <a href="/"><FaHome size={28} color="#d94c86" /></a>
          <a href= "mailto:ayeshaahmed2145@gmail.com"><FaEnvelope size={28} color="#d94c86"/></a>
          <a href="https://linkedin.com/in/ayesha-a-ahmed" target="_blank"><FaLinkedin size={28} color="#d94c86"/></a>
        </div>
        <div className="experience-content1">
          <img src={researchImg} alt="Research poster presentation" className="experience-img" />
          <div className='experience-text1'>
            <h2>Research at San Jose State</h2>
            <p>
              In the summer of 2024, I participated in a 10-week REU program at San Jose State University
              focused on women in machine-learning based cybersecurity. My research advisors were Professor
              Younghee Park and Professor Fabio Di Troia. My project of focus was conducted with Arjun Sudheer,
              and we focused on generative models role in creating synthetic data to improve zero-day malware 
              detection. Specifically, we narrowed in on DCGAN, WGAN-GP, and Diffusion as our models of focus. We
              continued developing our research into the Fall of 24 remotely, and honed in on comparing the WGAN-GP
              model to Diffusion. We intend to present our research paper at the Silicon Valley Cybersecurity Conference 
              in June 2025 and get it published! Technically speaking, this project provided me firsthand experience 
              training machine learning models, data processing, and utilizing ML frameworks in Python. We initially wrote
              our architectures with Tensorflow, but switched to PyTorch in the latter half of our experiment for efficient 
              usage of GPU RAM.         
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

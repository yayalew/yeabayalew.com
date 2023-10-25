import React from 'react';
import '../styles/About.css';
import { Fade } from 'react-reveal';
import profilePic from '../assets/profile-pic.jpeg';

const isMobile = window.innerWidth <= 768;

export default function About() {
  return (
    <div className="about" id='about'>
      <Fade bottom cascade>
        <div className="header-div">
          <h1>/ about me</h1>
        </div>
      </Fade>
      <div className="about-container">
        <div className="about-left">
          <div className="about-split">
            <Fade bottom cascade>
              <div className='about-desc'>
                <p style={{ wordBreak: "break-word" }}>
                  I am currently an Embedded Software Developer at Smartrend Manufacturing Group. My current work involves testing and developing embedded software using continuous integration and continuous deployment (CI/CD) pipelines. I am also a full-stack web developer, with experience making web and mobile applications using a variety of frameworks and languages. I will soon graduate from the University of Manitoba with a Bachelor of Science in Computer Engineering.
                </p>
              </div>
            </Fade>
            <div className="about-right">
              {isMobile ? null : (
                <Fade bottom cascade>
                  <div className="profile-pic-container">
                    <img src={profilePic} alt='profile-pic' className='profile-pic' />
                  </div>
                </Fade>
              )}
            </div>
            </div>
            <Fade bottom cascade delay={500}>
              <div className="tech-stack-container">
                <p style={{ textAlign: 'left' }}>My <span className="tech-stack">tech stack</span>:</p>
              </div>
            </Fade>
            <Fade bottom cascade delay={1000}>
              <ul>
                <li>React.js</li>
                <li>Node.js</li>
                <li>C/C++</li>
                <li>Python</li>
                <li>SQL</li>
                <li>Java</li>
                <li>HTML/CSS</li>
                <li>Git</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>Jenkins</li>
                <li>Linux</li>
                <li>Bash</li>
                <li>MATLAB</li>
              </ul>
            </Fade>
        </div>
      </div>
    </div>
  );
}

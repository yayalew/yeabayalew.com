import React from 'react';
import '../styles/Webdev.css';
import { Fade } from 'react-reveal';
import SwipeableTextMobileStepper from '../components/SwipeableTextMobileStepper';

export default function Webdev() {

  const isMobile = window.innerWidth <= 768;
  
  return (
    <div className="webdev" id='webdev'>
      <Fade bottom cascade>
        <div className="header-div">
          <h1>/ webdev</h1>
        </div>
      </Fade>
      <div className="webdev-container">
        <div className="webdev-desc">
            <Fade bottom cascade>
              <div className='webdev-desc'>
                <p style={{ wordBreak: "break-word" }}>
                  I am a full-stack computer engineer, with experience making web and mobile applications using a variety of frameworks and languages. I am currently working on a few projects, including a web application for a local business, I am also working on a few personal projects, including this website, and an embedded systems project. 
                </p>
              </div>
            </Fade>
            <div className="webdev-banner">
            <Fade bottom cascade>
              <SwipeableTextMobileStepper />
            </Fade>
            </div>
          </div>
        </div>
      </div>

  );
};
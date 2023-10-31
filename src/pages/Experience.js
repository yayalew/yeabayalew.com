import React from 'react';
import '../styles/Experience.css';
import { Fade } from 'react-reveal';
import TabPanel from '../components/TabPanel';

export default function Experience() {
  return (
    <div className="experience" id='experience'>
      <Fade bottom cascade>
        <div className="header-div">
          <h1>/ experience</h1>
        </div>
      </Fade>
      <div className="experience-container">
      <TabPanel />
      </div>
      </div>
  );
}

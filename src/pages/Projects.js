import React from 'react';
import { Fade } from 'react-reveal';
import '../styles/Projects.css'
import TerminalIcon from '@mui/icons-material/Terminal';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

export default function Projects() {

  const projects = {
    "Sndmn.com": {
      title: "sndmn.com",
      desc:
        "A responsive, visually appealing react web application that displays a local artists work and updates. This application implements Google Analytics, Mailchimp API, and EmailJS. ",
      techStack: "React.js, Node.js",
      link: "https://github.com/yayalew/sndm.com",
      open: "https://www.sndmn.com",
    },
    "yeabayalew.com": {
      title: "yeabayalew.com",
      desc:
        "A responsive, dynamic portfolio react application that displays my work and experience. ",
      techStack: "React.js, Node.js",
      link: "https://github.com/yayalew/yeabayalew.com",
      open: "https://www.yeabayalew.com",
    },
    "Newsletter app": {
      title: "Newsletter app",
      desc:
        "A simple newsletter app that allows users to subscribe to a mailing list. This application implements Mailchimp API and bootstrap. ",
      techStack: "Javascript, Bootstap5",
      link: "https://github.com/yayalew/newsletter",
      open: "",
    },

  }

  return (
    <div className='projects' id='projects'>
      <Fade bottom cascade>
        <div className="header-div">
          <h1>/ projects</h1>
        </div>
      </Fade>
      <div className='projects-container'>
      
          <ul className='projects-list'>
            {Object.keys(projects).map((key, i) => {
            return (
              <Fade bottom cascade delay={`${i + 1}00ms`}>
              <li className='project'>
                <div className='project-card'>
                <div className="project-header">
                  <div className='terminal-icon'>
                      <TerminalIcon style={{ fontSize: "2em" }}></TerminalIcon>
                    </div>
                    <div className='project-links'>
                    <a href={projects[key]["open"]}>
                      <LaunchIcon style={{ fontSize: "1.8em" }}></LaunchIcon>
                    </a>
                    <a href={projects[key]["open"]}>
                      <GitHubIcon style={{ fontSize: "1.8em" }}></GitHubIcon>
                    </a>
                  </div>
                  </div>
                  
                  <div className='project-title'>
                    {projects[key]["title"]}
                  </div>
                  <div className='project-desc'>
                    {projects[key]["desc"]}
                  </div>
                  <div className='project-tech-stack'>
                    <p>{projects[key]["techStack"]}</p>
                  </div>
                  
                  </div>
              </li>
              </Fade>
            );
          })}
          </ul>
      </div>
    </div>
  )
}


import "../styles/SideNav.css"
import React from 'react';
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Fade } from 'react-reveal';


const isMobile = window.innerWidth <= 768;


export default function SideNav() {

  const links = [
    <a href="#home">/ home</a>,
    <a href="#about">/ about</a>,
    <a href="#experience">/ experience</a>,
    <a href="#projects">/ projects</a>
  ];

  return (

    <div className="side-nav">
    {!isMobile ? 
    <Fade bottom cascade>
      <div className="sidebar-links">
        {links.map((link) => (
          <div className="side-nav-link">
            {link}
          </div>
        ))}
      </div> 
      <div className="sidebar-logos-container">
      <div className="sidebar-logos" href="/">
          <a href="mailto:yeabsira282@gmail.com">
            <EmailRoundedIcon style={{ fontSize: "2em" , margin: "10"}}></EmailRoundedIcon>
          </a>
          <a href="https://github.com/yayalew">
            <GitHubIcon style={{ fontSize: "2em", margin: "10" }}></GitHubIcon>
          </a>
          <a href="https://www.linkedin.com/in/yeab-ayalew-6295351b5/">
            <LinkedInIcon style={{ fontSize: "2em" , margin: "10" }}></LinkedInIcon>
          </a>
        </div>
    </div>
    </Fade> :<Fade bottom cascade>

     <div className="sidebar-logos" href="/">
          <a href="mailto:yeabsira282@gmail.com">
            <EmailRoundedIcon style={{ fontSize: "2em" }}></EmailRoundedIcon>
          </a>
          <a href="https://github.com/yayalew">
            <GitHubIcon style={{ fontSize: "2em" }}></GitHubIcon>
          </a>
          <a href="https://www.linkedin.com/in/yeab-ayalew-6295351b5/">
            <LinkedInIcon style={{ fontSize: "2em" }}></LinkedInIcon>
          </a>
        </div>
        </Fade>
    }
    </div>
  )
}
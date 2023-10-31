import React from 'react';
import TypingText from '../components/TypingText';
import "../styles/Home.css";
import { MDBBtn } from 'mdb-react-ui-kit';
import logo from '../assets/Y.png'
import { Fade } from 'react-reveal';

export default function Home() {
    return (
        <div>
            <div className="home" id='home'>
                <div className="home-right">
                    <img src={logo} alt='logo' className='logo-container' />
                </div>
                <div className="home-left">
                    <Fade cascade bottom>
                        <div className='typing' style={{ display: 'inline-block' }}>
                            <TypingText />
                        </div>
                        <div style={{ textAlign: 'justify' }}>
                            <p style={{ wordBreak: "break-word" }}>
                                I'm a software engineer with a strong interest in full-stack web development, low-level embedded software development, and everything in between.
                            </p>
                        </div>
                        <div className='home-button'>
                        <MDBBtn color='success' size='lg'>Contact me!</MDBBtn>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

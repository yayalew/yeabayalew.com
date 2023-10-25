import React from 'react';
import {
  MDBFooter,
} from 'mdb-react-ui-kit';
import "../styles/Footer.css"
import { Fade } from 'react-reveal';

export default function Footer () {
  return (
    <Fade bottom cascade> 
    <MDBFooter bgColor='#016236' className='text-center text-lg-left' style={{ backgroundColor: '#082503' }}>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
      <p style={{textAlign: 'center'}}>Built and designed by Yeab Ayalew.</p>
      </div>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0)', }}>
          <p style={{textAlign: 'center'}} >All rights reserved. 2023© </p>
      </div>

    </MDBFooter>
    </Fade>
  );
}
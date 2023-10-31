import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import logo from '../assets/Y.png'

export default function NavBar() {
  return (
    
      <MDBNavbar dark style={{backgroundColor: "#082503"}}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src={logo}
              height='30'
              alt=''
              loading='lazy'
            />
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
  );
}
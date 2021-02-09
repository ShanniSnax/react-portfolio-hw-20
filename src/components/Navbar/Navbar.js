import React from 'react';
import { Link } from "react-router-dom";
import '../Navbar/Navbar.css';
// import '../images/SCP.png';
import {Navbar, Nav } from 'react-bootstrap';


// const LogoCropped = require('../images/SCPCropped.png')




const NavBar = () => {

  
  return (


    <Navbar expand="lg">
      
      {/* <Link to='/'><img src ={LogoCropped.default} alt="logo" style={{"height":"3rem", "margin":"0.5rem"}}/></Link> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" variant="outline-secondary"/>
      <Navbar.Collapse id="basic-navbar-nav color-nav-white">
        <Nav className="mr-auto">

          <Link
            to="/"
            className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Shanni Suissa
          </Link>
          <Link
            to="/about"
            className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
            About
          </Link>
          <Link
            to="/portfolio"
            className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
            Portfolio
          </Link>
          <Link
            to="/contact"
            className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
            Contact
          </Link>         

        </Nav>

      </Navbar.Collapse>
    </Navbar>
   );
};

export default NavBar;

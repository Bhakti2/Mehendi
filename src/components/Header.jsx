import React from "react";
import Logo from "../Images/MehndiLogo.png";
import {Navbar,Nav} from 'react-bootstrap'

function Header() {
  return (
    <div>
        <Navbar bg="light" expand="lg" className="Navbar" >
          {/* <Navbar.Brand href="#home"> */}
          <img
          className="Logo"
          src={Logo}
          height={200}
          width={200}
          alt="Logo"
        />
        {/* </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="navbarScroll"  />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mr-auto" style={{ marginLeft: "40%"}} >
              <Nav.Link className="NAVBARFONT" href="/">Home</Nav.Link>
              <Nav.Link className="NAVBARFONT" href="#gallary">Gallary</Nav.Link>
              <Nav.Link className="NAVBARFONT" href="#service">Service</Nav.Link>
              <Nav.Link className="NAVBARFONT" href="#contact">Appoinment</Nav.Link>
              <Nav.Link className="NAVBARFONT" href="#About">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>{" "}
    </div>
  );
}

export default Header;

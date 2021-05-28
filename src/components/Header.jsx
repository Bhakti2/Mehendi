import React from "react";
import Logo from "../Images/MehndiLogo.png";
import {Navbar,Nav} from 'react-bootstrap'

function Header() {
  return (
    <div>
        <Navbar bg="light" expand="lg" className="Navbar">
          {/* <Navbar.Brand href="#home"> */}
          <img
          className="Logo"
          src={Logo}
          height={200}
          width={200}
          alt="Logo"
        />
        {/* </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className="NAVBARFONT" href="#home">Home</Nav.Link>
              <Nav.Link className="NAVBARFONT" href="#home">Gallary</Nav.Link>
              <Nav.Link className="NAVBARFONT" href="#link">Price</Nav.Link>
              <Nav.Link className="NAVBARFONT" href="#link">Contact</Nav.Link>
              <Nav.Link className="NAVBARFONT" href="#link">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>{" "}
    </div>
  );
}

export default Header;

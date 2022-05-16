import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import Logo from './planet.png';
import {Navbar, Container, Nav} from 'react-bootstrap';

const NavBar = () => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="d-flex">
          <img className="logo" src={Logo} alt="logo" />
          <h2 className="ps-3 text-dark">Space Travelers Hub</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"  className="text-dark"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#rockets">
            <NavLink to="/" className="text-primary link">Rockets</NavLink>
            </Nav.Link>
            <Nav.Link href="#missions">
            <NavLink to="/missions" className="text-primary link">Missions</NavLink>
            </Nav.Link>
            <Nav.Link href="#profile">
             <NavLink to="/profile" className="text-primary link">My Profile</NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar

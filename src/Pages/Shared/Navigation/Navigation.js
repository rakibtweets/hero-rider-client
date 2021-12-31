import React from 'react';
import './Navigation.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className="nav-bg py-3">
      <Container>
        <Navbar.Brand className="me-auto" to="#home">
          <span className="brand-logo"> Hero Rider</span>
        </Navbar.Brand>
        <Navbar.Toggle
          className="text-white"
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto d-flex align-items-center">
            <Link className="nav-item" to="/home">
              Home
            </Link>
            <Link className="nav-item" to="/packages">
              Packages
            </Link>
            <Link className="nav-item" to="/packages">
              About
            </Link>
          </Nav>
          <Nav className="ms-auto d-flex align-items-center ">
            <Link className="nav-item" to="/deets">
              Sign as Rider
            </Link>
            <Link className="nav-item" eventKey={2} to="/memes">
              Sign as Learner
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

import React from 'react';
import './Navigation.css';
import { Container, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
  const { user, userLogOut, admin } = useAuth();
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
            {admin && (
              <NavDropdown
                className="text-white"
                title="DashBoard"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/makeAdmin">
                  Make Admin
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/registeredUser">
                  Registerd User
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>

          {!user.email ? (
            <Nav className="ms-auto d-flex align-items-center ">
              <Link className="nav-item" to="/login">
                Login
              </Link>
            </Nav>
          ) : (
            <Nav className="ms-auto d-flex align-items-center">
              <Link className="nav-item" to="/profilePage">
                {user?.displayName}
              </Link>

              <Button onClick={userLogOut} className="nav-item">
                LogOut
              </Button>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

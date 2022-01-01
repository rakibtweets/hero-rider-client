import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-5  bg-info ">
      <Container fluid className="px-5">
        <Row
          xs={1}
          md={2}
          lg={3}
          className="g-5 d-flex justify-content-center align-items-center "
        >
          <Col>
            <div className="footer-brand-info text-white p-3">
              <h3 className="brand-name fw-bold text-white">Hero Rider</h3>
              <p className="brand-shor-details text-white small">
                Hero Rider is a company that trains with top class riders
              </p>
              <div className="footer-logo-icon d-flex  justify-content-around w-75 gap-2">
                <i className="fab fa-facebook fa-2x"></i>
                <i className="fab fa-instagram fa-2x"></i>
                <i className="fab fa-twitter fa-2x"></i>
                <i className="fab fa-linkedin fa-2x"></i>
              </div>
            </div>
          </Col>

          <Col className="">
            <div className="about-links text-sm-center">
              <h4 className="text-white">Page Links</h4>
              <div className="other-links">
                <NavLink className="nav-link text-white" to="/home">
                  Home
                </NavLink>
                <NavLink className="nav-link text-white" to="/packages">
                  Packages
                </NavLink>
                <NavLink className="nav-link text-white" to="/dashboard">
                  Contact
                </NavLink>
                <NavLink className="nav-link text-white" to="/services">
                  Services
                </NavLink>
                <NavLink className="nav-link text-white" to="/Dashboard">
                  Dashboard
                </NavLink>
              </div>
            </div>
          </Col>
          <Col className="d-none d-lg-block ">
            <div className="about-links">
              <h2 className="text-white">Our Servies</h2>
              <div className="other-links">
                <NavLink className="nav-link text-white" to="/home">
                  Yearly servicin
                </NavLink>
                <NavLink className="nav-link text-white" to="/home">
                  Payback Guaranty
                </NavLink>
                <NavLink className="nav-link text-white" to="/home">
                  After Train Service
                </NavLink>

                <NavLink className="nav-link text-white" to="/home">
                  Customer Satisfaction
                </NavLink>
              </div>
            </div>
          </Col>
        </Row>
        <div className="copy-right text-center text-white py-2">
          <p>&copy; 2021 Watch Dialz. Designd By Rakib Hasan.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

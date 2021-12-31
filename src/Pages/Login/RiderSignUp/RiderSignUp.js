import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RiderSignUpForm from '../RiderSignUpForm/RiderSignUpForm';
import './RiderSignUp.css';

const RiderSignUp = () => {
  return (
    <div className="rider-signUp">
      <Container>
        <Row /* xs={1} lg={2} */ className="g-5">
          <Col>
            <div>
              <RiderSignUpForm />
            </div>
          </Col>
          {/*  <Col>
            <div>
              <h2>Image</h2>
            </div>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default RiderSignUp;

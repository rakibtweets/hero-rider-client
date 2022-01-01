import React from 'react';
import { Container } from 'react-bootstrap';
import RiderSignUpForm from '../RiderSignUpForm/RiderSignUpForm';
import './RiderSignUp.css';

const RiderSignUp = () => {
  return (
    <div className="rider-signUp">
      <Container>
        <RiderSignUpForm />
      </Container>
    </div>
  );
};

export default RiderSignUp;

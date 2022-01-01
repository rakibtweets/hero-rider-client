import React from 'react';
import './Packages.css';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import carPic from '../../../images/car.jpg';
import bikePic from '../../../images/blue-bike.jpg';

const Packages = () => {
  return (
    <>
      <h3 className="text-center fw-bold my-4">Our Packages</h3>
      <Container>
        <Row xs={1} lg={2}>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img className=" img-fluid" variant="top" src={carPic} />
              <Card.Body>
                <Card.Title className=" fw-bold text-info">
                  Card Training
                </Card.Title>
                <Card.Text className="small text-secondary">
                  We provide quality training
                </Card.Text>
                <div className=" d-flex justify-content-between align-items-center">
                  <Button variant="primary">Enroll Now</Button>
                  <h3 className="fw-bold text-warnig"> $ 200</h3>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img
                style={{ height: '286px' }}
                className=" img-fluid"
                variant="top"
                src={bikePic}
              />
              <Card.Body>
                <Card.Title className=" fw-bold text-info">
                  Bike Training
                </Card.Title>
                <Card.Text className="small text-secondary">
                  We provide quality training
                </Card.Text>
                <div className=" d-flex justify-content-between align-items-center">
                  <Button variant="primary">Enroll Now</Button>
                  <h3 className="fw-bold text-warnig"> $ 100</h3>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Packages;

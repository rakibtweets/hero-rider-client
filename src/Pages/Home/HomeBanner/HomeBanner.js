import React from 'react';
import './HomeBanner.css';
import { Col, Container, Row } from 'react-bootstrap';
import carPic from '../../../images/car.jpg';
// import bikePic from '../../../images/blue-bike.jpg';

const HomeBanner = () => {
  return (
    <section className="hero__banner pt-5">
      <Container className="d-flex justify-content-center">
        <Row xs={1} lg={2} className="g-5">
          <Col>
            <div className="text-white text-start">
              <h1 className=" text-uppercase">
                Experience Rider and skillfull Learning in easiest way
              </h1>
              <div className="buttons d-flex gap-4 justify-content-start align-items-center mt-4">
                <button className="btn btn-primary p-3">I am a Rider</button>
                <button className="btn btn-primary p-3">I am a Learner</button>
              </div>
            </div>
          </Col>
          <Col>
            <div className=" d-flex justify-content-center">
              <img className=" img-fluid" src={carPic} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
      <svg
        className=" d-block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ffff"
          fill-opacity="1"
          d="M0,32L20,32C40,32,80,32,120,48C160,64,200,96,240,112C280,128,320,128,360,112C400,96,440,64,480,42.7C520,21,560,11,600,32C640,53,680,107,720,144C760,181,800,203,840,208C880,213,920,203,960,165.3C1000,128,1040,64,1080,58.7C1120,53,1160,107,1200,117.3C1240,128,1280,96,1320,101.3C1360,107,1400,149,1420,170.7L1440,192L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default HomeBanner;

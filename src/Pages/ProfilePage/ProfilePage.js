import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const ProfilePage = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/riders/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProfile(data);
      });
  }, [user.email]);
  return (
    <>
      <div>
        <h2 className="text-center text-primary fw-bold my">Profile Page</h2>
      </div>
      {user.email && (
        <Container>
          <Row xs={1} lg={2} className="g-5">
            <Col xs={12} lg={5}>
              <img className=" img-fluid" src={profile.profilePic} alt="" />
            </Col>
            <Col xs={12} lg={7}>
              <h4 className="text-secondary fw-bold">{profile.fullName}</h4>
              <p className="text-primary fw-bold">
                <span>{profile.vehicleType}</span> <span>{profile.role}</span>
              </p>
              <hr />
              <br />
              <h5 className=" fw-bold text-secondary">Contact Information</h5>
              <br />
              <p className="">
                Phone: <span className="text-primary">{profile.phoneNo}</span>
              </p>
              <p className="">
                Address: <span className="text-primary">{profile.address}</span>
              </p>
              <p className="">
                E-mail: <span className="text-primary">{profile.email}</span>
              </p>
              <p className="">
                NId: <span className="text-primary">{profile.nidPic}</span>
              </p>
              <br />
              <h5 className=" fw-bold text-secondary">Vehicle Information</h5>
              <br />
              <p className="">
                Vehicle Type:
                <span className="text-primary">{profile.vehicleType}</span>
              </p>
              <p className="">
                Name:
                <span className="text-primary">{profile.carName}</span>
              </p>
              <p className="">
                Model:
                <span className="text-primary">{profile.carModel}</span>
              </p>
              <p className="">
                Name Plate:
                <span className="text-primary">{profile.carNamePlate}</span>
              </p>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default ProfilePage;

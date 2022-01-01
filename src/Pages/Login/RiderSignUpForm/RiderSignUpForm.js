import React from 'react';
import './RiderSignUpForm.css';
import { useForm } from 'react-hook-form';
import { Col, Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const RiderSignUpForm = () => {
  const { registerNewUser } = useAuth();
  const navigate = useNavigate();
  // const location = useLocation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.role = 'Rider';
    if (data.password !== data.confirmPassword) {
      swal('Error!', 'Password does not match', 'warning');
      return;
    }
    registerNewUser(data.fullName, data.email, data.password, navigate);
    fetch('http://localhost:5000/riders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          swal('Registration Successfull', 'View Profile', 'success');
          reset();
        }
        // console.log(result);
      });
  };

  return (
    <>
      <section className="signUp__form text-center p-4">
        <h4 className="signUp__header fw-bold">Sign Up as Rider</h4>
        <p className="signUp__test small">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque.{' '}
        </p>
      </section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row xs={1} lg={2} className="g-4">
          <Col>
            <div className="form-group">
              <level className=" small">
                Full Name <span className="required">*</span>
              </level>
              <input
                type="text"
                className=" form-control"
                placeholder="Your full name"
                {...register('fullName', { required: true })}
              />
            </div>
            <br />
            <div className="form-group">
              <level className="small">
                E-mail <span className="required">*</span>
              </level>
              <input
                type="email"
                className=" form-control"
                placeholder="Your email address"
                {...register('email', { required: true })}
              />
            </div>
            <br />
            <div className="form-group">
              <level className="small">
                Password <span className="required">*</span>
              </level>
              <input
                type="password"
                className=" form-control"
                placeholder="Password"
                {...register('password', { required: true, minLength: 6 })}
              />
              {errors.password && (
                <span className="small text-danger">
                  Password length must be 6 digit minimum
                </span>
              )}
            </div>
            <br />
            <div className="form-group">
              <level className="small">
                Confirm Password <span className="required">*</span>
              </level>
              <input
                type="password"
                className=" form-control"
                placeholder="Confirm Password"
                {...register('confirmPassword', {
                  required: true,
                  minLength: 6,
                })}
              />
            </div>
            <br />
            <div className="form-group">
              <level className="small">
                Age<span className="required">*</span>
              </level>
              <input
                type="number"
                className=" form-control"
                placeholder="age"
                {...register('age', { required: true, maxLength: 3 })}
              />
              {errors.age && (
                <span className="small text-danger">
                  Maximum length 3 digit
                </span>
              )}
            </div>
            <br />

            <div className="form-group">
              <level className="small">
                Address<span className="required">*</span>
              </level>
              <input
                type="text"
                className=" form-control"
                placeholder="Address"
                {...register('address', { required: true })}
              />
              {errors.address && (
                <span className="small text-danger">
                  This field is required
                </span>
              )}
            </div>
            <br />
            <div className="form-group">
              <level className="small">
                Phone No<span className="required">*</span>
              </level>
              <input
                type="text"
                className=" form-control"
                placeholder="Mobile No."
                {...register('phoneNo', { required: true, maxLength: 11 })}
              />
              {errors.phoneNo && (
                <span className="small text-danger">
                  Minimum 11 digit number
                </span>
              )}
            </div>
            <br />
            <div className="form-group">
              <level className="small">
                Driving Lisense<span className="required">*</span>
              </level>
              <input
                type="text"
                className=" form-control"
                placeholder="Lisense picture url"
                {...register('drivingLisense', { required: true })}
              />
              {errors.drivingLisense && (
                <span className="small text-danger">
                  This field is required
                </span>
              )}
            </div>
            <br />
            <div className="form-group">
              <level className="small">
                Area<span className="required"></span>
              </level>
              <input
                type="text"
                className=" form-control"
                placeholder="Area"
                {...register('Area')}
              />
            </div>
            <br />
            <div className="form-group">
              <level className="small">
                NID<span className="required">*</span>
              </level>
              <input
                type="text"
                className=" form-control"
                placeholder="Nid picture url"
                {...register('nidPic', { required: true })}
              />
              {errors.nidPic && (
                <span className="small text-danger">
                  This field is required
                </span>
              )}
            </div>
            <br />
            <div className="form-group">
              <level className="small">
                Profile Picure<span className="required">*</span>
              </level>
              <input
                type="text"
                className=" form-control"
                placeholder="profile picture url"
                {...register('profilePic', { required: true })}
              />
              {errors.profilePic && (
                <span className="small text-danger">
                  This field is required
                </span>
              )}
            </div>
            <br />
          </Col>
          <Col>
            <div className="form-group">
              <level className="small">
                Car Name<span className="required">*</span>
              </level>
              <input
                type="text"
                className=" form-control"
                placeholder="Car Name"
                {...register('carName', { required: true })}
              />
              {errors.carName && (
                <span className="small text-danger">
                  This field is required
                </span>
              )}
            </div>
            <br />
            <div className="form-group">
              <level className="small">
                Car Model<span className="required">*</span>
              </level>
              <input
                type="text"
                className=" form-control"
                placeholder="Car Model"
                {...register('carModel', { required: true })}
              />
              {errors.carModel && (
                <span className="small text-danger">
                  This field is required
                </span>
              )}
            </div>
            <br />
            <div className="form-group">
              <level className="small">
                Car name Plate<span className="required">*</span>
              </level>
              <input
                type="text"
                className=" form-control"
                placeholder="Car Model"
                {...register('carNamePlate', { required: true })}
              />
              {errors.carNamePlate && (
                <span className="small text-danger">
                  This field is required
                </span>
              )}
            </div>
            <br />
            <div className="form-group">
              <level className="small">
                Vehicle Type<span className="required">*</span>
              </level>
              <select {...register('vehicleType')}>
                <option value="Car">Car</option>
                <option value="Bike">Bike</option>
              </select>
              {errors.carNamePlate && (
                <span className="small text-danger">
                  This field is required
                </span>
              )}
            </div>
            <br />
            <input className="btn btn-primary w-100" type="submit" />
          </Col>

          {/* <input {...register('exampleRequired', { required: true })} /> */}
          {/* errors will return when field validation fails  */}
        </Row>
      </form>
    </>
  );
};

export default RiderSignUpForm;

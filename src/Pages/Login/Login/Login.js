import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import './Login.css';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { loginUser, authError, isLoading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;
    loginUser(email, password, location, navigate);
  };
  return (
    <>
      <div className="container-fluid text-center pb-5">
        <div className="container pt-5  mx-auto">
          <form
            className=" d-block d-flex flex-column mx-auto px-5 w-75 pb-3 text-center login-content "
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="text-center py-3 fw-bold">Login</h2>
            {isLoading ? (
              <Spinner
                className="container-fluid text-center"
                animation="border"
                variant="danger"
                size="5em"
              />
            ) : (
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control form-control-lg  form-control-md"
                  {...register('email', {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                <br />

                <input
                  type="password"
                  placeholder="Enter Password"
                  className="form-control form-control-lg  form-control-md "
                  {...register('password', { required: true, maxLength: 80 })}
                />
                <br />

                {errors.password && (
                  <span className="text-danger">This field is required</span>
                )}
                <br />
                {authError && (
                  <span className="text-danger py-3">{authError}</span>
                )}

                <button className="btn btn-primary w-100" type="submit">
                  Login
                </button>
                <p className="py-3 text-center">
                  <span className="text-dark">Don't have an account?</span>
                  <Link to="/register">Create an Account</Link>
                </p>
              </div>
            )}
          </form>
          <div className="media-login  d-block d-flex flex-column mx-auto px-5 w-75 pb-5">
            <h4 className="text-center fw-bold text-success">OR</h4>
            <Link className="btn btn-primary py-2" to="/rider-signUp">
              SignUp as Rider
            </Link>
            <br />
            <br />
            <Link className="btn btn-success py-2" to="/learner-signUp">
              SignUp as Learner
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

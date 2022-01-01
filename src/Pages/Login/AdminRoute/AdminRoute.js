import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin } = useAuth();
  const location = useLocation();
  if (!admin) {
    return (
      <div className="w-25 mx-auto">
        <Spinner animation="grow" variant="danger" size="4em" />
      </div>
    );
  }
  if (user.email && admin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default AdminRoute;

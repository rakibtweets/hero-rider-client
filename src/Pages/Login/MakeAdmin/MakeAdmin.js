import React, { useState } from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import swal from 'sweetalert';

const MakeAdmin = () => {
  const [email, setEmail] = useState('');

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch('http://localhost:5000/users/admin', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          swal('Added Admin', 'You made admin Successfully', 'success');
        }
      });

    e.preventDefault();
    e.target.reset();
  };
  return (
    <>
      <div
        style={{
          marginBottom: '4em',
        }}
      >
        <h4 className="fw-bold text-center py-4">
          Make <span className="text-info">Admin</span>{' '}
        </h4>
      </div>
      <form onSubmit={handleAdminSubmit}>
        <InputGroup className="mb-3 w-75 mx-auto">
          <FormControl
            placeholder="Enter Email "
            aria-label="Enter Email"
            className=" form-control form-control-md form-control-lg"
            aria-describedby="basic-addon2"
            onBlur={handleOnBlur}
          />
          <Button type="submit" variant="success" id="button-addon2">
            Make Admin
          </Button>
        </InputGroup>
      </form>
    </>
  );
};

export default MakeAdmin;

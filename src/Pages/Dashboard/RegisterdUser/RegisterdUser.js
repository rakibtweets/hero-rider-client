import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import './RegisterdUser.css';

const RegisterdUser = () => {
  const [regUsers, setRegUsers] = useState([]);

  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/riders')
      .then((res) => res.json())
      .then((data) => {
        setRegUsers(data);
        setSearchResult(data);
      });
  }, []);

  const handleOnChange = (e) => {
    const searchText = e.target.value;
    const matchedSearch = regUsers.filter((user) =>
      user?.fullName.toLowerCase().includes(searchText.toLowerCase())
    );
    const matchedSearch1 = regUsers.filter((user) =>
      user?.email.toLowerCase().includes(searchText.toLowerCase())
    );
    const matchedSearch2 = regUsers.filter((user) =>
      user?.phoneNo.includes(searchText)
    );
    const matchedSearch3 = regUsers.filter((user) =>
      user?.age.includes(searchText)
    );
    setSearchResult(matchedSearch);
    setSearchResult(matchedSearch1);
    setSearchResult(matchedSearch2);
    setSearchResult(matchedSearch3);
  };
  return (
    <>
      <div style={{ background: '#FFFFF' }} className="d-block w-100 mb-5">
        <h5 className="py-4 text-center fw-bold">
          Manage <span className="text-info">Registered Users</span>{' '}
        </h5>
      </div>
      <section className="search__area">
        <div>
          <input
            placeholder="Search user by name,email or phone"
            aria-label="Enter Email"
            className=" form-control mx-auto w-50 my-3"
            aria-describedby="basic-addon2"
            onChange={handleOnChange}
          />
        </div>
      </section>
      <Container>
        <Table striped bordered hover responsive variant="light">
          <thead className="text-center">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Car Model</th>
              <th>Age</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          {searchResult?.map((user, index) => (
            <tbody key={user?._id}>
              <tr>
                <td>{index + 1}</td>
                <td>{user?.fullName}</td>
                <td>{user?.email}</td>
                <td>{user?.address}</td>
                <td>{user?.phoneNo}</td>
                <td>{user?.carModel}</td>
                <td>{user?.age}</td>
                <td>{user?.role}</td>

                <td>
                  <div className="d-flex justify-content-between">
                    <button
                      // onClick={() => handleApproveOrder(user?._id, index)}
                      className="btn btn-success p-2 text-white fw-bold"
                    >
                      Approve
                    </button>
                    <button
                      // onClick={() => handleCancelOrder(user?._id)}
                      className="btn bg-danger py-2 px-3 text-white fw-bold"
                      title="Delete"
                    >
                      x
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </Container>
    </>
  );
};

export default RegisterdUser;

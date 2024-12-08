import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const NewContact = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.addContact(contactData); 
    navigate("/"); 
  };

  return (
    <div className="m-5">
      <h1 className="text-center">Add a new Contact</h1>
      <form className="m-5" onSubmit={handleSubmit}>
        <div className="form-group mb-4">
          <label htmlFor="FullName" className="mb-2">
            Full Name
          </label>
          <input
          id="FullName"
            className="form-control"
            placeholder="Full Name"
            name="name"
            value={contactData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="Email" className="mb-2">
            Email
          </label>
          <input
          id="Email"
            type="email"
            className="form-control"
            placeholder="Enter Email"
            name="email"
            value={contactData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="Phone" className="mb-2">
            Phone
          </label>
          <input
          id="Phone"
            type="tel"
            className="form-control"
            placeholder="Enter Phone"
            name="phone"
            value={contactData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="Address" className="mb-2">
            Address
          </label>
          <input
          id="Address"
            className="form-control"
            placeholder="Enter Address"
            name="address"
            value={contactData.address}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-lg btn-block w-100">
          Save
        </button>
        <br />
        <Link to="/">or get back to contacts</Link>
      </form>
    </div>
  );
};

export default NewContact;

import { Link } from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom'
import React, { useState, useEffect, useContext } from 'react'
import { Context } from "../store/appContext";

const EditContact = () => {
  const { idContacto } = useParams(); // Este es el parámetro de la URL
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  useEffect(() => {
    if (idContacto) {
      const contact = store.contacts.find(c => c.id === parseInt(idContacto));
      if (contact) {
        setContactData(contact);
      }
    }
  }, [idContacto, store.contacts]);

  const handleChange = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.updateContact(idContacto, contactData); // Llamar a la acción de actualización
    navigate("/"); // Redirigir al home
  };

  return (
    <div className="m-5">
      <h1 className="text-center">Edit Contact {idContacto}</h1> {/* Usar idContacto directamente */}
      <form className="m-5" onSubmit={handleSubmit}>
        <div className="form-group mb-4">
          <label htmlFor="FullName" className="mb-2">Full Name</label>
          <input
            className='form-control'
            placeholder='Full Name'
            name="name"
            value={contactData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="Email" className="mb-2">Email</label>
          <input
            type="email"
            className='form-control'
            placeholder='Enter Email'
            name="email"
            value={contactData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="Phone" className="mb-2">Phone</label>
          <input
            type='tel'
            className='form-control'
            placeholder='Enter Phone'
            name="phone"
            value={contactData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="Address" className="mb-2">Address</label>
          <input
            className='form-control'
            placeholder='Enter Address'
            name="address"
            value={contactData.address}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-lg btn-block w-100">Save</button>
        <br />
        <Link to="/">or get back to contacts</Link>
      </form>
    </div>
  );
};

export default EditContact;

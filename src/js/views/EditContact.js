import React from 'react'
import { Link } from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom'

const EditContact = () => {
  const params = useParams();
  console.log(params);
  
  const navigate = useNavigate();
  function editContact (){
    alert("haciendo la API")
    navigate ("/")
  }
  return (
      <div className="m-5">
        <h1 className="text-center">Edit Contact {params.idContacto}</h1>
        <form className="m-5">
          <div className="form-group mb-4" >
            <label for="FullName" className=" mb-2" >Full Name</label>
            <input className='form-control' placeholder='Full Name' ></input>
          </div>
          <div className="form-group mb-4" >
            <label for="Email" className=" mb-2" >Email</label>
            <input type="email" className='form-control' placeholder='Enter Email' ></input>
          </div>
          <div className="form-group mb-4" >
            <label for="Phone" className=" mb-2" >Phone</label>
            <input type='tel' className='form-control' placeholder='Enter Phone' ></input>
          </div>
          <div className="form-group mb-4" >
            <label for="Address" className=" mb-2" >Address</label>
            <input className='form-control' placeholder='Enter Address' ></input>
          </div>
          <button className="btn btn-primary btn-lg btn-block w-100" onClick={editContact}>Save</button>
          <br />
          <Link to="/">or get back to contacts</Link>
        </form>
      </div>
    )
}

export default EditContact
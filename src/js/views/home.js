import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";


export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        console.log("Invocando loadSomeData...");
        actions.loadSomeData(); // Cargar los datos desde la API
    }, []);

    return (
        <div className="container mt-5">
            {/* Botón alineado al final del container */}
            <div className="d-flex justify-content-end">
                <Link to="/new-contact">
                    <button className="btn btn-success">Add new contact</button>
                </Link>
            </div>

            {/* Lista de contactos */}
            <div className="mt-3">
                {store.contacts && store.contacts.length > 0 ? (
                    store.contacts.map((contact, index) => (
                        <div
                            className="card d-flex flex-md-row flex-column  p-3 "
                            key={index}
                        >
                            {/* Imagen */}
                            <div className="mb-4 mb-md-0 mx-md-4">
                                <img
                                    className="card-img-left"

                                    src="https://img.freepik.com/foto-gratis/mono-gracioso-gafas-sol-estudio_23-2150844065.jpg?t=st=1733340165~exp=1733343765~hmac=279803f14f15f968d237ab86d93a63162db47c3364aef97fb7d1ac45ef9251bf&w=740"
                                    alt="Profile"
                                />
                            </div>

                            {/* Información del contacto */}
                            <div className="text-start flex-grow-1 ms-5 mb-4">
                                <p className="mb-2">{contact.name}</p>
                                <p className="text-secondary mb-1">
                                    <i className="fa-solid fa-location-dot me-2"></i>
                                    {contact.address}
                                </p>
                                <p className="text-secondary mb-1">
                                    <i className="fa-solid fa-phone-flip me-2"></i>
                                    {contact.phone}
                                </p>
                                <p className="text-secondary mb-1">
                                    <i className="fa-solid fa-envelope me-2"></i>
                                    {contact.email}
                                </p>
                            </div>

                            {/* Botones de acción */}
                            <div className="ms-auto me-3">
                                <Link to={`/edit-contact/${contact.id}`}>
                                    <button className="btn btn-sm me-2">
                                        <i className="fas fa-pencil"></i>
                                    </button>
                                </Link>
                                <button className="btn btn-sm" onClick={() => actions.deleteContact(contact.id)}
                                >
                                    <i className="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No hay contactos disponibles</p>
                )}
            </div>
        </div>

    );
};

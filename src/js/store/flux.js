const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            demo: [
                {
                    title: "FIRST",
                    background: "white",
                    initial: "white",
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white",
                },
            ],
            contacts: [],
        },
        actions: {

            loadSomeData: () => {
                fetch("https://playground.4geeks.com/contact/agendas/alexgilfdez/contacts")
                    .then((response) => response.json()) // Corrección aquí
                    .then((data) => {
                        console.log("Datos recibidos:", data);
                        setStore({ contacts: data.contacts }); 
                    })
                    .catch((error) => {
                        console.error("Error al cargar los datos:", error);
                    });
            },
           
            deleteContact: (id) => {
                const store = getStore();
                fetch(`https://playground.4geeks.com/contact/agendas/alexgilfdez/contacts/${id}`, {
                    method: "DELETE",
                })
                    .then((response) => {
                        if (response.ok) {
                            // Filtrar el contacto eliminado del store local
                            const updatedContacts = store.contacts.filter(contact => contact.id !== id);
                            setStore({ contacts: updatedContacts });
                            console.log(`Contacto con ID ${id} eliminado correctamente`);
                        } else {
                            console.error("Error al eliminar el contacto");
                        }
                    })
                    .catch((error) => {
                        console.error("Error en la solicitud DELETE:", error);
                    });
            },
            updateContact: (id, updatedData) => {
                console.log("Actualizando contacto con ID:", id, updatedData); // Debug
                fetch(`https://playground.4geeks.com/contact/agendas/alexgilfdez/contacts/${id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatedData),
                })
                    .then((response) => {
                        if (response.ok) {
                            // Actualizar el store con los nuevos datos del contacto
                            const store = getStore();
                            const updatedContacts = store.contacts.map(contact =>
                                contact.id === parseInt(id) ? { ...contact, ...updatedData } : contact
                            );
                            setStore({ contacts: updatedContacts });
                            console.log("Contacto actualizado correctamente");
                        } else {
                            console.error("Error al actualizar el contacto");
                        }
                    })
                    .catch((error) => {
                        console.error("Error en la solicitud PUT:", error);
                    });
            }

        },
    };
};

export default getState;
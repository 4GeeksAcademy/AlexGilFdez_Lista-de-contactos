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
            createAgenda: () => {
                const agendaName = "alexgilfdez";
                fetch("https://playground.4geeks.com/contact/agendas/alexgilfdez", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ agenda_slug: agendaName }),
                })
                .then((response) => {
                    if (response.ok) {
                        console.log(`Agenda ${agendaName} creada exitosamente.`);
                    } else {
                        console.error(`Error al crear la agenda: ${response.status} - ${response.statusText}`);
                    }
                })
                .catch((error) => {
                    console.error("Error al intentar crear la agenda:", error);
                });
            },
                  
            loadSomeData: () => {
                fetch("https://playground.4geeks.com/contact/agendas/alexgilfdez/contacts")
                    .then((response) => response.json())
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
                console.log("Actualizando contacto con ID:", id, updatedData);
                fetch(`https://playground.4geeks.com/contact/agendas/alexgilfdez/contacts/${id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatedData),
                })
                    .then((response) => {
                        if (response.ok) {
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
            },
            addContact: (newContact) => {
                fetch("https://playground.4geeks.com/contact/agendas/alexgilfdez/contacts", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newContact),
                })
                    .then((response) => {
                        if (response.ok) {
                            return response.json();
                        } else {
                            throw new Error("Error al crear el contacto");
                        }
                    })
                    .then((createdContact) => {
                        const store = getStore();
                        setStore({ contacts: [...store.contacts, createdContact] });
                        console.log("Nuevo contacto creado:", createdContact);
                    })
                    .catch((error) => {
                        console.error("Error al crear el contacto:", error);
                    });
            },


        },
    };
};

export default getState;
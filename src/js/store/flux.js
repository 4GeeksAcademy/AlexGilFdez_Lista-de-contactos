const getState = ({ getStore, getActions, setStore, getContacts }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: []
		},
		actions: {
			
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				
				
			},
			getContacts: () => {
				fetch ('https://playground.4geeks.com/contact/agendas/alexgilfdez/contacts')
				.then((response)=> { return response.json})
				.then((data)=> {
					console.log(data);
					setStore({contacts: data.contacts})
				})
				.catch(()=> {})

			}
			
		}
	};
};

export default getState;

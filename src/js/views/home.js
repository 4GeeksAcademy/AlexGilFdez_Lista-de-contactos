import React, {useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const {store, actions} = useContext(Context)

	return (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<div>{store.info}</div>
		<Link to="/new-contact">
		<button className="btn btn-success">Create New Contact</button>
		</Link>
		<Link to={`/edit-contact`}>
		<button className="btn btn-primary"> Edit Contact </button></Link>
		{store.contacts.map ((contact)=> {
			return <div>{contact}</div>
		})}
	</div>
);
}

import React from "react";
import AltContainer from "alt/AltContainer";
import UserStore from "../stores/UserStore";
import UserActions from "../actions/UserActions";

import Header from "../components/Header";
require("../../../stylesheets/home.scss");

export class AddUser extends React.Component {

	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		var name = React.findDOMNode(this.refs.name).value;
		if(name!=="")
			UserStore.postUser(name);

		React.findDOMNode(this.refs.name).value = "";
	}

	render() {
		return (
			<div>
				<h1> add user </h1>
				<form onSubmit={this.handleSubmit}>
					<input type="text" ref="name" />
					<button>create</button>
				</form>
			</div>
		);
	}
}


export class Users extends React.Component {
	render() {

		if(UserStore.isLoading()){
			return (
				<div>
					Loading...
				</div>
			)
		}

		return (
			<ul>
				{this.props.users.map((user, i) => {
					return (
						<li key={i}>
							{user.name}
						</li>
					)
				})}
			</ul>
		);
	}
}


export default class Home extends React.Component {

	componentDidMount() {
	  UserStore.fetchUsers();
	}

	render() {
		return (
			<div className="home">
				<Header />
				Home
				<AddUser />
		        <AltContainer store={UserStore}>
		          <Users />
		        </AltContainer>
			</div>
		);
	}
}

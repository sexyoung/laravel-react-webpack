import React from "react";
import Header from "../components/Header";
require("../../../stylesheets/home.scss");

export default class Home extends React.Component {
	render() {
		return (
			<div className="home">
				<Header />
				Home
			</div>
		);
	}
}

import $ from "jQuery";
import React from "react";

export default class Home extends React.Component {
	render() {

    $.get("/api/test", (json)=>{
      console.log(json);
    })

		return (
			<div>
				home
			</div>
		);
	}
}

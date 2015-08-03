import $ from "jquery";
import React from "react";
import router from "./app/router";

$(document).ready(() => {
	router.run((Handler, state) => {
		React.render(<Handler {...state} />, document.getElementById("content"));
	});
});

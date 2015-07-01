/** @jsx React.DOM */
'use strict';
var React = require('react');
var AppComponent = require('./AppComponent.jsx');
var Header = require('./Header.jsx');

var resolveRoute = function() {
	console.log("我是 app.jsx 立馬更新不會重整哦~!~");
	var Header = require('./Header.jsx');
	React.render(<Header />, document.getElementById('app'));
}

window.onhashchange = resolveRoute;

resolveRoute();

if (module.hot) {
	module.hot.accept(resolveRoute);
}
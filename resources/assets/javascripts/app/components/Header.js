import React from 'react';

export default class Header extends React.Component {
	render() {
		return (
			<ul>
				<li> <a href="/#/">home</a> </li>
				<li> <a href="/#/about">about</a> </li>
				<li> <a href="/#/photo">photo</a> </li>
			</ul>
		);
	}
}

import React from 'react';
import { NavLink } from 'react-router-dom';
const activeStyle = {
	color: 'red',
};

const Navigation = () => (
	<div>
		<NavLink to='/Home' activeStyle={activeStyle}>
			Home
		</NavLink>
	</div>
);
export default Navigation;

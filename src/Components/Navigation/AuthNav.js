import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const AuthNav = () => (
	<div>
		<NavLink
			to='/register'
			className='Tab-styles'
			style={({ isActive }) => {
				return {
					color: isActive ? 'red' : '',
				};
			}}
		>
			Register
		</NavLink>
		<NavLink
			to='/login'
			className='Tab-styles'
			style={({ isActive }) => {
				return {
					color: isActive ? 'red' : '',
				};
			}}
		>
			Login
		</NavLink>
	</div>
);

export default AuthNav;

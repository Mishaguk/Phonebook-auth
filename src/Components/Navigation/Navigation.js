import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
	<div className='div-styles'>
		<NavLink
			to='/Home'
			className='Tab-styles'
			style={({ isActive }) => {
				return {
					background: isActive ? 'lightgrey' : '',
				};
			}}
		>
			Home
		</NavLink>
		<NavLink
			to='/contacts'
			className='Tab-styles'
			style={({ isActive }) => {
				return {
					background: isActive ? 'lightgrey' : '',
				};
			}}
		>
			Phonebook
		</NavLink>
		<NavLink
			to='/register'
			className='Tab-styles'
			style={({ isActive }) => {
				return {
					background: isActive ? 'lightgrey' : '',
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
					background: isActive ? 'lightgrey' : '',
				};
			}}
		>
			Login
		</NavLink>
		
	</div>
);
export default Navigation;

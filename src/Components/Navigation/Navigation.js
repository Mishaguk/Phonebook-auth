import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth/authSelectors';

const Navigation = () => {
	const isAuthenticated = useSelector(getIsAuthenticated);

	return (
		<div className='div-styles'>
			<NavLink
				to='/Home'
				className='Tab-styles'
				style={({ isActive }) => {
					return {
						color: isActive ? 'red' : '',
					};
				}}
			>
				Home
			</NavLink>
			{isAuthenticated && (
				<NavLink
					to='/contacts'
					className='Tab-styles'
					style={({ isActive }) => {
						return {
							color: isActive ? 'red' : '',
						};
					}}
				>
					Phonebook
				</NavLink>
			)}
		</div>
	);
};
export default Navigation;

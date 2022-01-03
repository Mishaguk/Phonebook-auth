import React from 'react';
import './HomePage.css';
import { getCurrentUser } from '../../../redux/auth/authOperations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const HomePage = () => {
	let dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCurrentUser());
	}, [dispatch]);

	return (
		<div>
			<h1 className='welcome'>Welcome!</h1>
		</div>
	);
};

export default HomePage;

import React from 'react';
import { useState, useEffect } from 'react';
import './LoginPage.css';
import { useDispatch } from 'react-redux';
import * as operations from '../../../redux/auth/authOperations';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../../redux/auth/authSelectors';
import { useNavigate } from 'react-router';


const LoginPage = () => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const isAuthenticated = useSelector(getIsAuthenticated);
	let navigate = useNavigate();

	useEffect(() => {
		if (isAuthenticated) {
			navigate('/contacts');

			return;
		}
	});

	const handleSubmit = e => {
		e.preventDefault();

		dispatch(operations.logIn({ email, password }));
		setEmail('');
		setPassword('');
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className='form'>
				<span>Email</span>
				<input
					name='email'
					value={email}
					type='text'
					onChange={e => setEmail(e.target.value)}
					placeholder='Enter your email'
				/>
				<span>Password</span>
				<input
					name='password'
					value={password}
					type='password'
					onChange={e => setPassword(e.target.value)}
					placeholder='Enter your password'
				/>
				<button type='submit'>Login</button>
			</form>
		</div>
	);
};

export default LoginPage;

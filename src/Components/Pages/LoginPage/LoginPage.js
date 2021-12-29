import React from 'react';
import { useState } from 'react';
import './LoginPage.css';
import { useDispatch } from 'react-redux';
import * as operations from '../../../redux/auth/authOperations';

const LoginPage = () => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

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

import React from 'react';
import './AuthorizationPage.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as operations from '../../../redux/auth/authOperations';

const Authorization = () => {
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = e => {
		e.preventDefault();

		dispatch(
			operations.register({
				name,
				email,
				password,
			})
		);
		setName('');
		setEmail('');
		setPassword('');
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className='form'>
				<span>Login</span>
				<input
					value={name}
					name='login'
					onChange={e => setName(e.target.value)}
					type='text'
					placeholder='Enter your login'
				/>
				<span>Email</span>
				<input
					value={email}
					name='email'
					onChange={e => setEmail(e.target.value)}
					type='text'
					placeholder='Enter your email'
				/>
				<span>Password</span>
				<input
					value={password}
					name='password'
					onChange={e => setPassword(e.target.value)}
					type='password'
					placeholder='Enter your password'
				/>
				<button type='submit'>Register</button>
			</form>
		</div>
	);
};

export default Authorization;

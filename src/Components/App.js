import React, { useEffect } from 'react';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import * as operations from '../redux/phoneBook/phonebookOperations';
import { useDispatch } from 'react-redux';
import * as authOperations from '../redux/auth/authOperations';
// ROUTERS -------------------------------------------------------------
import { Route, Routes } from 'react-router-dom';
import PhoneBookPage from './Pages/PhonebookPage/PhoneBookPage';
import AuthorizationPage from './Pages/AuthorizationPage/AuthorizationPage';
import HomePage from './Pages/HomePage/HomePage';
import LoginPage from './Pages/LoginPage/LoginPage';
import AppBar from './AppBar';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(operations.fetchContacts());
	}, []);

	useEffect(() => {
		dispatch(authOperations.getCurrentUser());
	}, []);

	return (
		<div>
			<AppBar />
			<Routes>
				<Route path='/login' element={<LoginPage />} />
				<Route path='/Home' element={<HomePage />} />
				<Route path='/contacts' element={<PhoneBookPage />} />
				<Route path='/register' element={<AuthorizationPage />} />
			</Routes>
		</div>
	);
};

export default App;

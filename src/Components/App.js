import React, { useEffect } from 'react';
import ContactList from './ContactList/ContactList';
import InputForm from './InputForm/InputForm';
import Filter from './Filter/Filter';
import { getLoading } from '../redux/phoneBook/selectors';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import * as operations from '../redux/phoneBook/phonebookOperations';
import HomePage from './Pages/HomePage';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
const App = () => {
	const dispatch = useDispatch();

	const isLoading = useSelector(getLoading);

	useEffect(() => {
		dispatch(operations.fetchContacts());
	}, []);

	return (
		<div>
			<Navigation />
			<h1>Phonebook</h1>
			<Routes>
				<Route path='/Home' exact component={HomePage} />
			</Routes>
			<InputForm />
			<Filter />
			{isLoading && (
				<Loader
					type='Circles'
					color='#00BFFF'
					height={100}
					width={100}
					timeout={3000} //3 secs
				/>
			)}
			<ContactList />
		</div>
	);
};

export default App;

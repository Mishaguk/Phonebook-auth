import React, { useEffect, useState } from 'react';
import InputForm from '../../InputForm/InputForm';
import Filter from '../../Filter/Filter';
import ContactList from '../../ContactList/ContactList';
import Loader from 'react-loader-spinner';
import { getLoading } from '../../../redux/phoneBook/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../../redux/phoneBook/phonebookOperations';
import { getCurrentUser } from '../../../redux/auth/authOperations';
import { getIsAuthenticated } from '../../../redux/auth/authSelectors';
import { useNavigate } from 'react-router';
import toastr from 'toastr';
import { CSSTransition } from 'react-transition-group';
import slide from '../../../transitions/Slides.module.css';

const PhoneBookPage = () => {
	const isLoading = useSelector(getLoading);
	const dispatch = useDispatch();
	const isAuthenticated = useSelector(getIsAuthenticated);
	const navigate = useNavigate();
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		dispatch(getCurrentUser());
		setIsLoaded(true);
	}, [dispatch]);

	useEffect(() => {
		if (!isAuthenticated) {
			navigate('/login');
			toastr.warning('Please, sign in to your account');
			return;
		}
		dispatch(fetchContacts());
	}, []);

	useEffect(() => {
		if (!isAuthenticated) {
			navigate('/login');

			return;
		}
	});

	return (
		<div>
			<CSSTransition
				in={isLoaded}
				timeout={500}
				classNames={slide}
				unmountOnExit
			>
				<h1>Phonebook</h1>
			</CSSTransition>
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

export default PhoneBookPage;

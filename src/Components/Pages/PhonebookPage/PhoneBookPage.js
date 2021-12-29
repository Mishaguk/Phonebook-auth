import React from 'react';
import InputForm from '../../InputForm/InputForm';
import Filter from '../../Filter/Filter';
import ContactList from '../../ContactList/ContactList';
import Loader from 'react-loader-spinner';
import { getLoading } from '../../../redux/phoneBook/selectors';
import { useSelector } from 'react-redux';

const PhoneBookPage = () => {
	const isLoading = useSelector(getLoading);

	return (
		<div>
			<h1>Phonebook</h1>
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

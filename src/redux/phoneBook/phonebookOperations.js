import * as actions from './phoneBookActions';
// import axios from 'axios';
// import * as authOperations from '../auth/authOperations';
import { axiosInstance } from '../auth/authOperations';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const addContact = contact => dispatch => {
	dispatch(actions.addContactRequest());

	axiosInstance
		.post('/contacts', contact)
		.then(response => {
			dispatch(actions.addContactSucces(response.data));
		})
		.catch(error => dispatch(actions.addContactError(error)));
};

export const deleteContact = id => dispatch => {
	dispatch(actions.deleteContactRequest());
	axiosInstance
		.delete(`/contacts/${id}`)
		.then(() => dispatch(actions.deleteContactSucces(id)))
		.catch(error => dispatch(actions.deleteContactError(error)));
};

export const fetchContacts = () => dispatch => {
	dispatch(actions.fetchContactRequest());
	axiosInstance
		.get('/contacts')
		.then(({ data }) => dispatch(actions.fetchContactSucces(data)))
		.catch(error => dispatch(actions.fetchContactError(error)));
};

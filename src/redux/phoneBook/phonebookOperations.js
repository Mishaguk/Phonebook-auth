import * as actions from './phoneBookActions';
import axios from 'axios';
import * as authOperations from '../auth/authOperations';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const addContact = contact => dispatch => {
	dispatch(actions.addContactRequest());

	axios
		.post('/contacts', contact)
		.then(response => {
			console.log(response);
			dispatch(actions.addContactSucces(response.data));
		})
		.catch(error => dispatch(actions.addContactError(error)));
};

export const deleteContact = id => dispatch => {
	dispatch(actions.deleteContactRequest());
	axios
		.delete(`/contacts/${id}`)
		.then(() => dispatch(actions.deleteContactSucces(id)))
		.catch(error => dispatch(actions.deleteContactError(error)));
};

export const fetchContacts = () => dispatch => {
	dispatch(actions.fetchContactRequest());
	authOperations.token.set();
	axios
		.get('/contacts')
		.then(({ data }) => console.log(data))
		.catch(error => dispatch(actions.fetchContactError(error)));
};

import axios from 'axios';
import * as authActions from './authActions';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
	set(token) {
		axios.defaults.headers.common.Authorization = `Bearer ${token}`;
	},
	unset() {
		axios.defaults.headers.common.Authorization = '';
	},
};

export const register = credentials => dispatch => {
	dispatch(authActions.registerRequest());

	axios
		.post('/users/signup', credentials)
		.then(response => {
			console.log(response);
			token.set(response.data.token);
			dispatch(authActions.registerSucces(response.data));
		})
		.catch(error => dispatch(authActions.registerError(error)));
};

export const logIn = credentials => dispatch => {
	dispatch(authActions.loginRequest());

	axios
		.post('/users/login', credentials)
		.then(response => {
			console.log(response);
			token.set(response.data.token);
			dispatch(authActions.loginSucces(response.data));
		})
		.catch(error => dispatch(authActions.loginError(error)));
};

export const logOut = () => dispatch => {
	dispatch(authActions.logoutRequest());

	axios
		.post('/users/logout')
		.then(() => {
			token.unset();
			dispatch(authActions.logoutSucces());
		})
		.catch(error => dispatch(authActions.logoutError(error)));
};
export const getCurrentUser = () => (dispatch, getState) => {
	const {
		authReducer: { token: persistedToken },
	} = getState();

	if (!persistedToken) {
		return;
	}
	token.set(persistedToken);

	dispatch(authActions.getCurrentUserRequest());

	axios
		.get('/users/current')
		.then(response => dispatch(authActions.getCurrentUserSucces(response.data)))
		.catch(error => dispatch(authActions.getCurrentUserError(error)));
};

import axios from 'axios';
import * as authActions from './authActions';

export const axiosInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
  timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
  set(token) {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axiosInstance.defaults.headers.common.Authorization = '';
  },
};

export const register = (credentials) => (dispatch) => {
  dispatch(authActions.registerRequest());

  axiosInstance
    .post('/users/signup', credentials)
    .then((response) => {
      console.log(response);
      token.set(response.data.token);
      dispatch(authActions.registerSucces(response.data));
    })
    .catch((error) => dispatch(authActions.registerError(error)));
};

export const logIn = (credentials) => (dispatch) => {
  dispatch(authActions.loginRequest());

  axiosInstance
    .post('/users/login', credentials)
    .then((response) => {
      console.log(response);
      token.set(response.data.token);
      dispatch(authActions.loginSucces(response.data));
    })
    .catch((error) => dispatch(authActions.loginError(error)));
};

export const logOut = () => (dispatch) => {
  dispatch(authActions.logoutRequest());

  axiosInstance
    .post('/users/logout')
    .then(() => {
      token.unset();
      dispatch(authActions.logoutSucces());
    })
    .catch((error) => dispatch(authActions.logoutError(error)));
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

  axiosInstance
    .get('/users/current')
    .then((response) =>
      dispatch(authActions.getCurrentUserSucces(response.data))
    )
    .catch((error) => dispatch(authActions.getCurrentUserError(error)));
};

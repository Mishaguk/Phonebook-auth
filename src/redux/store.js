import phoneBookReducer from './phoneBook/phoneBookReducer';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authReducer';
import storage from 'redux-persist/lib/storage';
// import persistStore from 'redux-persist/es/persistStore';
import { persistStore, persistReducer } from 'redux-persist';

const authPersistConfig = {
	key: 'root',
	storage,
	whitelist: ['token'],
};

export const store = configureStore({
	reducer: {
		phoneBookReducer,
		authReducer,
		authReducer: persistReducer(authPersistConfig, authReducer),
	},
});

export const persistor = persistStore(store);

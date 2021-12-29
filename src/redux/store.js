import phoneBookReducer from './phoneBook/phoneBookReducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from './auth/authReducer';
import storage from 'redux-persist/lib/storage';
// import persistStore from 'redux-persist/es/persistStore';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const authPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    phoneBookReducer,
    // authReducer,
    authReducer: persistReducer(authPersistConfig, authReducer),
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);

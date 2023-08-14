import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { emailApi } from './email/emailOperations';
import { authSlice } from './auth/authReducer';
import { themeSlice } from './theme/themeReducer';
import { visitorsApi } from './logVisitirs/logVisitirs';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const themePersistConfig = {
  key: 'theme',
  storage,
};

export const store = configureStore({
  reducer: {
    [emailApi.reducerPath]: emailApi.reducer,
    [visitorsApi.reducerPath]: visitorsApi.reducer,
    [authSlice.name]: persistReducer(authPersistConfig, authSlice.reducer)!,
    [themeSlice.name]: persistReducer(themePersistConfig, themeSlice.reducer)!,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

    emailApi.middleware,
    visitorsApi.middleware,
  ],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

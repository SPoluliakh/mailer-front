import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';
import {
  ICredentials,
  IAuth,
} from '../../helpers/interfaces/auth/authInterfaces';
import { selectToken } from './authSelectors';
import { RootState } from '../store';

axios.defaults.baseURL = 'https://mailer-back.onrender.com/api';

const setAuthHeader = (token: String): void => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = (): void => {
  axios.defaults.headers.common.Authorization = '';
};

export const signIn = createAsyncThunk<
  IAuth,
  ICredentials,
  {
    rejectValue: string;
  }
>('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post<IAuth>('/auth/login', credentials);
    setAuthHeader(data.token);
    return data;
  } catch (error: any) {
    if (error.response.status === 401 || error.response.status === 500) {
      localStorage.getItem('i18nextLng') === 'en'
        ? toast.error('incorrect data entered')
        : toast.error('Користувач з такими даними не зареєстрован');
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');
    clearAuthHeader();
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'user/refresh',
  async (_, thunkAPI) => {
    const token = selectToken(thunkAPI.getState() as RootState);

    if (!token) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(token);
      const { data } = await axios.get<IAuth>('/user/current');
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

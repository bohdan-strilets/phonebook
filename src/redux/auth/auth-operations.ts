import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import IAuthState from 'types/IAuthState';
import IUser from 'types/IUser';
import token from 'utilities/token';
import API_URL from 'utilities/apiUrl';

axios.defaults.baseURL = API_URL;

const registerUser = createAsyncThunk<IAuthState, IUser>(
  'auth/registr',
  async user => {
    try {
      const { data } = await axios.post('api/auth/signup', user);
      token.set(data.token);
      return data;
    } catch (error) {}
  },
);

const loginUser = createAsyncThunk<IAuthState, IUser>(
  'auth/login',
  async user => {
    try {
      const { data } = await axios.post('api/auth/login', user);
      token.set(data.token);
      return data;
    } catch (error) {}
  },
);

const logoutUser = createAsyncThunk<IAuthState>('auth/logout', async () => {
  try {
    const { data } = await axios.get('api/auth/logout');
    token.unset();
    return data;
  } catch (error) {}
});

const getCurrentUser = createAsyncThunk<
  { name: string; email: string },
  undefined,
  { state: RootState }
>('user/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return;
  }

  token.set(persistedToken);
  try {
    const { data } = await axios.get('api/user/current');
    return data;
  } catch (error) {}
});

const operations = {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
};

export default operations;

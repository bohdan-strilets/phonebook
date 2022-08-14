import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import IAuthState from 'types/IAuthState';
import IUser from 'types/IUser';
import token from 'utilities/token';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const registerUser = createAsyncThunk<IAuthState, IUser>(
  'auth/registr',
  async user => {
    try {
      const { data } = await axios.post('/users/signup', user);
      token.set(data.token);
      return data;
    } catch (error) {}
  },
);

const loginUser = createAsyncThunk<IAuthState, IUser>(
  'auth/login',
  async user => {
    try {
      const { data } = await axios.post('users/login', user);
      token.set(data.token);
      return data;
    } catch (error) {}
  },
);

const logoutUser = createAsyncThunk<IAuthState>('auth/logout', async () => {
  try {
    const { data } = await axios.post('users/logout');
    token.unset();
    return data;
  } catch (error) {}
});

const getCurrentUser = createAsyncThunk<
  { name: string; email: string },
  undefined,
  { state: RootState }
>('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return;
  }

  token.set(persistedToken);
  try {
    const { data } = await axios.get('users/current');
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

import { createSlice } from '@reduxjs/toolkit';
import operations from './auth-operations';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import IAuthState from 'types/IAuthState';

const initialState = {
  user: { name: 'null', email: 'null', subscription: null, avatarURL: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
} as IAuthState;

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(operations.registerUser.fulfilled, (state, action) => {
        try {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        } catch (error) {}
      })

      .addCase(operations.loginUser.fulfilled, (state, action) => {
        try {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        } catch (error) {}
      })

      .addCase(operations.logoutUser.fulfilled, state => {
        try {
          state.user = { name: null, email: null };
          state.token = null;
          state.isLoggedIn = false;
        } catch (error) {}
      })

      .addCase(operations.getCurrentUser.pending, state => {
        try {
          state.isRefreshing = true;
        } catch (error) {}
      })

      .addCase(operations.getCurrentUser.rejected, state => {
        try {
          state.isRefreshing = true;
        } catch (error) {}
      })

      .addCase(operations.getCurrentUser.fulfilled, (state, action) => {
        try {
          if (action.payload) {
            state.user = action.payload;
            state.isLoggedIn = true;
          }
          state.isRefreshing = false;
        } catch (error) {}
      });
  },
});

export const persisteAuthReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer,
);

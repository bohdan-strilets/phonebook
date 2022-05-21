import { createSlice } from '@reduxjs/toolkit';
import operations from './auth-operations';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import IAuthState from 'types/IAuthState';

const initialState = {
  user: { name: 'null', email: 'null' },
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
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })

      .addCase(operations.loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })

      .addCase(operations.logoutUser.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })

      .addCase(operations.getCurrentUser.pending, state => {
        state.isRefreshing = true;
      })

      .addCase(operations.getCurrentUser.rejected, state => {
        state.isRefreshing = true;
      })

      .addCase(operations.getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        if (action.payload) {
          state.isLoggedIn = true;
        }
        state.isRefreshing = false;
      });
  },
});

export const persisteAuthReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer,
);

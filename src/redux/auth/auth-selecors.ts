import { RootState } from 'redux/store';

export const getIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export const getIsRefreshing = (state: RootState) => state.auth.isRefreshing;

export const getName = (state: RootState) => state.auth.user?.name;

export const getEmail = (state: RootState) => state.auth.user?.email;

export const getAvatar = (state: RootState) => state.auth.user?.avatarURL;

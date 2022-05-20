import { RootState } from 'redux/store';

export const getFilter = (state: RootState) => state.contacts.filter;

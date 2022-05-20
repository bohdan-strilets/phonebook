import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IFilter from 'types/IFilter';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: { filter: '' } as IFilter,

  reducers: {
    changeFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
  },
});

export const { changeFilter } = contactSlice.actions;
export default contactSlice.reducer;

import {createSlice} from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'initialItem',
  initialState: {
    initialData: null,
  },
  reducers: {
    getInitialItem(state, actions) {
      try {
        state.initialData = actions.payload;
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export const {getInitialItem} = categorySlice.actions;
export default categorySlice.reducer;

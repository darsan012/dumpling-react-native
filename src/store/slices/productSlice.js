import {createSlice} from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'productSlice',
  initialState: {
    productData: null,
  },
  reducers: {
    getProduct(state, actions) {
      try {
        state.productData = actions.payload;
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export const {getProduct} = productSlice.actions;
export default productSlice.reducer;

import {createSlice} from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'productDetails',
  initialState: {
    userData: null,
  },
  reducers: {
    getProductData(state, actions) {
      try {
        state.productData = actions.payload;
        console.log(state.productData);
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export const {getProductData} = productSlice.actions;
export default productSlice.reducer;

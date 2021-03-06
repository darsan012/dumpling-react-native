import {createSlice} from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'productDetails',
  initialState: {
    productData: null,
  },
  reducers: {
    getProductData(state, actions) {
      try {
        state.productData = actions.payload;
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export const {getProductData} = productSlice.actions;
export default productSlice.reducer;

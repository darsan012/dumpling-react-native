import {createSlice, configureStore} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    quantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      let existed_item = state.cart.find(item => action.payload.id === item.id);
      if (existed_item) {
        state.quantity += 1;
        return {
          ...state,
          totalPrice: state.totalPrice + existed_item.price,
        };
      } else {
        state.quantity = 1;
        let newTotal = state.total + existed_item.price;

        return {
          ...state.cart,
          cart: [...state.cart, existed_item],
          total: newTotal,
        };
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;

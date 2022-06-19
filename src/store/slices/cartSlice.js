import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  totalQuantity: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let index = -1;
      let hasItem = state.cart.find((item, i) => {
        if (item.productId === action.payload.productId) {
          index = i;
          return true;
        } else {
          return false;
        }
      });

      if (hasItem) {
        console.log(hasItem);
        state.cart[index].quantity += 1;
        state.totalQuantity++;
        state.totalAmount += state.cart[index].price;
      } else {
        state.cart = [...state.cart, {...action.payload, quantity: 1}];
        state.totalQuantity++;
        state.totalAmount += action.payload.price;
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => {
        if (item.productId !== action.payload.productId) {
          return true;
        } else {
          state.totalQuantity -= item.quantity;
          state.totalAmount -= item.quantity * item.price;
          return false;
        }
      });
    },

    clearCart: (state, action) => {
      state.cart = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },

    adjustQuantity: (state, action) => {
      state.cart = [
        ...state.cart

          .map((item, i) => {
            let temp = !parseInt(action.payload.quantity)
              ? item.quantity
              : parseInt(action.payload.quantity);
            if (item.productId === action.payload.productId) {
              state.totalQuantity -= item.quantity;
              state.totalQuantity += temp;
              state.totalAmount +=
                temp * parseFloat(item.price) -
                parseInt(item.quantity) * parseFloat(item.price);
              return {...item, quantity: temp};
            } else {
              return {...item};
            }
          })
          .filter(item => !(item.quantity < 1)),
      ];
    },

    incrementQuantity: (state, action) => {
      state.cart = [
        ...state.cart
          .map((item, i) => {
            if (item.productId === action.payload.productId) {
              state.totalQuantity += 1;
              state.totalAmount += item.price;

              return {...item, quantity: item.quantity + 1};
            } else {
              return {...item};
            }
          })
          .filter(item => !(item.quantity < 1)),
      ];
    },

    decrementQuantity: (state, action) => {
      state.cart = [
        ...state.cart
          .map(item => {
            if (item.productId === action.payload.productId) {
              state.totalQuantity -= 1;

              state.totalAmount -= item.price;

              return {...item, quantity: item.quantity - 1};
            } else {
              return {...item};
            }
          })
          .filter(item => !(item.quantity < 1)),
      ];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  adjustQuantity,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

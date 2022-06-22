import {createSlice} from '@reduxjs/toolkit';
import {Alert} from 'react-native';

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
        if (state.cart[index].stockQuantity >= state.cart[index].quantity + 1) {
          state.cart[index].quantity += 1;
          state.totalQuantity++;
          state.totalAmount += state.cart[index].price;
          Alert.alert('Added sucessfully!!');
        } else {
          Alert.alert('Out of stock!!');
        }
      } else {
        if (action.payload.stockQuantity >= 1) {
          state.cart = [...state.cart, {...action.payload, quantity: 1}];
          state.totalQuantity++;
          state.totalAmount += action.payload.price;
          Alert.alert('Added sucessfully!!');
        } else {
          Alert.alert('Out of stock!!');
        }
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

    adjustQuantity: (state, action) => {
      state.cart = [
        ...state.cart
          .map((item, i) => {
            if (item.productId === action.payload.productId) {
              let temp = item.quantity;
              if (parseInt(action.payload.quantity) != NaN) {
                if (item.stockQuantity >= parseInt(action.payload.quantity)) {
                  temp = parseInt(action.payload.quantity);
                } else {
                  Alert.alert(
                    'Sorry your order size exceed our stock size, please forgive us!!',
                  );
                  temp = 0;
                }
              } else {
                Alert.alert(
                  'Sorry your order size exceed our stock size, please forgive us!!',
                );
                temp = 0;
              }
              state.totalQuantity -= item.quantity;
              state.totalQuantity += temp;
              state.totalAmount -= item.quantity * parseFloat(item.price);
              state.totalAmount += temp * parseFloat(item.price);
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
              if (item.stockQuantity >= item.quantity + 1) {
                state.totalQuantity += 1;
                state.totalAmount += item.price;
                return {...item, quantity: item.quantity + 1};
              } else {
                Alert.alert(
                  'Sorry your order size exceed our stock size, please forgive us!!',
                );
                return {...item};
              }
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

    clearCart: state => {
      state.cart = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  adjustQuantity,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

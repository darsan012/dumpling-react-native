import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {productApi} from '../services/productApi';
import {categoryApi} from '../services/categoryApi';
import {cartApi} from '../services/cartApi';
import productReducer from './slices/productSlice';
import cartReducer from './slices/cartSlice';
import categoryReducer from './slices/categorySlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    productDetails: productReducer,
    initialItem: categoryReducer,
    [productApi.reducerPath]: productApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      productApi.middleware,
      categoryApi.middleware,
      cartApi.middleware,
    ),
});

setupListeners(store.dispatch);

import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {productApi} from '../services/productApi';
import {categoryApi} from '../services/categoryApi';
import productReducer from '../store/slices/productSlice';

export const store = configureStore({
  reducer: {
    productDetails: productReducer,
    [productApi.reducerPath]: productApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      productApi.middleware,
      categoryApi.middleware,
    ),
});

setupListeners(store.dispatch);

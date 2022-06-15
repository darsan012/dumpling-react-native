import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL, apiRoutes} from '../config/configRoute';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: builder => ({
    getAllProducts: builder.query({
      query: () => {
        console.log('hello');
        return {
          url: apiRoutes.getProducts,
          method: 'GET',
        };
      },
    }),
  }),
});

export const {useLazyGetAllProductsQuery} = productApi;

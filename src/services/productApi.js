import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {apiRoutes, BASE_URL} from '../config/configRoute';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: builder => ({
    getAllProducts: builder.query({
      query: () => {
        return {
          url: apiRoutes.getAllProducts,
          method: 'GET',
        };
      },
    }),
  }),
});

export const {useLazyGetAllProductsQuery} = productApi;

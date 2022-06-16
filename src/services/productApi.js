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
        return {
          url: apiRoutes.getProducts,
        };
      },
    }),
    getSingleProduct: builder.query({
      query: id => {
        return {
          url: apiRoutes.getProducts + id,
        };
      },
    }),
  }),
});

export const {useLazyGetAllProductsQuery, useLazyGetSingleProductQuery} =
  productApi;

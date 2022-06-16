import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL, apiRoutes} from '../config/configRoute';

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: builder => ({
    getAllCategories: builder.query({
      query: () => {
        return {
          url: apiRoutes.getCategories,
        };
      },
    }),
    getSingleCatagory: builder.query({
      query: id => {
        return {
          url: apiRoutes.getCategories + id,
        };
      },
    }),
  }),
});

export const {useLazyGetAllCategoriesQuery, useLazyGetSingleCatagoryQuery} =
  categoryApi;

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL, apiRoutes} from '../config/configRoute';

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: builder => ({
    postForm: builder.mutation({
      query: data => {
        return {
          url: apiRoutes.postForm,
          method: 'POST',
          body: {...data},
        };
      },
    }),
  }),
});

export const {usePostFormMutation} = cartApi;

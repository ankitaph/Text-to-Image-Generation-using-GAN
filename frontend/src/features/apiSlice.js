 import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../utils/ProtectedRoute1';



export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
     baseUrl: BASE_URL, 
    prepareHeaders: (headers)=>{
        headers.set('Content-Type','application/json')
        headers.set('api-key','f77d908f-f24a-4e84-9756-d0892a74af59')
        return headers;
    }
    }),
  endpoints: (builder) => ({
   
    getImages: builder.mutation({
      query: (data) => ({
        url: '',
        method:'POST',
        body: JSON.stringify({
          text: data,
          grid_size: '1',
         

      }), 
      }),
    }),
  }),
});

export const { useGetImagesMutation } = apiSlice;

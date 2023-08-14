import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IVisitors } from '../../helpers/interfaces/logVisitors/logVisitors';

export const visitorsApi = createApi({
  reducerPath: 'visitors',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://visitor-log.onrender.com',
  }),
  tagTypes: ['visitors'],
  endpoints: builder => ({
    getVisitors: builder.query<IVisitors[], null>({
      query: () => ({
        method: 'GET',
        url: '/visitors',
      }),
      transformResponse: (response: any) => response.data.visitors,
      providesTags: ['visitors'],
    }),
  }),
});

export const { useGetVisitorsQuery } = visitorsApi;

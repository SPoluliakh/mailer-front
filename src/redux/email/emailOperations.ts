import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState } from '../store';
import { IEmail } from '../../helpers/interfaces/emailApiInterface/emailApiInterface';

export const emailApi = createApi({
  reducerPath: 'emails',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://mailer-back.onrender.com/partners',
    prepareHeaders: (headers, { getState }) => {
      const token: string | null = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      } else {
        headers.delete('authorization');
      }
      return headers;
    },
  }),
  tagTypes: ['emails'],
  endpoints: builder => ({
    addEmail: builder.mutation<IEmail, { email: string }>({
      query: email => ({
        method: 'POST',
        url: '/new',
        body: email,
      }),

      invalidatesTags: ['emails'],
    }),
  }),
});

export const { useAddEmailMutation } = emailApi;

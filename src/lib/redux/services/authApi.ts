// DUMMY API

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { User } from '@/types';

export const authApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['User'],
  endpoints: builder => ({
    login: builder.mutation<{ token: string }, { email: string; password: string }>({
      query: ({ email, password }) => ({
        url: '/login',
        method: 'POST',
        body: { email, password },
      }),
      invalidatesTags: ['User'],
    }),
    register: builder.mutation<{ token: string }, { email: string; password: string }>({
      query: ({ email, password }) => ({
        url: '/register',
        method: 'POST',
        body: { email, password },
      }),
      invalidatesTags: ['User'],
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),
      invalidatesTags: ['User'],
    }),
    getUser: builder.query<{ user: User }, void>({
      query: () => ({
        url: '/user',
        method: 'GET',
      }),
      providesTags: ['User'],
    }),
  }),
});

// Export hooks for usage in functional components
export const { useLoginMutation, useRegisterMutation, useLogoutMutation, useGetUserQuery } = authApi;

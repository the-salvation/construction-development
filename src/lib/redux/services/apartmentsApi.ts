// DUMMY API

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Apartment } from '@/types';

// Define a service using a base URL and expected endpoints
export const apartmentsApi = createApi({
  reducerPath: 'apartmentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Apartment'],
  endpoints: builder => ({
    getApartments: builder.query<Apartment[], void | { status?: string }>({
      query: params => {
        const queryParams = new URLSearchParams();
        if (params?.status) {
          queryParams.append('status', params.status);
        }
        return {
          url: `/apartments${queryParams.toString() ? `?${queryParams.toString()}` : ''}`,
        };
      },
      providesTags: result =>
        result
          ? [...result.map(({ id }) => ({ type: 'Apartment' as const, id })), { type: 'Apartment', id: 'LIST' }]
          : [{ type: 'Apartment', id: 'LIST' }],
    }),

    getApartmentById: builder.query<Apartment, string>({
      query: id => `/apartments/${id}`,
      providesTags: (result, error, id) => [{ type: 'Apartment', id }],
    }),

    addApartment: builder.mutation<Apartment, Omit<Apartment, 'id' | 'createdAt' | 'updatedAt'>>({
      query: body => ({
        url: '/apartments',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Apartment', id: 'LIST' }],
    }),

    updateApartment: builder.mutation<Apartment, Partial<Apartment> & { id: string }>({
      query: ({ id, ...patch }) => ({
        url: `/apartments/${id}`,
        method: 'PUT',
        body: patch,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Apartment', id }],
    }),

    deleteApartment: builder.mutation<{ success: boolean; id: string }, string>({
      query: id => ({
        url: `/apartments/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Apartment', id }],
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetApartmentsQuery,
  useGetApartmentByIdQuery,
  useAddApartmentMutation,
  useUpdateApartmentMutation,
  useDeleteApartmentMutation,
} = apartmentsApi;

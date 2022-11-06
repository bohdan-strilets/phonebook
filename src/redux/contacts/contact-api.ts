import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from 'redux/store';
import { IContactToServer } from 'types/IContact';
import API_URL from 'utilities/apiUrl';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}api/contacts`,

    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ['Contacts'],

  endpoints: builder => ({
    getContacts: builder.query<any, void>({
      query: () => ({ url: '/' }),
      providesTags: ['Contacts'],
    }),

    getFavoritesContacts: builder.query<any, void>({
      query: () => ({ url: '/?favorite=true' }),
      providesTags: ['Contacts'],
    }),

    deleteContact: builder.mutation({
      query: (contactId: string) => ({
        url: `/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),

    createContact: builder.mutation({
      query: (newContact: IContactToServer) => ({
        url: '/',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contacts'],
    }),

    changeContact: builder.mutation({
      query: ({ contactId, ...contact }) => ({
        url: `/${contactId}`,
        method: 'PUT',
        body: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),

    changeFavorite: builder.mutation({
      query: ({ contactId, ...favorite }) => ({
        url: `/${contactId}/favorite`,
        method: 'PATCH',
        body: favorite,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useGetFavoritesContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
  useChangeContactMutation,
  useChangeFavoriteMutation,
} = contactApi;

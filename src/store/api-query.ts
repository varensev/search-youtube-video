import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Root } from './youtube-types';

const apiUrl = 'https://www.googleapis.com/youtube/v3';
const apikey = import.meta.env.VITE_REACT_APP_API_KEY
const maxResults = 100;
export const youtubeApi = createApi({
    reducerPath: 'youtubeApi',
    baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
    endpoints: (builder) => ({
        getMoviesByName: builder.query<Root, string>({
            query: (name) => ({
                url: '/search',
                method: 'GET',
                params: {
                    part: 'snippet',
                    key: apikey,
                    q: name,
                    maxResults,
                },
            }),
        }),
    }),
});

export const { useGetMoviesByNameQuery } = youtubeApi;

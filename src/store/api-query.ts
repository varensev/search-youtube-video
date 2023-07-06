import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

import {Root} from "./youtube-types";
import {apiKey} from "../../api_key";
const apiUrl = 'https://www.googleapis.com/youtube/v3/search';

export const youtubeApi = createApi({

    reducerPath: 'youtubeApi',
    baseQuery: fetchBaseQuery({baseUrl: apiUrl}),
    endpoints: (builder) => ({
        getMoviesByName: builder.query<Root, string>({
            query: (name) => `?part=snippet&key=${apiKey}&q=${encodeURIComponent(name)}`,
        }),
    }),
})


export const {useGetMoviesByNameQuery} = youtubeApi

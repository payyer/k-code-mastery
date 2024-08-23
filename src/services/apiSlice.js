import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl: "https://ductandev.io.vn/api/",
    credentials: 'include',
})

export const apiSlice = createApi({
    baseQuery: baseQuery,
    endpoints: builder => ({})
})

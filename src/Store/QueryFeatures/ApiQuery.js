import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const ShopApi = createApi({
    reducerPath: 'ShopApi',
    baseQuery: fetchBaseQuery(
        {
            baseUrl: 'http://localhost:3000/',
        }
    ),
    tagTypes: ["products", "notes"],
    endpoints: () => ({})
})

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const ShopApi = createApi({
    reducerPath: 'ShopApi',
    baseQuery: fetchBaseQuery(
        {
            baseUrl: 'http://localhost:3000/',
        }
    ),
    // tagTypes: ["products"],
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => 'products',
            // providesTags: ["products"]
        }),
        createAProduct: builder.mutation({
            query: (product) => ({
                url: 'products',
                method: "POST",
                body: product
            }),
            // invalidatesTags: ["products"],
        }),
        removeAProduct: builder.mutation({
            query: (ID) => ({
                url: `products/${ID}`,
                method: "DELETE"
            }), 
            // invalidatesTags: ["products"] ,
        })
    })

})


export const {useGetAllProductsQuery, 
            useCreateAProductMutation, 
            useRemoveAProductMutation} = ShopApi;
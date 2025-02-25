import { ShopApi } from "../ApiQuery";



export const productApi = ShopApi.injectEndpoints({
            endpoints: (builder) => ({
                getAllProducts: builder.query({
                    query: () => 'products',
                    providesTags: ["products"]
                }),
                createAProduct: builder.mutation({
                    query: (product) => ({
                        url: 'products',
                        method: "POST",
                        body: product
                    }),
                    invalidatesTags: ["products"],
                }),
                removeAProduct: builder.mutation({
                    query: (ID) => ({
                        url: `products/${ID}`,
                        method: "DELETE"
                    }), 
                    invalidatesTags: ["products"],
                })
            })
        })

        export const {useGetAllProductsQuery, useCreateAProductMutation, useRemoveAProductMutation} = productApi;
import { ShopApi } from "../ApiQuery";


export const noteApi = ShopApi.injectEndpoints({
                endpoints: (builder) => ({
                    getAllNotes: builder.query({
                        query: () => "notes",
                        providesTags: ["notes"]
                    }),
                    createANote: builder.mutation({
                        query: (note) => ({
                            url: "notes",
                            method: "POST",
                            body: note
                        }),
                        invalidatesTags: ["notes"]
                    }),
                    removeANote: builder.mutation({
                        query: (NID) => ({
                            url: `notes/${NID}`,
                            method: "DELETE" 
                        }),
                        invalidatesTags: ["notes"]
                    })
                })
            })

export const {useGetAllNotesQuery, useCreateANoteMutation, useRemoveANoteMutation} = noteApi
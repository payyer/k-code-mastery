import { apiSlice } from "../apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getCategory: builder.query({
            query: (body) => `category`,
            providesTags: ['category'],
        }),
        addCategory: builder.mutation({
            query: (body) => {
                return {
                    url: "category",
                    method: "POST",
                    body
                }
            },
            invalidatesTags: ['category'],
        }),
        editCategory: builder.mutation({
            query: (data) => {
                return {
                    url: `category/${data.id}`,
                    method: "PUT",
                    body: data.body
                }
            },
            invalidatesTags: ['category'],
        }),
        deleteCategory: builder.mutation({
            query: (data) => {
                return {
                    url: `category/${data.id}`,
                    method: "DELETE",
                }
            },
            invalidatesTags: ['category'],
        })
    })
})
export const { useGetCategoryQuery, useAddCategoryMutation, useEditCategoryMutation, useDeleteCategoryMutation } = categoryApi
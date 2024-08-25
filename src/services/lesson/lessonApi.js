import { apiSlice } from "../apiSlice";

export const lessonApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        editLesson: builder.mutation({
            query: (data) => {
                console.log({ data })
                return {
                    url: `lesson/${data.id}`,
                    method: "PUT",
                    body: data.body
                };
            },
            invalidatesTags: ['course'],
        }),
        addLesson: builder.mutation({
            query: (body) => {
                return {
                    url: `lesson`,
                    method: "POST",
                    body
                };
            },
            invalidatesTags: ['course'],
        }),
        deleteLesson: builder.mutation({
            query: (id) => {
                return {
                    url: `lesson/${id}`,
                    method: "DELETE",
                };
            },
            invalidatesTags: ['course'],
        })
    })
})
export const { useEditLessonMutation, useAddLessonMutation, useDeleteLessonMutation } = lessonApi
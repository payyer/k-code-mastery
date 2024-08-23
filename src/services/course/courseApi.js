import { apiSlice } from "../apiSlice";

export const courseApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getCourse: builder.query({
            query: (body) => `course`,
        })
    })
})
export const { useGetCourseQuery } = courseApi
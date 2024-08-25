import { apiSlice } from "../apiSlice";
export const courseApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCourse: builder.query({
      query: (body) => {
        if (body.categoryID) {
          return `course?searchByName=${body.searchByName}&page=${body.page}&limit=${body.limit}&categoryID=${body.categoryID}`;
        }
        return `course?searchByName=${body.searchByName}&page=${body.page}&limit=${body.limit}`;
      },
      providesTags: ["course"],
    }),

    getDetailCourse: builder.query({
      query: (id) => `course/${id}`,
    }),

    addCourse: builder.mutation({
      query: (body) => {
        return {
          url: `course`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["course"],
    }),

    editCourse: builder.mutation({
      query: (data) => {
        return {
          url: `course/${data.id}`,
          method: "PUT",
          body: data.body,
        };
      },
      invalidatesTags: ["course"],
    }),
    deleteCourse: builder.mutation({
      query: (id) => {
        return {
          url: `course/${id}`,
          method: "Delete",
        };
      },
      invalidatesTags: ["course"],
    }),
  }),
});
export const {
  useGetCourseQuery,
  useAddCourseMutation,
  useEditCourseMutation,
  useDeleteCourseMutation,
  useGetDetailCourseQuery,
} = courseApi;

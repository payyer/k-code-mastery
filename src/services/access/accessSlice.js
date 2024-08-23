import { apiSlice } from "../apiSlice";

export const accessApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (body) => {
        return {
          url: "user",
          method: "POST",
          body,
        };
      },
    }),
  }),
});
export const { useSignUpMutation } = accessApi;

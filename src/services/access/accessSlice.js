import { apiSlice } from "../apiSlice";
export const accessApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (body) => {
        console.log("body,", body);
        return {
          url: "auth/sign-up",
          method: "POST",
          body,
        };
      },
    }),
    signIn: builder.mutation({
      query: (body) => {
        return {
          url: "auth/sign-in",
          method: "POST",
          body,
        };
      },
    }),
    loadProfile: builder.query({
      query: (userId) => {
        return {
          url: `user/${userId}`,
          method: "GET",
        };
      },
    }),
  }),
});
export const { useSignUpMutation, useSignInMutation, useLoadProfileQuery } =
  accessApi;

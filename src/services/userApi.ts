import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface User {
  userName: string;
}

export const userApi = createApi({
  reducerPath: "authorization",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    authorization: builder.mutation({
      query: (data) => ({
        url: "login",
        method: "POST",
        body: data,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
  }),
});

export const { useAuthorizationMutation } = userApi;

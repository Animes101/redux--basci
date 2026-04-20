// services/api.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
  endpoints: (builder) => ({
    
    getComment: builder.query({
      query: () => "/comments",
    }),

  }),
});

export const { useGetCommentQuery } = api;
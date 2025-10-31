import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const listingsApi = createApi({
  reducerPath: "listingsApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://u2oyhiwlmc.execute-api.us-east-1.amazonaws.com/production/",
  }),
  endpoints: (builder) => ({
    getListings: builder.query<any, void>({
      query: () => "get-listings",
    }),
  }),
});

export const { useGetListingsQuery } = listingsApi;

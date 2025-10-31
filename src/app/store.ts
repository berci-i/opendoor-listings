// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { listingsApi } from "../api/listingsApi";
import listingsReducer from "../features/listings/listingsSlice";

export const store = configureStore({
  reducer: {
    listings: listingsReducer,
    [listingsApi.reducerPath]: listingsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(listingsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

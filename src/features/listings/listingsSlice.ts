import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type SortOrder = "newest" | "oldest";
export type StatusFilter = "all" | "active" | "sold";

export interface ListingsState {
  search: string;
  sortOrder: SortOrder;
  statusFilter: StatusFilter;
}

const initialState: ListingsState = {
  search: "",
  sortOrder: "newest",
  statusFilter: "all",
};

const listingsSlice = createSlice({
  name: "listings",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setSortOrder(state, action: PayloadAction<SortOrder>) {
      state.sortOrder = action.payload;
    },
    setStatusFilter(state, action: PayloadAction<StatusFilter>) {
      state.statusFilter = action.payload;
    },
    resetFilters() {
      return initialState;
    },
  },
});

export const { setSearch, setSortOrder, setStatusFilter, resetFilters } =
  listingsSlice.actions;

export default listingsSlice.reducer;

import "./SearchBar.scss";

import {useAppDispatch, useAppSelector} from "@/app/hooks";

import {setSearch} from "@/features/listings/listingsSlice";

export const SearchBar = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.listings.search);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by address..."
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
    </div>
  );
};

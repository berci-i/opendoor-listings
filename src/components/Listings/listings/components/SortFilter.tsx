import {useAppDispatch, useAppSelector} from "@/app/hooks";
import {
  setSortOrder,
  setStatusFilter,
  type SortOrder,
  type StatusFilter,
} from "@/features/listings/listingsSlice";
import {FiChevronDown} from "react-icons/fi"; // import icon
import "./SortFilter.scss";

export const SortFilter = () => {
  const dispatch = useAppDispatch();
  const {sortOrder, statusFilter} = useAppSelector((state) => state.listings);

  return (
    <div className="sort-filter">
      <div className="select-wrapper">
        <select
          value={sortOrder}
          onChange={(e) => dispatch(setSortOrder(e.target.value as SortOrder))}
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
        <FiChevronDown className="dropdown-icon" />
      </div>

      <div className="select-wrapper">
        <select
          value={statusFilter}
          onChange={(e) => dispatch(setStatusFilter(e.target.value as StatusFilter))}
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="sold">Sold</option>
        </select>
        <FiChevronDown className="dropdown-icon" />
      </div>
    </div>
  );
};

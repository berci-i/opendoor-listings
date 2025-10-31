import type {Listing} from "../components/ListingCard/listing.types";
import {useAppSelector} from "@/app/hooks";
import {useGetListingsQuery} from "@/api/listingsApi";
import {useMemo} from "react";

function filterByStatus(listing: Listing, statusFilter: string) {
  // Consider listings without zillowData as active
  if (!listing.zillowData) return statusFilter === "active";
  return statusFilter === "active" ? !listing.zillowData.dateSold : !!listing.zillowData.dateSold;
}

function filterBySearch(listing: Listing, search: string) {
  return listing.address?.formattedAddress?.toLowerCase().includes(search.toLowerCase());
}

export const useFilteredListings = () => {
  const {data: listings, isLoading} = useGetListingsQuery();
  const {search, sortOrder, statusFilter} = useAppSelector((state) => state.listings);
  const filteredListings = useMemo(() => {
    if (!listings?.deals) return [];

    let deals = listings.deals;

    if (statusFilter !== "all")
      deals = deals.filter((l: Listing) => filterByStatus(l, statusFilter));

    if (search) deals = deals.filter((l: Listing) => filterBySearch(l, search));

    if (sortOrder === "oldest") return [...deals].reverse();

    return deals;
  }, [listings, search, sortOrder, statusFilter]);
  return {filteredListings, isLoading};
};

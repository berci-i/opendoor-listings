import {useAppSelector} from "@/app/hooks";
import {useGetListingsQuery} from "@/api/listingsApi";
import {useMemo} from "react";

export const useFilteredListings = () => {
  const {data: listings} = useGetListingsQuery();
  const {search, sortOrder, statusFilter} = useAppSelector((state) => state.listings);
  return useMemo(() => {
      if (!listings?.deals) return [];
      let deals = listings.deals ?? [];
  
      if (statusFilter !== "all") deals = deals.filter((l: any) => l.status === statusFilter);
      if (Boolean(search))
        deals = deals.filter((l: any) =>
          l.address?.formattedAddress?.toLowerCase().includes(search.toLowerCase())
        );
  
      if (sortOrder === "oldest")
        try {
          return [...deals].reverse();
        } catch (e) {
          console.error("Error reversing deals:", e);
        }
  
      return deals;
    }, [listings, search, sortOrder, statusFilter]);
}

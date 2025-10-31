import {Banner} from "./Banner";
import {ListingCard} from "./listings/components/";
import {SortFilter} from "./listings/components";
import {useAppSelector} from "../../app/hooks";
import {useGetListingsQuery} from "../../api/listingsApi";
import {useMemo} from "react";

export const Listings = () => {
  const {data: listings} = useGetListingsQuery();
  const {search, sortOrder, statusFilter} = useAppSelector((state) => state.listings);

  const filteredListings = useMemo(() => {
    if (!listings?.deals) return [];
    let {deals}: {deals: Array<any>} = listings;

    if (statusFilter !== "all") deals = deals.filter((l: any) => l.status === statusFilter);
    if (Boolean(search))
      deals = deals.filter((l: any) =>
        l.address?.formattedAddress?.toLowerCase().includes(search.toLowerCase())
      );
    console.log(deals);
    if (sortOrder === "oldest")
      try {
        return deals.reverse();
      } catch (e) {
        console.error("Error reversing deals:", e);
      }

    return deals;
  }, [listings, search, sortOrder, statusFilter]);
  console.log(filteredListings);

  return (
    <div className="app-container">
      <SortFilter />
      {filteredListings.map((listing: any, index: number) => (
        <div key={listing._id}>
          <ListingCard listing={listing} />
          {index === 1 && <Banner />}
        </div>
      ))}
    </div>
  );
};

import "./Listings.scss";

import {Banner} from "./Banner";
import {ListingCard} from "./listings/components/";
import {SortFilter} from "./listings/components";
import {useFilteredListings} from "./listings/hooks/useFilteredListings";

export const Listings = () => {
  const filteredListings = useFilteredListings();
  return (
    <div className="listings-container">
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

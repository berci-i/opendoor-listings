import "./Listings.scss";

import {Banner} from "./Banner";
import {ListingCard} from "./listings/components/";
import {Loader} from "../core";
import {SortFilter} from "./listings/components";
import {useFilteredListings} from "./listings/hooks/useFilteredListings";

export const Listings = () => {
  const {filteredListings, isLoading} = useFilteredListings();
  return (
    <div className="listings-container">
      {isLoading ? (
        <Loader className="loader-spacer" />
      ) : (
        <div className="listing-container-spacer">
          <h4>Homes for sale</h4>

          <div className="litings-found">{filteredListings.length} listings found</div>
          <SortFilter />
          {filteredListings.map((listing: any, index: number) => (
            <div key={listing._id}>
              <ListingCard listing={listing} />
              {index === 1 && <Banner />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

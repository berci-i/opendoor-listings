import "./ListingCard.scss";

import {FaRegHeart} from "react-icons/fa6";
import {useCardPhotos} from "../../hooks/useCardPhotos";

interface Listing {
  _id: string;
  formattedAddress: string;
  userData?: {
    askingPrice?: number;
    linkToPhotos?: string | null;
  };
  zillowData?: {
    homeStatus?: string;
    bedrooms?: number;
    bathrooms?: number;
    livingArea?: number;
    homeType?: string;
    city?: string;
  };
}

interface ListingCardProps {
  listing: Listing;
}

export const ListingCard = ({listing}: ListingCardProps) => {
  const imageSrc = useCardPhotos(listing.userData?.linkToPhotos);
  // if (listing.userData?.linkToPhotos) console.log(listing);
  const price = listing.userData?.askingPrice;
  const bds = listing.zillowData?.bedrooms ?? "-";
  const ba = listing.zillowData?.bathrooms ?? "-";
  const sqft = listing.zillowData?.livingArea
    ? listing.zillowData.livingArea.toLocaleString()
    : "-";
  const type = listing.zillowData?.homeType ?? "Home";
  const city = listing.zillowData?.city ?? "";

  return (
    <div className="listing-card">
      <div className="image-wrapper">
        <img src={imageSrc} alt={listing.formattedAddress} />
      </div>
      <div className="info">
        <div className="price-row">
          <p className="price">{price ? `$${price.toLocaleString()}` : "Price unavailable"}</p>
          <FaRegHeart className="heart-icon" />
        </div>
        <p className="details">
          {bds} bds • {ba} ba • {sqft} sqft • {type}
        </p>
        <p className="location">{city}</p>
      </div>
    </div>
  );
};

export default ListingCard;

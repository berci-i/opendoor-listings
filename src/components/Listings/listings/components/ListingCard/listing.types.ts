interface Address {
  location: [number, number]; // [lat, lng]
  googlePlaceId: string;
  formattedAddress: string;
  state: string;
  stateCode: string;
  streetNumber: string;
  route: string;
  neighborhood?: string;
  locality: string;
  zipcode: string;
  kind?: string;
  friendlyUrl?: string;
}

interface UserData {
  inspectionAvailability?: any[]; // refine if structure known
  askingPrice?: number;
  wastewaterType?: string;
  foundationIssues?: boolean;
  hoaPeriod?: string | null;
  hoaFee?: number | null;
  arv?: number;
  rent?: number;
  rehabCost?: number;
  relationship?: string;
  occupancy?: string;
  isUnderContract?: boolean;
  sellerCommission?: number | null;
  updatedAskingPrice?: any[];
  linkToPhotos?: string | null;
  description?: string;
}

interface ListingSubType {
  is_FSBA?: boolean;
  is_newHome?: boolean;
  is_FSBO?: boolean;
  is_pending?: boolean;
  is_bankOwned?: boolean;
  is_openHouse?: boolean;
  is_forAuction?: boolean;
  is_comingSoon?: boolean;
  is_foreclosure?: boolean;
}

interface ZillowData {
  yearBuilt?: number;
  lotSize?: number;
  zestimate?: number | null;
  rentZestimate?: number;
  livingAreaValue?: number | null;
  homeType?: string;
  bedrooms?: number | null;
  bathrooms?: number | null;
  homeStatus?: string;
  hdpUrl?: string;
  dateSold?: string | null;
  listing_sub_type?: ListingSubType;
  hoaFee?: number | null;
  schoolRating?: number;
  parkingSpaces?: number;
  hasPool?: boolean | null;
}

export interface Listing {
  _id: string;
  address: Address;
  userData?: UserData;
  zillowData?: ZillowData;
}

export interface ListingCardProps {
  listing: Listing;
}

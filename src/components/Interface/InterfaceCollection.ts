import { OverridableStringUnion } from "@mui/types";
import {
  AlertColor,
  AlertPropsColorOverrides,
} from "@mui/material/Alert";

export interface Place {
  googleMapId: string;
  name: string;
  address: string;
  types: string;
  location: string;
  district: string;
  rating: number | null;
  totalRating: number | null;
  photo: string;
  distance_to_user: number;
}

export interface PlaceDetails {
  id: string;
  current_opening_hours: string | null;
  formatted_phone_number: string | null;
  international_phone_number: string | null;
  website: string | null;
  curbside_pickup: boolean;
  delivery: boolean;
  dine_in: boolean;
  editorial_summary: string | null;
  price_level: number | null;
  rating: number | null;
  reservable: boolean;
  serves_beer: boolean;
  serves_breakfast: boolean;
  serves_dinner: boolean;
  serves_lunch: boolean;
  serves_vegetarian_food: boolean;
  serves_wine: boolean;
  takeout: boolean;
  user_ratings_total: number | null;
  totalReviews: number | null;

}

export interface Review {
  id: string;
  author_id?: string | null;
  place_id?: string | null;
  author_name: string;
  rating: number | null;  // Using union type for rating choices
  relative_time_description: string;
  time: number;
  language?: string | null;
  original_language?: string | null;
  profile_photo_url?: string | null;
  text?: string | null;
  translated: boolean;
  likes: number;
}


export interface UserFeature {
  user:  number;
  firstName: string | null;
  lastName: string | null;
  lastLatitude: number | null;
  lastLongitude: number | null;
  photoUrl: string | null;
  // Add other fields for user details like oldest location, interests, etc.
}

export interface AleartProps {
  isAleart: number;
  setIsAleart: React.Dispatch<React.SetStateAction<number>>;
  severity?: AlertColor;
  color?: OverridableStringUnion<AlertColor, AlertPropsColorOverrides>;
  title?: string;
  normalText?: string;
  strongText?: string;
  timeOut?: number;
}
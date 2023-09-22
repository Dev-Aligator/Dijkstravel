import { Place, PlaceDetails } from "../Interface/InterfaceCollection";

interface PlaceDetailsInfoProps {
  placeDetails: PlaceDetails;
  place: Place;
}

interface InfoLabelProps {
  name: String;
  value: String;
}

const InfoLabel = ({ name, value }: InfoLabelProps) => {
  return (
    <div className="info-row">
      <div className="info-label">
        <span className="attribute-name">{name}:</span> {value}
      </div>
    </div>
  );
};

const PlacesDetailsInfo = ({ placeDetails, place }: PlaceDetailsInfoProps) => {
  function mapPriceLevelToDescription(priceLevel: number) {
    switch (priceLevel) {
      case 0:
        return "Free";
      case 1:
        return "Inexpensive";
      case 2:
        return "Moderate";
      case 3:
        return "Expensive";
      case 4:
        return "Very Expensive";
      default:
        return "Unknown"; // Handle unknown or invalid values
    }
  }
  return (
    <div className="info-container">
      {/* {placeDetails.formatted_phone_number && (
        <InfoLabel
          
          name="Phone No"
          value={placeDetails.formatted_phone_number}
        ></InfoLabel>
      )} */}
      <div className="left-info-container">
        {placeDetails.international_phone_number && (
          <InfoLabel
            name="Phone No"
            value={placeDetails.international_phone_number}
          ></InfoLabel>
        )}

        {placeDetails.website != "nan" && (
          <InfoLabel
            name="Website"
            value={placeDetails.website ? placeDetails.website : ""}
          ></InfoLabel>
        )}

        {placeDetails.editorial_summary != "nan" && (
          <InfoLabel
            name="Sumary"
            value={
              placeDetails.editorial_summary
                ? placeDetails.editorial_summary
                : ""
            }
          ></InfoLabel>
        )}

        {placeDetails.price_level && (
          <InfoLabel
            name="Price level"
            value={mapPriceLevelToDescription(placeDetails.price_level)}
          ></InfoLabel>
        )}

        {place.address && (
          <InfoLabel name="Address" value={place.address}></InfoLabel>
        )}

        {placeDetails.rating && (
          <InfoLabel
            name="Rating"
            value={`${String(placeDetails.rating)} 🌟`}
          ></InfoLabel>
        )}
      </div>
      <div className="right-info-container">
        {placeDetails.curbside_pickup && (
          <InfoLabel name="Curbside pickup" value="✅"></InfoLabel>
        )}

        {placeDetails.delivery && (
          <InfoLabel name="Delivery" value="✅"></InfoLabel>
        )}

        {placeDetails.dine_in && (
          <InfoLabel name="Dine in" value="✅"></InfoLabel>
        )}

        {placeDetails.reservable && (
          <InfoLabel name="Reservable" value="✅"></InfoLabel>
        )}

        {placeDetails.serves_beer && (
          <InfoLabel name="Serves beer" value="✅"></InfoLabel>
        )}

        {placeDetails.serves_breakfast && (
          <InfoLabel name="Serves breakfast" value="✅"></InfoLabel>
        )}

        {placeDetails.serves_dinner && (
          <InfoLabel name="Serves dinner" value="✅"></InfoLabel>
        )}

        {placeDetails.serves_lunch && (
          <InfoLabel name="Serves lunch" value="✅"></InfoLabel>
        )}

        {placeDetails.serves_vegetarian_food && (
          <InfoLabel name="Serves vegetarian food" value="✅"></InfoLabel>
        )}

        {placeDetails.serves_wine && (
          <InfoLabel name="Serves wine" value="✅"></InfoLabel>
        )}

        {placeDetails.takeout && (
          <InfoLabel name="Takeout" value="✅"></InfoLabel>
        )}
      </div>
    </div>
  );
};

export default PlacesDetailsInfo;

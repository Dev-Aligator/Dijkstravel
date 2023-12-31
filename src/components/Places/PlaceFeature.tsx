import {
  PeopleOutline,
  LocationOutline,
  HeartOutline,
  Star,
  StorefrontOutline,
  DocumentTextOutline,
} from "react-ionicons";
import ClipLoader from "react-spinners/ClipLoader";
import PulseLoader from "react-spinners/PulseLoader";
import { useEffect, useState, CSSProperties } from "react";
import { AxiosInstance } from "axios";
import { Pagination } from "@mui/material";
import {
  Place,
  PlaceDetails,
  Review,
  UserFeature,
} from "../Interface/InterfaceCollection";

interface PlaceFeatureProps {
  client: AxiosInstance;
  setOpenPlaceModal: React.Dispatch<React.SetStateAction<boolean>>;
  setPlaceDetails: React.Dispatch<
    React.SetStateAction<[Place | null, PlaceDetails | null, Review[], String]>
  >;
  userInfo: [String, UserFeature | null];
}

const override: CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: "9999",
  // opacity: "1",
};

const PlaceFeature = ({
  client,
  setOpenPlaceModal,
  setPlaceDetails,
  userInfo,
}: PlaceFeatureProps) => {
  const [places, setPlaces] = useState<Place[]>([]);
  let [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("");
  const [totalPage, setTotalPage] = useState(1);
  const [clickedDiv, setClickedDiv] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const handleChange = (event: any, value: number) => {
    setPageNumber(value);
    setPlaces([]);
    setLoading(true);
    console.log(event);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setPageNumber(1);
    const inputValue = e.target.keyword.value;
    setKeyword(inputValue);
    setPlaces([]);
    // You can perform further actions with the keyword here, such as making an API request.
  };

  // const [current_latitude, setCurrentLatitude] = useState(10.8856441);
  // const [current_longitude, setCurrentLongitude] = useState(106.7818433);

  const [current_latitude, setCurrentLatitude] = useState(
    userInfo[1]?.lastLatitude ? userInfo[1]?.lastLatitude : 10.8856441
  );
  const [current_longitude, setCurrentLongitude] = useState(
    userInfo[1]?.lastLongitude ? userInfo[1].lastLongitude : 106.7818433
  );

  useEffect(() => {
    // Use a flag to track whether the geolocation has been fetched already
    let geolocationFetched = false;

    if (!geolocationFetched) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setCurrentLatitude(position.coords.latitude);
        setCurrentLongitude(position.coords.longitude);
        // Set the flag to true to avoid fetching geolocation again
        geolocationFetched = true;
      });
    }
  }, []);
  // const baseUrl = "http://localhost:8000";
  // const baseUrl = "https://aligator.pythonanywhere.com";

  useEffect(() => {
    setPlaces([]);
    // Define the API URL
    const apiUrl = `/api/get/places/?page=${pageNumber}&keyword=${keyword}&location=${[
      current_latitude,
      current_longitude,
    ]}`;
    // const apiUrl = `http://localhost:8000/api/get/places/?page=${pageNumber}&keyword=${keyword}`;
    setLoading(true);
    //aligator.pythonanywhere.com
    // Fetch data from the Django API
    client
      .get(apiUrl)
      .then((response) => {
        // Set the fetched data in the state
        setPlaces(response.data["places"]);
        setTotalPage(response.data["total_filtered_places"]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [pageNumber, keyword, current_latitude]);

  const handleClick = (placeId: string, totalReviews: number | null) => {
    setClickedDiv(placeId);
    const apiUrl = `/api/get/place_details/?placeId=${placeId}`;
    client
      .get(apiUrl)
      .then((response) => {
        const placeDetailsData: PlaceDetails = response.data["details"];
        placeDetailsData.totalReviews = totalReviews;

        setPlaceDetails([
          response.data["place"],
          placeDetailsData,
          response.data["reviews"],
          response.data["openingHours"],
        ]);
        setOpenPlaceModal(true);
        setClickedDiv("");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleGoogleMapDirectionRedirect = (locationCoordinates: string) => {
    const locationCoordinatesJsonFormat = JSON.parse(locationCoordinates);
    const locationLatitude = locationCoordinatesJsonFormat["lat"];
    const locationLongitude = locationCoordinatesJsonFormat["lng"];
    // Simulate a mouse click:
    const DirecttionRedirectUrl = `https://www.google.com/maps?saddr=My+Location&daddr=${locationLatitude},${locationLongitude}`;
    return DirecttionRedirectUrl;
  };
  return (
    <section className="section featured-car place-component" id="featured-car">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="h2 section-title">Featured places</h2>
          <div className="centered-div search-form-div">
            <form onSubmit={handleSubmit} className="hero-form">
              <div className="input-wrapper">
                <label htmlFor="input-1" className="input-label">
                  Place, type, or brand
                </label>
                <input
                  type="text"
                  name="keyword"
                  id="input-1"
                  className="input-field"
                  placeholder="What place are you looking?"
                ></input>
              </div>

              <div className="input-wrapper">
                <label htmlFor="input-2" className="input-label">
                  Address
                </label>

                <input
                  type="text"
                  name="monthly-pay"
                  id="input-2"
                  className="input-field"
                  placeholder="Where ?"
                ></input>
              </div>

              {/* <div className="input-wrapper">
                <label htmlFor="input-3" className="input-label">
                  Make Year
                </label>

                <input
                  type="text"
                  name="year"
                  id="input-3"
                  className="input-field"
                  placeholder="Add a minimal make year"
                ></input>
              </div> */}

              <button type="submit" className="btn">
                Search
              </button>
            </form>
          </div>
          <a href="#" className="featured-car-link"></a>
        </div>
        <div className="centered-div loading-container">
          <ClipLoader
            color="#36d7b7"
            loading={loading}
            size={125}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>

        <ul className="featured-car-list">
          {places.map((place, index) => (
            <li key={place.googleMapId} id={String(index)}>
              <div
                className={`featured-car-card ${
                  clickedDiv === place.googleMapId ? "clicked" : ""
                }`}
                onClick={() => {
                  handleClick(place.googleMapId, place.totalRating);
                }}
              >
                {clickedDiv === place.googleMapId && (
                  <PulseLoader
                    color="#36d7b7"
                    loading={true}
                    cssOverride={override}
                    size={20}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                )}

                <figure className="card-banner">
                  <img
                    src={place.photo}
                    alt={place.name}
                    loading="lazy"
                    width="440"
                    height="300"
                    className="w-100"
                  ></img>
                </figure>

                <div className="card-content">
                  <div className="card-title-wrapper">
                    <h3 className="h3 card-title">
                      <a href="#">{place.name}</a>
                    </h3>

                    <data className="year" value={place.district}>
                      {place.district}
                    </data>
                  </div>

                  <ul className="card-list">
                    <li className="card-list-item">
                      <PeopleOutline
                        color="hsl(204, 91%, 53%)"
                        title={""}
                        height="20px"
                        width="20px"
                      ></PeopleOutline>

                      <span className="card-item-text">
                        {place.distance_to_user.toFixed(2)} km
                      </span>
                    </li>

                    <li className="card-list-item">
                      <LocationOutline
                        color="hsl(204, 91%, 53%)"
                        title={""}
                        height="20px"
                        width="20px"
                      ></LocationOutline>

                      <span className="card-item-text">{place.address}</span>
                    </li>

                    <li className="card-list-item">
                      <StorefrontOutline
                        color="hsl(204, 91%, 53%)"
                        title={""}
                        width="20px"
                        height="20px"
                      ></StorefrontOutline>
                      <span className="card-item-text">
                        {place.types
                          .replace("[", "") // Remove the leading square bracket
                          .replace("]", "") // Remove the trailing square bracket
                          .replace(/'/g, "") // Remove single quotes globally
                          .replace(/_/g, " ") // Replace underscores with spaces globally
                          .split(", ") // Split the remaining string by comma and space
                          .slice(0, 2) // Take the first two elements from the array
                          .join(", ")}{" "}
                        {/* Join the first two elements with a comma and space */}
                      </span>
                    </li>

                    <li className="card-list-item">
                      <DocumentTextOutline
                        color="hsl(204, 91%, 53%)"
                        title={""}
                        width="20px"
                        height="20px"
                      ></DocumentTextOutline>

                      <span className="card-item-text">
                        {place.totalRating} reviews
                      </span>
                    </li>
                  </ul>

                  <div className="card-price-wrapper">
                    <p className="card-price">
                      <strong>{place.rating}</strong>{" "}
                      <Star
                        color={"#f8e45c"}
                        title={""}
                        height="20px"
                        width="20px"
                      ></Star>
                    </p>

                    <button
                      className="btn fav-btn"
                      aria-label="Add to favourite list"
                    >
                      <HeartOutline
                        color="hsl(204, 91%, 53%)"
                        title={""}
                        width="20px"
                        height="20px"
                      ></HeartOutline>
                    </button>

                    <button
                      className="btn"
                      onClick={() => {
                        window.open(
                          handleGoogleMapDirectionRedirect(place.location),
                          "_blank"
                        );
                      }}
                    >
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="centered-div pagination">
          <Pagination
            count={Math.ceil(totalPage / 12)}
            onChange={handleChange}
            page={pageNumber}
          />
        </div>
      </div>
    </section>
  );
};

export default PlaceFeature;

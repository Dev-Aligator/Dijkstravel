import {
  PeopleOutline,
  LocationOutline,
  HeartOutline,
  Star,
  StorefrontOutline,
  DocumentTextOutline,
} from "react-ionicons";
import ClipLoader from "react-spinners/ClipLoader";
import { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "@mui/material";
interface Place {
  googleMapId: string;
  name: string;
  address: string;
  types: string;
  location: string;
  district: string;
  rating: number | null;
  totalRating: number | null;
  photo: string | undefined;
  distance_to_user: number;
}

const PlaceFeature = () => {
  const [places, setPlaces] = useState<Place[]>([]);
  let [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("");
  const [totalPage, setTotalPage] = useState(1);

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

  const [current_latitude, setCurrentLatitude] = useState(0);
  const [current_longitude, setCurrentLongitude] = useState(0);
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

  useEffect(() => {
    setPlaces([]);
    // Define the API URL
    // const baseUrl = "https://aligator.pythonanywhere.com"
    const baseUrl = "http://localhost:8000";
    const apiUrl = `${baseUrl}/api/get/places/?page=${pageNumber}&keyword=${keyword}&location=${[
      current_latitude,
      current_longitude,
    ]}`;
    // const apiUrl = `http://localhost:8000/api/get/places/?page=${pageNumber}&keyword=${keyword}`;
    setLoading(true);
    //aligator.pythonanywhere.com
    // Fetch data from the Django API
    http: axios
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

  return (
    <section className="section featured-car place-component" id="featured-car">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="h2 section-title">Featured cars</h2>
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

              <div className="input-wrapper">
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
              </div>

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
              <div className="featured-car-card">
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

                    <button className="btn">Explore</button>
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

import {
  ArrowForwardOutline,
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
}

const PlaceFeature = () => {
  const [places, setPlaces] = useState<Place[]>([]);
  let [loading, setLoading] = useState(true);

  const [pageNumber, setPageNumber] = useState(1);
  const handleChange = (event: any, value: number) => {
    setPageNumber(value);
    console.log(event);
  };
  useEffect(() => {
    // Define the API URL
    const apiUrl = `https://aligator.pythonanywhere.com/api/get/places/?page=${pageNumber}`;
    //aligator.pythonanywhere.com
    // Fetch data from the Django API
    http: axios
      .get(apiUrl)
      .then((response) => {
        // Set the fetched data in the state
        setPlaces(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [pageNumber]);
  console.log(places);

  return (
    <section className="section featured-car place-component" id="featured-car">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="h2 section-title">Featured cars</h2>

          <a href="#" className="featured-car-link">
            <span>View more</span>

            <ArrowForwardOutline
              color="hsl(204, 91%, 53%)"
              title={""}
              height="20px"
              width="20px"
            />
          </a>
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

                      <span className="card-item-text">{place.district}</span>
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
          <Pagination count={15540} onChange={handleChange} />
        </div>
      </div>
    </section>
  );
};

export default PlaceFeature;

import {
  ArrowForwardOutline,
  PeopleOutline,
  FlashOutline,
  SpeedometerOutline,
  HardwareChipOutline,
  HeartOutline,
} from "react-ionicons";
import { useEffect, useState } from "react";
import axios from "axios";

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

  useEffect(() => {
    // Define the API URL
    const apiUrl = "http://localhost:8000/api/get/places/";

    // Fetch data from the Django API
    axios
      .get(apiUrl)
      .then((response) => {
        // Set the fetched data in the state
        setPlaces(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(places);
  return (
    <section className="section featured-car" id="featured-car">
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

                      <span className="card-item-text">{place.location}</span>
                    </li>

                    <li className="card-list-item">
                      <FlashOutline
                        color="hsl(204, 91%, 53%)"
                        title={""}
                        height="20px"
                        width="20px"
                      ></FlashOutline>

                      <span className="card-item-text">{place.address}</span>
                    </li>

                    <li className="card-list-item">
                      <SpeedometerOutline
                        color="hsl(204, 91%, 53%)"
                        title={""}
                        width="20px"
                        height="20px"
                      ></SpeedometerOutline>
                      <span className="card-item-text">{place.types}</span>
                    </li>

                    <li className="card-list-item">
                      <HardwareChipOutline
                        color="hsl(204, 91%, 53%)"
                        title={""}
                        width="20px"
                        height="20px"
                      ></HardwareChipOutline>

                      <span className="card-item-text">
                        {place.totalRating}
                      </span>
                    </li>
                  </ul>

                  <div className="card-price-wrapper">
                    <p className="card-price">
                      <strong>{place.rating}</strong> Star
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

                    <button className="btn">Rent now</button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PlaceFeature;

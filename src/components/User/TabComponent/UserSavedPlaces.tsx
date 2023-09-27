import { AxiosInstance } from "axios";
import { useEffect, useState } from "react";
import { SavedPlace, Place } from "../../Interface/InterfaceCollection";
interface UserSavePlacesProps {
  client: AxiosInstance;
}
const UserSavedPlaces = ({ client }: UserSavePlacesProps) => {
  const [savedPlaces, setSavedPlaces] = useState<SavedPlace[]>([]);
  const [visibleCards, setVisibleCards] = useState(savedPlaces.map(() => true));

  useEffect(() => {
    const reuqestAction = "GetUserAllSavedPlaces";
    const apiUrl = `/api/get/save_place/?action=${reuqestAction}`;

    client
      .get(apiUrl)
      .then((response) => {
        const userSavedPlacesData: SavedPlace[] =
          response.data["user_saved_places"];
        const savedPlaces: Place[] = response.data["saved-places"];
        // Map the response data to the SavedPlace interface
        userSavedPlacesData.map((savedPlacesItem, index) => {
          savedPlacesItem.place = savedPlaces[index];
        });
        console.log(userSavedPlacesData);
        setSavedPlaces(userSavedPlacesData);
        setVisibleCards(userSavedPlacesData.map(() => true));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(visibleCards);
  const handleSavedPlaceRemove = (savedPlaceId: number) => {
    const reuqestAction = "RemoveSelectedPlaceFromUserSavedPlaces";
    const apiUrl = `/api/get/save_place/?action=${reuqestAction}&savedPlaceId=${savedPlaceId}`;

    client
      .get(apiUrl)
      .then(() => {
        const index = savedPlaces.findIndex(
          (place) => place.id === savedPlaceId
        );

        if (index !== -1) {
          // Create a copy of the visibleCards array and set the corresponding card to false (hide it)
          const updatedVisibleCards = [...visibleCards];
          updatedVisibleCards[index] = false;

          // Update the state to hide the card
          setVisibleCards(updatedVisibleCards);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className="popular__grid">
      {savedPlaces.map(
        (savedPlace, index) =>
          visibleCards[index] && (
            <div className="popular__card">
              <span
                className="close-button"
                onClick={() => {
                  handleSavedPlaceRemove(savedPlace.id);
                }}
              >
                <i className="fas fa-times"></i>
              </span>
              <img
                className="save-place-photo"
                src={savedPlace.place.photo}
                alt={savedPlace.place.name}
              />
              <div className="popular__content">
                <div className="popular__card__header">
                  <h4>{savedPlace.place.name}</h4>
                  <h4>{savedPlace.place.rating}</h4>
                </div>
                <div className="popular__card__body">
                  <p>{savedPlace.place.district}</p>
                  <button className="btn save-place-btn">Visit now</button>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default UserSavedPlaces;

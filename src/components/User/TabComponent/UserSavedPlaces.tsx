import { AxiosInstance } from "axios";
import { useEffect, useState } from "react";
import { SavedPlace, Place } from "../../Interface/InterfaceCollection";
interface UserSavePlacesProps {
  client: AxiosInstance;
}
const UserSavedPlaces = ({ client }: UserSavePlacesProps) => {
  const [savedPlaces, setSavedPlaces] = useState<SavedPlace[]>([]);
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
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div>
        {savedPlaces.map((savedPlace) => (
          <p>
            {savedPlace.place.name} + {savedPlace.saved_date}
          </p>
        ))}
      </div>
    </>
  );
};

export default UserSavedPlaces;

import { useState } from "react";
import "../../styles/UserTabContainer.css";
import { AxiosInstance } from "axios";
import UserSavedPlaces from "./TabComponent/UserSavedPlaces";

interface TabContainerProps {
  client: AxiosInstance;
}
const TabContainer = ({ client }: TabContainerProps) => {
  const [currentTab, setCurrentTab] = useState("saved-places");
  return (
    <div className="user-tab-container container">
      <div className="user-tab-tabs">
        <h3
          className={`tab-header ${
            currentTab == "saved-places" ? "user-tab-active" : ""
          }`}
          onClick={() => {
            setCurrentTab("saved-places");
          }}
        >
          Saved Place
        </h3>
        <h3
          className={`tab-header ${
            currentTab == "places-commented" ? "user-tab-active" : ""
          }`}
          onClick={() => {
            setCurrentTab("places-commented");
          }}
        >
          Comments
        </h3>
      </div>
      <div className="user-tab-tab-content">
        {currentTab == "saved-places" ? (
          <div className="user-tab-active">
            <UserSavedPlaces client={client}></UserSavedPlaces>
          </div>
        ) : (
          <div className="user-tab-active">
            <h4>Second Title</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Deleniti, fugiat ab? Accusamus sed a iusto? Placeat incidunt
              repudiandae vero magnam nihil tempore quasi earum illum totam aut
              delectus aliquam pariatur, iste, qui provident quo voluptatem
              neque facere id laudantium aliquid numquam nisi accusantium.
              Inventore reiciendis nulla, iste perferendis.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabContainer;

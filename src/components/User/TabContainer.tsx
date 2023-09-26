import { useState } from "react";
import "../../styles/UserTabContainer.css";
const TabContainer = () => {
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
          Tab 1
        </h3>
        <h3
          className={`tab-header ${
            currentTab == "places-commented" ? "user-tab-active" : ""
          }`}
          onClick={() => {
            setCurrentTab("places-commented");
          }}
        >
          Tab 2
        </h3>
      </div>
      <div className="user-tab-tab-content">
        {currentTab == "saved-places" ? (
          <div className="user-tab-active">
            <h4>First Title</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              explicabo cum dolores hic possimus aut corrupti quisquam aperiam
              quia veniam inventore officiis nam error sunt libero, commodi
              architecto reiciendis qui fuga, itaque delectus quidem sequi.
              Impedit natus culpa nihil aperiam adipisci aliquam error, suscipit
              odio? Error sed esse perspiciatis quasi velit, ratione odit
              architecto? Explicabo pariatur.
            </p>
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

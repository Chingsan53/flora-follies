import "./Garden.css";

import NotesList from "./NotesList";
import { useState } from "react";
import CareGuide from "../small-components/CareGuide";
import Health from "../small-components/Health";

import About from "../small-components/About";
const Garden = ({ item }) => {
  const [activeComponent, setActiveComponent] = useState("care");

  let ActiveComponent;

  switch (activeComponent) {
    case "care":
      ActiveComponent = CareGuide;
      break;
    case "health":
      ActiveComponent = Health;
      break;
    case "note":
      ActiveComponent = NotesList;
      break;
    case "about":
      ActiveComponent = About;
      break;
    default:
      ActiveComponent = CareGuide;
  }

  return (
    <div className="garden-container">
      <div className="garden-content">
        <img className="garden-img" src={item.image} alt="small-flower" />
        <h3>{item.name}</h3>
        <p>
          <strong>Age: </strong>2 days
        </p>
        <p>
          <strong>Planted Since: </strong>April 1, 2024
        </p>
        <p>
          <strong>Plant ID: </strong>#119919
        </p>
      </div>
      <div className="garden-care">
        <div className="garden-care-header">
          <div className="care-guide">
            <div
              className="button-1"
              onClick={() => setActiveComponent("care")}
            >
              Care
            </div>
          </div>
          <div className="health">
            <div
              className="button-1"
              onClick={() => setActiveComponent("health")}
            >
              Health
            </div>
          </div>
          <div className="note">
            <div
              className="button-1"
              onClick={() => setActiveComponent("note")}
            >
              Note
            </div>
          </div>
          <div className="about">
            <div
              className="button-1"
              onClick={() => setActiveComponent("about")}
            >
              About
            </div>
          </div>
        </div>
        <div className="garden-care-content">
          <ActiveComponent flowerData={item} />
        </div>
      </div>
    </div>
  );
};

export default Garden;

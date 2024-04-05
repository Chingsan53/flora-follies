import "./Garden.css";

import NotesList from "./NotesList";
import { useEffect, useState } from "react";
import CareGuide from "../small-components/CareGuide";
import Health from "../small-components/Health";
import About from "../small-components/About";
import { useFlowerData } from "./FlowerDataContext";

const Garden = ({ item }) => {
  const [activeComponent, setActiveComponent] = useState("care");
  const [plantingDate, setPlantingDate] = useState("");

  const [daysElapsed, setDaysElapsed] = useState(0);
  const [elapsedTime, setElapsedTime] = useState({ days: 0, hours: 0 });

  //use flowdata for remove the item
  const { removeFlower } = useFlowerData();

  //handle the remove
  const handleRemove = () => {
    removeFlower(item.id);
  };

  //generate the ID

  useEffect(() => {
    const currentDate = new Date();
    setPlantingDate(currentDate.toISOString());

    const updateDaysElapsed = () => {
      const now = new Date();
      const start = new Date(currentDate);
      const differenceInTime = now - start;
      const differentInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
      setDaysElapsed(differentInDays);
      const differenceInHours = Math.floor(
        (differenceInTime % (1000 * 3600 * 24)) / (1000 * 3600)
      );
      setElapsedTime({ days: differentInDays, hours: differenceInHours });
    };

    updateDaysElapsed();
    const interval = setInterval(updateDaysElapsed, 1000 * 3600 * 24);
    return () => clearInterval(interval);
  }, []);

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
          <strong>Age: </strong>
          {elapsedTime.days} day(s)
        </p>
        <div className="button-1" onClick={handleRemove}>
          Remove
        </div>

        {/* <p>
          <strong>Planted Since: </strong>
          {plantingDate.split("T")[0]}
        </p> */}
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

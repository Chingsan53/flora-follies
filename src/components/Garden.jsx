import "./Garden.css";
import { useFlowerData } from "./FlowerDataContext";
import NotesList from "./NotesList";

const Garden = () => {
  const { selectedFlowers } = useFlowerData();
  return (
    <div className="garden">
      <div className="garden-main">
        {selectedFlowers.length === 0 ? (
          <p>You have not planted any flower yet</p>
        ) : (
          selectedFlowers.map((item) => (
            <div className="garden-container">
              <div className="garden-content">
                <img
                  className="garden-img"
                  src={item.image}
                  alt="small-flower"
                />
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
                    <div className="button-1">Care</div>
                  </div>
                  <div className="health">
                    <div className="button-1">Health</div>
                  </div>
                  <div className="note">
                    <div className="button-1">Note</div>
                  </div>
                  <div className="about">
                    <div className="button-1">About</div>
                  </div>
                </div>
                <div className="garden-care-content">
                  <NotesList />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Garden;

import "./Planting.css";
import { useFlowerData } from "./FlowerDataContext";
const Planting = () => {
  const { selectedFlowers } = useFlowerData();
  return (
    <div className="garden">
      <div className="title">
        <h2>My Garden</h2>
      </div>
      <div className="flower-list">
        {selectedFlowers.length === 0 ? (
          <p>You have not planted any flower yet</p>
        ) : (
          selectedFlowers.map((item) => (
            <div className="flower-tracker">
              <div className="">
                <img
                  className="image-small"
                  src={item.image}
                  alt="small-flower"
                />
              </div>
              <div className="flower-name" key={item.id}>
                <h3>{item.name}</h3>
                <div className="tracker-info">
                  <p>{item.weather}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Planting;

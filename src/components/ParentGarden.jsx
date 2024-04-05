import Garden from "./Garden";
import { useFlowerData } from "./FlowerDataContext";

const ParentGarden = () => {
  const { selectedFlowers } = useFlowerData();
  return (
    <div className="garden">
      <h2>My Garden</h2>
      <div className="garden-main">
        {selectedFlowers.lenght === 0 ? (
          <h3>You have not planted any flower yet</h3>
        ) : (
          selectedFlowers.map((item) => <Garden key={item.id} item={item} />)
        )}
      </div>
    </div>
  );
};

export default ParentGarden;

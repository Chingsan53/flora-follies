import { useFlowerData } from "./FlowerDataContext";
const Planting = () => {
  const { selectedFlowers } = useFlowerData();
  return (
    <div>
      <h2>My Garden</h2>
      {selectedFlowers.length === 0 ? (
        <p>No flowers selected yet.</p>
      ) : (
        selectedFlowers.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Planting;

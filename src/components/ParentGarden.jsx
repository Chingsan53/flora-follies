import Garden from "./Garden";
import { useFlowerData } from "./FlowerDataContext";
import { useEffect, useState } from "react";

const ParentGarden = () => {
  const { selectedFlowers, setSelectedFlowers } = useFlowerData();

  useEffect(() => {
    // Load initial data from localStorage
    const storedData = localStorage.getItem("selectedFlowers");
    if (storedData) {
      setSelectedFlowers(JSON.parse(storedData));
    }
  }, [setSelectedFlowers]);

  useEffect(() => {
    // Update localStorage when selectedFlowers changes
    localStorage.setItem("selectedFlowers", JSON.stringify(selectedFlowers));
  }, [selectedFlowers]);

  return (
    <div className="garden">
      <h2>My Garden</h2>
      <div className="garden-main">
        {selectedFlowers.map((item) => (
          <Garden key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ParentGarden;

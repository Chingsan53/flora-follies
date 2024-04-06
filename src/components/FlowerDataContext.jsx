import { createContext, useContext, useEffect, useState } from "react";
export const FlowerDataContext = createContext({
  selectedFlowers: [],
  setSelectedFlowers: () => {},
  addFlower: () => {},
});
export const useFlowerData = () => {
  return useContext(FlowerDataContext);
};

export const FlowerDataProvider = ({ children }) => {
  const [selectedFlowers, setSelectedFlowers] = useState(() => {
    const storedData = localStorage.getItem("selectedFlowers");
    return storedData ? JSON.parse(storedData) : [];
  });

  const addFlower = (flower) => {
    setSelectedFlowers((prevFlowers) => [...prevFlowers, flower]);
  };

  //Function to remove the flower data
  const removeFlower = (flowerId) => {
    setSelectedFlowers((prevFlowers) => {
      const index = prevFlowers.findIndex((flower) => flower.id === flowerId);

      if (index === -1) {
        // if flower not found, return the original array
        return prevFlowers;
      }
      return [...prevFlowers.slice(0, index), ...prevFlowers.slice(index + 1)];
    });
  };

  useEffect(() => {
    localStorage.setItem("selectedFlowers", JSON.stringify(selectedFlowers));
  }, [selectedFlowers]);

  return (
    <FlowerDataContext.Provider
      value={{ selectedFlowers, setSelectedFlowers, addFlower, removeFlower }}
    >
      {children}
    </FlowerDataContext.Provider>
  );
};

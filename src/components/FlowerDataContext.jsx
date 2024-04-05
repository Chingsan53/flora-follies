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
    setSelectedFlowers((prevFlowers) =>
      prevFlowers.filter((flower) => flower.id !== flowerId)
    );
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

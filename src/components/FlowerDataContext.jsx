import { createContext, useContext, useState } from "react";
export const FlowerDataContext = createContext({
  selectedFlowers: [],
  addFlower: () => {},
});
export const useFlowerData = () => {
  return useContext(FlowerDataContext);
};

export const FlowerDataProvider = ({ children }) => {
  const [selectedFlowers, setSelectedFlowers] = useState([]);
  const addFlower = (flower) => {
    setSelectedFlowers((prevFlowers) => [...prevFlowers, flower]);
  };
  return (
    <FlowerDataContext.Provider value={{ selectedFlowers, addFlower }}>
      {children}
    </FlowerDataContext.Provider>
  );
};

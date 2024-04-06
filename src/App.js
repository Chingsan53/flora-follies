import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import Homepage from "./components/Homepage";
import ParentGarden from "./components/ParentGarden";
import Favorite from "./components/Favorite";
import Weather from "./components/Weather";
import { FlowerDataProvider } from "./components/FlowerDataContext";
import { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <FlowerDataProvider>
      <Routes>
        <Route
          path="/"
          element={
            <Navigation
              searchTerm={searchTerm}
              onSearchChange={handleSearchChange}
            />
          }
        >
          <Route index element={<Homepage />} />
          <Route path="home" element={<Homepage searchTerm={searchTerm} />} />
          <Route path="garden" element={<ParentGarden />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="weather" element={<Weather />} />
        </Route>
      </Routes>
    </FlowerDataProvider>
  );
};

export default App;

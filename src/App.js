import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import Homepage from "./components/Homepage";
import ParentGarden from "./components/ParentGarden";
import Favorite from "./components/Favorite";
import Weather from "./components/Weather";
import { FlowerDataProvider } from "./components/FlowerDataContext";

const App = () => {
  return (
    <FlowerDataProvider>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="garden" element={<ParentGarden />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="weather" element={<Weather />} />
        </Route>
      </Routes>
    </FlowerDataProvider>
  );
};

export default App;

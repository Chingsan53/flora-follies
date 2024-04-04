import "./Weather.css";
const Weather = () => {
  return (
    <div className="widget">
      <div className="left-panel panel">
        <div className="date">Wednesday, 03 April 2024</div>
        <div className="city">Phnom Penh</div>
        <div className="temp">40°</div>
      </div>
      <div className="right-panel panel">
        <img
          src="https://placehold.co/600x400.png"
          alt="weather"
          className="weather-img"
        />
      </div>
    </div>
  );
};

export default Weather;

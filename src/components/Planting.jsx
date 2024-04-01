import "./Planting.css";
const Planting = () => {
  const smallFlower = [
    {
      id: 1,
      name: "Anemone",
      smallImage: "./small-img/anemone.png",
    },
    {
      id: 2,
      name: "Crocus",
      smallImage: "./small-img/crocus.png",
    },
    {
      id: 3,
      name: "Sunflower",
      smallImage: "./small-img/sunflower.png",
    },
    {
      id: 4,
      name: "Tutulip",
      smallImage: "./small-img/tulip.png",
    },
    {
      id: 5,
      name: "Hyacinth",
      smallImage: "./small-img/hyacinth.png",
    },
  ];
  return (
    <div className="main">
      <div className="title">
        <h2>List of the flowers</h2>
      </div>
      <div className="big-container">
        {smallFlower.map((item) => (
          <div className="container">
            <div className="flower-list">
              <div className="flower-pic">
                <img
                  className="image-small"
                  src={item.smallImage}
                  alt="small-pic"
                />
              </div>
              <div className="flower-name">
                <h3>{item.name}</h3>
                <button>Instruction</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planting;

import "./SmallComponent.css";
const CareGuide = ({ flowerData }) => {
  return (
    <div>
      <h3>Care guide:</h3>
      <p>
        <strong>Soil: </strong> {flowerData.details.Soil}
      </p>
      <p>
        <strong>Watering: </strong>
        {flowerData.details.Watering}
      </p>
      <p>
        <strong>Fertilizing: </strong>
        {flowerData.details.Fertilizer}
      </p>
      <p>
        <strong>Winter Care: </strong>
        {flowerData.details.WinterCare}
      </p>
      <p>
        <strong>Pests and Disease: </strong>
        {flowerData.details.PestsDiseases}
      </p>
    </div>
  );
};

export default CareGuide;

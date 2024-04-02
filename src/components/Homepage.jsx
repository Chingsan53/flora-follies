import "./Homepage.css";
import { useState } from "react";
import Modal from "./Detail";
const Homepage = () => {
  const [activeFlower, setActiveFlower] = useState(null);
  const popupStyle = activeFlower ? { display: "block" } : { display: "none" };
  const flowers = [
    {
      id: 1,
      image: "./img/daffodil-1.webp",
      name: "Daffodil",
      category: "Parennial Flowering Plant",
      summary:
        "known for their bright yellow blooms, are a hallmark of spring. These perennial flowers, scientifically named Narcissus, are easy to grow and maintain.  ",
      details: {
        soilType: "Well-drained, moderately fertile soil",
        sunExposure: "Full sun to partial shade",
        wateringNeed:
          "Regular watering during the growing season, less in dormant period",
        bloomingPeriod: "Early to mid-spring",
        plantingInstructions:
          "Plant bulbs in autumn, about 2-4 inches deep, with the pointed end up, in groups of 5-10 bulbs for a natural look. Space bulbs about 3-6 inches apart.",
      },
      seasonalTips:
        "Plant bulbs in the fall, about 2 to 4 weeks before the ground freezes. Fertilize in early spring.",
      trivia:
        "Daffodils are a symbol of rebirth and new beginnings, often associated with spring.",
      funFact:
        "Daffodils are also known as Narcissus, named after the character in Greek mythology.",
      weather:
        "Prefers moderate climates; not suited for extreme cold or very hot weather",
      howToPlant:
        "<ul><li>Wait until the soil is 60 degrees Fahrenheit or colder. In the North this will be in September or October, in the South in October or November.</li><li>Pick a spot in your garden that has well-draining soil and gets full sun or partial shade.</li><li>Plant the daffodil bulbs about 3-6” deep and 4-5” apart, placing them in the ground with their pointy ends up.</li><li>Water well once and wait for spring</li><li>After the daffodils have bloomed don’t cut off the foliage. Leave it until it’s completely withered and yellow, then remove.</li></ul>",
    },
    {
      id: 2,
      image: "./img/crocus.webp",
      name: "Crocus",
      category: "",
      summary:
        "a symbol of cheerful springtime, is one of the first to bloom as winter ends. These small, cup-shaped perennials come in various colors, including purple, white, and yellow.",
      details: {
        soilType: "",
        sunExposure: "",
        wateringNeed: "",
        bloomingPeriod: "",
      },
      seasonalTips: "",
      trivia: "",
      funFact: "",
      weather: "",
    },
    {
      id: 3,
      image: "./img/tulip.webp",
      name: "Tutulip",
      category: "",
      summary:
        "renowned for their vibrant and varied colors, are classic symbols of spring. These bulbous perennials offer a range of hues, including red, pink, yellow, and purple.",
      details: {
        soilType: "",
        sunExposure: "",
        wateringNeed: "",
        bloomingPeriod: "",
      },
      seasonalTips: "",
      trivia: "",
      funFact: "",
      weather: "",
    },
    {
      id: 4,
      image: "./img/hyacinth.jpeg",
      name: "Hyacinth",
      category: "",
      summary:
        "cherished for their delightful fragrance and dense flower clusters. These spring-blooming bulbs display vivid colors, including blues, pinks, whites, and purples.",
      details: {
        soilType: "",
        sunExposure: "",
        wateringNeed: "",
        bloomingPeriod: "",
      },
      seasonalTips: "",
      trivia: "",
      funFact: "",
      weather: "",
    },
    {
      id: 5,
      image: "./img/primerose.webp",
      name: "Primrose",
      category: "",
      summary:
        "beloved for their early spring bloom, often appearing while winter still lingers. These low-growing plants produce vibrant flowers in various colors, including pink, yellow, red, purple, and blue. ",
      details: {
        soilType: "",
        sunExposure: "",
        wateringNeed: "",
        bloomingPeriod: "",
      },
      seasonalTips: "",
      trivia: "",
      funFact: "",
      weather: "",
    },
    {
      id: 6,
      image: "./img/snowdrop.webp",
      name: "Snowdrop",
      category: "",
      summary:
        "white flowers known for being among the first to emerge in late winter or early spring, often appearing while snow is still on the ground.",
      details: {
        soilType: "",
        sunExposure: "",
        wateringNeed: "",
        bloomingPeriod: "",
      },
      seasonalTips: "",
      trivia: "",
      funFact: "",
      weather: "",
    },
    {
      id: 7,
      image: "./img/iris.webp",
      name: "Iris",
      category: "",
      summary:
        "striking flowers known for their unique shape and vivid colors, ranging from deep purples and blues to yellows and whites. These perennials typically bloom in late spring to early summer.",
      details: {
        soilType: "",
        sunExposure: "",
        wateringNeed: "",
        bloomingPeriod: "",
      },
      seasonalTips: "",
      trivia: "",
      funFact: "",
      weather: "",
    },
    {
      id: 8,
      image: "./img/pansy.jpeg",
      name: "Pansy",
      category: "",
      summary:
        "popular for their charming, colorful flowers, which can display a wide range of hues including purple, blue, red, gold, and white, often with striking patterns.",
      details: {
        soilType: "",
        sunExposure: "",
        wateringNeed: "",
        bloomingPeriod: "",
      },
      seasonalTips: "",
      trivia: "",
      funFact: "",
      weather: "",
    },
    {
      id: 9,
      image: "./img/viola.webp",
      name: "Viola",
      category: "",
      summary:
        'also known as "heartsease," are small, resilient flowers, known for their ability to bloom in cool temperatures. They come in a variety of colors, often with two-tone patterns. ',
      details: {
        soilType: "",
        sunExposure: "",
        wateringNeed: "",
        bloomingPeriod: "",
      },
      seasonalTips: "",
      trivia: "",
      funFact: "",
      weather: "",
    },
    {
      id: 10,
      image: "./img/forsythia.jpeg",
      name: "Forsythia",
      category: "",
      summary:
        "often one of the first signs of spring, is known for its vibrant yellow blossoms that cover its branches before the leaves appear.",
      details: {
        soilType: "",
        sunExposure: "",
        wateringNeed: "",
        bloomingPeriod: "",
      },
      seasonalTips: "",
      trivia: "",
      funFact: "",
      weather: "",
    },
    {
      id: 11,
      image: "./img/lilac.jpg",
      name: "Lilac",
      category: "",
      summary:
        "renowned for their fragrant and lush panicles of flowers, usually in shades of purple, but also available in white and pink.",
      details: {
        soilType: "",
        sunExposure: "",
        wateringNeed: "",
        bloomingPeriod: "",
      },
      seasonalTips: "",
      trivia: "",
      funFact: "",
      weather: "",
    },
    {
      id: 12,
      image: "./img/cherry-blossom.webp",
      name: "Cherry Blossom",
      category: "",
      summary:
        "Cherry Blossoms, iconic for their delicate and picturesque beauty, are synonymous with spring. These flowers, ranging from white to pale pink, bloom in clusters on the branches of cherry trees.",
      details: {
        soilType: "",
        sunExposure: "",
        wateringNeed: "",
        bloomingPeriod: "",
      },
      seasonalTips: "",
      trivia: "",
      funFact: "",
      weather: "",
    },
    {
      id: 13,
      image: "./img/magnolia.jpeg",
      name: "Magnolia",
      category: "",
      summary:
        "known for their large and impressive blooms, are a standout feature of early spring. These flowers come in shades of white, pink, purple, and yellow, and are known for their rich fragrance.",
      details: {
        soilType: "",
        sunExposure: "",
        wateringNeed: "",
        bloomingPeriod: "",
      },
      seasonalTips: "",
      trivia: "",
      funFact: "",
      weather: "",
    },
    {
      id: 14,
      image: "./img/azalea.webp",
      name: "Azalea",
      category: "",
      summary:
        "known for their vibrant and showy flowers, blooming in shades of pink, red, purple, white, and orange. These flowering shrubs, part of the Rhododendron family, are a highlight of spring gardens.",
      details: {
        soilType: "",
        sunExposure: "",
        wateringNeed: "",
        bloomingPeriod: "",
      },
      seasonalTips: "",
      trivia: "",
      funFact: "",
      weather: "",
    },
    {
      id: 15,
      image: "./img/rhododendron.jpeg",
      name: "Rhododendron",
      category: "",
      summary:
        "Rhododendrons are known for their stunning, large blooms that appear in late spring. These evergreen shrubs produce flowers in a range of colors including pink, purple, red, white, and yellow. ",
      details: {
        soilType: "",
        sunExposure: "",
        wateringNeed: "",
        bloomingPeriod: "",
      },
      seasonalTips: "",
      trivia: "",
      funFact: "",
      weather: "",
    },
    {
      id: 16,
      image: "./img/anemone.jpeg",
      name: "Anemone",
      category: "",
      summary:
        "also known as windflowers, are celebrated for their delicate, often brightly colored flowers. These spring-blooming perennials come in various hues like pink, white, blue, and red.",
      details: {
        soilType: "",
        sunExposure: "",
        wateringNeed: "",
        bloomingPeriod: "",
      },
      seasonalTips: "",
      trivia: "",
      funFact: "",
      weather: "",
    },
    {
      id: 17,
      image: "./img/bluebell.jpeg",
      name: "Bluebell",
      category: "",
      summary:
        "enchanting flowers known for their vivid blue, bell-shaped blooms that form delicate clusters. They typically flower in late spring and are often found carpeting woodland floors, creating a stunning blue-purple 'sea'.",
      details: {
        soilType: "",
        sunExposure: "",
        wateringNeed: "",
        bloomingPeriod: "",
      },
      seasonalTips: "",
      trivia: "",
      funFact: "",
      weather: "",
    },
    {
      id: 18,
      image: "./img/ranunculus.jpeg",
      name: "Ranunculus",
      category: "",
      summary:
        "known for their lush, multi-layered petals and come in a variety of vibrant colors, including pink, red, orange, yellow, and white. These spring-blooming perennials are appreciated for their rose-like appearance and are often used in bouquets and floral arrangements. ",
      details: {
        soilType: "",
        sunExposure: "",
        wateringNeed: "",
        bloomingPeriod: "",
      },
      seasonalTips: "",
      trivia: "",
      funFact: "",
      weather: "",
    },
    {
      id: 19,
      image: "./img/peony.jpeg",
      name: "Peony",
      category: "",
      summary:
        "large, lush blooms and rich colors, ranging from deep pinks and reds to soft whites and yellows. Blooming in late spring to early summer, these perennials are a favorite in gardens and as cut flowers.",
      details: {
        soilType: "",
        sunExposure: "",
        wateringNeed: "",
        bloomingPeriod: "",
      },
      seasonalTips: "",
      trivia: "",
      funFact: "",
      weather: "",
    },
    {
      id: 20,
      image: "./img/allium.webp",
      name: "Allium",
      category: "",
      summary:
        "known for their striking globe-shaped flowers, bloom in late spring to early summer. These ornamental onions display clusters of small flowers in shades of purple, pink, white, and blue atop tall stems.",
      details: {
        soilType: "",
        sunExposure: "",
        wateringNeed: "",
        bloomingPeriod: "",
      },
      seasonalTips: "",
      trivia: "",
      funFact: "",
      weather: "",
    },
    {
      id: 21,
      image: "./img/forget-me-not.jpg",
      name: "Forget-me-not",
      category: "",
      summary:
        "charming small flowers known for their vivid blue color with yellow centers. These perennial plants bloom in spring and are often found in woodland settings and along stream banks.",
      details: {
        soilType: "",
        sunExposure: "",
        wateringNeed: "",
        bloomingPeriod: "",
      },
      seasonalTips: "",
      trivia: "",
      funFact: "",
      weather: "",
    },
    {
      id: 22,
      image: "./img/columbine.jpeg",
      name: "Columbine",
      category: "",
      summary:
        "known for their distinctive, bell-shaped flowers with spurred petals, blooming in various shades including purple, blue, pink, red, and white. These perennials flower in late spring to early summer and are popular for their delicate, fairy-like appearance.",
      details: {
        soilType: "",
        sunExposure: "",
        wateringNeed: "",
        bloomingPeriod: "",
      },
      seasonalTips: "",
      trivia: "",
      funFact: "",
      weather: "",
    },
    {
      id: 23,
      image: "./img/camellia.jpeg",
      name: "Camellia",
      category: "",
      summary:
        "known for their glossy, evergreen leaves and large, exquisite flowers that bloom in shades of red, pink, and white. These flowers appear in late winter to early spring, providing a splash of color in colder months.",
      details: {
        soilType: "",
        sunExposure: "",
        wateringNeed: "",
        bloomingPeriod: "",
      },
      seasonalTips: "",
      trivia: "",
      funFact: "",
      weather: "",
    },
    {
      id: 24,
      image: "./img/bleeding-heart.jpeg",
      name: "Bleeding Heart",
      category: "",
      summary:
        "known for their unique, heart-shaped flowers that dangle in rows from arching stems. Blooming in spring, these flowers are typically pink or white with a drop at the bottom, resembling a bleeding heart.",
      details: {
        soilType: "",
        sunExposure: "",
        wateringNeed: "",
        bloomingPeriod: "",
      },
      seasonalTips: "",
      trivia: "",
      funFact: "",
      weather: "",
    },
    {
      id: 25,
      image: "./img/poppy.webp",
      name: "Poppy",
      category: "",
      summary:
        "known for their vivid and often papery-textured flowers, blooming in a variety of colors like red, orange, pink, and white. These annuals or perennials are famous for their large, solitary blooms.",
      details: {
        soilType: "",
        sunExposure: "",
        wateringNeed: "",
        bloomingPeriod: "",
      },
      seasonalTips: "",
      trivia: "",
      funFact: "",
      weather: "",
    },
    {
      id: 26,
      image: "./img/fox-glove.jpeg",
      name: "Foxglove",
      category: "",
      summary:
        "tall spikes of tubular flowers, ranging from purple to white, bloom in early summer. Prefers moist, well-drained soil and partial shade. Symbolizes insincerity.",
      details: {
        soilType: "",
        sunExposure: "",
        wateringNeed: "",
        bloomingPeriod: "",
      },
      seasonalTips: "",
      trivia: "",
      funFact: "",
      weather: "",
    },
    {
      id: 27,
      image: "./img/hellebore.webp",
      name: "Hellebore",
      category: "",
      summary:
        "blooms in late winter to early spring with cup-shaped flowers in shades of white, green, pink, and purple. Prefers well-drained soil and partial shade. Symbolizes serenity.",
      details: {
        soilType: "",
        sunExposure: "",
        wateringNeed: "",
        bloomingPeriod: "",
      },
      seasonalTips: "",
      trivia: "",
      funFact: "",
      weather: "",
    },
    {
      id: 28,
      image: "./img/Snapdragon.webp",
      name: "Snapdragon",
      category: "",
      summary:
        "showcases vibrant, dragon-shaped flowers in summer. Thrives in full sun and well-drained soil. Symbolizes grace and strength.",
      details: {
        soilType: "",
        sunExposure: "",
        wateringNeed: "",
        bloomingPeriod: "",
      },
      seasonalTips: "",
      trivia: "",
      funFact: "",
      weather: "",
    },
    {
      id: 29,
      image: "./img/wallflower.jpeg",
      name: "Wallflower",
      category: "",
      summary:
        "offers clusters of fragrant flowers in spring. Loves sun and well-drained soil. Symbolizes fidelity.",
      details: {
        soilType: "",
        sunExposure: "",
        wateringNeed: "",
        bloomingPeriod: "",
      },
      seasonalTips: "",
      trivia: "",
      funFact: "",
      weather: "",
    },
    {
      id: 30,
      image: "./img/lungwort.jpeg",
      name: "Lungwort",
      category: "",
      summary:
        "known for spotted leaves and spring blooms in pink, blue, and white. Prefers shade and moist soil. Represents thoughtfulness.",
      details: {
        soilType: "",
        sunExposure: "",
        wateringNeed: "",
        bloomingPeriod: "",
      },
      seasonalTips: "",
      trivia: "",
      funFact: "",
      weather: "",
    },
  ];
  return (
    <div className="articles">
      {flowers.map((item) => (
        <article key={item.id}>
          <div className="article-wrapper">
            <figure>
              <img src={item.image} alt="flower-img" />
            </figure>
            <div className="article-body">
              <h2>{item.name}</h2>
              <p>
                <strong>{item.name}, </strong>
                {item.summary}
              </p>

              <div
                className="button-1"
                onClick={() => {
                  console.log("opening flower info: ", item.name);
                  setActiveFlower(item);
                }}
              >
                Plant Now
              </div>
            </div>
          </div>
        </article>
      ))}
      <div className="popup" style={popupStyle}>
        {activeFlower && (
          <Modal
            show={Boolean(activeFlower)}
            onClose={() => setActiveFlower(null)}
          >
            {/* <div
              dangerouslySetInnerHTML={{ __html: activeFlower.howToPlant }}
            /> */}
            <h2>{activeFlower.name}</h2>
            <img
              src={activeFlower.image}
              alt="small-img"
              className="popup-img"
            />
            <p>
              <strong>Weather: </strong>
              {activeFlower.weather}
            </p>
            <h3>How to Plant:</h3>
            <div
              dangerouslySetInnerHTML={{ __html: activeFlower.howToPlant }}
            />
            <div className="button-1">Start planting now</div>
          </Modal>
        )}
      </div>
    </div>
  );
};
export default Homepage;

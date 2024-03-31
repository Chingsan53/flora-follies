import './Homepage.css'
const Homepage = () => {

    const flowers = [
        {
            id: 1,
            image: "./img/daffodil-1.webp",
            name: "Daffodil",
            category: "Parennial Flowering Plant",
            summary: "known for their bright yellow blooms, are a hallmark of spring. These perennial flowers, scientifically named Narcissus, are easy to grow and maintain.  ",
            details: {
                soilType: "Well-drained, moderately fertile soil",
                sunExposure: "Full sun to partial shade",
                wateringNeed: "Regular watering during the growing season, less in dormant period",
                bloomingPeriod: "Early to mid-spring",
                plantingInstructions: "Plant bulbs in autumn, about 2-4 inches deep, with the pointed end up, in groups of 5-10 bulbs for a natural look. Space bulbs about 3-6 inches apart."
            },
            seasonalTips: "Plant bulbs in the fall, about 2 to 4 weeks before the ground freezes. Fertilize in early spring.",
    trivia: "Daffodils are a symbol of rebirth and new beginnings, often associated with spring.",
    funFact: "Daffodils are also known as Narcissus, named after the character in Greek mythology.",
    weather: "Prefers moderate climates; not suited for extreme cold or very hot weather",
    howToPlant: "<ul><li>Wait until the soil is 60 degrees Fahrenheit or colder. In the North this will be in September or October, in the South in October or November.</li><li>Pick a spot in your garden that has well-draining soil and gets full sun or partial shade.</li><li>Plant the daffodil bulbs about 3-6” deep and 4-5” apart, placing them in the ground with their pointy ends up.</li><li>Water well once and wait for spring</li><li>After the daffodils have bloomed don’t cut off the foliage. Leave it until it’s completely withered and yellow, then remove.</li></ul>",

        },
        {
            id: 2,
            image: "./img/crocus.webp",
            name: "Crocus",
            category: "",
            summary: "a symbol of cheerful springtime, is one of the first to bloom as winter ends. These small, cup-shaped perennials come in various colors, including purple, white, and yellow.",
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
            summary: "renowned for their vibrant and varied colors, are classic symbols of spring. These bulbous perennials offer a range of hues, including red, pink, yellow, and purple.",
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
            summary: "cherished for their delightful fragrance and dense flower clusters. These spring-blooming bulbs display vivid colors, including blues, pinks, whites, and purples.",
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
            summary: "beloved for their early spring bloom, often appearing while winter still lingers. These low-growing plants produce vibrant flowers in various colors, including pink, yellow, red, purple, and blue. ",
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
            summary: "white flowers known for being among the first to emerge in late winter or early spring, often appearing while snow is still on the ground.",
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
            image: "",
            name: "Anemone",
            category: "",
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
            image: "",
            name: "Bluebell",
            category: "",
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
            image: "",
            name: "Ranunculus",
            category: "",
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
            image: "",
            name: "Peony",
            category: "",
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
            image: "",
            name: "Allium",
            category: "",
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
            image: "",
            name: "Forget-me-not",
            category: "",
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
            image: "",
            name: "Columbine",
            category: "",
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
            image: "",
            name: "Camellia",
            category: "",
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
            image: "",
            name: "Bleeding Heart",
            category: "",
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
            image: "",
            name: "Poppy",
            category: "",
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
            image: "",
            name: "Foxglove",
            category: "",
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
            image: "",
            name: "Hellebore",
            category: "",
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
            image: "",
            name: "Snapdragon",
            category: "",
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
            image: "",
            name: "Wallflower",
            category: "",
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
            image: "",
            name: "Lungwort",
            category: "",
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

        }
    ]

    return <div className="articles">
        {flowers.map((item) => (
            <article key={item.id}>
                <div className="article-wrapper">
                    <figure>
                        <img src={item.image} alt="flower-img" />
                    </figure>
                    <div className="article-body">
                        <h2>{item.name}</h2>
                        <p><strong>{item.name}, </strong>{item.summary}</p>
                    </div>
                </div>
            </article>
        ))}
        
    </div>
}
export default Homepage;
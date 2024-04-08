import "./Homepage.css";
import { useFlowerData } from "./FlowerDataContext";
import { useState } from "react";
import Modal from "./Detail";

const Homepage = ({ searchTerm }) => {
  const [activeFlower, setActiveFlower] = useState(null);

  const popupStyle = activeFlower ? { display: "block" } : { display: "none" };
  const { addFlower } = useFlowerData();

  //using Ref to use function from PlantTracker
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const flowers = [
    {
      id: 1,
      image: "./img/daffodil-1.webp",
      name: "Daffodil",
      category: "Parennial Flowering Plant",
      summary:
        "known for their bright yellow blooms, are a hallmark of spring. These perennial flowers, scientifically named Narcissus, are easy to grow and maintain.  ",
      details: {
        Watering:
          "Water daffodils regularly during the spring growing season, especially during dry periods. Avoid overwatering, as this can lead to bulb rot.",
        Soil: "Prefer well-drained soil. If your soil is heavy clay, amend it with compost or sand to improve drainage.",
        Fertilizer:
          "You can fertilize daffodils in early spring with a balanced fertilizer.",
        WinterCare:
          "Daffodils are generally cold hardy. In colder climates, you can apply a layer of mulch around the base of the plants in fall to protect the bulbs from freezing temperatures.",
        PestsDiseases:
          "Daffodils are relatively pest and disease resistant. However, they can be susceptible to some problems, such as deer browsing and narcissus bulb fly.",
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
      link: "https://www.edenbrothers.com/products/crocus-bulbs-rainbow-mix",
    },
    {
      id: 2,
      image: "./img/crocus.webp",
      name: "Crocus",
      category: "",
      summary:
        "a symbol of cheerful springtime, is one of the first to bloom as winter ends. These small, cup-shaped perennials come in various colors, including purple, white, and yellow.",
      details: {
        Watering:
          "Water crocuses regularly during the spring fall when soil feels dry to the touch. Avoid overwatering, as this can lead to corm rot.",
        Soil: "Crocuses prefer well-drained soil with good organic matter. If your soil is heavy clay, amend it with compost or sand to improve drainage.",
        Fertilizer:
          "You can fertilize corocuses in early fall with a balanced fertilizer. Avoid over-fertilizing, as this can reduce flowering.",
        WinterCare:
          "Crocuses are generally cold-hardy. In colder climates, you apply a light layer of mulch around the planting area in fall to protect the corms from freezing temperatures.",
        PestsDiseases:
          "Crucuses are relatively pest and disease resistant. However, they can be susceptible to some problems, such as rodents and voles digging up the corms.",
      },
      seasonalTips:
        "Plant crocus bulbs in the fall for blooms the following spring. Deadhead spent flowers to encourage more blooms and prevent seed set. Once the foliage has died back, you can cut it back as well.",
      trivia:
        "The saffron crocus (Crocus sativus) is the source of the spice saffron, one of the most expensive spices in the world.",
      funFact:
        "Crocus flowers open their petals in sunshine and close them at night or in cloudy weather.",
      weather:
        "Crocuses are cold-hardy flowers and can tolerate frost and even some snow.",
      howToPlant:
        "<ul><li>Plant in fall when soil temperatures are 60°F or below, usually September-October in northern regions and October-November in southern regions.</li><li>Choose a sunny to partly shaded area with well-draining soil to avoid rotting.</li><li>Dig holes 2-4 inches deep and 2-4 inches apart. Use a trowel or bulb planter for ease.</li><li>Place each crocus corm in a hole with the pointed end facing upwards. This is the growing tip.</li><li>Cover with soil, water thoroughly, and optionally apply a light organic mulch for winter protection.</li><li>Leave the corms undisturbed during winter; they will sprout in early spring.</li><li>Don't cut the foliage after blooming; allow it to wither and recharge the corm for next season, then remove.</li></ul>",
    },
    {
      id: 3,
      image: "./img/tulip.webp",
      name: "Tulip",
      category: "",
      summary:
        "renowned for their vibrant and varied colors, are classic symbols of spring. These bulbous perennials offer a range of hues, including red, pink, yellow, and purple.",
      details: {
        Watering:
          "Water tulips regularly during spring when they are actively growing, especially during dry periods. Avoid overwatering, which can lead to bulb rot.",
        Soil: "Tulip prefer well-drained soil. If your soil is heavy clay, amend it with compost or sand to improve drainage.",
        Fertilizer:
          "You can fertilize tulips in early spring with a balanced fertilizer. Avoid fertilizing after flowering, as this can encourage excessive growth which can weaken the bulb.",
        WinterCare:
          "In colder climates, you can apply a light layer of mulch around the base of the plants in fall to protect the bulbs from freezing temperatures. However, remove mulch in late winter/early spring to allow shoots to emerge.",
        PestsDiseases:
          "Tulips are relatively pest and disease resistant. However, they can be susceptible to some problems like aphids, voles, and diseases.",
      },
      seasonalTips:
        "Plant bulbs in the fall, 4 to 8 inches deep, depending on the size of the bulb. Provide mulch for winter protection in colder areas.",
      trivia:
        "Tulips were once among the most expensive flowers, leading to the 'Tulip Mania' in the Netherlands during the 17th century.",
      funFact:
        "Tulips can continue to grow as much as an inch per day after being cut.",
      weather:
        "Prefers cooler climates and well-chilled winters to thrive and bloom.",
      howToPlant:
        "<ul><li>Select a planting site with good drainage and plenty of sunlight</li><li>In autumn, dig a hole about three times the bulb's height and plant the bulb with its pointed end up.</li><li>Space bulbs about 4-6 inches apart.</li><li>Cover with soil and water lightly.</li><li>Tulips need a cold dormancy period and will bloom in spring.</li></ul>",
    },
    {
      id: 4,
      image: "./img/hyacinth.jpeg",
      name: "Hyacinth",
      category: "",
      summary:
        "cherished for their delightful fragrance and dense flower clusters. These spring-blooming bulbs display vivid colors, including blues, pinks, whites, and purples.",
      details: {
        Watering:
          "Water regularly after planting, allowing the soil to dry slightly between waterings. As growth starts, increase watering frequency. Aim for deep waterings at the soil level, allowing execess to drain freely.",
        Soil: "Hyacinths thrive in well-drained, loose soil with good air circulation. Aim for a slightly acidic soil pH (around 6.0-6.5).",
        Fertilizer:
          "Give your hyacinths a single feeding in early spring with a balanced fertilizer formulated for bulbs. Avoid over-fertilizing, as this encourage foliage growth at the expense of flowers.",
        WinterCare:
          "Apply a layer of mulch (straw of leaves) around the base of the plants after the ground freezes to insulate the bulbs from harsh winter temperatures. Remove the mulch in late winter/early spring to allow new shoots to emerge.",
        PestsDiseases:
          "While generally pest-resistant, hyacinths can be bothered by aphids and slugs. Fungal diseases like Botrytis can cause brown spots and bulb rot.",
      },
      seasonalTips:
        "Plant hyacinth bulbs in fall (around October or November) for blooms the following spring. Deadhead spent flowers to encourage more blooms. After the foliage dies back, you can remove it.",
      trivia:
        "Hyacinths are native to the southwestern regions of Asia and the eastern Mediterranean.",
      funFact:
        "The name hyacinth comes from the Greek word 'hyakinthos,' which means 'dark blue flower'.",
      weather: "Prefers cool climates; not tolerant of extreme heat or cold",
      howToPlant:
        "<ul>\n  <li>Wait until fall when the soil temperature reaches 60 degrees Fahrenheit (or colder). In most regions, this occurs in October or November.</li>\n  <li>Choose a planting location in your garden that receives full sun to partial shade and has well-drained soil. Hyacinth bulbs will rot in soggy conditions.</li>\n  <li>Dig holes 6-8 inches deep and 6 inches apart. Use a trowel or bulb planter for ease.</li>\n  <li>Place each hyacinth bulb in a hole with the pointed end facing upwards. This is the growing tip.</li>\n  <li>Cover the bulbs with soil and water them thoroughly. You can then mulch the area with a light layer of organic matter, like shredded leaves or compost, for winter protection (optional).</li>\n  <li>Leave the bulbs undisturbed throughout winter. They will develop roots and emerge in early spring with their beautiful blooms.</li>\n</ul>",
    },
    {
      id: 5,
      image: "./img/primerose.webp",
      name: "Primrose",
      category: "",
      summary:
        "beloved for their early spring bloom, often appearing while winter still lingers. These low-growing plants produce vibrant flowers in various colors, including pink, yellow, red, purple, and blue. ",
      details: {
        Watering:
          "Water regularly to maintain consistent moisture, but avoid soggy conditions. Water deeply at the soil level, allowing excess to drain.",
        Soil: "Plant them in well-drained, moist soil rich in organic matter. Amend clay soil with compost or sand for better drainage.",
        Fertilizer:
          "A light feeding with a balanced fertilizer in spring and fall can be beneficial. Avoid overfertilizing.",
        WinterCare:
          "In colder climates, mulch lightly around the base of the plants in fall to protect the roots from freezing temperatures. Remove mulch in spring as new growth emerges.",
        PestsDiseases:
          "Primroses are relatively pest and disease resistant, but watch for aphids or fungal issues. Use organic controls like insecticidal soap or neem oil if necessary.",
      },
      seasonalTips:
        "Primroses are best divided and replanted in spring or fall. Deadhead spent flowers to encourage more blooms. Protect primroses from harsh winter winds with mulch or cold frames.",
      trivia:
        "Primroses are one of the first wildflowers to bloom in England, hence their association with spring.",
      funFact:
        "The Victorian language of flowers associated primroses with youth and innocence.",
      weather:
        "Thrive in cool, moist climates. Protect from extreme heat and harsh summer sun.",
      howToPlant:
        "<ul>\n  <li>Choose a location with partial shade to full shade. Primroses can tolerate some morning sun but prefer afternoon shade.</li>\n  <li>Prepare the soil by amending it with compost or other organic matter to improve drainage and fertility.</li>\n  <li>Dig holes slightly larger than the root ball of your primrose plant.</li>\n  <li>Plant your primrose, ensuring the crown (where the leaves meet the roots) sits at soil level.</li>\n  <li>Water the primrose thoroughly and keep the soil moist but not soggy throughout the growing season.</li>\n  <li>In colder climates, mulch around the base of the plant in fall to protect the roots from freezing temperatures.</li>\n</ul>",
    },
    {
      id: 6,
      image: "./img/snowdrop.webp",
      name: "Snowdrop",
      category: "",
      summary:
        "white flowers known for being among the first to emerge in late winter or early spring, often appearing while snow is still on the ground.",
      details: {
        Watering:
          "Water snowdrops regularly during spring when they're actively growing, especially during dry periods. Avoid overwatering. Once the foliage dies back in late spring or early summer, you can reduce watering.",
        Soil: "Snowdrops prefer well-drained, moist soil rich in organic matter. Amending heavy clay soil with compost or sand is beneficial.",
        Fertilizer:
          "A light application of a balanced fertilizer after flowering can be helpful. Avoid overfertilizing.",
        WinterCare:
          "Snowdrops are generally cold-hardy and require no special winter protection in most climates.",
        PestsDiseases: "Snowdrops are relatively pest and disease resistant.",
      },
      seasonalTips:
        "Plant snowdrop bulbs in fall (around October or November) for blooms the following spring. Deadhead spent flowers to encourage more blooms. After the foliage dies back, you can remove it.",
      trivia: "Snowdrops are poisonous if ingested and can irritate the skin.",
      funFact:
        "The drooping shape of the snowdrop flower is thought to help melt surrounding snow, allowing the plant to reach sunlight earlier in the season.",
      weather:
        "Thrive in cool, moist climates. Tolerate cold temperatures well but can be damaged by extreme heat.",
      howToPlant:
        "<ul>\n  <li>Plant snowdrop bulbs in fall when the soil temperature reaches around 50 degrees Fahrenheit. In most regions, this occurs in October or November.</li>\n  <li>Choose a location in your garden that receives partial shade to full shade and has well-drained soil.</li>\n  <li>Dig holes 2-3 inches deep and 3 inches apart. Use a trowel or bulb planter for ease.</li>\n  <li>Place each snowdrop bulb in a hole with the pointed end facing upwards. This is the growing tip.</li>\n  <li>Cover the bulbs with soil and water them thoroughly. You can then mulch the area with a light layer of organic matter, like shredded leaves or compost, for winter protection (optional).</li>\n  <li>Leave the bulbs undisturbed throughout winter. They will develop roots and emerge in late winter or early spring with their delicate white flowers.</li>\n</ul>",
    },
    {
      id: 7,
      image: "./img/iris.webp",
      name: "Iris",
      category: "",
      summary:
        "striking flowers known for their unique shape and vivid colors, ranging from deep purples and blues to yellows and whites. These perennials typically bloom in late spring to early summer.",
      details: {
        Watering:
          "Water irises regularly during the spring growing season, especially during dry periods. Avoid overwatering, which can lead to rhizome rot",
        Soil: "Irises favor well-drained soil with good air circulation. Amend heavy clay soil with compost or sand for better drainage. They prefer a slightly acidic to neutral soil pH (around 6.0-7.0). You can test your soil pH and adjust it with lime (raises pH) or sulfur (lowers pH) if necessary.",
        Fertilizer:
          "A light application of a balanced fertilizer in early spring can be beneficial. Avoid overfertilizing, as this can encourage excessive foliage growth at the expense of flowers.",
        WinterCare:
          "In colder climates, you can apply a light layer of mulch around the base of the plants in fall to protect the rhizomes from freezing temperatures. However, remove mulch in late winter/early spring to allow new growth to emerge.",
        PestsDiseases:
          "Irises are relatively pest and disease resistant. However, they can be susceptible to some problems like iris borers (insects) and fungal diseases like rust.",
      },
      seasonalTips:
        "Divide irises every 3-4 years to prevent overcrowding. Deadhead spent flowers to encourage more blooms and prevent seed formation. Cut back foliage in fall after it dies back.",
      trivia: "Irises are the birth flower for February.",
      funFact:
        "The iris flower's name comes from the Greek word 'iris,' meaning 'rainbow,' referencing the wide variety of colors they come in.",
      weather:
        "Prefer moderate climates with cool winters and warm summers. Not tolerant of extreme heat or cold.",
      howToPlant:
        "<ul>\n  <li>Choose a location in your garden that receives full sun and has well-drained soil. Irises won't tolerate soggy conditions.</li>\n  <li>Plant iris rhizomes (underground stems) in fall (around September or October) in most climates. In warmer regions, you can plant in spring.</li>\n  <li>Shallow planting is key! Bury the rhizomes just slightly below the soil surface, with the pointed ends facing upwards.</li>\n  <li>Water the irises thoroughly after planting and continue to water them regularly during the first growing season. Once established, they are relatively drought-tolerant.</li>\n</ul>",
    },
    {
      id: 8,
      image: "./img/pansy.jpeg",
      name: "Pansy",
      category: "",
      summary:
        "popular for their charming, colorful flowers, which can display a wide range of hues including purple, blue, red, gold, and white, often with striking patterns.",
      details: {
        Watering:
          "Water pansies regularly, especially during dry periods and hot weather. Aim to keep the soil consistently moist, but avoid soggy conditions.",
        Soil: "Pansies prefer well-drained, fertile soil rich in organic matter. Amend heavy clay soil with compost or sand for better drainage. Aim for a slightly acidic to neutral soil pH (around 6.0-7.0). You can test your soil pH and adjust it with lime (raises pH) or sulfur (lowers pH) if necessary.",
        Fertilizer:
          "A balanced fertilizer applied monthly during the growing season can encourage continuous blooming. Avoid overfertilizing, which can lead to more foliage and fewer flowers.",
        WinterCare:
          "Pansies are generally cold-hardy and can tolerate freezing temperatures. In very cold climates, you can apply a light layer of mulch around the base of the plants in fall for extra protection.",
        PestsDiseases:
          "Pansies are relatively pest and disease resistant. However, they can be susceptible to aphids, slugs, and fungal diseases like powdery mildew.",
      },
      seasonalTips:
        "Deadhead spent flowers to encourage more blooms. Apply a light layer of mulch in fall to protect plants from harsh winter conditions. You can sow seeds indoors in late summer for fall blooms or outdoors in early spring for spring blooms.",
      trivia:
        "Pansies are a type of viola and are known for their resemblance to butterfly wings.",
      funFact:
        "The pansy's name comes from the French word 'pensée,' meaning 'thought,' possibly due to the flower's resemblance to a thoughtful face.",
      weather:
        "Thrive in cool weather. Not tolerant of extreme heat or humidity.",
      howToPlant:
        "<ul>\n  <li>Choose a location in your garden that receives full sun to part shade. Pansies prefer morning sun and afternoon shade, especially in hot climates.</li>\n  <li>Prepare the soil by amending it with compost or other organic matter to improve drainage and fertility.</li>\n  <li>Sow pansy seeds directly outdoors in early spring or late summer, depending on your desired bloom time. Alternatively, you can start seeds indoors 6-8 weeks before the last frost.</li>\n  <li>Keep the soil moist but not soggy during germination. Thin seedlings once they reach a few inches tall to allow for proper growth.</li>\n  <li>For container planting, use a well-draining potting mix and water regularly.</li>\n</ul>",
    },
    {
      id: 9,
      image: "./img/viola.webp",
      name: "Viola",
      category: "",
      summary:
        'also known as "heartsease," are small, resilient flowers, known for their ability to bloom in cool temperatures. They come in a variety of colors, often with two-tone patterns. ',
      details: {
        Watering:
          "Water violas regularly, especially during dry periods and hot weather. Aim to keep the soil consistently moist, but avoid soggy conditions. Water deeply at the soil level, allowing excess water to drain freely.",
        Soil: "Violas prefer well-drained, fertile soil rich in organic matter. Amend heavy clay soil with compost or sand for better drainage. Aim for a slightly acidic to neutral soil pH (around 6.0-7.0). You can test your soil pH and adjust it with lime (raises pH) or sulfur (lowers pH) if necessary.",
        Fertilizer:
          "A balanced fertilizer applied monthly during the growing season can encourage continuous blooming. Avoid overfertilizing, which can lead to more foliage and fewer flowers.",
        WinterCare:
          "Violas are generally cold-hardy and can tolerate freezing temperatures. In very cold climates, you can apply a light layer of mulch around the base of the plants in fall for extra protection.",
        PestsDiseases:
          "Violas are relatively pest and disease resistant. However, they can be susceptible to aphids, slugs, and fungal diseases like powdery mildew.",
      },
      seasonalTips:
        "Deadhead spent flowers to encourage more blooms. Apply a light layer of mulch in fall to protect plants from harsh winter conditions. You can sow seeds indoors in late summer for fall blooms or outdoors in early spring for spring blooms.",
      trivia:
        "Violas are closely related to pansies and are sometimes considered interchangeable. Pansies are generally larger than violas.",
      funFact:
        "The name 'heartsease' likely originated from the flower's heart-shaped petals and its historic use in love potions.",
      weather:
        "Thrive in cool weather. Not tolerant of extreme heat or humidity.",
      howToPlant:
        "<ul>\n  <li>Choose a location in your garden that receives full sun to part shade. Violas prefer morning sun and afternoon shade, especially in hot climates.</li>\n  <li>Prepare the soil by amending it with compost or other organic matter to improve drainage and fertility.</li>\n  <li>Sow viola seeds directly outdoors in early spring or late summer, depending on your desired bloom time. Alternatively, you can start seeds indoors 6-8 weeks before the last frost.</li>\n  <li>Keep the soil moist but not soggy during germination. Thin seedlings once they reach a few inches tall to allow for proper growth.</li>\n  <li>For container planting, use a well-draining potting mix and water regularly.</li>\n</ul>",
    },
    {
      id: 10,
      image: "./img/forsythia.jpeg",
      name: "Forsythia",
      category: "",
      summary:
        "often one of the first signs of spring, is known for its vibrant yellow blossoms that cover its branches before the leaves appear.",
      details: {
        Watering:
          "Water them regularly during their first year, especially during dry periods. Aim for at least 2 inches of water per week. Once established, forsythia are fairly drought-tolerant. However, during extended dry spells, water them deeply to encourage healthy growth and flowering.",
        Soil: "They prefer well-drained soil, but can adapt to other types if amended for drainage. They even handle clay soil if you mix in compost or sand to improve drainage.",
        Fertilizer:
          "You can fertilize forsythia in early spring with a balanced fertilizer. Avoid over-fertilizing as this can reduce flowering.",
        WinterCare:
          "Forsythia are generally cold-hardy. In colder climates, you can apply a light layer of mulch around the base of the plant in fall to protect the roots from freezing temperatures. However, remove mulch in late winter/early spring to allow new shoots to emerge.",
        PestsDiseases:
          "Forsythia are relatively pest and disease resistant. However, they can be susceptible to some problems like: fungal diseases and rodents.",
      },
      seasonalTips:
        "Prune forsythia after flowering to encourage bushier growth and more blooms next spring. Remove dead or diseased branches any time. Apply a layer of mulch around the base of the plant in fall to retain moisture and protect roots during winter.",
      trivia:
        "Forsythia is named after William Forsyth, a Scottish botanist who worked in London in the late 18th and early 19th centuries.",
      funFact:
        "The vibrant yellow flowers of forsythia are believed to symbolize hope, renewal, and anticipation of spring.",
      weather:
        "Adapts to a range of climates but prefers cooler spring weather for optimal flowering. Tolerates winter cold reasonably well.",
      howToPlant:
        "<ul>\n  <li>Choose a planting location that receives full sun to part shade. Forsythias will flower best with at least 6 hours of daily sunlight.</li>\n  <li>Plant forsythia in the fall or early spring when the soil is workable. Amend the soil with compost or other organic matter to improve drainage and fertility.</li>\n  <li>Dig a hole large enough to accommodate the root ball of your forsythia shrub. Plant the forsythia so that the root crown (where the stems meet the roots) is at soil level.</li>\n  <li>Water the forsythia thoroughly after planting and continue to water it regularly, especially during the first year. Once established, forsythia is moderately drought tolerant.</li>\n  <li>Apply a layer of mulch around the base of the plant to retain moisture, suppress weeds, and regulate soil temperature.</li>\n</ul>",
    },
    {
      id: 11,
      image: "./img/lilac.jpg",
      name: "Lilac",
      category: "",
      summary:
        "renowned for their fragrant and lush panicles of flowers, usually in shades of purple, but also available in white and pink.",
      details: {
        Watering:
          "Water them regularly, especially during their first year, to establish a strong root system. Aim for deep watering that soaks the soil thoroughly. Lilacs are fairly drought-tolerant once established. ",
        Soil: "Lilacs thrive in fertile, humus-rich, well-drained soil with a neutral to slightly alkaline pH (around 7.0). You can test your soil pH with a home testing kit and adjust it with lime (to raise pH) or sulfur (to lower pH) if needed.",
        Fertilizer:
          "You can fertilize lilacs once a year in early spring with a balanced fertilizer formulated for flowering shrubs.",
        WinterCare:
          "Lilacs are generally cold-hardy. In colder climates (zones 3-4), you can apply a light layer of mulch (such as straw or leaves) around the base of the plant in fall after the ground freezes to insulate the roots.",
        PestsDiseases:
          "Lilacs are relatively pest and disease resistant. However, they can be susceptible to some problems like: diseases and insects.",
      },
      seasonalTips:
        "Prune lilacs soon after flowering is finished (late spring or early summer). This encourages bushier growth and more blooms for the following spring. Avoid pruning in fall or winter as this can damage new growth.",
      trivia:
        "Lilacs are native to Europe and Asia but are widely cultivated around the world. There are over 1,000 named varieties of lilacs, offering a wide range of flower colors, sizes, and bloom times.",
      funFact:
        "Lilacs are considered a symbol of spring, with their fragrant blooms signifying new beginnings and the arrival of warmer weather. Lilacs are also associated with emotions of love, happiness, and innocence.",
      weather:
        "Lilacs prefer cool to moderate climates. They require a period of cold weather (chilling hours) in winter to initiate flower bud development. However, they are generally adaptable to a range of weather conditions once established.",
      howToPlant:
        "<ul><li>Planting Time: Fall (ideally 6-8 weeks before the ground freezes) or very early spring is the best time to plant lilacs.</li><li>Location: Choose a location with full sun to part shade (at least 6 hours of daily sunlight) and well-drained soil with good air circulation.</li> <li>Soil: Lilacs prefer fertile, well-drained soil with a neutral to slightly alkaline pH (around 6.5-7.5). Amend heavy clay soil with compost or sand for better drainage.</li><li>Planting Depth: Dig a hole large enough for the root ball and plant the lilac so the root crown is slightly buried (1-2 inches below the soil surface). Planting too deep can prevent flowering.</li><li>Watering: Water thoroughly after planting and regularly during the first year. Established lilacs are moderately drought-tolerant but benefit from deep watering during dry periods, especially when forming buds and flowering.</li><li>Fertilizing: Fertilize once a year in early spring with a balanced fertilizer for flowering shrubs. Avoid over-fertilizing.</li></ul>",
    },
    {
      id: 12,
      image: "./img/cherry-blossom.webp",
      name: "Cherry Blossom",
      category: "",
      summary:
        "Cherry Blossoms, iconic for their delicate and picturesque beauty, are synonymous with spring. These flowers, ranging from white to pale pink, bloom in clusters on the branches of cherry trees.",
      details: {
        Watering:
          "Water them regularly, especially during their first few years, to establish a strong root system. Aim for deep watering that soaks the soil thoroughly. herry blossoms are fairly drought-tolerant once established. However, water them during dry periods to maintain good health and flowering.",
        Soil: "Amending clay soil with sand or compost can improve drainage. Aim for a slightly acidic soil pH (around 6.0-6.5). You can test your soil pH and adjust it with lime (raises pH) or sulfur (lowers pH) if necessary.",
        Fertilizer:
          "Fertilize cherry blossom trees once a year in early spring with a balanced fertilizer formulated for flowering trees. ",
        WinterCare:
          "Cherry blossoms are generally cold-hardy, but young trees might benefit from a light layer of mulch around the base in cold climates to protect the roots. Remove mulch in late winter/early spring.",
        PestsDiseases:
          "Cherry blossoms can be susceptible to some problems like: insects and fungal diseases.",
      },
      seasonalTips:
        "Cherry blossoms bloom in early spring, typically between March and May, depending on the variety and location. Exact bloom times can vary from year to year.",
      trivia:
        "Cherry blossoms are native to East Asia, but they are now cultivated and celebrated around the world.",
      funFact:
        "The delicate cherry blossoms only last for a short period, typically a week or two, making their fleeting beauty even more appreciated.",
      weather:
        "Cherry blossom trees prefer cool, temperate climates with four distinct seasons. They require a period of cold weather in winter (chilling hours) to initiate flower bud development.",
      howToPlant:
        "<ul><li>Planting Time: The best time to plant cherry blossom trees is in fall or early spring when the soil is workable.</li><li>Location: Choose a location that receives full sun to part shade. Cherry blossoms need at least 6 hours of sunlight daily to flower abundantly.</li><li>Soil: Well-drained, fertile soil with a slightly acidic to neutral pH (around 6.0-7.0) is ideal for cherry blossoms. Amend heavy clay soil with compost or other organic matter to improve drainage.</li><li>Planting Depth: Dig a hole large enough to accommodate the root ball of your cherry blossom tree. Plant the tree so that the root crown (where the stems meet the roots) is at soil level.</li><li>Watering: Water thoroughly after planting and continue to water regularly, especially during the first year. Once established, cherry blossoms are moderately drought tolerant but may benefit from deep watering during dry periods.</li><li>Fertilizing: You can fertilize cherry blossom trees once a year in early spring with a balanced fertilizer formulated for flowering trees. Avoid over-fertilizing as this can encourage excessive foliage growth at the expense of flowers.</li></ul>",
    },
    {
      id: 13,
      image: "./img/magnolia.jpeg",
      name: "Magnolia",
      category: "",
      summary:
        "known for their large and impressive blooms, are a standout feature of early spring. These flowers come in shades of white, pink, purple, and yellow, and are known for their rich fragrance.",
      details: {
        Watering:
          "Water them regularly during their first year or two, especially during dry periods. Water directly at the base of the tree, avoiding soaking the trunk excessively.",
        Soil: "Magnolias thrive in moist, well-drained, fertile soil with slightly acidic to neutral pH (around 6.0-7.0).",
        Fertilizer:
          "Magnolia varieties differ in their cold hardiness. Research the specific needs of your magnolia variety. In colder climates, for sensitive varieties, you can apply a light layer of mulch around the base of the tree in fall after the ground freezes to insulate the roots. ",
        WinterCare:
          "Lilacs are generally cold-hardy. In colder climates (zones 3-4), you can apply a light layer of mulch (such as straw or leaves) around the base of the plant in fall after the ground freezes to insulate the roots.",
        PestsDiseases:
          "Magnolias are relatively pest and disease resistant. However, they can be susceptible to some problems like: diseases and insects.",
      },
      seasonalTips:
        "Prune forsythia after flowering to encourage bushier growth and more blooms next spring. Remove dead or diseased branches any time. Apply a layer of mulch around the base of the plant in fall to retain moisture and protect roots during winter.",
      trivia:
        "Forsythia is named after William Forsyth, a Scottish botanist who worked in London in the late 18th and early 19th centuries.",
      funFact:
        "The vibrant yellow flowers of forsythia are believed to symbolize hope, renewal, and anticipation of spring.",
      weather:
        "Adapts to a range of climates but prefers cooler spring weather for optimal flowering. Tolerates winter cold reasonably well.",
      howToPlant: "",
    },
    {
      id: 14,
      image: "./img/azalea.webp",
      name: "Azalea",
      category: "",
      summary:
        "known for their vibrant and showy flowers, blooming in shades of pink, red, purple, white, and orange. These flowering shrubs, part of the Rhododendron family, are a highlight of spring gardens.",
      details: {
        Watering:
          "Water regularly, especially during dry periods and hot weather. Aim to keep the soil consistently moist, but avoid soggy conditions.",
        Soil: "Azaleas need moist, well-drained, acidic soil (around pH 6.0-7.0). Amend clay soil with compost or sand for drainage.",
        Fertilizer:
          "Apply a balanced fertilizer formulated for acid-loving plants in early spring. Avoid over-fertilizing, which can harm the plant.",
        WinterCare:
          "In colder climates, a light layer of mulch around the base of the plant in fall can protect the roots from freezing temperatures. Remove mulch in late winter/early spring.",
        PestsDiseases:
          "Azaleas are relatively pest and disease resistant. However, watch for aphids, lace bugs, and fungal diseases like powdery mildew. Use organic controls like insecticidal soap or neem oil if necessary.",
      },
      seasonalTips:
        "Azaleas have shallow roots and require consistent moisture, especially during hot or dry weather. Avoid letting the soil dry out completely. Water deeply to soak the root zone.",
      trivia:
        "Azaleas are members of the Rhododendron genus and come in a wide variety of evergreen and deciduous types.",
      funFact:
        "Azaleas are known for their delicate and papery flowers, which often come in clusters, creating a stunning visual display.",
      weather:
        "Azaleas prefer cool, moist climates with well-defined seasons. They thrive in areas with mild winters and cool to moderate summers.",
      howToPlant:
        "<ul><li>Planting Time: The best time to plant azaleas is in fall (ideally 6-8 weeks before the ground freezes) or early spring when the soil is cool and moist.</li><li>Location: Choose a location that receives dappled sunlight or part shade. Azaleas can tolerate some morning sun but generally prefer protection from the harsh afternoon sun, especially in hot climates.</li><li>Soil: Azaleas require moist, well-drained soil with acidic properties (pH around 4.5 to 6.0). If your soil is not acidic, you can amend it with peat moss, composted pine needles, or other organic matter to lower the pH.</li><li>Planting Depth: Dig a hole large enough to accommodate the root ball of your azalea. Plant the azalea so that the root crown (where the stems meet the roots) is slightly above the soil surface.</li><li>Watering: Water thoroughly after planting and continue to water regularly, especially during the first year. Established azaleas need consistent moisture, so water deeply during dry periods.</li><li>Fertilizing: You can fertilize azaleas in early spring with a fertilizer formulated for acid-loving plants. Avoid over-fertilizing as it can harm the plant.</li></ul>",
    },
    {
      id: 15,
      image: "./img/rhododendron.jpeg",
      name: "Rhododendron",
      category: "",
      summary:
        "Rhododendrons are known for their stunning, large blooms that appear in late spring. These evergreen shrubs produce flowers in a range of colors including pink, purple, red, white, and yellow. ",
      details: {
        Watering:
          "Water regularly, especially during dry periods and hot weather. Aim to keep the soil consistently moist, but avoid soggy conditions.",
        Soil: "Rhododendrons need moist, well-drained, acidic soil (around pH 6.0-7.0). Amend clay soil with compost or sand for drainage.",
        Fertilizer:
          "Apply a balanced fertilizer formulated for acid-loving plants in early spring. Avoid over-fertilizing, which can harm the plant.",
        WinterCare:
          "In colder climates, a light layer of mulch around the base of the plant in fall can protect the roots from freezing temperatures. Remove mulch in late winter/early spring.",
        PestsDiseases:
          "Rhododendrons are relatively pest and disease resistant. However, watch for aphids, lace bugs, and fungal diseases like powdery mildew. Use organic controls like insecticidal soap or neem oil if necessary.",
      },
      seasonalTips:
        "Rhododendrons require consistent moisture, especially during hot or dry weather. Water deeply to soak the root zone, avoiding soggy soil.",
      trivia:
        "Rhododendrons are a large genus of flowering plants with over 1,000 species.",
      funFact:
        "Rhododendrons are the national flower of Nepal and the state flower of Washington.",
      weather:
        "Rhododendrons prefer cool, moist climates with well-defined seasons. They thrive in areas with mild winters and cool to moderate summers.",
      howToPlant:
        "<ul><li>Planting Time: The best time to plant rhododendrons is in fall (ideally 6-8 weeks before the ground freezes) or early spring when the soil is cool and moist.</li><li>Location: Choose a location that receives dappled sunlight or part shade. Rhododendrons can tolerate some morning sun but generally prefer protection from the harsh afternoon sun, especially in hot climates.</li><li>Soil: Rhododendrons require moist, well-drained soil with acidic properties (pH around 4.5 to 6.0). If your soil is not acidic, you can amend it with peat moss, composted pine needles, or other organic matter to lower the pH.</li><li>Planting Depth: Dig a hole large enough to accommodate the root ball of your rhododendron. Plant the rhododendron so that the root crown (where the stems meet the roots) is slightly above the soil surface.</li><li>Watering: Water thoroughly after planting and continue to water regularly, especially during the first year. Established rhododendrons need consistent moisture, so water deeply during dry periods.</li><li>Fertilizing: You can fertilize rhododendrons in early spring with a fertilizer formulated for acid-loving plants. Avoid over-fertilizing as it can harm the plant.</li></ul>",
    },
    {
      id: 16,
      image: "./img/anemone.jpeg",
      name: "Anemone",
      category: "",
      summary:
        "also known as windflowers, are celebrated for their delicate, often brightly colored flowers. These spring-blooming perennials come in various hues like pink, white, blue, and red.",
      details: {
        Watering:
          "Water anemones regularly during spring when they're actively growing, especially during dry periods. Avoid overwatering, which can lead to bulb rot. Once the foliage dies back in late spring or early summer, you can stop watering.",
        Soil: "Anemones prefer well-drained soil. If your soil is heavy clay, amend it with compost or sand to improve drainage.",
        Fertilizer:
          "ou can fertilize anemones in early spring with a balanced fertilizer. Avoid fertilizing after flowering, as this can encourage excessive foliage growth which can weaken the bulb.",
        WinterCare:
          "In colder climates, a light layer of mulch around the base of the plant in fall can protect the roots from freezing temperatures. Remove mulch in late winter/early spring.",
        PestsDiseases: "N/A",
      },
      seasonalTips:
        "Choose a location that receives full sun to part shade. Anemones can tolerate some shade, but full sun exposure will encourage more blooms.",
      trivia: "",
      funFact: "",
      weather: "",
      howToPlant: "",
    },
    {
      id: 17,
      image: "./img/bluebell.jpeg",
      name: "Bluebell",
      category: "",
      summary:
        "enchanting flowers known for their vivid blue, bell-shaped blooms that form delicate clusters. They typically flower in late spring and are often found carpeting woodland floors, creating a stunning blue-purple 'sea'.",
      details: {
        Watering:
          "Water them regularly during their first spring after planting, especially during dry periods. Aim to keep the soil consistently moist but not soggy. Once established, bluebells are fairly drought-tolerant.",
        Soil: "Bluebells prefer moist, well-drained soil rich in organic matter. Amending heavy clay soil with compost or leaf mold is beneficial. Aim for a slightly acidic to slightly alkaline pH (around 6.0-7.0). ",
        Fertilizer: "Bluebells generally don't require fertilizer.",
        WinterCare:
          "Bluebells are generally cold-hardy. No special winter protection is needed in most climates.",
        PestsDiseases:
          "Bluebells are relatively pest and disease resistant. However, they can be susceptible to some problems like: bulb rot and slugs and snails.",
      },
      seasonalTips:
        "Enjoy the breathtaking bluebell displays in woodlands during late spring (typically April-May). The exact bloom time can vary depending on location and weather conditions.",
      trivia:
        'The scientific name for the common bluebell is Hyacinthoides non-scripta. The "non-scripta" part doesn\'t actually have a clear meaning when separated from its historical association with the Hyacinthus genus.',
      funFact:
        "The vibrant blue color of bluebells is caused by pigments called anthocyanins. These pigments also contribute to the blue color of blueberries and other fruits.",
      weather: "",
      howToPlant:
        "<li>Planting Time: The best time to plant bluebells is in fall (ideally 6-8 weeks before the ground freezes) or very early spring when the soil is cool and moist.</li><li>Location: Choose a location that receives dappled sunlight or part shade, similar to a woodland understory.</li><li>Soil: Bluebells prefer slightly acidic, well-drained soil rich in organic matter. Amend your soil with compost or leaf mold to improve drainage and fertility.</li><li>Planting Depth: Plant the bluebell bulbs 3-4 inches deep and space them about 4-6 inches apart.</li><li>Watering: Water the bulbs well after planting and keep the soil moist, especially during the first year. Once established, bluebells are fairly drought tolerant, but they may benefit from occasional deep watering during dry periods.</li><li>Patience: Bluebells may take a few years to establish and flower abundantly. Don't be discouraged if you don't see blooms immediately.</li><li>Naturalize: Let the bluebell foliage die back naturally each year. This allows the plants to replenish their energy stores for the following season.</li></ul>",
    },
    {
      id: 18,
      image: "./img/ranunculus.jpeg",
      name: "Ranunculus",
      category: "",
      summary:
        "known for their lush, multi-layered petals and come in a variety of vibrant colors, including pink, red, orange, yellow, and white. These spring-blooming perennials are appreciated for their rose-like appearance and are often used in bouquets and floral arrangements. ",
      details: {
        Watering:
          "Water them regularly, especially during their first growing season, to keep the soil consistently moist but not soggy. Once established, ranunculus are somewhat drought-tolerant.",
        Soil: "Ranunculus thrive in fertile, well-drained soil with good air circulation. If your soil is heavy clay, amend it with compost or sand to improve drainage. ",
        Fertilizer:
          "You can fertilize ranunculus once a month during the growing season with a balanced fertilizer diluted to half strength. ",
        WinterCare:
          "Ranunculus corms are not typically frost-hardy. In colder climates, you can dig up the corms after the foliage dies back in late summer/early fall, and store them in a cool, dry place over winter. ",
        PestsDiseases:
          "Ranunculus are relatively pest and disease resistant. However, they can be susceptible to problems like: alphids and fungal diseases.",
      },
      seasonalTips:
        "Plant ranunculus corms (tubers) in early spring after the danger of frost has passed. The soil temperature should be consistently cool (around 50-60°F).",
      trivia:
        'The name "Ranunculus" comes from the Latin word "rana," which means "frog." This is thought to be in reference to the habitat where some wild ranunculus species are found, in moist areas like swamps or near ponds.',
      funFact:
        "Ranunculus are considered the birth flower for January, symbolizing new beginnings and radiant charm.",
      weather:
        "Ranunculus thrive in cool, moist climates with mild winters and cool to moderate summers. They prefer temperatures around 50-70°F and don't tolerate excessive heat well.",
      howToPlant:
        "<ul><li>Planting Time: The best time to plant ranunculus is in early spring after the danger of frost has passed. The soil temperature should be consistently cool (around 50-60°F).</li><li>Location: Choose a location that receives full sun to part shade. Ranunculus prefer morning sun but can benefit from some afternoon shade in hot climates.</li><li>Soil: Ranunculus require well-drained soil with good moisture retention. Amend heavy clay soil with compost or sand to improve drainage. They prefer a slightly acidic to neutral pH (around 6.0-7.0).  You can test your soil pH with a home testing kit and adjust it with lime (raises pH) or sulfur (lowers pH) if necessary.</li><li>Planting Depth: Plant the ranunculus corms (claws facing upwards) 2-3 inches deep and space them 4-6 inches apart.</li><li>Watering: Water the corms well after planting and keep the soil consistently moist, especially during the germination and flowering period. Avoid overwatering, which can lead to rot.</li><li>Fertilizing: You can fertilize ranunculus once a month during the growing season with a balanced fertilizer diluted to half strength.</li></ul>",
    },
    {
      id: 19,
      image: "./img/peony.jpeg",
      name: "Peony",
      category: "",
      summary:
        "large, lush blooms and rich colors, ranging from deep pinks and reds to soft whites and yellows. Blooming in late spring to early summer, these perennials are a favorite in gardens and as cut flowers.",
      details: {
        Watering:
          "Water them regularly, especially during their first year, to establish a strong root system. Aim for deep watering that soaks the soil thoroughly. Once established, peonies are fairly drought-tolerant.",
        Soil: "Peonies thrive in fertile, well-drained soil with a slightly acidic to neutral pH (around 6.0-7.0). If your soil is heavy clay, amend it with compost or sand to improve drainage.",
        Fertilizer:
          "You can fertilize peonies once a year in early spring with a balanced fertilizer formulated for flowering shrubs.",
        WinterCare:
          "Peonies are generally cold-hardy. In colder climates, you can apply a light layer of mulch around the base of the plant in fall after the ground freezes to insulate the roots. ",
        PestsDiseases:
          "Peonies are relatively pest and disease resistant. However, they can be susceptible to some problems like: Botrytis and Aphids.",
      },
      seasonalTips:
        "Enjoy the breathtaking peony blooms in late spring or early summer. The exact bloom time can vary depending on the variety and weather conditions.",
      trivia:
        "Peonies are native to Asia, Europe, and western North America. They have been cultivated in China for over 2,000 years and are considered a symbol of wealth, honor, and beauty.",
      funFact:
        "The peony is the 12th wedding anniversary flower, symbolizing happy marriage and a prosperous life together.",
      weather:
        "Peonies prefer cool, temperate climates with well-defined seasons. They thrive in areas with mild winters and cool to moderate summers. Peonies require a period of cold weather to initiate flower bud development.",
      howToPlant:
        '<ul><li>Planting Time: The best time to plant peonies is in fall (ideally 6-8 weeks before the ground freezes). Planting at this time allows the roots to establish before winter.</li><li>Location: Choose a location that receives full sun to part shade. Peonies need at least 6 hours of sunlight daily to flower optimally.</li><li>Soil: Peonies require well-drained soil with good air circulation. Amend heavy clay soil with compost or other organic matter to improve drainage. They prefer a slightly acidic to neutral pH (around 6.0-7.0). You can test your soil pH with a home testing kit and adjust it with lime (raises pH) or sulfur (lowers pH) if necessary.</li><li>Planting Depth: Dig a hole large enough to accommodate the peony root system. Plant the peony roots with the "eyes" (buds) facing upwards, 1-2 inches below the soil surface. Avoid planting them too deep, which can hinder flowering.</li><li>Watering: Water the peonies well after planting and keep the soil consistently moist, especially during the first year as they establish. Water deeply during dry periods throughout the growing season.</li><li>Fertilizing: You can fertilize peonies in early spring with a balanced fertilizer diluted to half strength. Avoid over-fertilizing as it can reduce flowering.</li></ul>',
    },
    {
      id: 20,
      image: "./img/allium.webp",
      name: "Allium",
      category: "",
      summary:
        "known for their striking globe-shaped flowers, bloom in late spring to early summer. These ornamental onions display clusters of small flowers in shades of purple, pink, white, and blue atop tall stems.",
      details: {
        Watering:
          "Water them regularly, especially during their first spring after planting, to establish a strong root system. Aim for deep watering that soaks the soil thoroughly. Alliums are fairly drought-tolerant once established.",
        Soil: "Alliums do best in fertile, well-drained soil with a neutral to slightly alkaline pH (around 6.5-7.5).",
        Fertilizer:
          "You can fertilize alliums once a year in early spring with a balanced fertilizer formulated for flowering bulbs. ",
        WinterCare:
          "Most allium varieties are cold-hardy. In colder climates, you can apply a light layer of mulch around the base of the plant in fall after the ground freezes to insulate the bulbs.",
        PestsDiseases:
          "Alliums are generally pest and disease resistant. However, they can be susceptible to some problems like: Bulb rot and Alliums attract few pests.",
      },
      seasonalTips:
        "Plant allium bulbs in fall for late spring or early summer blooms. Enjoy the variety of shapes, sizes, and colors of allium flowers as they add interest to your garden beds and borders.",
      trivia:
        'The name "Allium" comes from the Latin word "alligare," which means "to bind or to tie together." This is thought to be a reference to the way that the individual florets cluster together in a spherical head in many allium varieties.',
      funFact:
        "Some allium varieties, like chives and garlic chives, are not only ornamental but also edible! The flowers of some varieties are even enjoyed pickled or candied.",
      weather:
        "Alliums generally prefer cool to moderate climates with well-defined seasons. They are tolerant of a wide range of temperatures but prefer full sun for optimal growth and flowering.",
    },
    {
      id: 21,
      image: "./img/forget-me-not.jpg",
      name: "Forget-me-not",
      category: "",
      summary:
        "charming small flowers known for their vivid blue color with yellow centers. These perennial plants bloom in spring and are often found in woodland settings and along stream banks.",
      details: {
        Watering:
          "Forget-me-nots prefer consistently moist soil. Water them regularly, especially during dry periods and hot weather. Aim to keep the soil damp but not soggy.",
        Soil: "Forget-me-nots do best in fertile, moist but well-drained soil with a neutral to slightly acidic pH (around 6.0-7.0).",
        Fertilizer:
          "You can fertilize forget-me-nots once a month during the growing season with a balanced fertilizer diluted to half strength.",
        WinterCare:
          "Forget-me-nots are generally biennials, meaning they complete their life cycle in two years. In colder climates, they may reseed themselves if the seeds experience a cold spell. You can also collect seeds from spent flowers in summer and sow them in fall for new plants the following spring.",
        PestsDiseases:
          "Forget-me-nots are relatively pest and disease resistant. However, they can be susceptible to some problems like: Snails and Powdery mildew.",
      },
      seasonalTips:
        "Enjoy the vibrant blue blooms of forget-me-nots in late spring or early summer (typically April-May in many regions). The exact bloom time can vary depending on location and weather conditions.",
      trivia:
        "There are over 50 species of forget-me-nots, with flower colors ranging from the classic blue to pink, white, and even yellow. Some varieties are evergreen, while others are biennial or short-lived perennials.",
      funFact:
        "Forget-me-nots are the national flower of Germany and Romania. They are also associated with memory and remembrance on Mother's Day in some countries.",
      weather:
        "Forget-me-nots prefer cool, moist climates with mild winters and cool to moderate summers. They thrive in areas with partial shade to full sun and consistent moisture.",
      howToPlant:
        "<ul><li>Planting Time: You can sow forget-me-not seeds directly outdoors in late summer or early fall for blooms the following spring. Alternatively, sow seeds indoors in containers in late summer/early fall and transplant seedlings outdoors in spring.</li><li>Location: Choose a location that receives partial shade to full sun. Forget-me-nots will tolerate full sun as long as the soil is kept consistently moist.</li><li>Soil: Forget-me-nots prefer moist, well-drained soil rich in organic matter. Amend heavy clay soil with compost or other organic matter to improve drainage and moisture retention.</li><li>Planting Depth: Scatter forget-me-not seeds lightly on the surface of the soil and gently press them in. You can also sow seeds 1/4 inch deep in rows spaced 6-8 inches apart.</li><li>Watering: Keep the soil consistently moist, especially during germination and establishment. Water regularly throughout the growing season, especially during dry periods.</li><li>Deadheading: Deadheading spent flowers regularly can encourage continued blooming throughout the season.</li></ul>",
    },
    {
      id: 22,
      image: "./img/columbine.jpeg",
      name: "Columbine",
      category: "",
      summary:
        "known for their distinctive, bell-shaped flowers with spurred petals, blooming in various shades including purple, blue, pink, red, and white. These perennials flower in late spring to early summer and are popular for their delicate, fairy-like appearance.",
      details: {
        Watering:
          "Water them regularly, especially during their first year, to establish a strong root system. Aim for deep watering that soaks the soil thoroughly.",
        Soil: "Columbines thrive in fertile, well-drained soil with a neutral to slightly acidic pH (around 6.0-7.0).",
        Fertilizer:
          "You can fertilize columbines once a year in early spring with a balanced fertilizer formulated for flowering perennials. ",
        WinterCare:
          "Columbines are generally cold-hardy. In colder climates, you can apply a light layer of mulch around the base of the plant in fall after the ground freezes to insulate the roots.",
        PestsDiseases:
          "Columbines are relatively pest and disease resistant. However, they can be susceptible to some problems like: Alpids and fungal diseases.",
      },
      seasonalTips:
        "Enjoy the delightful blooms of columbine in late spring and early summer (typically May-June in many regions). The exact bloom time can vary depending on location, variety, and weather conditions.",
      trivia:
        'The name "Columbine" comes from the Latin word "columba," meaning "dove." This is thought to be a reference to the shape of the flower\'s hollow petals, which resemble the head of a dove.',
      funFact:
        "Columbine are known to attract hummingbirds with their nectar-rich flowers. They are also a favorite among butterfly gardeners.",
      weather:
        "Columbine prefer cool, moist climates with mild to cool summers. They thrive in areas with partial shade to full sun, with some afternoon shade beneficial in hot climates.  They appreciate consistent moisture throughout the growing season.",
      howToPlant:
        "CAUTION: These information on how to plant this flower is not included since it is related to Columbine High School Massacre",
    },
    {
      id: 23,
      image: "./img/camellia.jpeg",
      name: "Camellia",
      category: "",
      summary:
        "known for their glossy, evergreen leaves and large, exquisite flowers that bloom in shades of red, pink, and white. These flowers appear in late winter to early spring, providing a splash of color in colder months.",
      details: {
        Watering:
          "Water regularly, especially during dry periods and hot weather. Aim to keep the soil consistently moist, but avoid soggy conditions.",
        Soil: "Camellias need moist, well-drained, acidic soil (around pH 6.0-7.0). Amend clay soil with compost or sand for drainage.",
        Fertilizer:
          "Apply a balanced fertilizer formulated for acid-loving plants in early spring. Avoid over-fertilizing, which can harm the plant.",
        WinterCare:
          "In colder climates, a light layer of mulch around the base of the plant in fall can protect the roots from freezing temperatures.",
        PestsDiseases:
          "Camellias are relatively pest and disease resistant. However, watch for aphids, lace bugs, and fungal diseases like powdery mildew.",
      },
      seasonalTips:
        "Fall (depending on variety): Enjoy the breathtaking blooms of fall-blooming camellia varieties from late fall to winter (typically November-February in many regions). Protect flower buds from harsh winter winds or freezes if necessary.",
      trivia:
        "Camellias are native to East Asia, but they have been cultivated in China and Japan for centuries. They are considered symbols of longevity, elegance, and perfection in some cultures.",
      funFact: "The camellia flower is the official state flower of Alabama.",
      weather:
        "Camellias prefer warm, temperate climates with mild winters and cool to moderate summers. They thrive in areas with well-drained, acidic soil and consistent moisture.",
      howToPlant:
        "<ul><li>Planting Time: The best time to plant camellias is in fall or early spring, when the temperatures are cool and the soil is moist.</li><li>Location: Choose a location that receives dappled sunlight or morning sun with some afternoon shade, especially in hot climates. Camellias need protection from strong winds.</li><li>Soil: Camellias require well-drained, acidic soil rich in organic matter. Amend heavy clay soil with compost or other organic matter to improve drainage and lower the pH. You can test your soil pH with a home testing kit and adjust it with sulfur if necessary to achieve a pH of around 5.5 to 6.5.</li><li>Planting Depth: Dig a hole large enough to accommodate the root ball of the camellia. Plant the shrub with the root ball slightly above the surrounding soil level. Avoid burying the stem.</li><li>Watering: Water the camellia thoroughly after planting and keep the soil consistently moist, especially during the first year as it establishes. Water deeply during dry periods throughout the growing season.</li><li>Mulching: Apply a layer of mulch around the base of the camellia plant to help retain moisture, regulate soil temperature, and suppress weeds.</li><li>Fertilizing: You can fertilize camellias in early spring with a fertilizer formulated for acid-loving plants. Avoid over-fertilizing as it can harm the plant.</li></ul>",
    },
    {
      id: 24,
      image: "./img/bleeding-heart.jpeg",
      name: "Bleeding Heart",
      category: "",
      summary:
        "known for their unique, heart-shaped flowers that dangle in rows from arching stems. Blooming in spring, these flowers are typically pink or white with a drop at the bottom, resembling a bleeding heart.",
      details: {
        Watering:
          "Water them regularly during their first spring or summer after planting, especially during dry periods. Aim to keep the soil consistently moist but not soggy.",
        Soil: "Bleeding hearts prefer fertile, well-drained soil rich in organic matter with a slightly acidic to neutral pH (around 6.0-7.0).",
        Fertilizer:
          "You can fertilize bleeding hearts once a year in early spring with a balanced fertilizer diluted to half strength. ",
        WinterCare:
          "Bleeding hearts are generally cold-hardy. In colder climates, you can apply a light layer of mulch around the base of the plant in fall after the ground freezes to insulate the roots.",
        PestsDiseases:
          "Bleeding hearts are relatively pest and disease resistant. However, they can be susceptible to some problems like: Botrytis and snails.",
      },
      seasonalTips:
        "Enjoy the breathtaking blooms of bleeding hearts in all their glory. Deadheading spent flowers can encourage continued blooming throughout the season.",
      trivia:
        'The name "bleeding heart" is a fitting description for the flower\'s unique heart-shaped appearance, resembling a drop of blood. Some cultures associate the flower with love and passion.',
      funFact:
        "Bleeding hearts are not only beautiful but also provide a nectar source for hummingbirds and butterflies, attracting them to your garden.",
      weather:
        "Bleeding hearts prefer cool, moist climates with mild winters and cool to moderate summers. They struggle in excessively hot and humid environments.  They appreciate consistent moisture throughout the growing season and benefit from some afternoon shade in hot climates.",
      howToPlant:
        '<ul><li>Planting Time: The best time to plant bleeding hearts is in fall, ideally 6-8 weeks before the ground freezes. Planting at this time allows the roots to establish before winter.</li><li>Location: Choose a location that receives partial shade to full sun in the morning, with some afternoon shade in hot climates.  They need protection from strong winds.</li><li>Soil: Bleeding hearts require well-drained soil rich in organic matter. Amend heavy clay soil with compost or other organic matter to improve drainage.</li><li>Planting Depth: Plant the bleeding heart tubers (corms) with the "eyes" (buds) facing upwards, 2-3 inches deep and spaced 4-6 inches apart.</li><li>Watering: Water the tubers well after planting and keep the soil consistently moist, especially during the first year as they establish.</li></ul>',
    },
    {
      id: 25,
      image: "./img/poppy.webp",
      name: "Poppy",
      category: "",
      summary:
        "known for their vivid and often papery-textured flowers, blooming in a variety of colors like red, orange, pink, and white. These annuals or perennials are famous for their large, solitary blooms.",
      details: {
        Watering:
          "Water regularly during their first growing season, especially during dry periods. Established plants are drought-tolerant but appreciate occasional deep watering during hot weather.",
        Soil: "They prefer fertile, well-drained soil with a neutral to slightly alkaline pH (around 6.5-7.5). Amend heavy clay soil with compost or sand to improve drainage.",
        Fertilizer:
          "Apply a balanced fertilizer once a year in early spring. Avoid over-fertilizing as this can reduce flowering.",
        WinterCare:
          "Oriental poppies are cold-hardy. They don't require any special winter protection.",
        PestsDiseases:
          "Relatively pest and disease resistant. Watch for aphids and fungal diseases like powdery mildew. Use organic controls like insecticidal soap or neem oil if necessary.",
      },
      seasonalTips:
        "Sow poppy seeds directly outdoors in late winter or early spring in regions with mild winters. Alternatively, sow seeds indoors 6-8 weeks before the last frost and transplant seedlings outdoors in spring after the danger of frost has passed.",
      trivia:
        "The poppy flower is a symbol of remembrance on Armistice Day, observed on November 11th in some countries, to honor those who served and died in war.",
      funFact:
        "Poppies are not only beautiful but also attract beneficial insects to your garden, such as ladybugs and hoverflies, which can help control other insects.",
      weather:
        "Poppies prefer cool to moderate climates with well-drained soil. They thrive in full sun locations and appreciate moderate watering throughout the growing season.",
      howToPlant:
        "<ul><li>Planting Time: The best time to plant poppy seeds depends on your climate. In regions with mild winters, you can sow seeds in late winter or early spring. In colder climates, sow seeds indoors 6-8 weeks before the last frost and transplant seedlings outdoors in spring.</li><li>Location: Choose a location that receives full sun. Poppies will not flower well in shady locations.</li><li>Soil: Poppies prefer well-drained soil on the drier side. Amend heavy clay soil with sand or other organic matter to improve drainage. They are adaptable to a wide range of soil pH levels but generally tolerate slightly alkaline soil (around 7.0-7.8).</li><li>Planting Depth: Scatter poppy seeds thinly over the prepared soil surface and press them gently into the soil. You can also sow seeds 1/4 inch deep in rows spaced 12-18 inches apart.</li><li>Watering: Water the seeds lightly after sowing and keep the soil moist until germination. Once established, poppies are fairly drought-tolerant, but they will benefit from occasional watering during dry periods.</li><li>Thinning: Once the poppy seedlings emerge and have a few sets of leaves, you may need to thin them to allow for proper spacing. Thin poppy seedlings to 6-12 inches apart.</li></ul>",
    },
    {
      id: 26,
      image: "./img/fox-glove.jpeg",
      name: "Foxglove",
      category: "",
      summary:
        "tall spikes of tubular flowers, ranging from purple to white, bloom in early summer. Prefers moist, well-drained soil and partial shade. Symbolizes insincerity.",
      details: {
        Watering:
          "Water them regularly, especially during their first spring after planting, to establish a strong root system. Aim for deep watering that soaks the soil thoroughly.",
        Soil: "Foxgloves prefer fertile, moist but well-drained soil with a slightly acidic to neutral pH (around 6.0-7.0).",
        Fertilizer:
          "You can fertilize foxgloves once a month during the growing season with a balanced fertilizer diluted to half strength.",
        WinterCare:
          "Foxgloves are typically biennials (completing their life cycle in two years) or short-lived perennials. In colder climates, they may not survive the winter. However, they may self-seed if the seeds experience a cold spell. ",
        PestsDiseases:
          "Foxgloves are relatively pest and disease resistant. However, they can be susceptible to some problems like: Rust and snails.",
      },
      seasonalTips:
        "Plant foxglove seeds indoors 6-8 weeks before the last frost. Alternatively, you can sow seeds directly outdoors in fall for blooms the following year.",
      trivia:
        'The name "Foxglove" is thought to originate from the resemblance of the inflated flower buds to the finger stalls (gloves) worn by fox hunters.',
      funFact:
        "Foxgloves are not only beautiful but also a source of the cardiac glycoside digitoxin, which is used in some medications for heart conditions. However, due to the toxicity of the plant, self-medication is strongly discouraged.",
      weather:
        "Foxgloves prefer cool to moderate climates with well-drained soil. They thrive in areas with full sun to partial shade and benefit from consistent moisture throughout the growing season.",
      howToPlant:
        "<ul><li>Planting Time: You can plant foxglove seeds indoors 6-8 weeks before the last frost for transplanting outdoors in spring. Alternatively, sow seeds directly outdoors in fall for blooms the following year.</li><li>Location: Choose a location that receives full sun to partial shade. Foxgloves may need some afternoon shade in hot climates.</li><li><b>Soil:** Foxgloves prefer well-drained soil rich in organic matter. Amend heavy clay soil with compost or other organic matter to improve drainage.</li><li>Planting Depth: Sow foxglove seeds thinly on the surface of moist soil and press them gently into the soil. You can also sow seeds 1/4 inch deep in rows spaced 12-18 inches apart.</li><li>Watering: Water the seeds regularly to keep the soil moist, especially during germination. Once established, foxgloves are moderately drought-tolerant but will benefit from occasional watering during dry periods.</li><li>Thinning: Once the foxglove seedlings emerge and have a few sets of leaves, you may need to thin them to allow for proper spacing. Thin foxglove seedlings to 12-18 inches apart.</li></ul>",
    },
    {
      id: 27,
      image: "./img/hellebore.webp",
      name: "Hellebore",
      category: "",
      summary:
        "blooms in late winter to early spring with cup-shaped flowers in shades of white, green, pink, and purple. Prefers well-drained soil and partial shade. Symbolizes serenity.",
      details: {
        Watering:
          "Water them regularly, especially during their first year after planting, to establish a strong root system. Aim for deep watering that soaks the soil thoroughly.",
        Soil: "Hellebores do best in fertile, well-drained soil rich in organic matter. They prefer a neutral or slightly acidic pH (around 6.0-7.0).",
        Fertilizer:
          "You can fertilize hellebores once a year in early spring with a balanced fertilizer formulated for perennials.",
        WinterCare:
          "Hellebores are generally cold-hardy. In colder climates, you can apply a light layer of mulch around the base of the plant in fall after the ground freezes to insulate the crown and roots.",
        PestsDiseases:
          "Hellebores are relatively pest and disease resistant. However, they can be susceptible to some problems like: Hellebore leaf spot and snails.",
      },
      seasonalTips:
        "Hellebores are herbaceous or evergreen perennials with attractive, lobed foliage. They typically grow 12-18 inches tall and 18-24 inches wide.",
      trivia:
        "Hellebores are also known as Lenten Roses because they traditionally bloom around the time of Lent.",
      funFact:
        "Hellebores are not only beautiful but also quite deer-resistant, making them a good choice for gardens prone to deer browsing.",
      weather:
        "Hellebores prefer cool, moist climates with well-drained soil. They thrive in partial shade to full shade and appreciate consistent moisture throughout the growing season, especially during spring.",
      howToPlant:
        "<ul><li>Planting Time: The best time to plant hellebores is in fall, ideally 6-8 weeks before the ground freezes. Planting at this time allows the roots to establish before winter.</li><li>Location: Choose a location that receives partial shade to full shade. Hellebores will not flower well in full sun locations.</li><li><b>Soil:** Hellebores prefer well-drained soil rich in organic matter. Amend heavy clay soil with compost or other organic matter to improve drainage.</li><li>Planting Depth: Plant hellebore rhizomes carefully, positioning the crown (where the roots and stems meet) just slightly below the soil surface.</li><li>Watering: Water the newly planted hellebores thoroughly and keep the soil moist, especially during the first year as they establish.</li></ul>",
    },
    {
      id: 28,
      image: "./img/Snapdragon.webp",
      name: "Snapdragon",
      category: "",
      summary:
        "showcases vibrant, dragon-shaped flowers in summer. Thrives in full sun and well-drained soil. Symbolizes grace and strength.",
      details: {
        Watering:
          "Water them regularly, especially during their first spring after planting, to establish a strong root system. Aim for deep watering that soaks the soil thoroughly.",
        Soil: "Snapdragons do best in fertile, well-drained soil with a neutral to slightly alkaline pH (around 6.5-7.5).",
        Fertilizer:
          "You can fertilize snapdragon plants once a month during the growing season with a balanced fertilizer diluted to half strength.",
        WinterCare:
          "In colder climates, snapdragons are typically grown as annuals. You can discard spent plants once frost arrives.",
        PestsDiseases:
          "Snapdragons are generally pest and disease resistant. However, they can be susceptible to some problems like: Aphids and Botrytis.",
      },
      seasonalTips:
        "In mild climates, sow snapdragon seeds directly outdoors in early spring. Alternatively, you can start seeds indoors 6-8 weeks before the last frost and transplant seedlings outdoors after the danger of frost has passed.",
      trivia:
        "The name \"snapdragon\" comes from the unique way the flower's lower lip opens and closes, resembling a dragon's snapping jaws.",
      funFact:
        "Snapdragons are not only beautiful but also attract butterflies and hummingbirds to your garden, adding to the visual interest and supporting pollination.",
      weather:
        "Snapdragons prefer cool to moderate climates with well-drained soil. They thrive in full sun locations and appreciate regular watering throughout the growing season, especially during hot weather",
      howToPlant:
        "<ul><li>Planting Time: The best time to plant snapdragon seeds depends on your climate. In mild climates, you can sow seeds directly outdoors in early spring or fall. In colder climates, start seeds indoors 6-8 weeks before the last frost and transplant seedlings outdoors after the danger of frost has passed.</li><li>Location: Choose a location that receives full sun. Snapdragons will not flower well in shady locations.</li><li><b>Soil:** Snapdragons prefer well-drained soil rich in organic matter. Amend heavy clay soil with compost or other organic matter to improve drainage.</li><li>Planting Depth: Sow snapdragon seeds thinly over the prepared soil surface and press them gently into the soil. You can also sow seeds 1/4 inch deep in rows spaced 8-12 inches apart.</li><li>Watering: Water the seeds regularly to keep the soil moist, especially during germination. Once established, snapdragons will benefit from regular watering, especially during dry periods.</li><li>Thinning: Once the snapdragon seedlings emerge and have a few sets of leaves, you may need to thin them to allow for proper spacing. Thin snapdragon seedlings to 6-8 inches apart.</li></ul>",
    },
    {
      id: 29,
      image: "./img/wallflower.jpeg",
      name: "Wallflower",
      category: "",
      summary:
        "offers clusters of fragrant flowers in spring. Loves sun and well-drained soil. Symbolizes fidelity.",
      details: {
        Watering:
          "Water them regularly, especially during their first spring after planting, to establish a strong root system. Aim for deep watering that soaks the soil thoroughly.",
        Soil: "Wallflowers prefer fertile, well-drained soil with a neutral to slightly alkaline pH (around 6.5-7.5).",
        Fertilizer:
          "You can fertilize wallflowers once a month during the growing season with a balanced fertilizer diluted to half strength.",
        WinterCare:
          "Wallflowers are typically biennials (completing their life cycle in two years) or short-lived perennials. In colder climates, they may not survive the winter.",
        PestsDiseases:
          "Wallflowers are relatively pest and disease resistant. However, they can be susceptible to some problems like: flea beetles and powdery mildew.",
      },
      seasonalTips:
        "In mild climates, sow wallflower seeds directly outdoors in early spring after the danger of frost has passed. Alternatively, you can start seeds indoors 6-8 weeks before the last frost and transplant seedlings outdoors after hardening them off.",
      trivia:
        'The name "wallflower" is not related to any association with walls. It is thought to be derived from an old French word "mignoette" which means "dainty" or "delicate," referencing the small, fragrant flowers.',
      funFact:
        "Wallflowers are not only beautiful and fragrant but also attract beneficial insects like bees and butterflies to your garden, aiding in pollination.",
      weather:
        "Wallflowers prefer cool to moderate climates with well-drained soil. They thrive in full sun to partial shade locations and appreciate consistent moisture throughout the growing season, especially during cool spring weather.",
      howToPlant:
        "<ul><li>Planting Time: The best time to plant wallflower seeds depends on your climate and whether you want them to bloom in the spring or fall. In mild climates with cool summers, you can sow seeds directly outdoors in early spring or late summer/early fall. In colder climates, start seeds indoors 6-8 weeks before the last frost and transplant seedlings outdoors after hardening them off.</li><li>Location: Choose a location that receives full sun to partial shade. Wallflowers may require some afternoon shade in hot climates.</li><li><b>Soil:** Wallflowers prefer well-drained soil with moderate fertility. Amend heavy clay soil with compost or other organic matter to improve drainage.</li><li>Planting Depth: Sow wallflower seeds thinly over the prepared soil surface and press them gently into the soil. You can also sow seeds 1/4 inch deep in rows spaced 8-12 inches apart.</li><li>Watering: Water the seeds regularly to keep the soil moist, especially during germination. Once established, wallflowers will benefit from regular watering, especially during dry periods. Avoid overwatering, which can lead to root rot.</li><li>Thinning: Once the wallflower seedlings emerge and have a few sets of leaves, you may need to thin them to allow for proper spacing. Thin wallflower seedlings to 6-8 inches apart.</li></ul>",
    },
    {
      id: 30,
      image: "./img/lungwort.jpeg",
      name: "Lungwort",
      category: "",
      summary:
        "known for spotted leaves and spring blooms in pink, blue, and white. Prefers shade and moist soil. Represents thoughtfulness.",
      details: {
        Watering:
          "Water them regularly during their first spring or summer after planting, especially during dry periods. Aim to keep the soil consistently moist but not soggy. Lungworts are fairly drought-tolerant once established.",
        Soil: "Lungwort prefers fertile, well-drained soil rich in organic matter with a slightly acidic to neutral pH (around 6.0-7.0).",
        Fertilizer:
          "You can fertilize lungwort once a year in early spring with a balanced fertilizer diluted to half strength.",
        WinterCare:
          "Lungworts are generally cold-hardy. In colder climates, you can apply a light layer of mulch around the base of the plant in fall after the ground freezes to insulate the roots.",
        PestsDiseases:
          "Lungworts are relatively pest and disease resistant. However, they can be susceptible to some problems like: Botrytis and snails.",
      },
      seasonalTips:
        "Enjoy the beautiful blooms of lungwort in late winter to early summer. Deadheading spent flowers can encourage continued blooming.  You can also divide lungwort plants in early spring if desired.",
      trivia:
        'The name "lungwort" is derived from an old herbal belief that the spotted leaves resembled human lungs, and the plant was thought to have medicinal properties for respiratory ailments. However, there is no scientific evidence to support this claim.',
      funFact:
        "Lungworts are not only beautiful but also provide a nectar source for hummingbirds and butterflies, attracting them to your shade garden.",
      weather:
        "Lungworts prefer cool, moist climates with mild winters and cool to moderate summers. They struggle in excessively hot and humid environments. They appreciate consistent moisture throughout the growing season and benefit from some afternoon shade in hot climates.",
      howToPlant:
        '<ul><li>Planting Time: The best time to plant lungwort is in fall, ideally 6-8 weeks before the ground freezes. Planting at this time allows the roots to establish before winter.</li><li>Location: Choose a location that receives partial shade to full sun in the morning, with some afternoon shade in hot climates.  They need protection from strong winds.</li><li><b>Soil:** Lungworts require well-drained soil rich in organic matter. Amend heavy clay soil with compost or other organic matter to improve drainage.</li><li>Planting Depth: Plant the lungwort tubers (corms) with the "eyes" (buds) facing upwards, 2-3 inches deep and spaced 4-6 inches apart.</li><li>Watering: Water the tubers well after planting and keep the soil consistently moist, especially during the first year as they establish.</li></ul>',
    },
  ];

  //Search Function
  //filter out flowers
  const filteredFlowers = flowers.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="articles">
      {filteredFlowers.map((item) => (
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
                Plant this flower
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
            <div className="main-popup">
              <div className="title">
                <h2>{activeFlower.name}</h2>
              </div>
              <div className="content">
                <div className="picture">
                  <img
                    src={activeFlower.image}
                    alt="small-img"
                    className="popup-img"
                  />
                  <p>
                    <strong>Weather: </strong>
                    {activeFlower.weather}
                  </p>
                  <p>
                    <strong>Seasonal Tips: </strong>
                    {activeFlower.seasonalTips}
                  </p>
                  <p>
                    <strong>Trivia: </strong>
                    {activeFlower.trivia}
                  </p>
                </div>
                <div className="details">
                  <h3>How to Plant:</h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: activeFlower.howToPlant,
                    }}
                  />
                </div>
              </div>
              <div className="button-container">
                <div
                  className="button-1"
                  onClick={() => {
                    addFlower(activeFlower);
                  }}
                >
                  Start planting now
                </div>
                {/* <div
                  className="button-1"
                  onClick={() => addFlower(activeFlower)}
                >
                  Add to Favorite
                </div> */}
                <div
                  className="button-1"
                  onClick={() => openInNewTab(activeFlower.link)}
                >
                  Buy Seeds
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};
export default Homepage;

import "./Homepage.css";
import { useFlowerData } from "./FlowerDataContext";
import { useState } from "react";
import Modal from "./Detail";
const Homepage = () => {
  const [activeFlower, setActiveFlower] = useState(null);
  const popupStyle = activeFlower ? { display: "block" } : { display: "none" };
  const { addFlower } = useFlowerData();

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
        soilType: "Well-drained soil",
        sunExposure: "Full sun to partial shade",
        wateringNeed:
          "Moderate watering, allowing soil to dry slightly between waterings",
        bloomingPeriod: "Early spring (February - March)",
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
      name: "Tutulip",
      category: "",
      summary:
        "renowned for their vibrant and varied colors, are classic symbols of spring. These bulbous perennials offer a range of hues, including red, pink, yellow, and purple.",
      details: {
        soilType: "Well-drained, fertile soil",
        sunExposure: "Full sun to partial shade",
        wateringNeed: "Moderate, require more water in the growing season",
        bloomingPeriod: "Early to late spring, depending on the variety",
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
        soilType: "Well-drained, moderately fertile soil",
        sunExposure: "Full sun to partial shade",
        wateringNeed:
          "Regular watering during growth, less water during dormancy",
        bloomingPeriod: "Early spring (March - April)",
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
        soilType: "Moist, well-drained soil rich in organic matter",
        sunExposure: "Partial shade to full shade",
        wateringNeed: "Regular watering, keeping the soil moist but not soggy",
        bloomingPeriod:
          "Early spring (February to April) with some varieties blooming in fall",
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
        soilType: "Moist, well-drained soil rich in organic matter",
        sunExposure: "Partial shade to full shade",
        wateringNeed:
          "Regular watering during growth, less water during dormancy",
        bloomingPeriod: "Late winter to early spring (February to April)",
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
        soilType: "Well-drained soil",
        sunExposure: "Full sun (at least 6-8 hours daily)",
        wateringNeed:
          "Regular watering during growth, less water during dormancy",
        bloomingPeriod: "Late spring to early summer (May to June)",
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
        soilType: "Rich, well-drained soil with good organic matter",
        sunExposure:
          "Full sun to part shade (ideally morning sun and afternoon shade)",
        wateringNeed: "Regular watering, keeping the soil moist but not soggy",
        bloomingPeriod: "Cool season bloomer, typically in spring and fall",
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
        soilType: "Well-drained, moist soil with good organic matter",
        sunExposure:
          "Full sun to part shade (ideally morning sun and afternoon shade)",
        wateringNeed: "Regular watering, keeping the soil moist but not soggy",
        bloomingPeriod: "Cool season bloomer, typically in spring and fall",
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
        soilType: "Moist, well-drained soil",
        sunExposure: "Full sun to part shade",
        wateringNeed:
          "Regular watering, especially during the first year after planting. More drought tolerant once established.",
        bloomingPeriod: "Early spring (March to April)",
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
            <div className="button-1" onClick={() => addFlower(activeFlower)}>
              Start planting now
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};
export default Homepage;

import { getServerSession } from "next-auth";
import {NextResponse} from 'next/server'

interface PotatoFacts {
    id: number, 
    title: string, 
    fact: string
}

const potatoFacts : PotatoFacts[] = [
    {
      id: 1,
      title: "Origin",
      fact: "Potatoes were first cultivated by indigenous peoples in the Andes Mountains of South America over 7,000 years ago. They have been a staple food in the region ever since.",
    },
    {
      id: 2,
      title: "Variety",
      fact: "There are thousands of potato varieties, but they can be broadly categorized into five main types: russet, red, white, yellow, and fingerling.",
    },
    {
      id: 3,
      title: "Nutritional Value",
      fact: "Potatoes are a good source of vitamins (particularly vitamin C and B6), minerals (like potassium), and dietary fiber. They are also fat-free and relatively low in calories, making them a healthy addition to meals.",
    },
    {
      id: 4,
      title: "World's Largest Potato",
      fact: "The largest potato ever grown weighed in at 18 pounds and 4 ounces, according to the Guinness World Records.",
    },
    {
      id: 5,
      title: "Potato Chip Origin",
      fact: "The potato chip, a popular snack, was invented by chef George Crum in 1853 at Moon's Lake House in Saratoga Springs, New York. He made them as a joke, but they became a sensation.",
    },
    {
      id: 6,
      title: "Potatoes in Space",
      fact: "Potatoes have been grown in space. In 2015, NASA successfully cultivated potatoes on the International Space Station as part of an experiment to study food production in microgravity.",
    },
    {
      id: 7,
      title: "Cultural Significance",
      fact: "Potatoes have played a crucial role in various cultures' cuisines. For example, they are a fundamental ingredient in dishes like French fries, mashed potatoes, and Irish colcannon.",
    },
    {
      id: 8,
      title: "Irish Potato Famine",
      fact: "The Irish Potato Famine, which occurred between 1845 and 1852, was a devastating period in Irish history when a potato disease called late blight wiped out the potato crop. This led to a significant loss of life and mass emigration from Ireland.",
    },
    {
      id: 9,
      title: "Potatoes and the Andes",
      fact: "In the Andean region, there are over 4,000 different varieties of potatoes, showcasing their incredible genetic diversity.",
    },
    {
      id: 10,
      title: "Biodiversity Treasure",
      fact: "Potatoes are considered one of the world's most important crops, providing sustenance for billions of people. Their genetic diversity is a crucial resource for developing new varieties that are resistant to diseases and pests.",
    },
    {
      id: 11,
      title: "Potato as an Energy Source",
      fact: "Potatoes can be used to produce electricity. The chemicals in potatoes, when combined with other materials, can create a simple battery.",
    },
    {
      id: 12,
      title: "Not Just for Eating",
      fact: "Potatoes have been used for more than just food. They have been employed in folk remedies for ailments like burns, headaches, and warts. They can also be used for cleaning and polishing metals.",
    },
    {
      id: 13,
      title: "Potatoes in Art",
      fact: "The famous artist Vincent van Gogh created a still-life painting titled 'The Potato Eaters' in 1885. It depicts a family of Dutch peasants sitting down for a meal of potatoes.",
    },
    {
      id: 14,
      title: "Long Shelf Life",
      fact: "When stored in a cool, dark place, potatoes can have a relatively long shelf life. They can stay fresh for several months, making them an excellent option for food storage.",
    },
    {
      id: 15,
      title: "Potato Diplomacy",
      fact: "In 1974, during the Cold War, potatoes played a unique diplomatic role when the United States and the Soviet Union exchanged potato-themed gifts as a symbol of détente and peaceful relations.",
    },
  ];
  
export async function GET() {
    const session = await getServerSession()
    return NextResponse.json(potatoFacts)
}
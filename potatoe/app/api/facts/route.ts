import { getServerSession } from "next-auth";
import {NextResponse} from 'next/server'
import Potato1 from '../../../public/assets/russet.webp'
import Andes from '../../../public/assets/facts/andes.jpg'
import PotVar from '../../../public/assets/facts/potatovar.jpeg'
import Chips from '../../../public/assets/facts/chips.jpg'
import Space from '../../../public/assets/facts/space.jpg'
import Mashed from '../../../public/assets/facts/mashed.jpg'
import PotEat from '../../../public/assets/facts/potatoeatters.jpg'
import Famine from '../../../public/assets/facts/famine.jpg'
import PotRoom from '../../../public/assets/facts/potatoroom.jpeg'
import PotLight from '../../../public/assets/facts/potatoLight.jpg'
import Andes2 from '../../../public/assets/facts/andes2.avif'
import LargePot from '../../../public/assets/facts/largepot.jpeg'
import PotHeart from '../../../public/assets/facts/potheart.jpg'
import PotKnife from '../../../public/assets/facts/potknife.jpg'
import { StaticImageData } from 'next/image';

interface PotatoFacts {
    id: number, 
    title: string, 
    fact: string
    img: StaticImageData
}

const potatoFacts : PotatoFacts[] = [
    {
      id: 1,
      title: "Origin",
      img: Andes, 
      fact: "Potatoes were first cultivated by indigenous peoples in the Andes Mountains of South America over 7,000 years ago. They have been a staple food in the region ever since.",
    },
    {
      id: 2,
      title: "Variety",
      img: PotVar,
      fact: "There are thousands of potato varieties, but they can be broadly categorized into five main types: russet, red, white, yellow, and fingerling.",
    },
    {
      id: 3,
      title: "Nutritional Value",
      img: PotKnife,
      fact: "Potatoes are a good source of vitamins (particularly vitamin C and B6), minerals (like potassium), and dietary fiber. They are also fat-free and relatively low in calories, making them a healthy addition to meals.",
    },
    {
      id: 4,
      title: "World's Largest Potato",
      img: LargePot,
      fact: "The largest potato ever grown weighed in at 18 pounds and 4 ounces, according to the Guinness World Records.",
    },
    {
      id: 5,
      title: "Potato Chip Origin",
      img: Chips,
      fact: "The potato chip, a popular snack, was invented by chef George Crum in 1853 at Moon's Lake House in Saratoga Springs, New York. He made them as a joke, but they became a sensation.",
    },
    {
      id: 6,
      title: "Potatoes in Space",
      img: Space,
      fact: "Potatoes have been grown in space. In 2015, NASA successfully cultivated potatoes on the International Space Station as part of an experiment to study food production in microgravity.",
    },
    {
      id: 7,
      title: "Cultural Significance",
      img: Mashed,
      fact: "Potatoes have played a crucial role in various cultures' cuisines. For example, they are a fundamental ingredient in dishes like French fries, mashed potatoes, and Irish colcannon.",
    },
    {
      id: 8,
      title: "Irish Potato Famine",
      img: Famine,
      fact: "The Irish Potato Famine, which occurred between 1845 and 1852, was a devastating period in Irish history when a potato disease called late blight wiped out the potato crop. This led to a significant loss of life and mass emigration from Ireland.",
    },
    {
      id: 9,
      title: "Potatoes and the Andes",
      img: Andes2,
      fact: "In the Andean region, there are over 4,000 different varieties of potatoes, showcasing their incredible genetic diversity.",
    },
    {
      id: 10,
      title: "Biodiversity Treasure",
      img: Potato1,
      fact: "Potatoes are considered one of the world's most important crops, providing sustenance for billions of people. Their genetic diversity is a crucial resource for developing new varieties that are resistant to diseases and pests.",
    },
    {
      id: 11,
      title: "Potato as an Energy Source",
      img: PotLight,
      fact: "Potatoes can be used to produce electricity. The chemicals in potatoes, when combined with other materials, can create a simple battery.",
    },
    {
      id: 12,
      title: "Not Just for Eating",
      img: PotHeart,
      fact: "Potatoes have been used for more than just food. They have been employed in folk remedies for ailments like burns, headaches, and warts. They can also be used for cleaning and polishing metals.",
    },
    {
      id: 13,
      title: "Potatoes in Art",
      img: PotEat,
      fact: "The famous artist Vincent van Gogh created a still-life painting titled 'The Potato Eaters' in 1885. It depicts a family of Dutch peasants sitting down for a meal of potatoes.",
    },
    {
      id: 14,
      title: "Long Shelf Life",
      img: PotRoom,
      fact: "When stored in a cool, dark place, potatoes can have a relatively long shelf life. They can stay fresh for several months, making them an excellent option for food storage.",
    },
  ];
  
export async function GET() {
    const session = await getServerSession()
    return NextResponse.json(potatoFacts)
}
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import Potato1 from '../../../public/assets/russet.webp'
import Potato2 from '../../../public/assets/yukon.jpeg'
import Potato3 from '../../../public/assets/redpotato.webp'
import Potato4 from '../../../public/assets/fingerlingpotatoe.jpeg'
import Potato5 from '../../../public/assets/purplepotatoe.jpeg'
import Potato6 from '../../../public/assets/yellowfinnpotatoe.jpeg'
import Potato7 from '../../../public/assets/kennebecpotatoes.jpeg'
import Potato8 from '../../../public/assets/maris.webp'
import Potato9 from '../../../public/assets/sweet-potatoes.jpeg'
import { StaticImageData } from 'next/image';


interface Potato {
    id: string| number;
    name: string; 
    image: StaticImageData;
    details: {}

}

const potatoes : Potato[] = [
      {
        id: 'clna9jtbn0000v2saxs1xzad0',
        name: "Russet Potatoes",
        image: Potato1,
        details: {
            description: "Russets are known for their high starch content and are excellent for baking, mashing, and frying. They have a fluffy texture inside and a thick skin.",
            best_uses: [
                "Baking",
                "Mashing",
                "Frying"
          ]
        }
      },
      {
        id: 'clna9kcr80001v2sazz75qdlu',
        name: "Yukon Gold Potatoes",
        image: Potato2,
        details: {
            description: "Yukon Gold potatoes have a buttery flavor and a creamy texture. They're great for mashed potatoes, roasting, and making gratins.",
            best_uses: [
                "Mashed Potatoes",
                "Roasting",
                "Gratin"
          ]
        }
      },
      {
        id: 'clna9kj700002v2sanjetufm8',
        name: "Red Potatoes",
        image: Potato3,
        details: {
            description: "Red potatoes have thin, smooth red skin and waxy flesh. They hold their shape well when boiled or roasted and are often used in potato salads.",
            best_uses: [
                "Boiling",
                "Roasting",
                "Potato Salad"
          ]
        }
      },
      {
        id: 'clna9kppg0003v2sacscqq429',
        name: "Fingerling Potatoes",
        image: Potato4,
        details: {
          description: "Fingerlings come in various colors and have a nutty flavor. They are well-suited for roasting, grilling, and using in salads.",
          best_uses: [
            "Roasting",
            "Grilling",
            "Salads"
          ]
        }
      },
      {
        id: 'clna9kxy50004v2sabtqrdpos',
        name: "Purple Potatoes",
        image: Potato5,
        details: {
          description: "Purple potatoes have vibrant purple skin and flesh. They're rich in antioxidants and can be used in various dishes, including mashed potatoes and roasted dishes.",
          best_uses: [
            "Mashed Potatoes",
            "Roasting",
            "Colorful Dishes"
          ]
        }
      },
      {
        id: 'clna9l63q0005v2sat1buwj3z',
        name: "Yellow Finn Potatoes",
        image: Potato6,
        details: {
          description: "Yellow Finns have a rich, buttery flavor and are versatile for various cooking methods, including mashing, roasting, and frying.",
          best_uses: [
            "Mashed Potatoes",
            "Roasting",
            "Frying"
          ]
        }
      },
      {
        id: 'clna9lii80006v2sax24vprdb',
        name: "Kennebec Potatoes",
        image: Potato7,
        details: {
          description: "Kennebec potatoes are all-purpose with thin, light-brown skin and white flesh. They work well for frying, baking, and making french fries.",
          best_uses: [
            "Frying",
            "Baking",
            "French Fries"
          ]
        }
      },
      {
        id: 'clna9lp9a0007v2sabdgcf4cy',
        name: "Maris Piper Potatoes",
        image: Potato8,
        details: {
          description: "Maris Piper potatoes are a popular variety in the UK. They have a fluffy texture and are commonly used for making chips (fries) and roast potatoes.",
          best_uses: [
            "Chips (Fries)",
            "Roast Potatoes"
          ]
        }
      },
      {
        id: 'clna9lvc60008v2sagyrd2ccw',
        name: "Yam Potatoes (Sweet Potatoes)",
        image: Potato9,
        details: {
          description: "While technically not potatoes, sweet potatoes are often referred to as yams. They come in various varieties and are used in both savory and sweet dishes.",
          best_uses: [
            "Mashed Potatoes",
            "Baking",
            "Pies"
          ]
        }
      }
]

export async function GET() {
    const session = await getServerSession()
    return NextResponse.json(potatoes)
}
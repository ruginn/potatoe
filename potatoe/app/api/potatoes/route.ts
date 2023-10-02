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
        id: 'cln861xuw0002v26xxr28ipsw',
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
        id: 'cln862z2z0003v26xmukioa6o',
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
        id: 'cln8634se0004v26xmxu76evi',
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
        id: 'cln863g830005v26x5r8d4l0l',
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
        id: 'cln863jtg0006v26xr4d19xt9',
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
        id: 'cln863n2k0007v26xrq21u0mm',
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
        id: 'cln863prq0008v26xs6tqsxmp',
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
        id: 'cln863s6v0009v26xm6gsdtzj',
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
        id: 'cln863w8j000av26xun58qsom',
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
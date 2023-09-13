import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'


interface Potato {
    id: number;
    name: string; 
    image: string;
    details: {}

}

const potatoes : Potato[] = [
      {
        id: 1,
        name: "Russet Potatoes",
        image: "",
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
        id: 2,
        name: "Yukon Gold Potatoes",
        image: "",
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
        id: 3,
        name: "Red Potatoes",
        image: "",
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
        id: 4,
        name: "Fingerling Potatoes",
        image: "",
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
        id: 5,
        name: "New Potatoes",
        image: "",
        details: {
          description: "New potatoes are young potatoes harvested before they reach maturity. They are small, tender, and often used in boiling, steaming, or roasting.",
          best_uses: [
            "Boiling",
            "Steaming",
            "Roasting"
          ]
        }
      },
      {
        id: 6,
        name: "Purple Potatoes",
        image: "",
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
        id: 7,
        name: "Adirondack Blue Potatoes",
        image: "",
        details: {
          description: "Adirondack Blue potatoes have striking blue-purple flesh and are suitable for mashing, roasting, or making colorful salads.",
          best_uses: [
            "Mashed Potatoes",
            "Roasting",
            "Salads"
          ]
        }
      },
      {
        id: 8,
        name: "Yellow Finn Potatoes",
        image: "",
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
        id: 9,
        name: "Kennebec Potatoes",
        image: "",
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
        id: 10,
        name: "German Butterball Potatoes",
        image: "",
        details: {
          description: "German Butterball potatoes are small, round, and have a creamy, buttery taste. They are ideal for mashing or roasting.",
          best_uses: [
            "Mashed Potatoes",
            "Roasting"
          ]
        }
      },
      {
        id: 11,
        name: "La Ratte Potatoes",
        image: "",
        details: {
          description: "La Ratte potatoes are a popular French fingerling potato with a delicate, nutty flavor. They are often used for roasting or making potato salads.",
          best_uses: [
            "Roasting",
            "Potato Salad"
          ]
        }
      },
      {
        id: 12,
        name: "Purple Majesty Potatoes",
        image: "",
        details: {
          description: "Purple Majesty potatoes are known for their deep purple color. They're high in antioxidants and can be used in various dishes like mashed potatoes and potato chips.",
          best_uses: [
            "Mashed Potatoes",
            "Potato Chips",
            "Colorful Dishes"
          ]
        }
      },
      {
        id: 13,
        name: "All Blue Potatoes",
        image: "",
        details: {
          description: "All Blue potatoes have blue skin and blue flesh. They are often used for making colorful chips or mashed potatoes.",
          best_uses: [
            "Mashed Potatoes",
            "Potato Chips",
            "Colorful Dishes"
          ]
        }
      },
      {
        id: 14,
        name: "Maris Piper Potatoes",
        image: "",
        details: {
          description: "Maris Piper potatoes are a popular variety in the UK. They have a fluffy texture and are commonly used for making chips (fries) and roast potatoes.",
          best_uses: [
            "Chips (Fries)",
            "Roast Potatoes"
          ]
        }
      },
      {
        id: 15,
        name: "Yam Potatoes (Sweet Potatoes)",
        image: "",
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
import {NextResponse} from 'next/server'
import { NextApiRequest } from 'next'
import { prisma } from "@/lib/prisma"


// export async function GET(req: Request, {params}: params: {PotatoID: string}) {
//     const {PotatoID} = req.query
//     console.log(PotatoID)
//     const posts = await prisma.post.findMany({
//         where: {
//             id: PotatoID?.toString()
//         }
//     })
//     // console.log(posts)
//     return NextResponse.json('this is working')
// }


export async function GET(request: Request, { params }: { params: { potatoID: string }}) {
    const slug = params.potatoID // 'a', 'b', or 'c'
    const posts = await prisma.post.findMany({
        where: {
            potatoId: slug
        }, 
        include: {
            user: true
        }
    })
    // console.log(slug + 'we got it')
    // console.log(posts)
    return NextResponse.json(posts)
  }

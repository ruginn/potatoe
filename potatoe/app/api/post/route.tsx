import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import {prisma} from '@/lib/prisma'
import { authOptions } from '../auth/[...nextauth]/route'
import { PrismaClient } from "@prisma/client";


export async function POST(req: Request) {
    const session = await getServerSession(authOptions)
    const currentUserEmail = session?.user?.email!

    const data = await req.json()
    console.log('thisi is data  below')
    console.log(data)
    console.log('this is sdata above')
    const user = await prisma.user.findUnique({
        where: {
          email: currentUserEmail,
        },
      })
    
    
    // const newPotato = await prisma.potato.create({data: {potatoId: data.potatoId, potatoName: data.potatoName}})
    // const deletePotato = await prisma.potato.deleteMany({
    //   where: {
    //     potatoId: data.potatoid
    //   }
    // })
    const existingPost = await prisma.post.findMany({
      where: {
        AND: [
          {userId: user?.id},  
          {potatoId: data.potatoId}
        ]
      }
    })

    if (existingPost.length === 1){
      return NextResponse.json('You have already made a post')
    }
    const newPost = await prisma.post.create({data: {post: data.post, rating: data.rating, userId: user?.id, potatoId: data.potatoId}})


    // console.log(user)

    return NextResponse.json('it worked')
}

// export async function GET(req: Request) {
//   const data = await req.json()
//   const posts = await prisma.post.findMany({
//     where: {
//       id: data.id
//     }
//   })
//   console.log('this is post')
//   console.log(posts)

//   return NextResponse.json(posts)
// }
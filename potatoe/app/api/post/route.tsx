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
    
    
    // const newPotato = await prisma.potato.create({data: {potatoId: data.potatoId}})
    // const deletePotato = await prisma.potato.deleteMany({
    //   where: {
    //     potatoId: data.potatoid
    //   }
    // })
    const newPost = await prisma.post.create({data: {post: data.post, rating: data.rating, userId: user?.id, potatoId: data.potatoId}})


    // console.log(user)

    return NextResponse.json('it worked')
}
import PostRatings from "../../../component/PostRatings"
import {prisma} from '@/lib/prisma'
import {Potato} from '@/typings'
import { revalidateTag } from "next/cache"

async function getPost(potato:Potato) {
    'use server'
    return await prisma.post.findMany({
        where: {
            potatoId: potato.id
        }, 
        include: {
            user: true
        }
    })
    // revalidateTag('post')
}

async function UserRatings({potato}) {

    const posts = await getPost(potato)

    return (
    <div>
        <h1>Ratings</h1>
        {posts.map((post) => (
            <PostRatings post={post}/>
        ))}
    </div>
  )
}

export default UserRatings
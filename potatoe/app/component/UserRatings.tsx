import PostRatings from "./PostRatings"
import {prisma} from '@/lib/prisma'


async function UserRatings({potato}) {
    const posts = await prisma.post.findMany({
        where: {
            potatoId: potato.id
        }
    })
    console.log('below are posts')
    console.log(posts)
    console.log('above are posts')
    return (
    <div>
        <h1>Posts</h1>
        <PostRatings />
    </div>
  )
}

export default UserRatings
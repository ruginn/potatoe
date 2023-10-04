import PostRatings from "./PostRatings"
import {prisma} from '@/lib/prisma'


async function UserRatings({potato}) {
    const posts = await prisma.post.findMany({
        where: {
            potatoId: potato.id
        }, 
        include: {
            user: true
        }
    })
    console.log('below are posts')
    console.log(posts)
    console.log('above are posts')
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
import moment from "moment"
import {BsStarFill, BsStar } from 'react-icons/bs'


function PostRatings({post}) {
  
  return (
    <div className="w-96">
       <div className="flex flex-row"> 
        {post.rating >= 1 ? <BsStarFill/>:<BsStar/>}
        {post.rating >= 2 ? <BsStarFill/>:<BsStar/>}
        {post.rating >= 3 ? <BsStarFill/>:<BsStar/>}
        {post.rating >= 4 ? <BsStarFill/>:<BsStar/>}
        {post.rating >= 5 ? <BsStarFill/>:<BsStar/>}
      </div>
      <h1>{post.post}</h1>
      <div className="flex justify-between">
        <p>{post.user.name.split(' ')[0]}</p> 
        <p>{moment(post.createdAt).format('LL')}</p>
      </div>
      {/* <p>{post.rating}</p> */}
    </div>
  )
}

export default PostRatings
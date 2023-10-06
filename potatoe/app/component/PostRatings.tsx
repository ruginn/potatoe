import moment from "moment"
import {BsStarFill, BsStar } from 'react-icons/bs'


function PostRatings({post}) {
  
  return (
    <div className="w-96 h-24 border">
       <div className="flex flex-row"> 
        {post.rating >= 1 ? <BsStarFill className='fill-amber-400'/>:<BsStar className='fill-amber-500'/>}
        {post.rating >= 2 ? <BsStarFill className='fill-amber-400'/>:<BsStar className='fill-amber-500'/>}
        {post.rating >= 3 ? <BsStarFill className='fill-amber-400'/>:<BsStar className='fill-amber-500'/>}
        {post.rating >= 4 ? <BsStarFill className='fill-amber-400'/>:<BsStar className='fill-amber-500'/>}
        {post.rating >= 5 ? <BsStarFill className='fill-amber-400'/>:<BsStar className='fill-amber-500'/>}
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
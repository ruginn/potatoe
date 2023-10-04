function PostRatings({post}) {
  return (
    <div>
      <p>{post.user.name}</p>
      <p>{post.rating}</p>
      <h1>{post.post}</h1>
    </div>
  )
}

export default PostRatings
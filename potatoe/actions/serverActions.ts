'use server'

import {revalidateTag } from "next/cache"

const createPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const body = {
      post: formData.get('post'),
      potatoId: potato.id,
      rating: starRating, 
      potatoName: potato.name
    }
    const res = await fetch('/api/post',  {
      method: 'POST',
      body: JSON.stringify(body), 
      headers: {
        'Content-Type': 'application/json'
      } ,
    })
    revalidateTag('post')
    await res.json()
    
  }
// 'use client'
// import {useState, useEffect} from 'react'
import {prisma} from '@/lib/prisma'
import {BsStarFill, BsStar } from 'react-icons/bs'
import { getServerSession } from "next-auth";
import { authOptions } from '../../app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation';

async function createPost(data: FormData) {
  'use server'
  const post = data.get('post')?.valueOf()
  if (typeof post !== 'string' || post.length === 0) {
    throw new Error('Invalid entry')
  }
  const test = await getServerSession()
  console.log(test)
  await prisma.post.create({data: {post, rating: 4, userId: 'clm8cfxcx0000v2mlc8dk1dxd'}})
  redirect('/')


}

const PotatoRater = ({potato}) => {

  // const [rate, setRate] = useState({})
  // const [starRating, setStarRating] = useState(0)
  

  return (
    <div>
        <h1>Rate Potato</h1>
        <form action={createPost} className='flex flex-col w-[500px]'>
            <label htmlFor="post">Tell us what you think about {potato}</label>
            <input type="text" id="post" name='post' className='pl-1 border border-slate-300 rounded-md'/>
            <div className='flex flex-row cursor-pointer'>
                {/* {starRating >= 1 ? <BsStarFill onClick={() => setStarRating(1)} /> : <BsStar onClick={() => setStarRating(1)} />} */}
                {/* {starRating >= 2 ? <BsStarFill onClick={() => setStarRating(2)}/> : <BsStar onClick={() => setStarRating(2)}/>} */}
                {/* {starRating >= 3 ? <BsStarFill onClick={() => setStarRating(3)}/> : <BsStar onClick={() => setStarRating(3)}/>}  */}
                {/* {starRating >= 4 ? <BsStarFill onClick={() => setStarRating(4)}/> : <BsStar onClick={() => setStarRating(4)}/>} */}
                {/* {starRating === 5 ? <BsStarFill onClick={() => setStarRating(5)}/> : <BsStar onClick={() => setStarRating(5)}/>} */}
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default PotatoRater
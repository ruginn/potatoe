import Image from "next/image"
import Russet from '../../public/assets/russet.webp'
import {BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

function SlideCard() {
  return (
    <div className="flex flex-row w-[470px] h-56 bg-gradient-to-br from-blue-200 via-blue-300 to-indigo-300 m-0.5 relative mb-24">
        <div className="w-3/6">
            <div className="absolute h-60 w-40 top-6 left-6 drop-shadow-2xl">
                <Image
                    src ={Russet}
                    fill= {true}
                    objectFit="cover"
                    alt=''
                />
            </div>  
        </div>
        <div className="w-3/6 justify-self-end mt-4 mr-4">
            <h3 className="text-white font-bold text-xl mb-2">Russet Potatoe</h3>
            <div className="flex flex-row items-center">
                <BsStarFill className='fill-indigo-500'/>
                <BsStarFill className='fill-indigo-500'/>
                <BsStarFill className='fill-indigo-500'/>
                <BsStarHalf className='fill-indigo-500'/>
                <BsStar className='fill-indigo-500'/>
                <p className="text-white mb-1 ml-2">3,454 ratings</p>
            </div>
            <p className="text-white text-sm leading-none mt-2">Russets are known for their high starch content and are excellent for baking, mashing, and frying. They have a fluffy texture inside and a thick skin.</p>
            <button className="w-10/12 h-6 text-blue-700 font-bold drop-shadow-2xl bg-slate-50 rounded-lg mt-5 text-sm">See More</button>
        </div>
    </div>
  )
}

export default SlideCard

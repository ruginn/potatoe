'use client'
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import {BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'


interface Potato {
    id: number;
    name: string; 
    image: StaticImageData;
    details: {}

}

function SlideCard({potato} : Potato) {
     
  return (
    <div className="inline-block hover:scale-105 ease-in-out duration-150">
        <div className="flex flex-row w-[470px] h-56 bg-gradient-to-br from-gray-100 via-slate-300 to-gray-300 relative mb-24 rounded-3xl">
            <div className="w-3/6">
                <div className="absolute h-60 w-40 top-6 left-6 drop-shadow-2xl">
                    <Image
                        className="rounded-xl drop-shadow-2xl"
                        // src ={potatoePic[potato.id]}
                        src = {potato.image}
                        fill= {true}
                        objectFit="cover"
                        alt=''
                    />
                </div>  
            </div>
            <div className="w-3/6 justify-self-end mt-4 mr-4">
                <h3 className="text-white font-bold text-xl mb-2">{potato.name}</h3>
                <div className="flex flex-row items-center">
                    <BsStarFill className='fill-amber-500'/>
                    <BsStarFill className='fill-amber-500'/>
                    <BsStarFill className='fill-amber-500'/>
                    <BsStarHalf className='fill-amber-500'/>
                    <BsStar className='fill-amber-500'/>
                    <p className="text-white mb-1 ml-2">3,454 ratings</p>
                </div>
                <p className="text-white text-sm leading-none mt-2 whitespace-normal">{potato.details.description}</p>
                <Link href={`/potatoes/${potato.id}`}>
                    <button className="w-10/12 h-6 text-black font-bold drop-shadow-2xl bg-slate-50 rounded-lg mt-5 text-sm">See More</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default SlideCard

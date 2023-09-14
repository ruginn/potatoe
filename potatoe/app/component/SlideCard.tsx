import Image from "next/image"
import Potato1 from '../../public/assets/russet.webp'
import Potato2 from '../../public/assets/yukon.jpeg'
import Potato3 from '../../public/assets/redpotato.webp'
import Potato4 from '../../public/assets/fingerlingpotatoe.jpeg'
import Potato5 from '../../public/assets/purplepotatoe.jpeg'
import Potato6 from '../../public/assets/yellowfinnpotatoe.jpeg'
import Potato7 from '../../public/assets/kennebecpotatoes.jpeg'
import Potato8 from '../../public/assets/maris.webp'
import Potato9 from '../../public/assets/sweet-potatoes.jpeg'


import {BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'


interface Potato {
    id: number;
    name: string; 
    image: string;
    details: {}

}

function SlideCard({potato} : Potato) {

  const potatoePic = {
    1: Potato1, 
    2: Potato2, 
    3: Potato3, 
    4: Potato4, 
    5: Potato5, 
    6: Potato6, 
    7: Potato7, 
    8: Potato8, 
    9: Potato9
  }      
  return (
    <div className="inline-block">
        <div className="flex flex-row w-[470px] h-56 bg-gradient-to-br from-gray-100 via-slate-300 to-gray-300 m-0.5 relative mb-24 rounded-3xl">
            <div className="w-3/6">
                <div className="absolute h-60 w-40 top-6 left-6 drop-shadow-2xl">
                    <Image
                        className="rounded-xl drop-shadow-2xl"
                        src ={potatoePic[potato.id]}
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
                <button className="w-10/12 h-6 text-black font-bold drop-shadow-2xl bg-slate-50 rounded-lg mt-5 text-sm">See More</button>
            </div>
        </div>
    </div>
  )
}

export default SlideCard

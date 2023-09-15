'use client'
import SlideCard from "./SlideCard"
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs'
import {useEffect, useState} from 'react'


interface Potato {
    id: number;
    name: string; 
    image: string;
    details: {}

}
function CardSlider() {
  
  // const potatoe= await fetch('http://localhost:3000/api/potatoes').then(
  //   (res) => res.json()
  // )
const [potatoe, setPotatoe] = useState('')

useEffect(() => {
  const potatoFetcher = fetch('http://localhost:3000/api/potatoes')
    .then((res) => res.json())
    .then((data) => setPotatoe(data))
}, [])
  

  const slideLeft = () => {
    let slide = document.getElementById('slide')
    slide.scrollLeft = slide.scrollLeft - 750
  }

  const slideRight = () => {
    let slide = document.getElementById('slide')
    slide.scrollLeft = slide.scrollLeft + 750
  }

  return (
    <div className="flex flex-row items-center relative"> 
      <BsFillArrowLeftCircleFill  onClick={slideLeft} className='opacity-50 cursor-pointer absolute w-12 h-12 mb-24 z-30 left-1 fill-slate-50 hover:opacity-100'/>
        <div id='slide' className="flex flex-row gap-5 mb-20 pt-20 overflow-x-scroll scroll whitespace-nowrap scroll-smooth overflow-y-hidden pl-6 scrollbar-hide">
          {potatoe? potatoe.map((potato : Potato) => (
              <SlideCard potato={potato} key={potato.id} />
          )) : ''}
        </div>
      <BsFillArrowRightCircleFill onClick={slideRight}className='opacity-50 cursor-pointer absolute w-12 h-12 mb-24 right-1 fill-slate-50 hover:opacity-100'/>
    </div>
  )
}

export default CardSlider
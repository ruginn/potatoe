'use client'
import Image from 'next/image'
import grid1 from '../../public/assets/grid1.jpg'
import grid2 from '../../public/assets/grid2.jpeg'
import grid3 from '../../public/assets/grid3.jpg'
import grid4 from '../../public/assets/grid4.jpg'
import grid5 from '../../public/assets/grid5.jpg'
import grid6 from '../../public/assets/grid6.jpg'
import grid7 from '../../public/assets/grid7.jpg'

function PotatoeGrid() {
  return (
    <div className='flex flex-col justify-center items-center w-full bg-gray-50 mb-14'>
        <h3 className='text-6xl leading-[60px] text-center'>We aim to help you find the perfect potato for any culinary adventure.</h3>
        <h3 className='text-2xl text-center'>Our mission is to rank and review different potato varieties based on flavor, texture, and versatility.</h3>
        <div className="grid grid-cols-4 grid-rows-4 gap-2 grid-flow-row bg-gray-50 w-5/6 ml-4 h-96">
            {/* <div className='row-span-4 rounded-md bg-blue-400'>1</div> */}
            <Image src={grid1} className='row-span-4 rounded-lg h-[100%] object-cover'/>
            {/* <div className="bg-blue-200 rounded-md">2</div> */}
            <Image src={grid2} className='rounded-lg h-[100%]  object-cover'/>
            {/* <div className="bg-blue-300 col-span-2 row-span-2 rounded-lg">3</div> */}
            <Image src={grid3} className='col-span-2 row-span-2 rounded-md h-[100%]  object-cover'/>
            {/* <div className="bg-gray-400 row-span-2 rounded-lg">4</div> */}
            <Image src={grid4} className='row-span-2 rounded-md h-[100%]  object-cover' />
            {/* <div className="bg-gray-500 rounded-lg">5</div> */}
            <Image src={grid5} className='rounded-md h-[100%]  object-cover' />
            {/* <div className="bg-gray-200 rounded-lg row-span-2">6</div> */}
            <Image src={grid6} className='row-span-2 rounded-md h-[100%]  object-cover' />
            {/* <div className="bg-blue-700 rounded-lg h-20 col-span-2">7</div> */}
            <Image src={grid7} className='col-span-2 rounded-md h-[100%] object-cover object-bottom' />
        </div>
    </div>
  )
}

export default PotatoeGrid
'use client'
import {motion} from 'framer-motion'
import Potato from '../../public/assets/potatoe.png'
import Image from 'next/image'
import Link from 'next/link'

function PotatoeFactsBanner() {
  return (
    <div className='w-screen h-screen flex flex-row'>
        <div className='flex flex-col w-3/6 h-full bg-gradient-to-tr from-amber-200 via-yellow-100 to-amber-100 justify-center items-center shadow-inner relative'>
            <motion.div
                initial={{x:-500, rotate: 45, }}
                whileInView={{x:1}}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  // repeat: Infinity,
                  // repeatDelay: 1
                }}
                className='absolute'
              >
                <Image 
                  src={Potato}
                  alt=''
                  height={700}
                  className='drop-shadow-2xl m-0'
                ></Image>
            </motion.div>
            <h1 className='text-7xl lg:text-[9rem] leading-none tracking-[.3em] font-bold m-0'>POTATO</h1>
            <h1 className='text-7xl lg:text-[9rem] leading-none tracking-[.3em] font-bold'>POTATO</h1>
            <h1 className='text-7xl lg:text-[9rem] leading-none tracking-[.3em] font-bold'>POTATO</h1>
            <h1 className='text-7xl lg:text-[9rem] leading-none tracking-[.3em] font-bold'>POTATO</h1>
            <h1 className='text-7xl lg:text-[9rem] leading-none tracking-[.3em] font-bold'>POTATO</h1>
            <div className='absolute'>
              <h1 className='text-7xl lg:text-[9rem] leading-none tracking-[.3em] text-transparent font-bold outline--text--2 m-0'>POTATO</h1>
              <h1 className='text-7xl lg:text-[9rem] leading-none tracking-[.3em] text-transparent font-bold outline--text--2'>POTATO</h1>
              <h1 className='text-7xl lg:text-[9rem] leading-none tracking-[.3em] text-transparent font-bold outline--text--2'>POTATO</h1>
              <h1 className='text-7xl lg:text-[9rem] leading-none tracking-[.3em] text-transparent font-bold outline--text--2'>POTATO</h1>
              <h1 className='text-7xl lg:text-[9rem] leading-none tracking-[.3em] text-transparent font-bold outline--text--2'>POTATO</h1>
            </div>
        </div>
        <div className='w-3/6 h-full flex flex-col justify-center px-12 pb-20 relative '>
                <motion.div 
                
                className='absolute w-64 h-64 rounded-full bg-amber-200 -z-20 right-[50px] top-[50px] blur-2xl opacity-80'></motion.div>
                <div className='absolute w-96 h-64 rounded-full bg-green-300 -z-20 right-[200px] top-[100px] blur-2xl opacity-80'></div>
                <div className='absolute w-96 h-96 rounded-full bg-blue-300 -z-20 right-[80px] top-[300px] blur-2xl opacity-50'></div>
                <div className='absolute w-full h-full bg-slate-100 opacity-60 -z-10 blur-3xl'></div>
                <h1 className='text-8xl font-bold'>Origin</h1>
                <p className='text-3xl my-4'>Potatoes were first cultivated by indigenous peoples in the Andes Mountains of South America over 7,000 years ago. They have been a staple food in the region ever since.</p>
                <Link href='/facts'>
                  <button className='self-start text-2xl text-white bg-black px-8 py-3 mt-4 hover:scale-110'>More Facts</button>
                </Link>
        </div>
    </div>
  )
}

export default PotatoeFactsBanner
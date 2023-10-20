'use client'
import {motion, useScroll, useTransform} from 'framer-motion'
import Potato from '../../public/assets/potatoe.png'
import Image from 'next/image'
import particleTexture from '../../public/assets/backgrounds/particleTexture.jpg'
import {useRef} from 'react'

function PotatoHero() {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref, 
        offset: ["1 0", "1.33 1"],
    })

    const x1 = useTransform(scrollYProgress, [0,1], [50, -500])
  return (
    <div className='w-screen relative h-[80vh]'>
        <div className='w-screen h-full absolute z-10'>
            <Image 
                src={particleTexture}
                alt=''
                className='w-screen h-full object-cover'
            ></Image>
        </div>
        <div className='rounded-full w-64 h-96 absolute bg-purple-800 left-8 top-8 z-20 blur-2xl'></div>
        <div className='rounded-full w-96 h-96 absolute bg-blue-800 bottom-8 right-2 z-20 blur-2xl'></div>
        <div className='bg-gradient-to-tr from-amber-300 via-yellow-100 to-amber-200 w-full h-full absolute z-30 opacity-80 flex justify-center items-center'>
            <div className='flex flex-col h-full justify-center items-center relative'>
            <motion.div
                initial={{ rotate: 45, }}
                // whileInView={{x:1}}
                // transition={{
                //   duration: 2,
                //   ease: "easeInOut",
                //   // repeat: Infinity,
                //   // repeatDelay: 1
                // }}
                style={{
                  // scale: scrollYProgress, 
                  // opacity: scrollYProgress, 
                  x: x1
                }}
                className='absolute '
              >
                <Image 
                  ref={ref}
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
        </div>
        <p>testing</p>
    </div>
  )
}

export default PotatoHero
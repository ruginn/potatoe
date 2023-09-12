'use client'
import Image from "next/image"
import {motion} from 'framer-motion'
import potatoe from '../../public/assets/potatoe.png' 
import PotatoeField from '../../public/assets/potatoe-feild-sunset.jpg'

export default function Hero () {
    return (
        <div className="w-screen h-[80vh] flex justify-center items-center bg-transparent relative ">
            <div className="w-full h-full absolute -z-20 -mt-24">
                <Image 
                    src={PotatoeField}
                    alt='Potatoe Field'
                    fill={true}
                    objectFit="cover"
                />
            </div>
            <div className="absolute w-full h-full -z-10 bg-slate-900 opacity-50 -mt-24"></div>
            {/* <div className="w-[900px] h-72 flex bg-transparent border-8 border-white relative items-center justify-center">
                <div className="relative">
                    <h1 className="text-8xl absolute font-medium text-black">THIS IS</h1>
                    <h1 className="text-8xl outline--text--2 text-transparent z-10 relative font-medium">THIS IS</h1>
                    <h1 className="text-8xl absolute font-medium text-black">POTATOE</h1>
                    <h1 className="text-8xl outline--text--2 text-transparent z-10 relative font-medium">POTATOE</h1> 
                </div>
                <motion.div 
                    variants={{
                        hidden: {opacity: 0, y: 75},
                        visible: {opacity: 1, y:0}
                    }}
                    // initial ='hidden'
                    animate = {{x:-720
                        }}
                    transition = {{duration: 4, delay: 0, type: 'spring'}}
                    className="absolute -right-2 -bottom-4">
                    <Image 
                        src={potatoe}
                        width={200}
                        height={100}
                        alt='Photo of potatoe'
                    />
                </motion.div>
            </div> */}
            <div className="w-full flex flex-col justify-center items-center text-center mb-[400px]">
                <h1 className="text-4xl text-white font-bold tracking-[20px]">{'Welcome to the'.toUpperCase()}</h1>
                <h1 className="text-4xl text-white font-bold tracking-[20px]">{'Ultimate Potato'.toUpperCase()}</h1>
                <h1 className="text-4xl text-white font-bold tracking-[20px]">{'Ranking Website!'.toUpperCase()}</h1>
            </div>
        </div>
    )
}
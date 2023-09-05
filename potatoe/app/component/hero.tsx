'use client'
import Image from "next/image"
import {motion} from 'framer-motion'
import potatoe from '../../public/assets/potatoe.png' 

export default function Hero () {
    return (
        <div className="w-full flex align-center justify-center bg-gray-50">
            <div className="w-[900px] flex mt-4 bg-gray-50 border-8 border-black mb-8 relative align-center justify-center">
                <div className="relative">
                    <h1 className="text-9xl absolute font-medium">THIS IS</h1>
                    <h1 className="text-9xl outline--text--2 text-transparent z-10 relative font-medium">THIS IS</h1>
                    {/* <h1 className="text-9xl font-medium absolute ">THIS IS</h1> */}
                    <h1 className="text-9xl absolute font-medium">POTATOE</h1>
                    <h1 className="text-9xl outline--text--2 text-transparent z-10 relative font-medium">POTATOE</h1> 
                </div>
                <motion.div 
                    variants={{
                        hidden: {opacity: 0, y: 75},
                        visible: {opacity: 1, y:0}
                    }}
                    // initial ='hidden'
                    animate = {{x:-720,
                        //  rotate:360
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
            </div>
        </div>
    )
}
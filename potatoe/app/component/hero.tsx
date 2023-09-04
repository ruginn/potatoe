import Image from "next/image"
import potatoe from '../../public/assets/potatoe.png' 

export default function Hero () {
    return (
        <div className="w-full flex align-center justify-center bg-gray-50">
            <div className="w-[900px] flex mt-4 bg-gray-50 border-8 border-black mb-8 relative">
                <div>
                    <h1 className="text-9xl font-medium">THIS IS</h1>
                    <h1 className="text-9xl outline--text--2 text-transparent z-10 relative font-bold">POTATOE</h1> 
                </div>
                <Image 
                    src={potatoe}
                    width={200}
                    height={100}
                    alt='Photo of potatoe'
                    className="absolute right-5 bottom-4"
                />
            </div>
        </div>
    )
}
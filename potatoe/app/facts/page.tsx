// 'use client'
// import { useEffect, useState } from "react"
// import {motion, useScroll, useTransform} from 'framer-motion'
// import {useRef} from 'react'


// function PotatoFacts() {
//   const ref = useRef(null)
//   // const {scrollYProgress} = useScroll({
//   //   target: ref, 
//   //   offset: ['0 1', '1.1, 1']
//   // })

//   // const x1 = useTransform(scrollYProgress, [0,1], [-1000, 0])
//   // const x2 = useTransform(scrollYProgress, [0,1], [1000, 0])

//   const [facts, setFacts] = useState([])

//   useEffect(() => {
//     fetch('http://localhost:3000/api/facts')
//     .then((res) => res.json())
//     .then((data) => setFacts(data))

//   }, [])
  

//   return (
//     <div className="w-screen">
//         <h1 className='text-3xl'> Potatoes are fascinating tubers with a rich history and many interesting facts. Here are some of the best potato facts:</h1>
//         <div className="w-full flex flex-col justify-center items-center">
//           {facts? 
//             facts.slice(1).map((fact : any) => {
//               if (fact.id % 2 === 0) {
//                 return (
//                   <motion.div whileInView={{y: -10, opacity: 1}} transition={{ ease: "easeOut", duration: 1 }} initial={{opacity: 0}} className="h-auto bg-stone-400 w-[500px] p-10 my-4">
//                     <h1 className="text-3xl">{fact.title}</h1>
//                     <p className="text-lg">{fact.fact}</p>
//                   </motion.div>
//                 )
//               } else  {
//                 return (
//                   <motion.div whileInView={{y: -10, opacity: 1}} transition={{ ease: "easeOut", duration: 1 }} initial={{opacity: 0}} className="h-auto bg-indigo-300 w-[500px] p-10 my-4">
//                     <h1 className="text-3xl">{fact.title}</h1>
//                     <p className="text-lg">{fact.fact}</p>
//                   </motion.div>
//                 )
//               }
//             }
//             )
//           :''}
//         </div>
//     </div>
//   )
// }

// export default PotatoFacts
'use client'
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { useRef, useEffect, useState } from "react";
import Image from 'next/image'

const OppoScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

    const [facts, setFacts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/facts')
    .then((res) => res.json())
    .then((data) => setFacts(data))

  }, [])

  return (
    <>
      {/* <img src={facts[0].img} alt="" /> */}
      <div className="bg-white text-black p-4 grid place-items-center">
        <FiArrowDown className="text-xl" />
      </div>
      <section ref={targetRef} className="flex bg-black text-white">
        <Content content={facts} />
        <Images content={facts} scrollYProgress={scrollYProgress} />
      </section>
      <div className="bg-black text-white p-4 grid place-items-center">
        <FiArrowUp className="text-xl" />
      </div>
    </>
  );
};

const Content = ({ content }) => {
  return (
    <div className="w-full">
      {content.map(({ id, title, fact }, idx) => (
        <div
          key={id}
          className={`p-8 h-screen flex flex-col justify-between ${
            idx % 2 ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          <h3 className="text-3xl font-medium">{title}</h3>
          <p className="font-light w-full max-w-md">{fact}</p>
        </div>
      ))}
    </div>
  );
};

const Images = ({ content, scrollYProgress }) => {
  const top = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${(content.length - 1) * 100}vh`, "0vh"]
  );

  return (
    <div className="h-screen overflow-hidden sticky top-0 w-24 md:w-full">
      <motion.div style={{ top }} className="absolute left-0 right-0">
        {[...content].reverse().map(({ img, id, title }) => (
          // <img
            // key={id}
            // alt={title}
            // className="h-screen w-full object-cover"
            // src={img}
          // />
          <Image
            src={img}
            className="h-screen w-full object-cover"
            alt={title}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default OppoScroll;

const items = [
  {
    id: 1,
    title: "Black Nike w white check",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    img: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=830&q=80",
  },
  {
    id: 2,
    title: "Bunch of black and white shoes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    img: "https://images.unsplash.com/photo-1600054904350-1d493ae5f922?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80",
  },
  {
    id: 3,
    title: "White shoes in the rain",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    img: "https://images.unsplash.com/photo-1465479423260-c4afc24172c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
  },
  {
    id: 4,
    title: "White shoes with black heel",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    img: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1662&q=80",
  },
];
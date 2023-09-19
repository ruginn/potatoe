'use client'
import { useEffect, useState } from "react"
import {motion, useScroll, useTransform} from 'framer-motion'
import {useRef} from 'react'


function PotatoFacts() {
  const ref = useRef(null)
  const {scrollYProgress} = useScroll({
    target: ref, 
    offset: ['0 1', '0.5, 1']
  })

  const x1 = useTransform(scrollYProgress, [0,1], [-1000, 0])
  const x2 = useTransform(scrollYProgress, [0,1], [1000, 0])

  const [facts, setFacts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/facts')
    .then((res) => res.json())
    .then((data) => setFacts(data))

  }, [])
  

  return (
    <div className="w-screen">
        <h1 className='text-3xl'> Potatoes are fascinating tubers with a rich history and many interesting facts. Here are some of the best potato facts:</h1>
        <div className="w-full flex flex-col justify-center items-center">
          {facts? 
            facts.slice(1).map((fact : any) => {
              if (fact.id % 2 === 0) {
                return (
                  <motion.div ref={ref} className="h-auto bg-stone-400 w-96" style={{x: x1}}>
                    <h1 className="text-3xl">{fact.id}</h1>
                    <p className="text-lg">{fact.fact}</p>
                  </motion.div>
                )
              } else  {
                return (
                  <motion.div ref={ref} className="h-auto bg-indigo-300 w-96" style={{x: x2}}>
                    <h1 className="text-3xl">{fact.id}</h1>
                    <p className="text-lg">{fact.fact}</p>
                  </motion.div>
                )
              }
            }
            )
          :''}
        </div>
    </div>
  )
}

export default PotatoFacts
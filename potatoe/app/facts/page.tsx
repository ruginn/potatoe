'use client'
import { useEffect, useState } from "react"
import { BsTypeH1 } from "react-icons/bs"


function PotatoFacts() {

  const [facts, setFacts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/facts')
    .then((res) => res.json())
    .then((data) => setFacts(data))

  }, [])
  

  return (
    <div>
        <h1 className='text-3xl'> Potatoes are fascinating tubers with a rich history and many interesting facts. Here are some of the best potato facts:</h1>
        <div>
          {facts? 
            facts.map((fact : any) => (
              <div key={fact.id}>
                <h1 className="font-bold text-2xl">{fact.id}. {fact.title}</h1>
                <p>{fact.fact}</p>
              </div>
            ))
          :''}
        </div>
    </div>
  )
}

export default PotatoFacts
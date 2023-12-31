import { StaticImageData } from "next/image";
import Image from 'next/image'
import PotatoRater from "@/app/potatoes/[id]/components/PotatoRater";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import UserRatings from "@/app/potatoes/[id]/components/UserRatings";

interface Potato {
    id: string| number;
    name: string; 
    image: StaticImageData;
    details: {
      description: string;
      best_uses: string[]
    }
  }

async function PotatoPage({params}: any) {
    const potatoes : Potato[] = await fetch('http:localhost:3000/api/potato', {
      cache: "no-cache"
    })
    .then((res) => res.json())

    const potato = potatoes.find((potato) => potato.id.toString() === params.id)!
    
    // const session = await getServerSession(authOptions)
    // console.log(session)
    // console.log(potato)
  return (
    <div>   
        <Image 
        src={potato.image}
        alt=''
        className="w-64 h-64 object-cover"
        />
        <h1>{potato.name}</h1>
        <p>{potato.details.description}</p>
        <p>Best Uses</p>
        {potato.details.best_uses.map((use) => {
            return (
                <li>{use}</li>
            )
        })}
        <PotatoRater potato={potato} />
        <UserRatings potato={potato}/>
    </div>
  )
}

export default PotatoPage
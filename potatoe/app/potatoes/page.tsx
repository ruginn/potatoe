import { StaticImageData } from "next/image";
import  Image  from "next/image";
import Link from "next/link";


interface Potato {
  id: number;
  name: string; 
  image: StaticImageData;
  details: {
    description: string;
    best_uses: string[]
  }
}

async function page() {

  const potatoes : Potato[] = await fetch('http://localhost:3000/api/potato', {
    cache: 'no-cache'
  })
    .then((res) => res.json())  


  return (
    <div>
      <h1>Vote on your favorite potato!</h1>
      {potatoes.map((potato) => {
        return (
          <div key={potato.id}>
            <Image
              alt=''
              src={potato.image}
              className="w-64 h-64 object-cover rounded-3xl"
            />
            <h1>{potato.name}</h1>
            <p>{potato.details.description}</p>
            <Link href={`potatoes/${potato.id}`} className="p-3 my-3 bg-blue-100 rounded-md ">Click For More</Link>
          </div>
        )
      }
      )}
    </div>
  )
}

export default page
import SlideCard from "./SlideCard"


interface Potato {
    id: number;
    name: string; 
    image: string;
    details: {}

}
async function CardSlider() {
  
  const potatoes= await fetch('http://localhost:3000/api/potatoe').then(
    (res) => res.json()
  )
    
  console.log(potatoes)

  return (
    <div className="flex flex-col overflow-hidden mb-20 pt-20 whitespace-nowrap overscroll-y-contain">
        {potatoes.map((potato : Potato) => (
            <SlideCard potato={potato} key={potato.id} />
        ))}
    </div>
  )
}

export default CardSlider
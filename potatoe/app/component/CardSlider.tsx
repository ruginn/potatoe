import SlideCard from "./SlideCard"

function CardSlider() {
  return (
    <div className="flex flex-row overflow-hidden mb-20 pt-20">
        <SlideCard/>
        <SlideCard/>
    </div>
  )
}

export default CardSlider
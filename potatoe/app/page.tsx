import PotatoeBanner from "./component/PotatoeBanner"
import PotatoeGrid from "./component/PotatoeGrid"
import Hero from "./component/hero"
import Goop from "./component/Goop"
import CardSlider from "./component/CardSlider"

export default function Home() {


  return (
    <main >
      <Hero />
      <PotatoeGrid />
      {/* <PotatoeBanner /> */}
      {/* <Goop /> */}
      <CardSlider />
    </main>
  )
}

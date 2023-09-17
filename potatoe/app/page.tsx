import PotatoeBanner from "./component/PotatoBanner"
import PotatoeGrid from "./component/PotatoGrid"
import Hero from "./component/hero"
import Goop from "./component/Goop"
import CardSlider from "./component/CardSlider"
import PotatoeFactsBanner from "./component/PotatoFactsBanner"

export default function Home() {


  return (
    <main >
      <Hero />
      <PotatoeGrid />
      {/* <PotatoeBanner /> */}
      {/* <Goop /> */}
      <CardSlider />
      <PotatoeFactsBanner />
    </main>
  )
}

import PotatoeBanner from "./component/PotatoeBanner"
import PotatoeGrid from "./component/PotatoeGrid"
import Hero from "./component/hero"
import Goop from "./component/Goop"

export default function Home() {
  return (
    <main >
      <Hero />
      <PotatoeGrid />
      <PotatoeBanner />
      <Goop />
    </main>
  )
}

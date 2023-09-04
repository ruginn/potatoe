import PotatoeBanner from "./component/PotatoeBanner"
import PotatoeGrid from "./component/PotatoeGrid"
import Hero from "./component/hero"

export default function Home() {
  return (
    <main >
      <Hero />
      <PotatoeGrid />
      <PotatoeBanner />
    </main>
  )
}

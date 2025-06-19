import About from '@/sections/about'
import Discover from '@/sections/discover'
import Hero from '@/sections/hero'
import Pricing from '@/sections/prices'
import Testimonies from '@/sections/testimonies'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-28 w-full  lg:max-w-[1300px] mx-auto mt-10">
      <Hero />

      <Discover />

      <About />

      <Pricing />

      <Testimonies />
    </main>
  )
}

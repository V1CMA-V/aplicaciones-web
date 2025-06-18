import Discover from '@/sections/discover'
import Hero from '@/sections/hero'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full max-w-[1600px] mx-auto">
      <Hero />

      <Discover />
    </main>
  )
}

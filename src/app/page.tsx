import Hero from '@/sections/hero'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto">
      <Hero />

      <section className="h-[300dvh]">
        <h2 className="text-3xl font-bold text-center">Nuestros Servicios</h2>
        <p className="mt-4 text-center">
          Ofrecemos una variedad de servicios para ayudarte a alcanzar tus objetivos de salud.
        </p>
      </section>
    </main>
  )
}

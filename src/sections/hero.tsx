import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full h-[80dvh]  bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-cover rounded-3xl px-4">
      <div className="absolute inset-0 bg-black/40 rounded-3xl z-0" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full gap-10 text-center">
        <h1 className="text-6xl font-bold text-white text-balance max-w-5xl mx-auto tracking-wide leading-tight ">
          Mejora con tus pacientes. Mejora sus resultados
        </h1>
        <p className="text-white text-pretty text-xl w-full max-w-4xl mx-auto">
          Zalud es la plataforma ideal para nutriólogos, entrenadores y médicos. Organiza planes
          alimenticios, monitorea progreso físico, recibe comentarios y haz seguimiento
          personalizado en un solo lugar.
        </p>
        <Button variant="link" asChild className="text-white text-2xl">
          <Link href="/login">Crea tu cuenta</Link>
        </Button>
      </div>
    </section>
  )
}

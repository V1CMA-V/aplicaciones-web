import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="flex my-20 items-center justify-center">
      <div className="text-center flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold">Huy! Creo que te has perdido 😥</h1>
        <p className="text-lg text-pretty">
          Parece ser que has intentando a entrar a una página que no existe o que no tienes permisos
        </p>

        <p className="text-lg text-pretty">
          Recuerda que debes ir a la pagina adecuada para tu rol. Estos son algunos de nuestos
          enlaces útiles:
        </p>

        <div className="mt-6 flex flex-col items-center gap-4">
          <Link href="/dashboard/especialista">
            <Button className="cursor-pointer">Ir al menu de los Especialista</Button>
          </Link>
          <Link href="/dashboard/pacientes">
            <Button className="cursor-pointer">Ir al menu de los Pacientes</Button>
          </Link>
          <Link href="/">
            <Button className="cursor-pointer">Ir al inicio</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

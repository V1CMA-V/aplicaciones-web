import { Separator } from '@/components/ui/separator'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@radix-ui/react-hover-card'

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-10 w-full lg:max-w-[1300px] mx-auto rounded-xl my-16 p-6 bg-black/90 text-white overflow-auto">
      <div className="flex items-center justify-between w-full px-16">
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-semibold">
            Observar el progreso de tus clientes nunca fue tan fácil.
          </p>
          <span className="text-sm text-gray-300">
            Con nuestra herramienta, puedes hacer un seguimiento de cada paso del viaje del cliente.
          </span>
        </div>
        <HoverCard>
          <HoverCardTrigger className="bg-white/90 rounded-full p-2 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer w-10 h-10 flex items-center justify-center">
            ❓
          </HoverCardTrigger>
          <HoverCardContent>
            <p className="px-2 py-1 bg-white/90 text-black rounded-md shadow-lg">
              Cualquier consulta que tengas, no dudes en preguntar.
            </p>
          </HoverCardContent>
        </HoverCard>
      </div>
      <Separator />
      <div className="w-full px-10 flex justify-between items-center gap-2">
        <span className="text-md ">
          <strong>© 2025 Zalud.</strong> Todos los derechos reservados.
        </span>
        <span className="text-md">Hecho con ❤️ por el equipo de Zalud</span>
        <span className="text-md">Política de privacidad | Términos de servicio</span>
      </div>
    </footer>
  )
}

import GridItem from '@/components/gridItem'
import TitleSection from '@/components/titleSections'
import { CheckCircle } from 'lucide-react'

export default function Discover() {
  return (
    <section className="flex flex-col items-center justify-center w-full gap-8">
      <TitleSection
        title="Descubre lo que Zalud puede hacer por ti"
        description={
          <>
            Zalud es la plataforma ideal para nutriólogos, entrenadores y médicos. Organiza planes
            alimenticios, monitorea progreso físico, recibe comentarios y haz seguimiento
            personalizado en un solo lugar.
          </>
        }
      ></TitleSection>

      {/* Grid mejorado */}
      <div className="grid grid-cols-1 md:grid-cols-4  md:grid-rows-[200px_minmax(300px,1fr)] gap-4 w-full">
        {/* Bloque grande */}
        <GridItem
          imgUrl="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=1191&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="col-span-1 md:col-span-2 row-span-1 md:row-span-2"
          hoverContent={
            <p>
              Con la App <strong>Zalud</strong>, puedes realizar un seguimiento de tu progreso y
              recibir recomendaciones personalizadas.
            </p>
          }
        >
          <div className="bg-[#0a0a0a]/90 p-6 rounded-lg text-white w-full max-w-xl group-hover:scale-105 transition-transform duration-300 ease-in-out flex flex-row items-center gap-6">
            {/* Icono de encuesta */}
            <CheckCircle className="h-12 w-12 text-green-400" />
            <div className="flex flex-col justify-center flex-1">
              <div className="flex items-center gap-1 mb-2">
                {/* Estrellas de satisfacción */}
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.176 0l-3.38 2.454c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.287-3.967z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                Encuestas de Satisfacción
              </h3>
              <p className="text-lg text-pretty">
                Tu opinión nos ayuda a mejorar. ¡Gracias por confiar en{' '}
                <strong className="tracking-wider">Zalud</strong>!
              </p>
            </div>
          </div>
        </GridItem>

        {/* Bloques medianos y pequeños */}

        <GridItem
          imgUrl="https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="col-span-1 md:col-span-2 row-span-1 "
          hoverContent={
            <p>
              Utilizando <strong>Zalud</strong>, puedes crear planes de entrenamiento personalizados
              y monitorear tu progreso de manera efectiva.
            </p>
          }
          children={undefined}
        ></GridItem>

        <GridItem
          imgUrl="https://images.unsplash.com/photo-1720962158813-29b66b8e23e1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="col-span-1 md:col-span-1 row-span-1"
          hoverContent={
            <p>
              <strong>Zalud</strong> te ofrece una interfaz intuitiva para gestionar tus clientes y
              sus planes de salud.
            </p>
          }
          children={undefined}
        ></GridItem>

        <GridItem
          imgUrl="https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="col-span-1 md:col-span-1 row-span-1"
          hoverContent={
            <p>
              No te preocupes por la seguridad de tus datos, <strong>Zalud</strong> utiliza
              tecnología avanzada para proteger tu información personal y la de tus clientes.
            </p>
          }
          children={undefined}
        ></GridItem>
      </div>
    </section>
  )
}

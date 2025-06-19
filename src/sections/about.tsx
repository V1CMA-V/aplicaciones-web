import PlusHover from '@/components/plus'
import TitleSection from '@/components/titleSections'

export default function About() {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-10 px-4 md:px-8">
      <TitleSection
        title="La plataforma ideal para nutriólogos, entrenadores y médicos"
        description={
          <>
            Plataforma ideal para estar en contacto con tus pacientes, organizar planes
            alimenticios. Con la mejor tecnología y herramientas, podrás ofrecer un servicio
            personalizado y de calidad.
          </>
        }
      ></TitleSection>

      <div className="grid grid-cols-1 md:grid-cols-4  md:grid-rows-[200px_minmax(300px,1fr)] gap-4 w-full">
        {/* CardItem number */}
        <div className="px-4 py-6 shadow-xl rounded-lg flex flex-col items-center justify-center text-center transition-transform hover:scale-105">
          <span className="text-4xl font-bold">50+</span>
          <h3 className="text-2xl font-bold mb-2">Especialistas</h3>
        </div>

        <div className="px-4 py-6 bg-black/90 text-white rounded-lg flex flex-col items-center justify-center text-center transition-transform hover:scale-105">
          <span className="text-4xl font-bold">100+</span>
          <h3 className="text-2xl font-bold mb-2">Pacientes</h3>
        </div>

        {/* CardItem img */}

        <div className="px-8 py-6 bg-white rounded-lg flex flex-col items-center justify-center text-balance gap-4 transition-transform hover:scale-105 row-span-2 shadow-lg relative ">
          <p className="text-lg">
            Nuestro objetivo es ayudar a los profesionales de la salud a ofrecer un mejor servicio a
            sus pacientes.
          </p>
          <p className="text-lg">
            Con la mejor tecnología y herramientas, podrás ofrecer un servicio personalizado y de
            calidad.
          </p>

          {/* PlusHover */}
          <div className="absolute bottom-4 right-4 z-10">
            <div className="bg-white/70 rounded-full p-2 shadow-lg  transition-colors duration-300 ease-in-out flex items-center justify-center cursor-crosshair">
              <PlusHover>
                Siempre estamos al tanto de tus necesidades. Para seguir mejorando nuestros
                servicios, no dudes en contactarnos.
              </PlusHover>
            </div>
          </div>
        </div>

        <div className="px-8 py-6 bg-[url('https://images.unsplash.com/photo-1543362906-acfc16c67564?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-cover rounded-lg flex flex-col items-center justify-center text-balance gap-4 transition-transform hover:scale-105 row-span-2 shadow-lg relative ">
          {/* PlusHover */}
          <div className="absolute bottom-4 right-4 z-10">
            <div className="bg-white/70 rounded-full p-2 shadow-lg  transition-colors duration-300 ease-in-out flex items-center justify-center cursor-crosshair">
              <PlusHover>
                Con las mejores recetas y planes alimenticios, podrás ofrecer un servicio
                personalizado y de calidad.
              </PlusHover>
            </div>
          </div>
        </div>

        {/* CardItem number */}
        <div className="px-4 py-6 shadow-xl rounded-lg flex flex-col items-center justify-center text-center transition-transform hover:scale-105">
          <span className="text-4xl font-bold">5+</span>
          <h3 className="text-2xl font-bold mb-2">Instituciones</h3>
        </div>

        <div className="px-4 py-6 shadow-xl rounded-lg flex flex-col items-center justify-center text-center transition-transform hover:scale-105">
          <span className="text-4xl font-bold">50+</span>
          <h3 className="text-2xl font-bold mb-2">Recetas</h3>
        </div>
      </div>
    </section>
  )
}

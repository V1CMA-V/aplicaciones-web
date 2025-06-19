import TitleSection from '@/components/titleSections'

export default function Pricing() {
  return (
    <section className="w-full flex flex-col items-center justify-between gap-10 px-4 md:px-8">
      <TitleSection
        title="Planes y precios"
        description="Elige el plan que mejor se adapte a tus necesidades y comienza a disfrutar de todas las ventajas que ofrecemos."
      />

      <div className="w-full grid grid-rows-[2fr_minmax(250px,1fr)] grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-8">
        {/* Plan Básico */}
        <div className="bg-white flex flex-col items-center justify-between rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
          <div className="w-full py-5 overflow-hidden rounded-t-lg text-center bg-red-400">
            <span className="text-white font-semibold text-xl ">Primer mes gratis 🔥</span>
          </div>
          <div className="px-6 py-10 flex flex-col flex-1 w-full text-center">
            <h3 className="text-3xl font-bold mb-4">Plan Básico</h3>
            <p className="text-lg mb-4 ">
              <span className="text-xl font-bold tracking-wider">$9.99</span>/mes
            </p>
            <p className="text-lg mb-4">Descripción del plan básico:</p>
            <ul className="list-disc pl-5 mb-4 flex-1 text-start m-auto">
              <li>Acceso a recetas básicas</li>
              <li>Seguimiento de progreso limitado</li>
              <li>Soporte por correo electrónico</li>
              <li>Limite de 20 pacientes</li>
            </ul>
            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors mt-auto">
              Elegir Plan
            </button>
          </div>
        </div>

        {/* Plan Recomendado */}
        <div className="bg-white flex flex-col items-center justify-between rounded-lg shadow-2xl hover:shadow-2xl transition-shadow duration-300 h-full scale-105 relative z-10">
          <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            Recomendado
          </div>
          <div className="w-full py-5 overflow-hidden rounded-t-lg text-center bg-gradient-to-r from-blue-500 to-blue-400">
            <span className="text-white font-semibold text-xl">¡Mejor opción! ⭐</span>
          </div>
          <div className="px-6 py-10 flex flex-col flex-1 w-full text-center">
            <h3 className="text-3xl font-bold mb-4">Plan Master</h3>
            <p className="text-lg mb-4">
              <span className="text-xl font-bold tracking-wider">$19.99</span>/mes
            </p>
            <ul className="list-disc pl-5 mb-4 flex-1 text-start m-auto">
              <li>Acceso a todas las recetas</li>
              <li>Seguimiento de progreso avanzado</li>
              <li>Soporte prioritario</li>
              <li>Acceso a comunidad exclusiva</li>
              <li>Limite de 50 pacientes</li>
            </ul>
            <button className="w-full  bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors mt-auto font-bold shadow-lg">
              Elegir Plan
            </button>
          </div>
        </div>

        {/* Plan Premium */}
        <div className="bg-white flex flex-col items-center justify-between rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
          <div className="w-full py-5 overflow-hidden rounded-t-lg text-center bg-red-400">
            <span className="text-white font-semibold text-xl">-70% en tu primer mes 🔥</span>
          </div>
          <div className="px-6 py-10 flex flex-col flex-1 w-full text-center">
            <h3 className="text-3xl font-bold mb-4">Plan Premium</h3>
            <p className="text-lg mb-4">
              <span className="text-xl font-bold tracking-wider">$29.99</span>/mes
            </p>
            <p className="text-lg mb-4">Descripción del plan premium:</p>
            <ul className="list-disc pl-5 mb-4 flex-1 text-start m-auto">
              <li>Acceso a todas las recetas</li>
              <li>Seguimiento de progreso completo</li>
              <li>Soporte 24/7</li>
              <li>Acceso a comunidad exclusiva</li>
              <li>Limite de 100 pacientes</li>
            </ul>
            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors mt-auto">
              Elegir Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

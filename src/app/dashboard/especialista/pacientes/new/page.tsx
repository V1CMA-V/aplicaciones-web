import { RegisterPatient } from './components/registroPacientes'

export default function Page() {
  return (
    <div className="flex flex-col mt-15 items-center justify-center gap-10">
      <h1 className="text-2xl font-bold">Agregar a nuevo Paciente</h1>
      <p className="text-lg">
        Necesitaremos algunos datos para poder crear el perfil del paciente.
        <br />
        Una vez creado, <strong>zalud</strong> te ayudara a gestionar tu agenda y pacientes.
      </p>

      <div className="w-full max-w-7xl m-auto ">
        <RegisterPatient />
      </div>
    </div>
  )
}

'use client'

import { useUser } from '@clerk/nextjs'
import { InputForm } from './components/forms'

export default function Home() {
  const { user } = useUser()

  return (
    <div className="flex flex-col mt-15 items-center justify-center gap-10">
      <h1 className="text-2xl font-bold">Hola 👋, {user?.firstName}</h1>
      <p className="text-lg">
        Ya casi estas listo para utilizar nuestra plataforma <strong>zalud</strong> solo necesitas
        completar tu perfil.
      </p>

      <div className="w-full max-w-7xl m-auto ">
        <InputForm
          nombre={user?.firstName || ''}
          apellido={user?.lastName || ''}
          correo={user?.primaryEmailAddress?.emailAddress || ''}
          foto_perfil={user?.imageUrl || ''}
        />
      </div>
    </div>
  )
}

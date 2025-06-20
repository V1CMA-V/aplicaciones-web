'use client'

import { useUser } from '@clerk/nextjs'
import { InputForm } from './components/forms'

export default function Home() {
  const { user } = useUser()

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1 className="text-2xl font-bold">Hola 👋, {user?.firstName}</h1>
      <p className="text-lg">
        Ya casi estas listo para utilizar nuestra plataforma <strong>zalud</strong> solo necesitas
        completar tu perfil.
      </p>

      <div className="w-1/2 mt-4">
        <InputForm
          name={user?.fullName || ''}
          email={user?.primaryEmailAddress?.emailAddress || ''}
          image={user?.imageUrl || ''}
        />
      </div>
    </div>
  )
}

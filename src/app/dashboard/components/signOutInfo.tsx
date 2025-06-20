import { Button } from '@/components/ui/button'
import { SignedOut, SignInButton } from '@clerk/nextjs'

export default function NotCount() {
  return (
    <section className="flex h-screen items-center justify-center flex-col  gap-10">
      <h1 className="text-6xl font-bold">Inicia sesión</h1>
      <p className="mt-4 text-xl">Esta es una ruta protegida que requiere autenticación.</p>
      <SignedOut>
        <SignInButton mode="modal" signUpFallbackRedirectUrl={'/dashboard'}>
          <Button className="cursor-pointer text-xl">Iniciar sesión</Button>
        </SignInButton>
      </SignedOut>
    </section>
  )
}

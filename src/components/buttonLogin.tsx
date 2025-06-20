import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from './ui/button'

export default function ButtonLogin() {
  return (
    <>
      <SignedOut>
        <SignInButton mode="modal" fallbackRedirectUrl="/newEspecialist">
          <Button className="cursor-pointer">Iniciar sesión</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  )
}

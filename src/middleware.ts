import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isEspecialistaRoute = createRouteMatcher(['/dashboard/especialista(.*)'])
const isPacienteRoute = createRouteMatcher(['/dashboard/paciente(.*)'])

export default clerkMiddleware(async (auth, req) => {
  if (isEspecialistaRoute(req)) {
    await auth.protect((has) => {
      return has({ role: 'admin' })
    })
    return
  }

  if (isPacienteRoute(req)) {
    await auth.protect((has) => {
      return has({ role: 'member' })
    })
    return
  }

  // Si es otra ruta protegida general en /dashboard, puedes aplicar protección genérica o personalizada
  // await auth.protect(); // <- Solo si quieres proteger otras rutas
})

export const config = {
  matcher: [
    // Ignorar archivos estáticos y rutas internas de Next.js
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Siempre ejecutar en rutas API
    '/(api|trpc)(.*)',
  ],
}

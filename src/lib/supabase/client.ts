import { createBrowserClient } from '@supabase/ssr'

import { auth } from '@clerk/nextjs/server'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      // Supabase validará el token generado por Clerk
      accessToken: async () => {
        const session = await auth()
        return session.getToken() // equivalente al token Supabase
      },
    },
  )
}

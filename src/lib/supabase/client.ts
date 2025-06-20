'use client'

import { useSession } from '@clerk/nextjs'
import { createClient } from '@supabase/supabase-js'

export default function createClientSupabase() {
  const { session } = useSession()

  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      async accessToken() {
        return session?.getToken() ?? null
      },
    },
  )
}

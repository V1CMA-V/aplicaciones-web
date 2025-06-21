'use client'

import { useSession } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import { useMemo } from 'react'

function useUserId() {
  const { session } = useSession()
  return session?.user.id || null
}

export function PageRedirect<T extends { user_id: string }>({
  data,
  onFound,
  onNotFound,
}: {
  data: T[]
  onFound?: (info: T) => React.ReactNode
  onNotFound?: () => React.ReactNode
}) {
  const userId = useUserId()

  const userInfo = useMemo(() => {
    if (!userId) return null
    return data.find((item) => item.user_id === userId) || null
  }, [data, userId])

  if (!userId) {
    return <div>No user session available.</div>
  }

  if (!userInfo) {
    return onNotFound ? onNotFound() : <div>No information found for the user.</div>
  }

  redirect('/dashboard/especialista')
}

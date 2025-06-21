'use client'

import { useSession } from '@clerk/nextjs'

export function PageRedirect({ data }: { data: object }) {
  const { session } = useSession()
  const userId = session?.user.id

  function searchInfo() {
    if (!userId) {
      console.error('User ID is not available')
      return null
    }

    // Simulate a search operation, replace with actual logic
    const userInfo = data.find((item: any) => item.user_id === userId)

    if (!userInfo) {
      console.warn('No information found for the user')
      return null
    }

    return userInfo
  }

  return <pre>{JSON.stringify(searchInfo(), null, 2)}</pre>
}

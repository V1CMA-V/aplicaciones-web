'use client'

import { usePathname } from 'next/navigation'

export function LayoutConditional({
  children,
  header,
  footer,
}: {
  children: React.ReactNode
  header: React.ReactNode
  footer: React.ReactNode
}) {
  const pathname = usePathname()
  const isDashboard = pathname.startsWith('/dashboard')
  return (
    <>
      {!isDashboard && header}
      {children}
      {!isDashboard && footer}
    </>
  )
}

import '@/app/globals.css'
import { dark } from '@clerk/themes'

import { LayoutConditional } from '@/components/LayoutConditional'
import Footer from '@/sections/footer'
import { Header } from '@/sections/header'
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Toaster } from 'sonner'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Zalud | Sistema de Gestión de Salud',
  description:
    'Zalud es un sistema de gestión de salud que permite a los pacientes y especialistas gestionar sus citas, tareas y más.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="es">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <LayoutConditional header={<Header />} footer={<Footer />}>
            {children}
            <Toaster />
          </LayoutConditional>
        </body>
      </html>
    </ClerkProvider>
  )
}

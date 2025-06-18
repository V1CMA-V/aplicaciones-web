'use client'

import Link from 'next/link'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

export function Header() {
  return (
    <header
      id="header-animation"
      className="sticky top-4 z-50 mx-auto flex h-20 w-full max-w-7xl rounded-2xl select-none items-center  sm:h-screen  md:h-20"
    >
      <div className="relative flex justify-between px-6 py-4 md:w-full">
        <Link href="/" className="flex items-center gap-2">
          <h3 className="text-2xl uppercase font-semibold tracking-widest ">Zalud</h3>
        </Link>

        <NavigationMenu viewport={false} className="flex w-full items-center justify-between">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Inicio</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mt-4 mb-2 text-lg font-medium">ZALUD</div>
                        <p className="text-muted-foreground text-sm leading-tight">
                          La app que conecta a profesionales de la salud con sus pacientes para
                          mejorar su bienestar.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="Agenda 📅">
                    Organiza tus citas y mantén un seguimiento de tus pacientes.
                  </ListItem>
                  <ListItem href="/docs/students" title="Estudiantes 👨‍🎓👩‍🎓">
                    Si eres estudiante, aquí encontrarás recursos y guías para tu formación.
                  </ListItem>
                  <ListItem href="/docs/features" title="Características clave 📊">
                    Seguimiento de progreso, control de dietas, historial clínico, comentarios y
                    más.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/price">Precios</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Recursos</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#">
                        <div className="font-medium">Menus</div>
                        <div className="text-muted-foreground">
                          Explora todos los menús disponibles.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">
                        <div className="font-medium">Recetas</div>
                        <div className="text-muted-foreground">
                          Descubre recetas saludables y deliciosas.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">
                        <div className="font-medium">Blog</div>
                        <div className="text-muted-foreground">
                          Artículos sobre nutrición, salud y bienestar.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/find-specialist">Encuentra a tu especialista</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div>
          <Button variant="outline" asChild>
            <Link href="/login">Iniciar sesión</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

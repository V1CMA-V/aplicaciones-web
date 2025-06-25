'use client'

import {
  IconChartBar,
  IconHelp,
  IconHome,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from '@tabler/icons-react'
import * as React from 'react'

import { NavDocuments } from '@/components/nav-documents'
import { NavMain } from '@/components/nav-main'
import { NavSecondary } from '@/components/nav-secondary'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { UserButton } from '@clerk/nextjs'

const data = {
  navMain: [
    {
      title: 'Inicio',
      url: '/dashboard/especialista',
      icon: IconHome,
    },
    {
      title: 'Pacientes',
      url: '/dashboard/especialista/pacientes',
      icon: IconUsers,
    },
    {
      title: 'Recetas',
      url: '/dashboard/especialista/recetas',
      icon: IconListDetails,
    },
    {
      title: 'Citas',
      url: '/dashboard/especialista/citas',
      icon: IconChartBar,
    },
  ],

  navSecondary: [
    {
      title: 'Ajustes',
      url: '#',
      icon: IconSettings,
    },
    {
      title: 'Ayuda',
      url: '#',
      icon: IconHelp,
    },
    {
      title: 'Buscar',
      url: '#',
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: 'Informacion Personal',
      url: '#',
      icon: IconUsers,
    },
    {
      name: 'Reportes',
      url: '#',
      icon: IconReport,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <a href="/">
                <span className="text-base p-2 h-6 w-6 grid place-content-center rounded-full border border-black bg-white font-bold">
                  Z
                </span>
                <span className="text-base font-semibold">Zalud</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <UserButton />
      </SidebarFooter>
    </Sidebar>
  )
}

'use client'

import { CalendarPlusIcon } from 'lucide-react'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Label } from '@/components/ui/label'

export default function Calendar32({ label }: { label?: string }) {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(undefined)

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="date" className="px-1">
        {label}
      </Label>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant="outline" id="date" className="w-48 justify-between font-normal">
            {date ? date.toLocaleDateString() : 'Select date'}
            <CalendarPlusIcon />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="w-auto overflow-hidden p-0">
          <DrawerHeader className="sr-only">
            <DrawerTitle>Selecciona una fecha</DrawerTitle>
            <DrawerDescription>Establece una fecha</DrawerDescription>
          </DrawerHeader>
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date)
              setOpen(false)
            }}
            className="mx-auto [--cell-size:clamp(0px,calc(100vw/7.5),52px)]"
          />
        </DrawerContent>
      </Drawer>
    </div>
  )
}

'use client'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { format } from 'date-fns'
import { PlusIcon } from 'lucide-react'
import { useState } from 'react'

const events = [
  {
    title: 'Team Sync Meeting',
    from: '2025-06-12T09:00:00',
    to: '2025-06-12T10:00:00',
  },
  {
    title: 'Design Review',
    from: '2025-06-12T11:30:00',
    to: '2025-06-12T12:30:00',
  },
  {
    title: 'Client Presentation',
    from: '2025-06-12T14:00:00',
    to: '2025-06-12T15:00:00',
  },
]

const formatEventRange = (from: string, to: string) => {
  const fromDate = new Date(from)
  const toDate = new Date(to)
  // Example: Jun 12, 09:00 - 10:00
  return `${format(fromDate, 'MMM d, HH:mm')} - ${format(toDate, 'HH:mm')}`
}

export default function CitasPage() {
  const [date, setDate] = useState<Date | undefined>(new Date(2025, 5, 12))

  console.log('date', date)

  return (
    <section className="flex flex-col gap-4 w-full  items-center justify-center">
      <h1 className="text-2xl font-bold text-center">Todas las citas</h1>
      <p className="text-gray-500 text-center">
        Selecciona las fechas de las citas que deseas agendar. Puedes seleccionar múltiples fechas.
      </p>
      <Card className="w-full py-4">
        <CardContent className="px-4">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="bg-transparent p-0"
            required
          />
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-3 border-t px-4 !pt-4">
          <div className="flex w-full items-center justify-between px-1">
            <div className="text-sm font-medium">
              {date?.toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </div>
            <Button variant="ghost" size="icon" className="size-6" title="Add Event">
              <PlusIcon />
              <span className="sr-only">Add Event</span>
            </Button>
          </div>
          <div className="flex w-full flex-col gap-2">
            {events.map((event) => (
              <div
                key={event.title}
                className="bg-muted after:bg-primary/70 relative rounded-md p-2 pl-6 text-sm after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full"
              >
                <div className="font-medium">{event.title}</div>
                <div className="text-muted-foreground text-xs">
                  {formatEventRange(event.from, event.to)}
                </div>
              </div>
            ))}
          </div>
        </CardFooter>
      </Card>
      )
    </section>
  )
}

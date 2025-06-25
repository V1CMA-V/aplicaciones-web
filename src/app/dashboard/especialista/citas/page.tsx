'use client'

import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import createClientSupabase from '@/lib/supabase/client'
import { useUser } from '@clerk/nextjs'
import { format } from 'date-fns'
import { useEffect, useState } from 'react'

import { es } from 'react-day-picker/locale'

const formatEventRange = (from: string, to: string) => {
  const fromDate = new Date(from)
  const toDate = new Date(to)
  // Example: Jun 12, 09:00 - 10:00
  return `${format(fromDate, 'MMM d, HH:mm')} - ${format(toDate, 'HH:mm')}`
}

export default function CitasPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const [citas, setCitas] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  // Cargar usuario con clerk
  const { user } = useUser()

  // Crear cliente de supabase
  const client = createClientSupabase()

  // Cargar pacientes desde la base de datos
  useEffect(() => {
    if (!user) return

    async function loadCitas() {
      setLoading(true)
      const { data, error } = await client.from('citas').select(`*, patients (
        nombre
      )`)

      if (!error) setCitas(data)
      setLoading(false)
    }
    loadCitas()
  }, [user])

  const disabledDays = citas.map((cita) => new Date(cita.fecha_hora))

  return (
    <section className="flex flex-col gap-4 w-full max-w-6xl m-auto items-center justify-center">
      <h1 className="text-2xl font-bold text-center">Todas las citas</h1>
      <p className="text-gray-500 text-center">
        Selecciona las fechas de las citas que deseas agendar. Puedes seleccionar múltiples fechas.
      </p>
      <Card className="w-full py-4">
        <CardContent className="px-4">
          <Calendar
            mode="single"
            locale={es}
            selected={date}
            onSelect={setDate}
            disabled={disabledDays}
            className="bg-transparent p-0 w-full max-w-xl m-auto"
            required
          />
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-3 border-t px-4 !pt-4">
          <div className="flex w-full items-center justify-between px-1">
            <div className="text-sm font-medium">Citas pendientes</div>
          </div>
          <div className="flex w-full flex-col gap-2">
            {loading ? (
              <div className="text-muted-foreground text-center w-full py-4">Cargando citas...</div>
            ) : citas.length === 0 ? (
              <div className="text-muted-foreground text-center w-full py-4">
                No hay citas registradas.
              </div>
            ) : (
              citas.map((event) => (
                <div
                  key={event.id}
                  className="relative rounded-md p-3 pl-6 bg-card border border-border shadow-sm flex flex-col gap-1"
                >
                  <div className="absolute left-2 top-1/2 -translate-y-1/2 w-1 h-8 rounded-full bg-primary/70" />
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-primary text-sm capitalize">
                      {event.modalidad}
                    </span>
                    <span className="ml-2 px-2 py-0.5 rounded bg-muted text-xs text-muted-foreground">
                      {formatEventRange(event.fecha_hora, event.fecha_hora_fin || event.fecha_hora)}
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Paciente:{' '}
                    <span className="font-medium">{event.patients.nombre || 'Sin asignar'}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardFooter>
      </Card>
    </section>
  )
}

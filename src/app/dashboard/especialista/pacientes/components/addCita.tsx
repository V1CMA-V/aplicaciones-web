'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import createClientSupabase from '@/lib/supabase/client'
import { zodResolver } from '@hookform/resolvers/zod'
import { IconCalendar } from '@tabler/icons-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const citaSchema = z.object({
  paciente_id: z.string().min(1, 'Paciente requerido'),
  fecha_hora: z.string().min(1, 'Fecha y hora requerida'),
  modalidad: z.enum(['presencial', 'en línea'], {
    required_error: 'Selecciona la modalidad',
  }),
  ubicacion: z.string().min(1, 'Ubicación o link requerido'),
  notas: z.string().optional(),
})

type CitaForm = z.infer<typeof citaSchema>

export function AddCita({ pacienteId }: { pacienteId: string }) {
  const client = createClientSupabase()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CitaForm>({
    resolver: zodResolver(citaSchema),
    defaultValues: { paciente_id: pacienteId },
  })

  const onSubmit = async (formData: CitaForm) => {
    // Convertir fecha_hora a formato ISO para timestamp
    const cita = {
      ...formData,
      fecha_hora: new Date(formData.fecha_hora).toISOString(),
      estatus: 'programada', // opcional, la base lo pone por default
    }
    const { error, data: result } = await client.from('citas').insert(cita).select()
    if (error) {
      // Puedes mostrar un toast o alerta aquí
      toast.error(`Error al guardar la cita`)
    } else {
      // Puedes mostrar un toast de éxito aquí
      toast.success('Cita guardada exitosamente')
      reset()
    }
  }

  return (
    <Dialog>
      <form onSubmit={handleSubmit(onSubmit)} id="add-cita-form">
        <DialogTrigger asChild>
          <Button variant="outline" className="w-full">
            Agregar Cita
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 ">
              Agregar Cita <IconCalendar />
            </DialogTitle>
            <DialogDescription>
              Aqui puedes agregar una nueva cita para el paciente.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            {/* Eliminado el campo de ID Paciente, se usa el prop */}
            <div className="grid gap-3">
              <Label htmlFor="fecha_hora">Fecha y Hora</Label>
              <Input id="fecha_hora" type="datetime-local" {...register('fecha_hora')} />
              {errors.fecha_hora && (
                <span className="text-red-500 text-xs">{errors.fecha_hora.message}</span>
              )}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="modalidad">Modalidad</Label>
              <select
                id="modalidad"
                {...register('modalidad')}
                className="border rounded px-2 py-1"
              >
                <option value="">Selecciona una opción</option>
                <option value="presencial">Presencial</option>
                <option value="en línea">En línea</option>
              </select>
              {errors.modalidad && (
                <span className="text-red-500 text-xs">{errors.modalidad.message}</span>
              )}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="ubicacion">Ubicación o Link</Label>
              <Input id="ubicacion" {...register('ubicacion')} />
              {errors.ubicacion && (
                <span className="text-red-500 text-xs">{errors.ubicacion.message}</span>
              )}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="notas">Notas</Label>
              <Input id="notas" {...register('notas')} />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" form="add-cita-form">
              Guardar Cita
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}

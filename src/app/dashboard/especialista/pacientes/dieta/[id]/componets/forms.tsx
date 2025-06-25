'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import createClientSupabase from '@/lib/supabase/client'
import { useUser } from '@clerk/nextjs'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const FormSchema = z.object({
  desayuno: z.string().min(1, 'Selecciona una receta para desayuno'),
  comida: z.string().min(1, 'Selecciona una receta para comida'),
  cena: z.string().min(1, 'Selecciona una receta para cena'),
  fechaInicio: z.date({ required_error: 'Selecciona la fecha inicial' }),
  fechaFin: z.date({ required_error: 'Selecciona la fecha final' }),
  notas: z
    .string()
    .min(10, { message: 'Notas deben tener al menos 10 caracteres.' })
    .max(160, { message: 'Notas no deben tener más de 160 caracteres.' }),
})

export function Forms({ id }: { id: string }) {
  const [recetas, setRecetas] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  // Cargar usuario con clerk
  const { user } = useUser()

  // Crear cliente de supabase
  const client = createClientSupabase()

  // Cargar recetas desde la base de datos
  useEffect(() => {
    if (!user) return

    async function loadRecetas() {
      setLoading(true)
      const { data, error } = await client.from('recetas').select()

      if (!error) setRecetas(data)
      setLoading(false)
    }
    loadRecetas()
  }, [user])

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      desayuno: '',
      comida: '',
      cena: '',
      fechaInicio: undefined,
      fechaFin: undefined,
      notas: '',
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (!user) {
      toast('Error', { description: 'Usuario no autenticado.' })
      return
    }

    // Suponiendo que recibes el id del paciente por props o contexto
    const paciente_id = id // <-- Debes pasar el id real del paciente aquí
    const creada_por = user.id

    const dieta = {
      paciente_id,
      fecha_inicio: data.fechaInicio.toISOString().split('T')[0],
      fecha_final: data.fechaFin.toISOString().split('T')[0],
      desayuno_id: parseInt(data.desayuno, 10),
      comida_id: parseInt(data.comida, 10),
      cena_id: parseInt(data.cena, 10),
      notas: data.notas,
      creada_por,
    }

    client
      .from('dietas')
      .insert([dieta])
      .then(({ error }) => {
        if (error) {
          toast('Error al guardar', { description: error.message })
        } else {
          toast('Plan alimenticio guardado', {
            description: 'La dieta fue registrada correctamente.',
          })
          form.reset()
        }
      })

    console.log('dieta', dieta)
  }

  return (
    <div className="flex flex-col items-center gap-10 ">
      <Form {...form}>
        <form
          id="data-form"
          className="flex flex-col gap-4 "
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            <FormField
              control={form.control}
              name="desayuno"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Desayuno</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value} defaultValue="">
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecciona una receta" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {recetas.map((receta) => (
                        <SelectItem key={receta.id} value={receta.id.toString()}>
                          {receta.nombre}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="comida"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Comida</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value} defaultValue="">
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecciona una receta" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {recetas.map((receta) => (
                        <SelectItem key={receta.id} value={receta.id.toString()}>
                          {receta.nombre}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cena"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cena</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value} defaultValue="">
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecciona una receta" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {recetas.map((receta) => (
                        <SelectItem key={receta.id} value={receta.id.toString()}>
                          {receta.nombre}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fechaInicio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fecha inicial del plan</FormLabel>
                  <FormControl>
                    <input
                      type="date"
                      className="border rounded p-2 w-full"
                      value={field.value ? field.value.toISOString().split('T')[0] : ''}
                      onChange={(e) =>
                        field.onChange(e.target.value ? new Date(e.target.value) : undefined)
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fechaFin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fecha final del plan</FormLabel>
                  <FormControl>
                    <input
                      type="date"
                      className="border rounded p-2 w-full"
                      value={field.value ? field.value.toISOString().split('T')[0] : ''}
                      onChange={(e) =>
                        field.onChange(e.target.value ? new Date(e.target.value) : undefined)
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="notas"
              render={({ field }) => (
                <FormItem className="col-span-1 md:col-span-2 lg:col-span-3">
                  <FormLabel>Notas</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Cuéntanos un poco sobre el paciente"
                      className="resize-none border rounded p-2 w-full min-h-[80px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit">Enviar</Button>
        </form>
      </Form>
    </div>
  )
}

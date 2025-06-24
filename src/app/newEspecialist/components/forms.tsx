'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import createClientSupabase from '@/lib/supabase/client'
import { redirect } from 'next/navigation'
import { toast } from 'sonner'

const FormSchema = z.object({
  nombre: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  apellido: z.string().min(2, { message: 'El apellido debe tener al menos 2 caracteres.' }),
  correo: z.string().email({ message: 'Correo inválido.' }),
  fecha_nacimiento: z.string().optional(),
  genero: z.string().optional(),
  telefono: z.string().optional(),
  direccion: z.string().optional(),
  foto_perfil: z.string().optional(),
  especialidad: z.string().optional(),
  notas_adicionales: z.string().optional(),
})

export function InputForm({
  nombre,
  apellido,
  correo,
  foto_perfil,
}: {
  nombre?: string
  apellido?: string
  correo?: string
  foto_perfil?: string
}) {
  const supabase = createClientSupabase()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nombre: nombre || '',
      apellido: apellido || '',
      correo: correo || '',
      fecha_nacimiento: '',
      genero: '',
      telefono: '',
      direccion: '',
      foto_perfil: foto_perfil || '',
      especialidad: '',
      notas_adicionales: '',
    },
  })

  useEffect(() => {
    form.reset({
      nombre: nombre || '',
      apellido: apellido || '',
      correo: correo || '',
      fecha_nacimiento: '',
      genero: '',
      telefono: '',
      direccion: '',
      foto_perfil: foto_perfil || '',
      especialidad: '',
      notas_adicionales: '',
    })
  }, [nombre, apellido, correo, foto_perfil, form])

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const { error } = await supabase.from('specialists').insert({
      nombre: data.nombre,
      apellido: data.apellido,
      correo: data.correo,
      fecha_nacimiento: data.fecha_nacimiento || null,
      genero: data.genero || null,
      telefono: data.telefono || null,
      direccion: data.direccion || null,
      foto_perfil: data.foto_perfil || null,
      especialidad: data.especialidad || null,
      notas_adicionales: data.notas_adicionales || null,
    })

    if (error) {
      toast.error(`Error al crear el usuario: ${error.message}`)
      return
    }
    toast.success('Usuario creado exitosamente')
    redirect('/dashboard/especialista')
  }

  return (
    <Form {...form}>
      {form.watch('foto_perfil') && (
        <div className="w-24 h-24 overflow-hidden rounded-full m-auto bg-gradient-to-br from-blue-500 to-purple-500 mb-6">
          <img
            src={form.watch('foto_perfil')}
            alt="Imagen"
            className="object-cover w-full h-full rounded-full hover:scale-90 transition-transform duration-300"
          />
        </div>
      )}
      <form
        id="input-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid md:grid-cols-2 gap-6 mb-5"
      >
        <FormField
          control={form.control}
          name="nombre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>Tu primer nombre</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="apellido"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Apellido</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>Tu apellido</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="correo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo</FormLabel>
              <FormControl>
                <Input disabled {...field} />
              </FormControl>
              <FormDescription>Tu correo electrónico no puedes modificarlo</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fecha_nacimiento"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fecha de nacimiento</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormDescription>Tu fecha de nacimiento</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="genero"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Género</FormLabel>
              <FormControl>
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Selecciona tu género" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Géneros</SelectLabel>
                      <SelectItem value="masculino">Masculino</SelectItem>
                      <SelectItem value="femenino">Femenino</SelectItem>
                      <SelectItem value="no_binario">No binario</SelectItem>
                      <SelectItem value="prefiero_no_decirlo">Prefiero no decirlo</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>Tu género</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="telefono"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teléfono</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>Tu número de teléfono</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="direccion"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dirección</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>Tu dirección</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="especialidad"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Especialidad</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>Tu especialidad</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="notas_adicionales"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Notas adicionales</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>Notas adicionales sobre ti</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
      <div className="flex justify-center">
        <Button
          id="submit-button"
          form="input-form"
          className="w-full max-w-3xl cursor-pointer"
          type="submit"
        >
          Enviar
        </Button>
      </div>
    </Form>
  )
}

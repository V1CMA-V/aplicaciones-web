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
  correo: z.string().email({ message: 'Correo inválido.' }),
  nombre: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  apellido: z.string().optional(),
  foto_perfil: z.string().optional(),
  fecha_nacimiento: z.string().optional(),
  genero: z.string().optional(),
  telefono: z.string().min(10).max(15).optional(),
  direccion: z.string().optional(),
  peso_actual: z.coerce.number().min(0).optional(),
  altura: z.coerce.number().min(0).optional(),
  imc: z.coerce.number().min(0).optional(),
  objetivo: z.string().optional(),
})

export function RegisterPatient() {
  const supabase = createClientSupabase()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      correo: '',
      nombre: '',
      apellido: '',
      foto_perfil: '',
      fecha_nacimiento: '',
      genero: '',
      telefono: '',
      direccion: '',
      peso_actual: undefined,
      altura: undefined,
      imc: undefined,
      objetivo: '',
    },
  })

  useEffect(() => {
    form.reset({
      correo: '',
      nombre: '',
      apellido: '',
      foto_perfil: '',
      fecha_nacimiento: '',
      genero: '',
      telefono: '',
      direccion: '',
      peso_actual: undefined,
      altura: undefined,
      imc: undefined,
      objetivo: '',
    })
  }, [form])

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const { error } = await supabase.from('patients').insert({
      correo: data.correo,
      nombre: data.nombre,
      apellido: data.apellido || null,
      foto_perfil: data.foto_perfil || null,
      fecha_nacimiento: data.fecha_nacimiento || null,
      genero: data.genero || null,
      telefono: data.telefono || null,
      direccion: data.direccion || null,
      peso_actual: data.peso_actual ?? null,
      altura: data.altura ?? null,
      imc: data.imc ?? null,
      objetivo: data.objetivo || null,
    })

    if (error) {
      toast.error(`Error al crear el paciente: ${error.message}`)
      return
    }
    toast.success('Paciente creado exitosamente')
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
          name="correo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormDescription>Correo electrónico del paciente</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="nombre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>Primer nombre del paciente</FormDescription>
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
              <FormDescription>Apellido del paciente</FormDescription>
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
              <FormDescription>Fecha de nacimiento del paciente</FormDescription>
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
                    <SelectValue placeholder="Selecciona el género" />
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
              <FormDescription>Género del paciente</FormDescription>
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
              <FormDescription>Teléfono del paciente</FormDescription>
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
              <FormDescription>Dirección del paciente</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="peso_actual"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Peso actual (kg)</FormLabel>
              <FormControl>
                <Input type="number" step="0.01" {...field} />
              </FormControl>
              <FormDescription>Peso actual del paciente</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="altura"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Altura (cm)</FormLabel>
              <FormControl>
                <Input type="number" step="0.01" {...field} />
              </FormControl>
              <FormDescription>Altura del paciente</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="imc"
          render={({ field }) => (
            <FormItem>
              <FormLabel>IMC</FormLabel>
              <FormControl>
                <Input type="number" step="0.01" {...field} />
              </FormControl>
              <FormDescription>Índice de masa corporal</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="objetivo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Objetivo</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>Objetivo del paciente</FormDescription>
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

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
import createClientSupabase from '@/lib/supabase/client'
import { redirect } from 'next/navigation'
import { toast } from 'sonner'

const FormSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z.string().email({ message: 'Email inválido.' }),
  description: z.string().optional(),
})

export function InputForm({
  name,
  email,
  image,
}: {
  name?: string
  email?: string
  image?: string
}) {
  const supabase = createClientSupabase()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: name || '',
      email: email || '',
      description: '',
    },
  })

  useEffect(() => {
    form.reset({ username: name || '', email: email || '', description: '' })
  }, [name, email, form])

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const { error } = await supabase.from('specialists').insert({
      username: data.username,
      email: data.email,
      description: data.description,
      image_url: image || null,
    })

    if (error) {
      toast.error(`Error al crear el usuario: ${error.message}`)
      return
    }
    toast.success('Usuario creado exitosamente')
    // createUser({ data: { ...data, image } })
    //   .then(() => {
    //     toast.success('Usuario creado exitosamente')
    //   })
    //   .catch((error) => {
    //     toast.error(`Error al crear el usuario: ${error.message}`)
    //   })

    redirect('/dashboard/especialista')
  }

  return (
    <Form {...form}>
      {image && (
        <div className="flex justify-center mb-4">
          <img src={image} alt="Imagen" className="w-24 h-24 rounded-full object-cover" />
        </div>
      )}
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>Tu nombre completo</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} disabled />
              </FormControl>
              <FormDescription>Tu correo electrónico (no editable)</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descripción</FormLabel>
              <FormControl>
                <Input placeholder="Agrega una descripción" {...field} />
              </FormControl>
              <FormDescription>Breve descripción sobre ti</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Enviar</Button>
      </form>
    </Form>
  )
}

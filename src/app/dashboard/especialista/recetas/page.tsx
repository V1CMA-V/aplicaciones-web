'use client'

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import createClientSupabase from '@/lib/supabase/client'
import { useUser } from '@clerk/nextjs'
import { IconBread } from '@tabler/icons-react'
import { PlusCircleIcon } from 'lucide-react'

import { useEffect, useState } from 'react'

export default function RecetasPage() {
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

  // Mostrar mensaje de carga
  if (loading) {
    return <p className="text-center text-gray-500">Cargando recetas...</p>
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Recetas</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full">
        {!loading &&
          recetas.length > 0 &&
          recetas.map((receta: any) => (
            <Card key={receta.id}>
              <CardHeader>
                <CardTitle>{receta.nombre}</CardTitle>
                <p>Calorías {receta.calorias}</p>
                <CardDescription>{receta.descripcion} </CardDescription>
                <CardAction>
                  <PlusCircleIcon />
                </CardAction>
              </CardHeader>
              <CardContent>
                {
                  <img
                    src={receta.imagen_url || '/default-image.png'}
                    alt={receta.nombre}
                    className="w-full h-48 object-cover rounded-md"
                  />
                }
              </CardContent>
              <CardFooter>
                <p>
                  Macros:&nbsp;
                  {receta.macros
                    ? `Grasas: ${receta.macros.grasas}, Proteína: ${receta.macros.proteina}, Carbohidratos: ${receta.macros.carbohidratos}`
                    : 'No disponible'}
                </p>
              </CardFooter>
            </Card>
          ))}

        <Card className="group cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300">
          <CardHeader>
            <CardTitle>Crear nueva receta</CardTitle>
            <CardDescription>Crea una receta personalizada</CardDescription>
            <CardAction>
              <PlusCircleIcon />
            </CardAction>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-48">
              <IconBread className="w-24 h-24 text-gray-300 group-hover:scale-110 group-hover:text-black transition-all duration-200" />
            </div>
          </CardContent>
          <CardFooter>
            <p>Si quieres crear tu propia receta personalizada, haz clic en el icono.</p>
          </CardFooter>
        </Card>

        {!loading && recetas.length === 0 && <p>No se encontraron recetas</p>}
      </section>
    </div>
  )
}

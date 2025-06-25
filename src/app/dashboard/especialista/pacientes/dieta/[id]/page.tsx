import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Forms } from './componets/forms'
import { createServerSupabaseClient } from './lib/client'

export default async function Page({ params }: { params: { id: string } }) {
  const client = createServerSupabaseClient()

  const { data, error } = await client.from('patients').select().eq('id', params.id)

  const patient = data?.[0]

  if (error || !patient) {
    return <div>Error loading patient data</div>
  }

  const initials = patient.nombre
    .split(' ')
    .map((word: string) => word.charAt(0).toUpperCase())
    .join('')

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-muted py-8">
      <Card className="w-full max-w-7xl shadow-lg">
        <CardHeader className="flex flex-col items-center gap-2">
          <CardTitle className="text-2xl font-bold">Crear plan alimenticio</CardTitle>
          <Avatar className="w-28 h-28">
            <AvatarImage src={patient.foto_perfil} className="w-full h-full object-cover" />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-center gap-1 mt-2">
            <span className="text-xl font-semibold">{patient.nombre}</span>
            <Badge variant="secondary">{patient.genero}</Badge>
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="flex flex-col gap-2 mt-4 w-full max-w-1/2 m-auto">
          <div className="grid grid-cols-2 gap-2">
            <Label className="text-gray-500">Correo:</Label>
            <span>{patient.correo}</span>
            <Label className="text-gray-500">Teléfono:</Label>
            <span>{patient.telefono}</span>
            <Label className="text-gray-500">Nacimiento:</Label>
            <span>{patient.fecha_nacimiento}</span>
          </div>
          <Separator className="my-3" />
          <div className="grid grid-cols-2 gap-2">
            <Label className="text-gray-500">Peso:</Label>
            <span>{patient.peso_actual} kg</span>
            <Label className="text-gray-500">Altura:</Label>
            <span>{patient.altura} cm</span>
            <Label className="text-gray-500">Objetivo:</Label>
            <Badge>{patient.objetivo}</Badge>
          </div>
        </CardContent>
      </Card>
      <Card className="w-full max-w-7xl mt-8 shadow-md">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-center">
            Agregar plan alimenticio
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Forms id={patient.id} />
        </CardContent>
      </Card>
    </div>
  )
}

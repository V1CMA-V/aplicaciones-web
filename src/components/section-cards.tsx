import { IconCalendar, IconCash, IconUser } from '@tabler/icons-react'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { PlusIcon } from 'lucide-react'

export function SectionCards({
  patientsTotal,
  patientsNewThisMonth,
  patientsOnDebt = 0,
  patientsCritical = 0,
}: {
  patientsTotal?: number
  patientsNewThisMonth?: number
  patientsOnDebt?: number
  patientsCritical?: number
}) {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      {/* Total de Pacientes */}
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total de Pacientes</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl flex items-center gap-2">
            <IconUser /> {patientsTotal}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">{patientsNewThisMonth} nuevos este mes</Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">Total de pacientes registrados</div>
          <div className="text-muted-foreground">Incluye activos e inactivos</div>
        </CardFooter>
      </Card>
      {/* Pacientes Nuevos este Mes */}
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Pacientes Nuevos</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl flex items-center gap-2">
            <PlusIcon /> {patientsNewThisMonth}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">Este mes</Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">Pacientes registrados este mes</div>
          <div className="text-muted-foreground">Comparado con meses anteriores</div>
        </CardFooter>
      </Card>
      {/* Pacientes Paciente en Deuda */}
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Paciente en Deuda</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl flex items-center gap-2">
            <IconCash /> {patientsOnDebt}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              {patientsOnDebt > 0 ? 'Requiere seguimiento' : 'Sin deudas'}
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">Pacientes recuperados</div>
          <div className="text-muted-foreground">No requieren seguimiento</div>
        </CardFooter>
      </Card>
      {/* Citas Proximas */}
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Citas Proximas</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl flex items-center gap-2 ">
            <IconCalendar /> {patientsCritical}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              {patientsCritical > 0 ? 'Tienes citas proximas' : 'Sin citas proximas'}
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium ">Pacientes con citas proximas</div>
          <div className="text-muted-foreground">Requieren atención en los próximos días</div>
        </CardFooter>
      </Card>
    </div>
  )
}

'use client'

import { ChartAreaInteractive } from '@/components/chart-area-interactive'
import { DataTable } from '@/components/data-table'
import { SectionCards } from '@/components/section-cards'
import createClientSupabase from '@/lib/supabase/client'
import { useUser } from '@clerk/nextjs'
import { useEffect, useState } from 'react'

export default function Page() {
  const [patients, setPatients] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  // Cargar usuario con clerk
  const { user } = useUser()

  // Crear cliente de supabase
  const client = createClientSupabase()

  // Cargar pacientes desde la base de datos
  useEffect(() => {
    if (!user) return

    async function loadPatients() {
      setLoading(true)
      const { data, error } = await client.from('patients').select()

      if (!error) setPatients(data)
      setLoading(false)
    }
    loadPatients()
  }, [user])

  // Cantidad de pacientes
  const patientsCount = patients.length
  const oneMonthAgo = new Date()
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)

  const patientsNewThisMonth = patients.filter((p) => {
    const patientDate = new Date(p.fecha_inicio)
    return patientDate >= oneMonthAgo
  }).length
  const patientsOnDebt = patients.filter((p) => p.deuda).length
  const patientsCritical = patients.filter((p) => p.critico).length

  // Char Area Interactive
  const dataChartArea = patients.map((patient) => ({
    date: patient.fecha_inicio,
    peso_actual: patient.peso_actual,
    imc: patient.imc,
  }))

  // Mostrar mensaje de carga
  if (loading) {
    return <p className="text-center text-gray-500">Cargando pacientes...</p>
  }

  return (
    <>
      <SectionCards
        patientsTotal={patientsCount}
        patientsNewThisMonth={patientsNewThisMonth}
        patientsOnDebt={patientsOnDebt}
        patientsCritical={patientsCritical}
      />
      <div className="px-4 lg:px-6">
        <ChartAreaInteractive chartData={dataChartArea} />
      </div>
      <DataTable data={patients} />
    </>
  )
}

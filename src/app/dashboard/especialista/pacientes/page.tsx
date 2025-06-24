'use client'

import { DataTable } from '@/components/data-table'
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

  // Mostrar mensaje de carga
  if (loading) {
    return <p className="text-center text-gray-500">Cargando pacientes...</p>
  }

  return (
    <>
      <DataTable data={patients} />
    </>
  )
}

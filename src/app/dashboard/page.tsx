import { createClient } from '@/lib/supabase/server'
import { PageRedirect } from './components/pageRedirect'

export default async function Home() {
  const supabase = await createClient()

  const { data: specialists, error } = await supabase.from('specialists').select()

  return (
    <section>
      <h1>Cargando...</h1>
      <p>Por favor espera mientras cargamos tu información.</p>

      <PageRedirect data={specialists || []} />
    </section>
  )
}

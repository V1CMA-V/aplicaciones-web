import { createClient } from '@/lib/supabase/server'

const supabase = await createClient()

export default async function loadData() {
  const { data: specialists, error } = await supabase.from('specialists').select()

  if (error) {
    console.error('Error loading specialists:', error)
    return []
  }

  return specialists
}

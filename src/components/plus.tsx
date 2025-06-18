import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Plus } from 'lucide-react'

export default function PlusHover({ children }: { children: React.ReactNode }) {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Plus />
      </HoverCardTrigger>
      <HoverCardContent>{children}</HoverCardContent>
    </HoverCard>
  )
}

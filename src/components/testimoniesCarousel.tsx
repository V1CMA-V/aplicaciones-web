interface Tesimoines {
  id: string
  created_at: string
  user_id: string
  deascription: string
  rating: number
}

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { createClient } from '@/lib/supabase/server'

export async function TestimoniesCarousel() {
  const supabase = await createClient()

  const { data: testimonies, error } = await supabase
    .from('testimonies')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {testimonies &&
          testimonies.map(({ id, description, rating, created_at }) => (
            <CarouselItem key={id} className="pl-1 md:basis-1/2 lg:basis-1/3  ">
              <div className="p-1 h-full">
                <Card className="h-full flex flex-col justify-between">
                  <CardHeader>
                    <CardTitle>Nombre de quien da el testimonio</CardTitle>
                    <CardDescription>Cargo o profesión</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <p>{description}</p>
                  </CardContent>

                  <CardFooter>
                    <div className="flex items-center justify-between w-full">
                      <span className="text-sm text-gray-500">
                        {created_at.split('T')[0]} {/* Format date as YYYY-MM-DD */}
                      </span>
                      <span className="text-sm text-blue-600">
                        {Array.from({ length: rating }, (_, i) => (
                          <span key={i}>⭐</span>
                        ))}
                      </span>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious className="cursor-pointer" />
      <CarouselNext className="cursor-pointer" />
    </Carousel>
  )
}

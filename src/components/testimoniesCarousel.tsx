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

export function TestimoniesCarousel() {
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3 ">
            <div className="p-1">
              <Card>
                <CardHeader>
                  <CardTitle>Nombre de quien da el testimonio</CardTitle>
                  <CardDescription>Cargo o profesión</CardDescription>
                </CardHeader>

                <CardContent>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </CardContent>

                <CardFooter>
                  <div className="flex items-center justify-between w-full">
                    <span className="text-sm text-gray-500">Fecha del testimonio</span>
                    <span className="text-sm text-blue-600">⭐⭐⭐⭐⭐</span>
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

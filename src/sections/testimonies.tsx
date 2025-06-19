import { TestimoniesCarousel } from '@/components/testimoniesCarousel'

export default async function Testimonies() {
  return (
    <section className="w-full flex items-center justify-center flex-col gap-10 px-4 md:px-8">
      <h3 className="text-3xl font-bold">Testimonios</h3>

      <TestimoniesCarousel />
    </section>
  )
}

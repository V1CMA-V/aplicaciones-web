export default function Home() {
  return (
    <section>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-4">This is a protected route that requires authentication.</p>
      <p className="mt-2">You can access your tasks and other data here.</p>
    </section>
  )
}

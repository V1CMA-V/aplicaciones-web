export default function Header() {
  return (
    <div>
      <header className="flex items-center justify-between w-full max-w-7xl px-4 py-6 mx-auto">
        <h1 className="text-2xl font-bold">Zalud</h1>
        <nav className="flex space-x-4">
          <a href="/features" className="text-lg">
            Características
          </a>
          <a href="/pricing" className="text-lg">
            Precios
          </a>
          <a href="/contact" className="text-lg">
            Contacto
          </a>
        </nav>
      </header>
    </div>
  )
}

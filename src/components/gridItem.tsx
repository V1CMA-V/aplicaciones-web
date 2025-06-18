import PlusHover from './plus'

export default function GridItem({
  children,
  hoverContent,
  imgUrl,
  className = '',
}: {
  children: React.ReactNode
  hoverContent: React.ReactNode
  imgUrl?: string
  className?: string
}) {
  return (
    <div
      className={`rounded-2xl shadow-lg flex items-end justify-center pb-6 group relative ${className}`}
      style={
        imgUrl
          ? {
              backgroundImage: `url('${imgUrl}')`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }
          : {}
      }
    >
      {/* Botón flotante en la esquina superior derecha */}
      <div className="absolute top-4 right-4 z-10">
        <div className="bg-white/70 rounded-full p-2 shadow-lg group-hover:bg-white/90 transition-colors duration-300 ease-in-out flex items-center justify-center cursor-crosshair">
          <PlusHover>{hoverContent}</PlusHover>
        </div>
      </div>

      {children}
    </div>
  )
}

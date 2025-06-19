import React from 'react'

interface TitleSectionProps {
  title: string
  description?: string | React.ReactNode
  children?: React.ReactNode
  className?: string
}

export default function TitleSection({
  title,
  description,
  children,
  className = '',
}: TitleSectionProps) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-between w-full  py-6  ${className}`}
    >
      <h2 className="text-4xl text-balance text-start tracking-tighter pr-12  font-bold flex-1">
        {title}
      </h2>
      {description && <p className="text-balance text-xl flex-1">{description}</p>}
      {children}
    </div>
  )
}

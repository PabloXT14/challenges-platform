import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type TechTagProps = ComponentProps<'button'>

export function TechTag({ className, ...props }: TechTagProps) {
  return (
    <button
      className={twMerge(
        'text-xs/none font-mono font-medium text-gray-200 uppercase px-3 py-1.5 rounded-lg bg-gray-600 border border-gray-500 transition-all duration-300 hover:bg-gray-700 hover:border-primary-500',
        className
      )}
      {...props}
    />
  )
}

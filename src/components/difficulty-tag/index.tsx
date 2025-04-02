import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type DifficultyTagProps = ComponentProps<'span'> & {
  difficulty: 'easy' | 'medium' | 'hard'
}

export function DifficultyTag({
  difficulty,
  className,
  ...props
}: DifficultyTagProps) {
  return (
    <span
      className={twMerge(
        'text-sm/none font-mono text-gray-950 uppercase px-2 py-1 rounded-sm',
        difficulty === 'easy' && 'bg-primary-500',
        difficulty === 'medium' && 'bg-orange-500',
        difficulty === 'hard' && 'bg-red-500',
        className
      )}
      {...props}
    />
  )
}

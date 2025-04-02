import Link from 'next/link'
import { SquareArrowOutUpRight } from 'lucide-react'

import { DifficultyTag } from '../difficulty-tag'
import { TechTag } from '../tech-tag'

type ChallengeCardProps = {
  cardNumber: number
}

export function ChallengeCard({ cardNumber }: ChallengeCardProps) {
  return (
    <Link
      href={`/challenges/${cardNumber}`}
      key={`challenge-card-${cardNumber}`}
      className="group flex flex-col rounded-md bg-gray-800 border border-gray-700 p-4  transition-all duration-300 hover:-translate-y-2 hover:border-primary-300 hover:shadow-challenge-card hover:shadow-current/10"
    >
      <header className="w-full flex items-center justify-between mb-5">
        <DifficultyTag difficulty="easy">Easy</DifficultyTag>

        <SquareArrowOutUpRight className="size-5 text-gray-400 transition-all duration-300 group-hover:text-primary-500" />
      </header>

      <h3 className="text-xl font-bold text-gray-100 mb-2">To Do List</h3>

      <p className="text-gray-400 mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, officiis.
      </p>

      {/* TECH TAGS */}
      <div className="w-full flex gap-2 flex-wrap">
        <TechTag>React</TechTag>
        <TechTag>Next.js</TechTag>
        <TechTag>Typescript</TechTag>
      </div>
    </Link>
  )
}

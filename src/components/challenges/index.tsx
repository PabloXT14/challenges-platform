import { ChallengeCard } from '../challenge-card'

export function Challenges() {
  return (
    <section className="w-full max-w-[1300px] mx-auto my-12 px-4">
      <h2 className="text-3xl text-gray-100 font-bold mb-8">All Challenges</h2>

      {/* CHALLENGES */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,_1fr))] gap-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <ChallengeCard
            key={`challenge-card-${index + 1}`}
            cardNumber={index + 1}
          />
        ))}
      </div>
    </section>
  )
}

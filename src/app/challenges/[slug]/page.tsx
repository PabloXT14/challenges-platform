import { Header } from '@/components/header'

type Params = {
  params: Promise<{
    slug: string
  }>
}

export default async function ChallengePage({ params }: Params) {
  const { slug } = await params

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* CHALLENGE DETAILS */}
      <section className="w-full max-w-[1300px] mx-auto my-12 px-4">
        <h1>Challenge: {slug}</h1>

        <p>Details</p>

        <p>Code</p>
      </section>
    </main>
  )
}

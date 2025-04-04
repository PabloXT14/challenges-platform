import { Challenges } from '@/components/challenges'
import { Header } from '@/components/header'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <Challenges />
    </main>
  )
}

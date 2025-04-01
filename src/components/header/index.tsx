import Link from 'next/link'
import { AvatarWithMenu } from '../avatar-with-menu'

export function Header() {
  return (
    <header className="h-16 shadow-header flex items-center justify-between px-6 border-b bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
      <Link href="/" className="text-primary-500 font-mono font-normal text-xl">
        CodeForge
      </Link>

      <AvatarWithMenu />
    </header>
  )
}

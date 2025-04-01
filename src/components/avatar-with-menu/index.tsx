import { User } from 'lucide-react'

export function AvatarWithMenu() {
  return (
    <div className="size-10 rounded-full bg-gray-700 flex items-center justify-center cursor-pointer border border-gray-600">
      <User className="size-5 text-white" />
    </div>
  )
}

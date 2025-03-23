import Image from "next/image"
import { Archive } from "lucide-react"

interface AvatarProps {
  src?: string
  letter?: string
  icon?: "archive"
  color?: string
}

export default function Avatar({ src, letter, icon, color = "bg-gray-500" }: AvatarProps) {
  const defaultSize = 48

  if (src) {
    return (
      <div className="relative h-12 w-12 rounded-full overflow-hidden">
        <Image src={src || "/placeholder.svg"} alt="Avatar" fill className="object-cover" />
      </div>
    )
  }

  if (icon === "archive") {
    return (
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-700">
        <Archive className="h-6 w-6 text-gray-400" />
      </div>
    )
  }

  return (
    <div className={`flex items-center justify-center h-12 w-12 rounded-full ${color}`}>
      <span className="text-xl font-semibold text-white">{letter}</span>
    </div>
  )
}


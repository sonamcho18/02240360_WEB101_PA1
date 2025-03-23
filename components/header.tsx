import { PenSquare, Plus } from "lucide-react"

export default function Header() {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <button className="text-primary text-lg">Edit</button>
      <h1 className="text-xl font-bold">Chats</h1>
      <div className="flex gap-4">
        <button className="text-primary">
          <Plus className="h-6 w-6" />
        </button>
        <button className="text-primary">
          <PenSquare className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}


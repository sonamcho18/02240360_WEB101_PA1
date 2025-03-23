import { User, MessageCircle, Settings } from "lucide-react"

export default function BottomNavigation() {
  return (
    <div className="flex justify-around items-center py-3 border-t border-border">
      <button className="flex flex-col items-center gap-1 text-muted-foreground">
        <User className="h-6 w-6" />
        <span className="text-xs">Contacts</span>
      </button>
      <button className="flex flex-col items-center gap-1 text-primary">
        <MessageCircle className="h-6 w-6" />
        <span className="text-xs">Chats</span>
      </button>
      <div className="relative flex flex-col items-center gap-1 text-muted-foreground">
        <div className="relative">
          <Settings className="h-6 w-6" />
          <span className="absolute -top-1 -right-1 flex items-center justify-center h-4 w-4 rounded-full bg-red-500 text-white text-xs">
            1
          </span>
        </div>
        <span className="text-xs">Settings</span>
      </div>
    </div>
  )
}


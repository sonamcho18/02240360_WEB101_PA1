import type { ChatData } from "@/lib/types"
import Avatar from "./avatar"
import { Check } from "lucide-react"

interface ChatItemProps {
  chat: ChatData
}

export default function ChatItem({ chat }: ChatItemProps) {
  return (
    <div className="flex items-center gap-3 px-4 py-3">
      <Avatar
        src={chat.avatar.startsWith("/") ? chat.avatar : undefined}
        letter={chat.avatar.length === 1 ? chat.avatar : undefined}
        icon={chat.avatar === "archive" ? "archive" : undefined}
        color={chat.color}
      />
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold truncate">{chat.name}</h3>
          <div className="flex items-center gap-1 text-xs text-muted-foreground whitespace-nowrap">
            {chat.isRead && <Check className="h-4 w-4 text-primary" />}
            <span>{chat.time}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground truncate">{chat.message}</p>
      </div>
    </div>
  )
}


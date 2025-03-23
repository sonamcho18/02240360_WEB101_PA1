import type { ChatData } from "@/lib/types"
import ChatItem from "./chat-item"

interface ChatListProps {
  chats: ChatData[]
}

export default function ChatList({ chats }: ChatListProps) {
  return (
    <div className="divide-y divide-border">
      {chats.map((chat) => (
        <ChatItem key={chat.id} chat={chat} />
      ))}
    </div>
  )
}


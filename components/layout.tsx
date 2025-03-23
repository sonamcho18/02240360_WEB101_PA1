"use client"

import { useState } from "react"
import StatusBar from "./status-bar"
import Header from "./header"
import SearchBar from "./search-bar"
import ChatList from "./chat-list"
import BottomNavigation from "./bottom-navigation"
import type { ChatData } from "@/lib/types"

export default function Layout() {
  const [chats, setChats] = useState<ChatData[]>([
    {
      id: "archived",
      name: "Archived Chats",
      avatar: "archive",
      message: "Cubicle 8 picture 🖼️ 🏆 🎭, Miss, Ngawang, Bhutan, Tshering",
      time: "",
      isArchived: true,
    },
    {
      id: "abii",
      name: "Abii",
      avatar: "A",
      message: "Kakaka",
      time: "03/11",
      color: "bg-green-500",
    },
    {
      id: "dragonfly",
      name: "Dragonfly",
      avatar: "/avatars/dragonfly.jpg",
      message: "Dragonfly joined Telegram",
      time: "03/07",
    },
    {
      id: "tsagyem",
      name: "Tsagyem",
      avatar: "T",
      message: "📱 Video",
      time: "03/06",
      isRead: true,
      color: "bg-green-500",
    },
    {
      id: "yhss",
      name: "Yhss",
      avatar: "/avatars/yhss.jpg",
      message: "🖼️🖼️🖼️ 7 Photos",
      time: "03/02",
      isRead: true,
    },
    {
      id: "chokiokioki",
      name: "Chokiokioki",
      avatar: "C",
      message: "🙏",
      time: "03/02",
      color: "bg-blue-400",
    },
    {
      id: "pema",
      name: "Pema Choeyang Tshering",
      avatar: "/avatars/pema.jpg",
      message: "Thank you so much azhim 🙏",
      time: "02/27",
    },
    {
      id: "mommy",
      name: "Mommy",
      avatar: "/avatars/mommy.jpg",
      message: "🔊 Voice Message",
      time: "02/07",
      hasEmoji: true,
    },
  ])

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-black text-white">
      <StatusBar time="2:47" network="LTE" batteryLevel={31} />
      <Header />
      <SearchBar />
      <div className="flex-1 overflow-y-auto">
        <ChatList chats={chats} />
      </div>
      <BottomNavigation />
    </div>
  )
}


import { Search } from "lucide-react"

export default function SearchBar() {
  return (
    <div className="px-4 py-2">
      <div className="flex items-center gap-2 bg-muted rounded-lg px-3 py-2">
        <Search className="h-5 w-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent border-none outline-none w-full text-foreground placeholder:text-muted-foreground"
        />
      </div>
    </div>
  )
}


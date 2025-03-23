import { Battery } from "lucide-react"

interface StatusBarProps {
  time: string
  network: string
  batteryLevel: number
}

export default function StatusBar({ time, network, batteryLevel }: StatusBarProps) {
  return (
    <div className="flex justify-between items-center px-4 py-1 text-sm">
      <div className="font-semibold">{time}</div>
      <div className="flex items-center gap-1">
        <div className="flex items-center">
          <span className="text-xs mr-1">•••</span>
          <span className="text-xs">{network}</span>
        </div>
        <div className="flex items-center gap-1">
          <Battery className="h-4 w-4" />
          <span className="text-xs">{batteryLevel}%</span>
        </div>
      </div>
    </div>
  )
}


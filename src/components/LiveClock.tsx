"use client"

import { useEffect, useState } from "react"

export default function LiveClock() {
  const [time, setTime] = useState<string>("")

  useEffect(() => {
    const updateClock = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      )
    }

    updateClock()
    const interval = setInterval(updateClock, 1000)
    return () => clearInterval(interval)
  }, [])

  if (!time) return <div className="w-[68px] h-5 opacity-0" />

  return (
    <div className="font-mono text-sm text-muted-foreground flex items-center gap-2 tabular-nums">
      <span>EGT</span>
      <span>{time}</span>
    </div>
  )
}
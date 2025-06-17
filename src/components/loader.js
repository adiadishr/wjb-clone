'use client'

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export default function Loader({ show }) {
  const [expand, setExpand] = useState(false)
  const [hide, setHide] = useState(false)

  useEffect(() => {
    if (show) {

      setExpand(true)
      setTimeout(() => {
        setExpand(false)
      }, 3000)

      setTimeout(() => {
        setHide(true)
      }, 5000)
    }
  }, [show])

  return (
    <div className={cn(
      "fixed inset-0 transition-all duration-700 overflow-hidden",
      hide ? "-z-1000 hidden" : "z-[1000]"
    )}>
      <div className={cn(
        "w-full bg-neutral-200 brightness-150 flex items-center justify-center transition-all duration-1000 ease-quart",
        expand ? "h-screen" : "h-0"
      )}>
        {expand && (
          <video
            className="size-120"
            src="/gif.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        )}
      </div>
    </div>
  )
}
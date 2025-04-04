"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Mic, X } from "lucide-react"

interface MicrophoneAnimationProps {
  onClose: () => void
}

export function MicrophoneAnimation({ onClose }: MicrophoneAnimationProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={onClose}>
        <X className="h-6 w-6" />
        <span className="sr-only">Close</span>
      </Button>

      <div className="flex flex-col items-center gap-8">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-primary/20 mic-animation" />
          <Button size="icon" className="h-24 w-24 rounded-full" onClick={onClose}>
            <Mic className="h-10 w-10" />
            <span className="sr-only">Stop recording</span>
          </Button>
        </div>
        <p className="text-xl font-medium">Listening...</p>
        <p className="text-sm text-muted-foreground">Click the microphone or press Esc to stop recording</p>
      </div>
    </div>
  )
}


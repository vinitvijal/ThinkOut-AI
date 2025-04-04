"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Mic, Send } from "lucide-react"

interface InputBarProps {
  onStartRecording: () => void
}

export function InputBar({ onStartRecording }: InputBarProps) {
  const [input, setInput] = useState("")
  const [isRecording, setIsRecording] = useState(false)

  const handleStartRecording = () => {
    setIsRecording(true)
    onStartRecording()
  }

  const handleSubmit = () => {
    if (!input.trim()) return

    // Here you would process the input
    console.log("Processing input:", input)

    // Clear the input
    setInput("")
  }

  return (
    <div className="sticky bottom-0 border-t bg-background p-4">
      <div className="mx-auto flex max-w-4xl items-end gap-2">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message or click the microphone to speak..."
          className="min-h-[60px] resize-none"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault()
              handleSubmit()
            }
          }}
        />
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={handleStartRecording} className="h-10 w-10 shrink-0">
            <Mic className="h-5 w-5" />
            <span className="sr-only">Start recording</span>
          </Button>
          <Button onClick={handleSubmit} size="icon" className="h-10 w-10 shrink-0" disabled={!input.trim()}>
            <Send className="h-5 w-5" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
      </div>
    </div>
  )
}


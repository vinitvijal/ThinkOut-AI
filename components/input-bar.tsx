"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"


export function InputBar({ handleSubmit }: { handleSubmit: (input: string) => void }) {
    const [input, setInput] = useState("")


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
                            handleSubmit(input)
                        }
                    }}
                />
                <div className="flex gap-2">
                    <Button onClick={() => handleSubmit(input)} size="icon" className="h-10 w-10 shrink-0" disabled={!input.trim()}>
                        <Send className="h-5 w-5" />
                        <span className="sr-only">Send</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}


/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Mic, Send } from "lucide-react"
import { SpeechRecognition } from "./speechToText"


export function InputBar({ handleSubmit }: { handleSubmit: (input: string) => void }) {
    const [input, setInput] = useState("")

    const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    // Check browser compatibility
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert('Your browser does not support Speech Recognition');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInput((prev) => prev + ' ' + transcript);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
  }, []);

  const handleMicClick = () => {
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      recognitionRef.current?.start();
      setIsListening(true);
    }
  };


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
                <Button variant="default" size="icon"  className={`h-10 w-10 shrink-0  ${isListening && "bg-red-500 text-white"}`} onClick={handleMicClick}>
                    <Mic className={`h-5 w-5`}  />
                    <span className="sr-only">Start recording</span>
                </Button>
                    <Button onClick={() => handleSubmit(input)} size="icon" className="h-10 w-10 shrink-0" disabled={!input.trim()}>
                        <Send className="h-5 w-5" />
                        <span className="sr-only">Send</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}


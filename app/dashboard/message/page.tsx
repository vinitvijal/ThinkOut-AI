'use client'
import { DashboardHeader } from "@/components/dashboard-header"
import { ContentTypeSelector } from "@/components/content-type-selector"
import { InputBar } from "@/components/input-bar"
import { OutputEditor } from "@/components/output-editor"
import { catType, getResponse } from "@/actions/server"
import { useState } from "react"
import { useUser } from "@clerk/nextjs"

export default function MessagePage() {
    const { user } = useUser()
    const [result, setResult] = useState("")
  
    const [type, setType] = useState<catType["cat"]>("promotional-mail")
        const handleSubmit = async (input: string) => {
          if (!user) return
          const email = user.primaryEmailAddress?.emailAddress
          console.log(email)
          console.log(user.emailAddresses)
  
            if (!input.trim()) return
            console.log("Started")
            const res = await getResponse(input, type, email || "")
            console.log(res)
            setResult(res)
          }
    

  return (
    <>
      <DashboardHeader title="Message" />
      <main className="flex-1 overflow-auto p-6">
        <ContentTypeSelector
          contentType="message"
          setType={(type: string) => setType(type as catType["cat"])}
          options={[
            { id: "friendly-message", label: "Friendly" },
            { id: "professional-message", label: "Professional" },
            { id: "concise-message", label: "Concise" },
            { id: "detailed-message", label: "Detailed" },
          ]}
        />
        <div className="mt-6 rounded-lg border bg-card p-6 shadow-sm">
          <OutputEditor placeholder="Your message will appear here..." initialContent="" />
        </div>
      </main>
      <InputBar handleSubmit={handleSubmit} onStartRecording={() => {}} />
    </>
  )
}


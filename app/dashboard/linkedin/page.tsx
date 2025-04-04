'use client'
import { DashboardHeader } from "@/components/dashboard-header"
import { ContentTypeSelector } from "@/components/content-type-selector"
import { InputBar } from "@/components/input-bar"
import { OutputEditor } from "@/components/output-editor"
import { catType, getResponse } from "@/actions/server"
import { useEffect, useState } from "react"

export default function LinkedInPage() {
    const [result, setResult] = useState("")
      const [type, setType] = useState<catType["cat"]>("professional-linkedin")
  
    const handleSubmit = async (input: string) => {
        if (!input.trim()) return
        console.log("Started")
        const res = await getResponse(input, type)
        console.log(res)
        setResult(res)

      }

      useEffect(() => {
        console.log("Updated")
}, [result])

  return (
    <>
      <DashboardHeader title="LinkedIn Post" />
      <main className="flex-1 overflow-auto p-6">
        <ContentTypeSelector
          contentType="linkedin"
          setType={(type: string) => setType(type as catType["cat"])}
          options={[
            { id: "professional-linkedin", label: "Professional" },
            { id: "casual-linkedin", label: "Casual" },
            { id: "story-linkedin", label: "Storytelling" },
            { id: "thought-linkedin", label: "Thought Leadership" },
          ]}
        />
        <div className="mt-6 rounded-lg border bg-card p-6 shadow-sm">
          <OutputEditor placeholder="Your LinkedIn post will appear here..." initialContent={result} />
        </div>
      </main>
      <InputBar 
      handleSubmit={handleSubmit}
      onStartRecording={() => {}} />
    </>
  )
}


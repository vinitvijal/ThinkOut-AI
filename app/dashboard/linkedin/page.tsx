'use client'
import { DashboardHeader } from "@/components/dashboard-header"
import { ContentTypeSelector } from "@/components/content-type-selector"
import { InputBar } from "@/components/input-bar"
import { OutputEditor } from "@/components/output-editor"
import { getResponse } from "@/actions/server"
import { useEffect, useState } from "react"

export default function LinkedInPage() {
    const [result, setResult] = useState("")
    const handleSubmit = async (input: string) => {
        if (!input.trim()) return
        console.log("Started")
        const res = await getResponse(input)
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
          options={[
            { id: "professional", label: "Professional" },
            { id: "casual", label: "Casual" },
            { id: "storytelling", label: "Storytelling" },
            { id: "thought-leadership", label: "Thought Leadership" },
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


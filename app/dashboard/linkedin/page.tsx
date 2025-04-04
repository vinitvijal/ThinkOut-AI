'use client'
import { DashboardHeader } from "@/components/dashboard-header"
import { ContentTypeSelector } from "@/components/content-type-selector"
import { InputBar } from "@/components/input-bar"
import { OutputEditor } from "@/components/output-editor"

export default function LinkedInPage() {
  return (
    <main className=" border h-screen  flex flex-col justify-between">
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
        <div className="mt-6 flex-1 rounded-lg border bg-card p-6 shadow-sm">
          <OutputEditor placeholder="Your LinkedIn post will appear here..." initialContent="" />
        </div>
      </main>
      <InputBar onStartRecording={() => {}} />
    </main>
  )
}


'use client'
import { DashboardHeader } from "@/components/dashboard-header"
import { ContentTypeSelector } from "@/components/content-type-selector"
import { InputBar } from "@/components/input-bar"
import { OutputEditor } from "@/components/output-editor"

export default function MessagePage() {
  return (
    <>
      <DashboardHeader title="Message" />
      <main className="flex-1 overflow-auto p-6">
        <ContentTypeSelector
          contentType="message"
          options={[
            { id: "friendly", label: "Friendly" },
            { id: "professional", label: "Professional" },
            { id: "concise", label: "Concise" },
            { id: "detailed", label: "Detailed" },
          ]}
        />
        <div className="mt-6 rounded-lg border bg-card p-6 shadow-sm">
          <OutputEditor placeholder="Your message will appear here..." initialContent="" />
        </div>
      </main>
      <InputBar onStartRecording={() => {}} />
    </>
  )
}


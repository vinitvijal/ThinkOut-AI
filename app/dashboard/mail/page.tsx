'use client'
import { DashboardHeader } from "@/components/dashboard-header"
import { ContentTypeSelector } from "@/components/content-type-selector"
import { InputBar } from "@/components/input-bar"
import { OutputEditor } from "@/components/output-editor"

export default function MailPage() {
  return (
    <>
      <DashboardHeader title="Email" />
      <main className="flex-1 overflow-auto p-6">
        <ContentTypeSelector
          contentType="mail"
          options={[
            { id: "formal", label: "Formal" },
            { id: "informal", label: "Informal" },
            { id: "professional", label: "Professional" },
            { id: "outreach", label: "Outreach" },
          ]}
        />
        <div className="mt-6 rounded-lg border bg-card p-6 shadow-sm">
          <OutputEditor placeholder="Your email will appear here..." initialContent="" />
        </div>
      </main>
      <InputBar onStartRecording={() => {}} />
    </>
  )
}


'use client'
import { DashboardHeader } from "@/components/dashboard-header"
import { ContentTypeSelector } from "@/components/content-type-selector"
import { InputBar } from "@/components/input-bar"
import { OutputEditor } from "@/components/output-editor"

export default function ArticlePage() {
  return (
    <>
      <DashboardHeader title="Article" />
      <main className="flex-1 overflow-auto p-6">
        <ContentTypeSelector
          contentType="article"
          options={[
            { id: "informative", label: "Informative" },
            { id: "persuasive", label: "Persuasive" },
            { id: "technical", label: "Technical" },
            { id: "narrative", label: "Narrative" },
          ]}
        />
        <div className="mt-6 rounded-lg border bg-card p-6 shadow-sm">
          <OutputEditor placeholder="Your article will appear here..." initialContent="" />
        </div>
      </main>
      <InputBar onStartRecording={() => {}} />
    </>
  )
}


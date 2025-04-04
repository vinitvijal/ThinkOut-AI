'use client'
import { DashboardHeader } from "@/components/dashboard-header"
import { ContentTypeSelector } from "@/components/content-type-selector"
import { InputBar } from "@/components/input-bar"
import { OutputEditor } from "@/components/output-editor"
import { useState } from "react"
import { catType, getResponse } from "@/actions/server"
import { useUser } from "@clerk/nextjs"

export default function ArticlePage() {
    const {user} = useUser()

    const [result, setResult] = useState("")
        const [type, setType] = useState<catType["cat"]>("professional-linkedin")
    
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
      <DashboardHeader title="Article" />
      <main className="flex-1 overflow-auto p-6">
        <ContentTypeSelector
          contentType="article"
          setType={(type: string) => setType(type as catType["cat"])}
          options={[
            { id: "informative-article", label: "Informative" },
            { id: "persuasive-article", label: "Persuasive" },
            { id: "technical-article", label: "Technical" },
            { id: "narrative-article", label: "Narrative" },
          ]}
        />
        <div className="mt-6 rounded-lg border bg-card p-6 shadow-sm">
          <OutputEditor placeholder="Your article will appear here..." initialContent={result} />
        </div>
      </main>
      <InputBar 
        handleSubmit={handleSubmit}/>
    </>
  )
}


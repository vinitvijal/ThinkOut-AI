'use client'
import { DashboardHeader } from "@/components/dashboard-header"
import { ContentTypeSelector } from "@/components/content-type-selector"
import { InputBar } from "@/components/input-bar"
import { OutputEditor } from "@/components/output-editor"
import { useEffect, useState } from "react"
import { catType, getResponse } from "@/actions/server"
import { useUser } from "@clerk/nextjs"

export default function MailPage() {
  const { user } = useUser()
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)
  const [type, setType] = useState<catType["cat"]>("promotional-mail")
      const handleSubmit = async (input: string) => {
        if (!user) return
        const email = user.primaryEmailAddress?.emailAddress
        console.log(email)
        console.log(user.emailAddresses)

          if (!input.trim()) return
          console.log("Started")
          const res = await getResponse(input, type, email)
          console.log(res)
          setResult(res)
  
        }
  
        useEffect(() => {
          console.log("Updated")
  }, [result])


  return (
    <>
      <DashboardHeader title="Email" />
      <main className="flex-1 overflow-auto p-6">
        <ContentTypeSelector
          contentType="mail"
          setType={(type: string) => setType(type as catType["cat"])}
          options={[
            { id: "promotional-mail", label: "Promotional" },
            { id: "informal-mail", label: "Informal" },
            { id: "outreach-mail", label: "Outreach" },
          ]}
        />
        <div className="mt-6 rounded-lg border bg-card p-6 shadow-sm">
          <OutputEditor placeholder="Your email will appear here..." initialContent={result} />
        </div>
      </main>
      <InputBar 
      handleSubmit={handleSubmit}
      onStartRecording={() => {}} />
    </>
  )
}


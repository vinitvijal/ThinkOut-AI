"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Copy, Check } from "lucide-react"

interface OutputEditorProps {
  placeholder: string
  initialContent: string
}

export function OutputEditor({ placeholder, initialContent }: OutputEditorProps) {
  const [content, setContent] = useState(initialContent)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (initialContent) {
      setContent(initialContent)
    }
  }
  , [initialContent])
  
  const handleCopy = async () => {
    if (!content) return

    await navigator.clipboard.writeText(content)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  const handleDownload = () => {
    if (!content) return

    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "thinkout-content.txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleDownloadPDF = () => {
    alert("PDF download")
  }

  return (
    <div className="space-y-4 flex flex-col  flex-1">
      <div className="aa flex justify-end gap-2">
        <Button variant="outline" size="sm" onClick={handleCopy} disabled={!content}>
          {copied ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Copied
            </>
          ) : (
            <>
              <Copy className="mr-2 h-4 w-4" />
              Copy
            </>
          )}
        </Button>
        <Button variant="outline" size="sm" onClick={handleDownload} disabled={!content}>
          <Download className="mr-2 h-4 w-4" />
          Download TXT
        </Button>
        <Button variant="outline" size="sm" onClick={handleDownloadPDF} disabled={!content}>
          <Download className="mr-2 h-4 w-4" />
          Download PDF
        </Button>
      </div>

      <div className="min-h-[500px] flex-1 rounded-md border">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={placeholder}
          className="h-full min-h-[500px] w-full resize-none rounded-md border-0 bg-transparent p-4 focus:outline-none"
        />
      </div>
    </div>
  )
}


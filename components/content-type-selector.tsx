"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface ContentTypeOption {
  id: string
  label: string
}

interface ContentTypeSelectorProps {
  contentType: string
  options: ContentTypeOption[]
}

export function ContentTypeSelector({ contentType, options }: ContentTypeSelectorProps) {
  const [selectedOption, setSelectedOption] = useState(options[0]?.id || "")

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <Button
            key={option.id}
            variant={selectedOption === option.id ? "default" : "outline"}
            onClick={() => setSelectedOption(option.id)}
            className="transition-all"
          >
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  )
}


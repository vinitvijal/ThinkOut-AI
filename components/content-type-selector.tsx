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
  setType: (type: string) => void
}

export function ContentTypeSelector({ contentType, options, setType }: ContentTypeSelectorProps) {
  const [selectedOption, setSelectedOption] = useState(options[0]?.id || "")

  const handleOptionChange = (optionId: string) => {
    setSelectedOption(optionId)
    setType(optionId)
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <Button
            key={option.id}
            variant={selectedOption === option.id ? "default" : "outline"}
            onClick={() => handleOptionChange(option.id)}
            className="transition-all"
          >
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  )
}


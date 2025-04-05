"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail, MessageSquare,  ArrowRight, Copy, Check, Book } from "lucide-react"
import { Response } from "@prisma/client"


export function HistoryCards({ history }: { history: Response[] }) {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const handleCopy = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text)
    setCopiedId(id)

    setTimeout(() => {
      setCopiedId(null)
    }, 2000)
  }

  return (
    <div className="relative w-[calc(100vw-20rem)]">
      <div className="flex overflow-x-auto  pb-4 -mx-6 px-6 space-x-4 scrollbar-hide">
        {history && history.map((item) => (
          <Card key={item.rid} className="min-w-[300px] max-w-[350px] flex flex-col">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                {item.category === "linkedin" && <Linkedin className="h-5 w-5 text-blue-500" />}
                {item.category === "mail" && <Mail className="h-5 w-5 text-red-500" />}
                {item.category === "message" && <MessageSquare className="h-5 w-5 text-green-500" />}
                {item.category === "article" && <Book className="h-5 w-5 text-yellow-500" />}
                <CardTitle className="text-base">{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</CardTitle>
                </div>
                <Badge variant="outline">{item.type}</Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground line-clamp-2">
                  <span className="font-medium text-foreground">Query:</span> {item.prompt}
                </div>
                <div className="text-sm line-clamp-4 border-l-2 pl-2 border-primary/50">{item.response}</div>
                <div className="flex items-center justify-between pt-2">
                  <div className="text-xs text-muted-foreground">{new Date(item.createdAt).toDateString()}</div>
                  <div className="text-xs font-medium bg-secondary text-secondary-foreground px-2 py-1 rounded-md">
                    {item.model}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between pt-0">
              <Button variant="ghost" size="sm" onClick={() => handleCopy(item.response, item.rid)}>
                {copiedId === item.rid ? (
                  <>
                    <Check className="mr-1 h-3 w-3" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="mr-1 h-3 w-3" />
                    Copy
                  </>
                )}
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href={`/dashboard/${item.type}`}>
                  View
                  <ArrowRight className="ml-1 h-3 w-3" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Gradient fade effect on the right side */}
      <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />
    </div>
  )
}


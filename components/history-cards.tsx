"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail, MessageSquare, FileText, ArrowRight, Copy, Check } from "lucide-react"
import { cn } from "@/lib/utils"

// Sample history data
const historyData = [
  {
    id: "1",
    type: "linkedin",
    category: "Professional",
    model: "GPT-4o",
    query: "Write a post about AI advancements in healthcare",
    response:
      "Exciting to see how AI is transforming healthcare! 🏥 Recent advancements in medical imaging analysis have reduced diagnosis time by 60%, allowing doctors to focus more on patient care. AI algorithms are now detecting early signs of diseases with 92% accuracy, potentially saving millions of lives. What's most promising is how these tools are becoming more accessible to hospitals worldwide...",
    date: "2 hours ago",
    icon: Linkedin,
    color: "text-blue-500",
  },
  {
    id: "2",
    type: "mail",
    category: "Formal",
    model: "Gemini",
    query: "Draft an email to schedule a meeting with a client",
    response:
      "Subject: Request for Meeting - Project Discussion\n\nDear [Client Name],\n\nI hope this email finds you well. I'm writing to request a meeting to discuss the progress of our current project and outline the next steps. Based on our recent developments, I believe it would be beneficial to align on our strategy moving forward...",
    date: "Yesterday",
    icon: Mail,
    color: "text-red-500",
  },
  {
    id: "3",
    type: "message",
    category: "Friendly",
    model: "GPT-4o Mini",
    query: "Write a thank you message to a colleague who helped me with a project",
    response:
      "Hey [Name], I just wanted to take a moment to say thank you for all your help with the project last week. Your insights on the data analysis were spot-on and really helped us get unstuck. I especially appreciated how you stayed late to help us meet the deadline...",
    date: "2 days ago",
    icon: MessageSquare,
    color: "text-green-500",
  },
  {
    id: "4",
    type: "article",
    category: "Informative",
    model: "Grok",
    query: "Write an article introduction about sustainable fashion",
    response:
      "# The Future of Fashion: Sustainability in Style\n\nIn an industry known for its rapid trends and disposable culture, a revolution is quietly taking place. Sustainable fashion, once a niche concept championed by a few environmentally conscious designers, has evolved into a powerful movement reshaping how we produce, consume, and think about clothing...",
    date: "3 days ago",
    icon: FileText,
    color: "text-purple-500",
  },
  {
    id: "5",
    type: "linkedin",
    category: "Storytelling",
    model: "GPT-4o",
    query: "Create a LinkedIn post about my journey learning to code",
    response:
      "🚀 From Zero to Hero: My Coding Journey\n\nOne year ago, I couldn't tell the difference between HTML and CSS. Today, I just launched my first full-stack application!\n\nThe journey wasn't easy. I remember staring at my screen at 2 AM, debugging an issue that turned out to be a missing semicolon...",
    date: "4 days ago",
    icon: Linkedin,
    color: "text-blue-500",
  },
  {
    id: "6",
    type: "mail",
    category: "Outreach",
    model: "Gemini",
    query: "Write a cold email to a potential investor",
    response:
      "Subject: Innovative AI Solution Seeking Strategic Investment\n\nDear [Investor Name],\n\nI'm reaching out because your investment in [Similar Company] caught my attention, and I believe our AI-powered solution addressing [specific problem] would align with your portfolio focus...",
    date: "5 days ago",
    icon: Mail,
    color: "text-red-500",
  },
]

export function HistoryCards() {
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
        {historyData.map((item) => (
          <Card key={item.id} className="min-w-[300px] max-w-[350px] flex flex-col">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <item.icon className={cn("h-5 w-5", item.color)} />
                  <CardTitle className="text-base">{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</CardTitle>
                </div>
                <Badge variant="outline">{item.category}</Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground line-clamp-2">
                  <span className="font-medium text-foreground">Query:</span> {item.query}
                </div>
                <div className="text-sm line-clamp-4 border-l-2 pl-2 border-primary/50">{item.response}</div>
                <div className="flex items-center justify-between pt-2">
                  <div className="text-xs text-muted-foreground">{item.date}</div>
                  <div className="text-xs font-medium bg-secondary text-secondary-foreground px-2 py-1 rounded-md">
                    {item.model}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between pt-0">
              <Button variant="ghost" size="sm" onClick={() => handleCopy(item.response, item.id)}>
                {copiedId === item.id ? (
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


"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function SettingsForm() {
  const [model, setModel] = useState("gpt-4o")
  const [linkedInLinks, setLinkedInLinks] = useState("")

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>AI Model Settings</CardTitle>
          <CardDescription>Choose which AI model to use for content generation.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="model">Default AI Model</Label>
            <Select value={model} onValueChange={setModel}>
              <SelectTrigger id="model">
                <SelectValue placeholder="Select a model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gpt-4o">GPT-4o</SelectItem>
                <SelectItem value="gpt-4o-mini">GPT-4o Mini</SelectItem>
                <SelectItem value="gemini">Gemini</SelectItem>
                <SelectItem value="grok">Grok</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save Model Settings</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Writing Style</CardTitle>
          <CardDescription>Add LinkedIn post links to help the AI learn your writing style.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="linkedin-links">LinkedIn Post Links</Label>
            <Textarea
              id="linkedin-links"
              placeholder="Paste LinkedIn post URLs (one per line)"
              value={linkedInLinks}
              onChange={(e) => setLinkedInLinks(e.target.value)}
              className="min-h-[100px]"
            />
            <p className="text-sm text-muted-foreground">
              Add links to your LinkedIn posts to help the AI understand your writing style.
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save Writing Style</Button>
        </CardFooter>
      </Card>
    </div>
  )
}


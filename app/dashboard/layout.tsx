"use client"

import type React from "react"

import { useState } from "react"
import { SidebarProvider } from "@/components/sidebar-provider"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { MicrophoneAnimation } from "@/components/microphone-animation"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isRecording, setIsRecording] = useState(false)

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col">{children}</div>
        {isRecording && <MicrophoneAnimation onClose={() => setIsRecording(false)} />}
      </div>
    </SidebarProvider>
  )
}

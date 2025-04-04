"use client"

import type React from "react"

import { useState } from "react"
import { SidebarProvider } from "@/components/sidebar-provider"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { MicrophoneAnimation } from "@/components/microphone"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isRecording, setIsRecording] = useState(false)

  return (
    <SidebarProvider open={true}>
      <div className="a flex min-h-screen w-screen border">
        <div className=" h-screen w-64">
            <DashboardSidebar />
        </div>
        <div className=" flex-1 bg-background h-screen">
            {children}
        </div>
        
        {isRecording && <MicrophoneAnimation onClose={() => setIsRecording(false)} />}
      </div>
    </SidebarProvider>
  )
}

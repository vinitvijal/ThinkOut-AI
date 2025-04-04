"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from "@/components/sidebar-provider"
import { Button } from "@/components/ui/button"
import { Sparkles, Linkedin, Mail, MessageSquare, FileText, Settings, User, LogOut } from "lucide-react"

export function DashboardSidebar() {
  const pathname = usePathname()
  const { isMobile } = useSidebar()

  const routes = [
    {
      title: "LinkedIn",
      href: "/dashboard/linkedin",
      icon: Linkedin,
    },
    {
      title: "Mail",
      href: "/dashboard/mail",
      icon: Mail,
    },
    {
      title: "Message",
      href: "/dashboard/message",
      icon: MessageSquare,
    },
    {
      title: "Article",
      href: "/dashboard/article",
      icon: FileText,
    },
  ]

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-3">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">ThinkOut AI</span>
        </div>
        {isMobile && (
          <div className="px-2">
            <SidebarTrigger className="w-full justify-start" />
          </div>
        )}
      </SidebarHeader>
      <SidebarContent className="px-2 py-2">
        <div className="space-y-1">
          <Link href="/dashboard" className="block">
            <Button variant={pathname === "/dashboard" ? "secondary" : "ghost"} className="w-full justify-start">
              <Sparkles className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
          </Link>

          <div className="py-2">
            <div className="text-xs font-medium text-muted-foreground px-4 py-2">Content Types</div>
            <div className="space-y-1">
              {routes.map((route) => (
                <Link key={route.href} href={route.href} className="block">
                  <Button variant={pathname === route.href ? "secondary" : "ghost"} className="w-full justify-start">
                    <route.icon className="mr-2 h-4 w-4" />
                    {route.title}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          <div className="py-2">
            <div className="text-xs font-medium text-muted-foreground px-4 py-2">Account</div>
            <div className="space-y-1">
              <Link href="/dashboard/profile" className="block">
                <Button
                  variant={pathname === "/dashboard/profile" ? "secondary" : "ghost"}
                  className="w-full justify-start"
                >
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Button>
              </Link>
              <Link href="/dashboard/settings" className="block">
                <Button
                  variant={pathname === "/dashboard/settings" ? "secondary" : "ghost"}
                  className="w-full justify-start"
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </SidebarContent>
      <SidebarFooter className="p-2">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="icon">
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}


import { currentUser } from '@clerk/nextjs/server'
import { DashboardHeader } from "@/components/dashboard-header"
import { StatsCards } from "@/components/stats-cards"
import { HistoryCards } from "@/components/history-cards"
import { getAllResponses } from '@/actions/server'

export default async function DashboardPage() {
  const user = await currentUser()
  if (!user) {
    return <div>Please log in to view your dashboard.</div>
  }
  const userId = user.primaryEmailAddress?.emailAddress
  if (!userId) {
    return <div>User ID not found.</div>
  }
  const userData = await getAllResponses(userId);
  return (
    <>
      <DashboardHeader title="Dashboard" />
      <main className="flex-1 overflow-auto p-6">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Overview</h2>
            <p className="text-muted-foreground">Your AI content generation stats and history.</p>
          </div>

          <StatsCards />

          <div>
            <h2 className="text-xl font-semibold mb-4">Recent Generations</h2>
            <HistoryCards history={userData} />
          </div>
        </div>
      </main>
    </>
  )
}


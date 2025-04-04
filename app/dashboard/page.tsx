import { DashboardHeader } from "@/components/dashboard-header"
import { StatsCards } from "@/components/stats-cards"
import { HistoryCards } from "@/components/history-cards"

export default function DashboardPage() {
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
            <HistoryCards />
          </div>
        </div>
      </main>
    </>
  )
}


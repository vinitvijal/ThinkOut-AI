import { DashboardHeader } from "@/components/dashboard-header"
import { SettingsForm } from "@/components/settings-form"

export default function SettingsPage() {
  return (
    <>
      <DashboardHeader title="Settings" />
      <main className="flex-1 overflow-auto p-6">
        <div className="mx-auto max-w-3xl space-y-8">
          <SettingsForm />
        </div>
      </main>
    </>
  )
}


import { DashboardHeader } from "@/components/dashboard-header"
import { ProfileForm } from "@/components/profile-form"

export default function ProfilePage() {
  return (
    <>
      <DashboardHeader title="Profile" />
      <main className="flex-1 overflow-auto p-6">
        <div className="mx-auto max-w-3xl space-y-8">
          <ProfileForm />
        </div>
      </main>
    </>
  )
}


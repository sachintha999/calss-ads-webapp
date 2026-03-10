// components/Dashboard.tsx
import { Button } from "@/components/ui/button"
import { PlusCircle, Megaphone, TrendingUp, Users, DollarSign } from "lucide-react"

export default function Dashboard() {
  return (
    <main className="container mx-auto py-8 px-4 md:px-8 flex-1">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
          <p className="text-muted-foreground">Overview of your advertising performance.</p>
        </div>
        <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
          <PlusCircle className="h-4 w-4" />
          Create New Campaign
        </Button>
      </div>

      {/* Statistics Grid */}
      <div className="grid gap-6 md:grid-cols-3 mb-10">
        <StatCard title="Total Views" value="24,502" icon={<Users className="h-5 w-5" />} trend="+12%" />
        <StatCard title="Active Ads" value="12" icon={<Megaphone className="h-5 w-5" />} trend="Stable" />
        <StatCard title="Total Spend" value="$1,240" icon={<DollarSign className="h-5 w-5" />} trend="+5%" />
      </div>

      <div className="rounded-xl border border-dashed border-gray-300 p-12 text-center bg-white">
        <p className="text-gray-500">Your recent activity will appear here.</p>
      </div>
    </main>
  )
}

// Small helper component for the stats
function StatCard({ title, value, icon, trend }: { title: string, value: string, icon: React.ReactNode, trend: string }) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-500">{title}</span>
        <div className="text-blue-600">{icon}</div>
      </div>
      <div className="flex items-baseline gap-2">
        <h3 className="text-2xl font-bold">{value}</h3>
        <span className="text-xs text-green-600 font-medium">{trend}</span>
      </div>
    </div>
  )
}
// app/page.tsx
import Header from "@/components/Header"
import SubHeader from "@/components/SubHeader"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col bg-muted/20">
      <Header />
      <SubHeader />
      
      <main className="container flex-1 py-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
          <p className="text-muted-foreground">
            Monitor your advertising performance and active campaigns here.
          </p>
          
          {/* Simple Grid for Stats */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-xl border bg-card p-6 shadow-sm">
                <div className="h-4 w-24 rounded bg-muted animate-pulse" />
                <div className="mt-4 h-8 w-16 rounded bg-muted animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
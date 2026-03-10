// app/page.tsx
import Dashboard from "@/components/Dashboard"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      {/* Note: Header and SubHeader are NOT here because 
         they should be in your app/layout.tsx to stay fixed 
      */}
      <Dashboard />
    </div>
  )
}
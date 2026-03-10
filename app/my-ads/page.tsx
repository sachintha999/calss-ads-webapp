// app/my-ads/page.tsx
import Header from "@/components/Header"
import SubHeader from "@/components/SubHeader"
import { Button } from "@/components/ui/button"
import { PlusCircle, Megaphone } from "lucide-react"

export default function MyAdsPage() {

    
  // Mock data for your ads - later this will come from your database
  const myAds = [
    { id: 1, title: "Next.js Web Dev Service", status: "Active", price: "$50", views: 120 },
    { id: 2, title: "Antique MJ Poster", status: "Pending", price: "$200", views: 45 },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      

      <main className="container mx-auto flex-1 py-8 px-4 md:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">My Advertisements</h1>
            <p className="text-muted-foreground">Manage and track your active listings.</p>
          </div>
          <Button className="gap-2">
            <PlusCircle className="h-4 w-4" />
            Post New Ad
          </Button>
        </div>

        {/* Ad List Grid */}
        <div className="grid gap-4">
          {myAds.map((ad) => (
            <div key={ad.id} className="flex items-center justify-between p-4 bg-white border rounded-lg shadow-sm hover:border-blue-200 transition-colors">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-blue-100 rounded-md flex items-center justify-center text-blue-600">
                  <Megaphone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{ad.title}</h3>
                  <div className="flex gap-3 text-xs text-muted-foreground mt-1">
                    <span>{ad.price}</span>
                    <span>•</span>
                    <span className={ad.status === "Active" ? "text-green-600 font-medium" : "text-amber-600 font-medium"}>
                      {ad.status}
                    </span>
                    <span>•</span>
                    <span>{ad.views} views</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Edit</Button>
                <Button variant="outline" size="sm" className="text-red-600 hover:bg-red-50 hover:text-red-700">Delete</Button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
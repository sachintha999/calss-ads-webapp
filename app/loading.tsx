export default function GlobalLoading() {
  return (
    <main className="container mx-auto py-8 px-4 md:px-8">
      {/* Skeleton Title */}
      <div className="h-8 w-48 bg-gray-200 animate-pulse rounded-md mb-4" />
      <div className="h-4 w-72 bg-gray-100 animate-pulse rounded-md mb-8" />

      {/* Skeleton Grid for Dashboard/Ads */}
      <div className="grid gap-6 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-32 w-full bg-gray-100 animate-pulse rounded-xl border" />
        ))}
      </div>
      
      {/* Skeleton List */}
      <div className="mt-10 space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-20 w-full bg-gray-50 animate-pulse rounded-lg border border-dashed" />
        ))}
      </div>
    </main>
  )
}
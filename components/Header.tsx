// components/Header.tsx

"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Container adds the margin/centering. px-4 prevents edge-touching on mobile */}
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        
        {/* Left Side: Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold tracking-tighter text-primary">
            AD<span className="text-muted-foreground">FLUX</span>
          </span>
        </Link>

        {/* Right Side: 2 Buttons */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Login
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
            Post Ad
          </Button>
        </div>
        
      </div>
    </header>
  )
}
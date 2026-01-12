"use client"

import { useState, useEffect } from "react"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function FloatingBookButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 transition-all duration-300",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none",
      )}
    >
      <Button
        size="lg"
        className="shadow-lg shadow-primary/20 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-14 px-6 group"
      >
        <Calendar className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
        <span className="hidden sm:inline">Book Now</span>
      </Button>
    </div>
  )
}

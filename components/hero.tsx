"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom-4")
          }
        })
      },
      { threshold: 0.1 },
    )

    const stats = statsRef.current?.querySelectorAll(".stat-item")
    stats?.forEach((stat) => observer.observe(stat))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
                Premium Aesthetic Clinic
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-light leading-[1.1] tracking-tight text-balance">
                Natural beauty, <span className="italic font-normal">refined</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl text-pretty">
                Experience the pinnacle of aesthetic medicine in Tbilisi. Our expert dermatologists combine cutting-edge
                technology with artistic precision to deliver results that enhance your natural beauty.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                Book Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                View Services
              </Button>
            </div>

            <div ref={statsRef} className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="stat-item opacity-0" style={{ animationDelay: "100ms" }}>
                <div className="text-3xl font-serif font-semibold">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="stat-item opacity-0" style={{ animationDelay: "200ms" }}>
                <div className="text-3xl font-serif font-semibold">5,000+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="stat-item opacity-0" style={{ animationDelay: "300ms" }}>
                <div className="text-3xl font-serif font-semibold">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop"
                alt="Aesthetic clinic treatment room"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl p-6 shadow-lg backdrop-blur-sm max-w-[200px]">
              <div className="text-sm font-medium mb-1">Certified Excellence</div>
              <div className="text-xs text-muted-foreground">ISO 9001 & FDA Approved Treatments</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap, Droplet } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    id: 1,
    icon: Sparkles,
    title: "Botox & Fillers",
    shortDesc: "Smooth lines, restore volume",
    fullDesc:
      "Premium neuromodulator and dermal filler treatments for natural-looking results. Our expert injectors use the latest techniques to smooth fine lines, restore lost volume, and enhance facial contours.",
    price: "From ₾450",
    duration: "30-45 min",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    icon: Zap,
    title: "Laser Treatments",
    shortDesc: "Advanced skin rejuvenation",
    fullDesc:
      "State-of-the-art laser technology for skin resurfacing, pigmentation correction, hair removal, and vascular treatments. Safe, effective, and tailored to your skin type.",
    price: "From ₾350",
    duration: "45-60 min",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    icon: Droplet,
    title: "HydraFacial",
    shortDesc: "Deep cleanse & hydration",
    fullDesc:
      "Revolutionary 3-in-1 treatment that cleanses, extracts, and hydrates skin. Perfect for all skin types, this medical-grade facial delivers instant results with no downtime.",
    price: "From ₾280",
    duration: "60 min",
    image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    icon: Sparkles,
    title: "Chemical Peels",
    shortDesc: "Reveal radiant skin",
    fullDesc:
      "Medical-grade chemical peels to treat acne, hyperpigmentation, fine lines, and uneven texture. Customized formulations for optimal results and minimal downtime.",
    price: "From ₾220",
    duration: "45 min",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    icon: Zap,
    title: "Microneedling",
    shortDesc: "Collagen stimulation",
    fullDesc:
      "Advanced RF microneedling to stimulate collagen production, reduce scars, and improve skin texture. Safe for all skin types with minimal downtime.",
    price: "From ₾380",
    duration: "60-75 min",
    image: "https://images.unsplash.com/photo-1598766919806-62574b064909?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    icon: Droplet,
    title: "PRP Therapy",
    shortDesc: "Natural rejuvenation",
    fullDesc:
      "Platelet-Rich Plasma therapy using your own blood to naturally stimulate skin regeneration, improve tone, and reduce signs of aging. Also effective for hair restoration.",
    price: "From ₾420",
    duration: "60 min",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop",
  },
]

export function ServicesGrid() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null)

  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">Our Services</p>
          <h2 className="text-4xl sm:text-5xl font-serif font-light tracking-tight text-balance">
            Treatments designed for <span className="italic font-normal">your beauty</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Discover our comprehensive range of advanced aesthetic treatments, each tailored to enhance your natural
            features with precision and care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group perspective-1000 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "backwards" }}
            >
              <div
                className={cn(
                  "relative h-[480px] transition-transform duration-700 preserve-3d cursor-pointer",
                  flippedCard === service.id && "rotate-y-180",
                )}
                onClick={() => setFlippedCard(flippedCard === service.id ? null : service.id)}
              >
                {/* Front of card */}
                <Card className="absolute inset-0 backface-hidden overflow-hidden border-border hover:border-accent/50 transition-all duration-300">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm p-3 rounded-full">
                      <service.icon className="h-5 w-5 text-accent" />
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-2xl font-serif font-medium mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.shortDesc}</p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <div className="text-lg font-semibold">{service.price}</div>
                        <div className="text-xs text-muted-foreground">{service.duration}</div>
                      </div>
                      <Button size="sm" variant="ghost" className="text-accent hover:text-accent/80 group/btn">
                        Learn more
                        <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </Card>

                {/* Back of card */}
                <Card className="absolute inset-0 backface-hidden rotate-y-180 overflow-hidden border-border bg-card">
                  <div className="h-full p-6 flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-muted p-3 rounded-full">
                        <service.icon className="h-5 w-5 text-accent" />
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={(e) => {
                          e.stopPropagation()
                          setFlippedCard(null)
                        }}
                        className="text-muted-foreground"
                      >
                        ✕
                      </Button>
                    </div>

                    <div className="flex-1 space-y-4">
                      <h3 className="text-2xl font-serif font-medium">{service.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{service.fullDesc}</p>

                      <div className="grid grid-cols-2 gap-3 pt-4">
                        <div className="bg-muted rounded-lg p-3">
                          <div className="text-xs text-muted-foreground mb-1">Price</div>
                          <div className="font-semibold">{service.price}</div>
                        </div>
                        <div className="bg-muted rounded-lg p-3">
                          <div className="text-xs text-muted-foreground mb-1">Duration</div>
                          <div className="font-semibold">{service.duration}</div>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90">
                      Book This Treatment
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

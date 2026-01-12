import { Check } from "lucide-react"

const features = [
  "Board-certified dermatologists",
  "FDA-approved treatments only",
  "Personalized treatment plans",
  "State-of-the-art technology",
  "Comfortable private rooms",
  "Flexible appointment scheduling",
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6 animate-in fade-in slide-in-from-left-6 duration-700">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">About DermaFlow</p>
              <h2 className="text-4xl sm:text-5xl font-serif font-light tracking-tight text-balance">
                Where science meets <span className="italic font-normal">artistry</span>
              </h2>
            </div>

            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p className="leading-relaxed text-pretty">
                Founded in 2009, DermaFlow has become Tbilisi's premier destination for aesthetic medicine. Our team of
                internationally trained dermatologists combines medical expertise with an artistic eye to deliver
                results that look natural and feel authentic.
              </p>
              <p className="leading-relaxed text-pretty">
                We believe in honest consultations, realistic expectations, and treatments that enhance rather than
                transform. Every procedure is performed with meticulous attention to detail in our luxurious, medically
                equipped facility.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 animate-in fade-in slide-in-from-left-4"
                  style={{ animationDelay: `${index * 50}ms`, animationFillMode: "backwards" }}
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                    <Check className="h-3 w-3 text-accent" />
                  </div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right-6 duration-700 delay-300">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=800&auto=format&fit=crop"
                    alt="Clinic interior"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop"
                    alt="Treatment room"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop"
                    alt="Medical equipment"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
                    alt="Consultation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Award, ShieldCheck, Star, Users } from "lucide-react"

const certifications = [
  {
    icon: ShieldCheck,
    title: "FDA Approved",
    description: "All treatments meet FDA standards",
  },
  {
    icon: Award,
    title: "ISO 9001 Certified",
    description: "International quality management",
  },
  {
    icon: Star,
    title: "Award Winning",
    description: "Best Aesthetic Clinic 2023",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "15+ certified specialists",
  },
]

const partners = [
  { name: "Allergan", logo: "ALLERGAN" },
  { name: "Galderma", logo: "GALDERMA" },
  { name: "Merz", logo: "MERZ" },
  { name: "Sciton", logo: "SCITON" },
]

export function TrustSection() {
  return (
    <section className="py-24 sm:py-32 border-y border-border bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">Trust & Excellence</p>
          <h2 className="text-4xl sm:text-5xl font-serif font-light tracking-tight text-balance">
            Certified for your <span className="italic font-normal">safety</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="text-center space-y-3 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "backwards" }}
            >
              <div className="flex justify-center">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                  <cert.icon className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <div className="font-semibold mb-1">{cert.title}</div>
                <div className="text-sm text-muted-foreground">{cert.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-16">
          <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-widest">Official Partners</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="text-2xl font-bold text-muted-foreground/30 tracking-wider hover:text-muted-foreground/50 transition-colors animate-in fade-in"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "backwards" }}
              >
                {partner.logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

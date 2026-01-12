import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Phone, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-muted/50 to-muted/20 rounded-3xl p-8 md:p-12 lg:p-16 border border-border">
            <div className="max-w-2xl mx-auto text-center space-y-6 mb-12">
              <h2 className="text-4xl sm:text-5xl font-serif font-light tracking-tight text-balance">
                Begin your <span className="italic font-normal">transformation</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Schedule a complimentary consultation with our expert dermatologists. We'll create a personalized
                treatment plan tailored to your unique goals.
              </p>
            </div>

            <div className="max-w-xl mx-auto space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="First Name" className="bg-card" />
                <Input placeholder="Last Name" className="bg-card" />
              </div>
              <Input placeholder="Email Address" type="email" className="bg-card" />
              <Input placeholder="Phone Number" type="tel" className="bg-card" />
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                <Calendar className="mr-2 h-4 w-4" />
                Request Consultation
              </Button>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 mt-12 pt-12 border-t border-border">
              <div className="text-center space-y-2">
                <div className="flex justify-center">
                  <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center">
                    <Phone className="h-4 w-4 text-accent" />
                  </div>
                </div>
                <div className="text-sm font-medium">Call Us</div>
                <div className="text-sm text-muted-foreground">(+995) 555 123 456</div>
              </div>
              <div className="text-center space-y-2">
                <div className="flex justify-center">
                  <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center">
                    <Mail className="h-4 w-4 text-accent" />
                  </div>
                </div>
                <div className="text-sm font-medium">Email Us</div>
                <div className="text-sm text-muted-foreground">hello@dermaflow.ge</div>
              </div>
              <div className="text-center space-y-2">
                <div className="flex justify-center">
                  <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-accent" />
                  </div>
                </div>
                <div className="text-sm font-medium">Working Hours</div>
                <div className="text-sm text-muted-foreground">Mon-Sat: 9AM - 7PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

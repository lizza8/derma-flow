import Link from "next/link"
import { Instagram, Facebook, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="text-2xl font-serif font-semibold">DermaFlow</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tbilisi's premier aesthetic clinic, dedicated to enhancing natural beauty through advanced treatments.
            </p>
            <div className="flex gap-3">
              <Link
                href="#"
                className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div>
            <div className="font-semibold mb-4">Services</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Botox & Fillers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Laser Treatments
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  HydraFacial
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Chemical Peels
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-semibold mb-4">Company</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Before & After
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-semibold mb-4">Contact</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>123 Rustaveli Avenue</li>
              <li>Tbilisi, Georgia</li>
              <li className="pt-2">(+995) 555 123 456</li>
              <li>hello@dermaflow.ge</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>© 2026 DermaFlow. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

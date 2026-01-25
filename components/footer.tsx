import Link from "next/link"
import { Sparkles, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative py-16 border-t border-border overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Brand */}
          <div className="text-center lg:text-left">
            <Link href="/" className="flex items-center gap-3 justify-center lg:justify-start group">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center rotate-3 group-hover:rotate-6 transition-transform">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="absolute inset-0 w-10 h-10 rounded-xl bg-secondary/50 -rotate-6 -z-10" />
              </div>
              <span className="text-2xl font-bold text-foreground font-[family-name:var(--font-display)]">
                Kallatage
              </span>
            </Link>
            <p className="text-muted-foreground mt-3 max-w-xs">
              Empowering artists worldwide to showcase their creativity and vision.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-8">
            <Link 
              href="#about" 
              className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider"
            >
              About
            </Link>
            <Link 
              href="#details" 
              className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider"
            >
              Details
            </Link>
            <Link 
              href="#register" 
              className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider"
            >
              Register
            </Link>
            <Link 
              href="#contact" 
              className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider"
            >
              Contact
            </Link>
          </nav>

          {/* Copyright */}
          <div className="text-center lg:text-right">
            <p className="text-sm text-muted-foreground flex items-center gap-2 justify-center lg:justify-end">
              Made with <Heart className="w-4 h-4 text-secondary fill-secondary" /> by Kallatage
            </p>
            <p className="text-xs text-muted-foreground/60 mt-2">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>

        {/* Large decorative text */}
        <div className="mt-16 text-center overflow-hidden">
          <p className="text-[8rem] md:text-[12rem] font-bold text-muted/5 font-[family-name:var(--font-display)] leading-none select-none">
            ART
          </p>
        </div>
      </div>
    </footer>
  )
}

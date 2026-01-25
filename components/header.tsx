"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-background/60 backdrop-blur-xl border-b border-border/50" />
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between relative">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center rotate-3 group-hover:rotate-6 transition-transform">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="absolute inset-0 w-10 h-10 rounded-xl bg-secondary/50 -rotate-6 -z-10" />
          </div>
          <span className="text-2xl font-bold text-foreground tracking-tight font-[family-name:var(--font-display)]">
            Kallatage
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="#about" 
            className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider"
          >
            About
          </Link>
          <Link 
            href="#details" 
            className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider"
          >
            Details
          </Link>
          <Link 
            href="#contact" 
            className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider"
          >
            Contact
          </Link>
          <Button asChild size="lg" className="font-semibold rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="#register">Register Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2 text-foreground rounded-xl bg-card/50 border border-border"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            <Link
              href="#about"
              className="text-muted-foreground hover:text-primary transition-colors py-3 text-lg font-medium border-b border-border/50"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#details"
              className="text-muted-foreground hover:text-primary transition-colors py-3 text-lg font-medium border-b border-border/50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Details
            </Link>
            <Link
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-colors py-3 text-lg font-medium border-b border-border/50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button asChild size="lg" className="font-semibold w-full mt-2 rounded-full bg-primary text-primary-foreground">
              <Link href="#register" onClick={() => setMobileMenuOpen(false)}>
                Register Now
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

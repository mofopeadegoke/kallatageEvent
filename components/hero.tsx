"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Zap, Award } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Abstract Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large organic shapes */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-primary/40 blur-3xl animate-pulse" />
          <div className="absolute top-40 left-40 w-72 h-72 rounded-full bg-secondary/50 blur-3xl animate-pulse delay-75" />
        </div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] opacity-30">
          <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-accent/40 blur-3xl animate-pulse delay-150" />
          <div className="absolute bottom-40 right-40 w-64 h-64 rounded-full bg-secondary/40 blur-3xl animate-pulse delay-300" />
        </div>
        
        {/* Geometric decorative elements */}
        <div className="absolute top-1/4 left-[10%] w-32 h-32 border-2 border-primary/20 rounded-3xl rotate-12 animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute top-1/3 right-[15%] w-24 h-24 border-2 border-secondary/30 rounded-full" />
        <div className="absolute bottom-1/4 left-[20%] w-20 h-20 bg-accent/10 rounded-2xl -rotate-12" />
        <div className="absolute bottom-1/3 right-[10%] w-16 h-16 border-2 border-primary/20 rotate-45" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Floating Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-3 bg-card/80 backdrop-blur-sm border border-border px-5 py-2.5 rounded-full">
              <div className="flex -space-x-1">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <Star className="w-3 h-3 text-primary-foreground" />
                </div>
                <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                  <Zap className="w-3 h-3 text-secondary-foreground" />
                </div>
              </div>
              <span className="text-sm font-medium text-foreground">Hosted by Kallatage</span>
              <span className="text-xs px-2 py-0.5 bg-accent/20 text-accent rounded-full">Free Entry</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-center mb-8">
            <span className="block text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.1] mb-4 font-[family-name:var(--font-display)] tracking-tight">
              Unleash Your
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] font-[family-name:var(--font-display)] tracking-tight">
              <span className="text-primary">Creative</span>{" "}
              <span className="relative inline-block">
                <span className="text-secondary">Vision</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary/50" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 4 150 4 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-center text-pretty">
            Join our premier art competition and showcase your talent to the world. 
            Compete for the{" "}
            <span className="font-bold text-primary">$100 prize</span>{" "}
            and recognition in the art community.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              asChild 
              size="lg" 
              className="text-lg px-8 py-7 font-semibold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_40px_rgba(255,180,0,0.3)] hover:shadow-[0_0_60px_rgba(255,180,0,0.4)] transition-all"
            >
              <Link href="#register">
                Register Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-7 font-semibold rounded-full border-2 border-border bg-transparent text-foreground hover:bg-card hover:border-primary/50"
            >
              <Link href="#details">Explore Event</Link>
            </Button>
          </div>

          {/* Key Info Cards */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="group relative">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-card/80 backdrop-blur-sm border border-border px-6 py-4 rounded-2xl hover:border-primary/50 transition-colors">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Deadline</p>
                <p className="text-xl font-bold text-foreground">March 21st</p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-card/80 backdrop-blur-sm border border-border px-6 py-4 rounded-2xl hover:border-secondary/50 transition-colors">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Prize Pool</p>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  <p className="text-xl font-bold text-primary">$100</p>
                </div>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-card/80 backdrop-blur-sm border border-border px-6 py-4 rounded-2xl hover:border-accent/50 transition-colors">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Entry Fee</p>
                <p className="text-xl font-bold text-accent">Free</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}

"use client"

import { Palette, Users, Award, Sparkles, ArrowUpRight } from "lucide-react"

const features = [
  {
    icon: Palette,
    title: "All Art Forms",
    description: "Whether you paint, sculpt, photograph, or create digital art, your vision has a place here.",
    color: "primary",
    rotate: "-rotate-3",
  },
  {
    icon: Users,
    title: "Community",
    description: "Connect with fellow artists, share techniques, and grow together in our supportive community.",
    color: "secondary",
    rotate: "rotate-2",
  },
  {
    icon: Award,
    title: "Recognition",
    description: "Win the $100 grand prize and gain exposure to art collectors and galleries worldwide.",
    color: "accent",
    rotate: "-rotate-2",
  },
  {
    icon: Sparkles,
    title: "Showcase",
    description: "Your work will be featured in our digital gallery, reaching thousands of art enthusiasts.",
    color: "primary",
    rotate: "rotate-3",
  },
]

const colorClasses = {
  primary: {
    bg: "bg-primary",
    text: "text-primary",
    border: "border-primary/30",
    glow: "group-hover:shadow-[0_0_40px_rgba(255,180,0,0.2)]",
  },
  secondary: {
    bg: "bg-secondary",
    text: "text-secondary",
    border: "border-secondary/30",
    glow: "group-hover:shadow-[0_0_40px_rgba(255,100,150,0.2)]",
  },
  accent: {
    bg: "bg-accent",
    text: "text-accent",
    border: "border-accent/30",
    glow: "group-hover:shadow-[0_0_40px_rgba(0,200,150,0.2)]",
  },
}

export function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Why Join Us</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-[family-name:var(--font-display)] text-balance">
            Where Art Meets{" "}
            <span className="text-primary">Opportunity</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Kallatage is proud to present an extraordinary platform for artists of all backgrounds. 
            Our event celebrates creativity, innovation, and the power of visual expression.
          </p>
        </div>

        {/* Bento Grid Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const colors = colorClasses[feature.color as keyof typeof colorClasses]
            return (
              <div
                key={feature.title}
                className={`group relative bg-card border border-border rounded-3xl p-8 hover:${colors.border} transition-all duration-300 ${colors.glow} ${feature.rotate} hover:rotate-0`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 ${colors.bg} rounded-2xl flex items-center justify-center mb-6 rotate-6 group-hover:rotate-0 transition-transform`}>
                  <feature.icon className="h-7 w-7 text-background" />
                </div>
                
                {/* Content */}
                <h3 className={`text-xl font-bold text-foreground mb-3 flex items-center gap-2 font-[family-name:var(--font-display)]`}>
                  {feature.title}
                  <ArrowUpRight className={`w-4 h-4 ${colors.text} opacity-0 group-hover:opacity-100 transition-opacity`} />
                </h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

                {/* Decorative corner */}
                <div className={`absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 ${colors.border} rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
              </div>
            )
          })}
        </div>

        {/* Stats Row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "500+", label: "Artists" },
            { value: "$100", label: "Prize Pool" },
            { value: "Free", label: "Entry" },
            { value: "1", label: "Winner" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-card/50 rounded-2xl border border-border/50">
              <p className="text-3xl md:text-4xl font-bold text-primary font-[family-name:var(--font-display)]">{stat.value}</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

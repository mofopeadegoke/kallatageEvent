"use client"

import { Calendar, DollarSign, Clock, CheckCircle, ArrowRight } from "lucide-react"

const details = [
  {
    icon: DollarSign,
    label: "Prize Pool",
    value: "$100",
    description: "Grand prize for the winning artist",
    color: "primary",
  },
  {
    icon: Calendar,
    label: "Registration Deadline",
    value: "March 21st",
    description: "Don't miss your chance to participate",
    color: "secondary",
  },
  {
    icon: Clock,
    label: "Entry Fee",
    value: "Free",
    description: "No cost to enter the competition",
    color: "accent",
  },
  {
    icon: CheckCircle,
    label: "Open To",
    value: "Everyone",
    description: "Artists of all skill levels welcome",
    color: "primary",
  },
]

const timeline = [
  { step: "01", title: "Register", description: "Sign up for free before March 21st", color: "primary" },
  { step: "02", title: "Create", description: "Work on your masterpiece", color: "secondary" },
  { step: "03", title: "Submit", description: "Upload your artwork by the deadline", color: "accent" },
  { step: "04", title: "Win", description: "Compete for the $100 prize", color: "primary" },
]

const colorClasses = {
  primary: { bg: "bg-primary", text: "text-primary", border: "border-primary" },
  secondary: { bg: "bg-secondary", text: "text-secondary", border: "border-secondary" },
  accent: { bg: "bg-accent", text: "text-accent", border: "border-accent" },
}

export function EventDetails() {
  return (
    <section id="details" className="py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,180,0,0.05)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,100,150,0.05)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Event Info</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-[family-name:var(--font-display)] text-balance">
            Everything You Need{" "}
            <span className="text-secondary">to Know</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Simple process, amazing opportunity. Here&apos;s what you need to know about participating.
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {details.map((detail, index) => {
            const colors = colorClasses[detail.color as keyof typeof colorClasses]
            return (
              <div
                key={detail.label}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 ${colors.bg}/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                
                <div className="relative bg-card border border-border rounded-3xl p-8 text-center hover:border-border/80 transition-all h-full">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${colors.bg}/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                    <detail.icon className={`h-8 w-8 ${colors.text}`} />
                  </div>
                  
                  {/* Content */}
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{detail.label}</p>
                  <p className={`text-3xl font-bold ${colors.text} mb-3 font-[family-name:var(--font-display)]`}>{detail.value}</p>
                  <p className="text-sm text-muted-foreground">{detail.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Timeline Section */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-16 font-[family-name:var(--font-display)]">
            How It <span className="text-accent">Works</span>
          </h3>
          
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {timeline.map((item, index) => {
                const colors = colorClasses[item.color as keyof typeof colorClasses]
                return (
                  <div key={item.step} className="relative group">
                    {/* Step Number */}
                    <div className="relative z-10 flex justify-center mb-6">
                      <div className={`w-20 h-20 ${colors.bg} rounded-full flex items-center justify-center text-3xl font-bold text-background font-[family-name:var(--font-display)] group-hover:scale-110 transition-transform shadow-lg`}>
                        {item.step}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="text-center">
                      <h4 className="text-xl font-bold text-foreground mb-2 font-[family-name:var(--font-display)]">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>

                    {/* Arrow to next */}
                    {index < timeline.length - 1 && (
                      <div className="hidden lg:flex absolute top-10 left-full -translate-x-1/2 text-muted-foreground/30">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, ArrowRight, Sparkles, Star } from "lucide-react"

export function Registration() {
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="register" className="py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,180,0,0.1)_0%,transparent_60%)]" />
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="max-w-xl mx-auto text-center">
            {/* Success Animation */}
            <div className="relative mb-8">
              <div className="w-28 h-28 bg-accent/20 rounded-full flex items-center justify-center mx-auto animate-pulse">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center">
                  <CheckCircle className="h-10 w-10 text-accent-foreground" />
                </div>
              </div>
              <Star className="absolute top-0 right-1/3 w-6 h-6 text-primary animate-bounce" />
              <Star className="absolute bottom-4 left-1/3 w-4 h-4 text-secondary animate-bounce delay-150" />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-[family-name:var(--font-display)]">
              You&apos;re <span className="text-accent">In!</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Thank you for registering for the Kallatage Art Event. We&apos;ve sent a confirmation email with all the details. Get ready to showcase your creativity!
            </p>
            <Button
              onClick={() => setSubmitted(false)}
              variant="outline"
              size="lg"
              className="rounded-full border-2 bg-transparent"
            >
              Register Another Artist
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="register" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,180,0,0.08)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,200,150,0.08)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground uppercase tracking-wider">Join the Competition</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-[family-name:var(--font-display)] text-balance">
              Register <span className="text-primary">Now</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty max-w-xl mx-auto">
              Secure your spot in our art competition. Registration is completely free and takes less than a minute.
            </p>
          </div>

          {/* Form Card */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-2xl" />
            
            <div className="relative bg-card border border-border rounded-3xl p-8 md:p-12 shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-20 h-20 border-t-2 border-r-2 border-primary/20 rounded-tr-3xl" />
              <div className="absolute bottom-6 left-6 w-20 h-20 border-b-2 border-l-2 border-accent/20 rounded-bl-3xl" />

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm uppercase tracking-wider text-muted-foreground">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="Your first name"
                      required
                      className="h-14 rounded-xl bg-background border-border focus:border-primary text-foreground placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm uppercase tracking-wider text-muted-foreground">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Your last name"
                      required
                      className="h-14 rounded-xl bg-background border-border focus:border-primary text-foreground placeholder:text-muted-foreground/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm uppercase tracking-wider text-muted-foreground">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="h-14 rounded-xl bg-background border-border focus:border-primary text-foreground placeholder:text-muted-foreground/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="artStyle" className="text-sm uppercase tracking-wider text-muted-foreground">Art Style / Medium</Label>
                  <Input
                    id="artStyle"
                    name="artStyle"
                    placeholder="e.g., Oil painting, Digital art, Photography"
                    className="h-14 rounded-xl bg-background border-border focus:border-primary text-foreground placeholder:text-muted-foreground/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio" className="text-sm uppercase tracking-wider text-muted-foreground">Brief Bio (Optional)</Label>
                  <Textarea
                    id="bio"
                    name="bio"
                    placeholder="Tell us about yourself and your artistic journey..."
                    rows={4}
                    className="resize-none rounded-xl bg-background border-border focus:border-primary text-foreground placeholder:text-muted-foreground/50"
                  />
                </div>

                <div className="bg-muted/30 rounded-2xl p-5 border border-border/50">
                  <p className="text-sm text-muted-foreground">
                    By registering, you agree to the event terms and conditions. Your information will only be used for event-related communications.
                  </p>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-16 text-lg font-semibold rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_40px_rgba(255,180,0,0.2)] hover:shadow-[0_0_60px_rgba(255,180,0,0.3)] transition-all"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Registering...
                    </span>
                  ) : (
                    <>
                      Complete Registration
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          <p className="text-center text-muted-foreground mt-8">
            Registration deadline:{" "}
            <span className="font-bold text-secondary">March 21st</span>
          </p>
        </div>
      </div>
    </section>
  )
}

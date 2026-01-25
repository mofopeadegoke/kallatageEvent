import { Mail, Instagram, Twitter, Facebook, Youtube, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-secondary hover:border-secondary" },
  { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-accent hover:border-accent" },
  { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-primary hover:border-primary" },
  { icon: Youtube, href: "#", label: "YouTube", color: "hover:bg-destructive hover:border-destructive" },
]

export function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,100,150,0.08)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground uppercase tracking-wider">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-[family-name:var(--font-display)] text-balance">
              Let&apos;s <span className="text-secondary">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty max-w-xl mx-auto">
              Have questions about the event? We&apos;re here to help. Reach out through email or connect on social media.
            </p>
          </div>

          {/* Email Contact Card */}
          <div className="relative mb-12">
            <div className="absolute -inset-4 bg-secondary/5 rounded-[3rem] blur-2xl" />
            <div className="relative bg-card border border-border rounded-3xl p-10 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-secondary/10 rounded-2xl flex items-center justify-center">
                    <Mail className="h-10 w-10 text-secondary" />
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Email us at</p>
                    <a
                      href="mailto:hello@kallatage.com"
                      className="text-2xl md:text-3xl font-bold text-foreground hover:text-secondary transition-colors font-[family-name:var(--font-display)] flex items-center gap-2 group"
                    >
                      hello@kallatage.com
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </div>
                <div className="w-px h-20 bg-border hidden md:block" />
                <div className="text-center md:text-right">
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Response Time</p>
                  <p className="text-xl font-bold text-foreground">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center">
            <p className="text-muted-foreground mb-8 uppercase tracking-wider text-sm">Follow us & share the event</p>
            <div className="flex items-center justify-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className={`w-16 h-16 bg-card border border-border rounded-2xl flex items-center justify-center transition-all duration-300 ${social.color} hover:text-background hover:scale-110 group`}
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

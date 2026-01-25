import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { EventDetails } from "@/components/event-details"
import { Registration } from "@/components/registration"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <EventDetails />
      <Registration />
      <Contact />
      <Footer />
    </main>
  )
}

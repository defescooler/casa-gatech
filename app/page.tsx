import Link from "next/link"
import { ArrowRight, Calendar, Mail, MapPin, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600"></div>
            <span className="text-lg font-semibold tracking-tight">CASA GT</span>
          </div>
          <nav className="hidden md:flex md:gap-6">
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#events" className="text-sm font-medium transition-colors hover:text-primary">
              Events
            </Link>
            <Link href="#leadership" className="text-sm font-medium transition-colors hover:text-primary">
              Leadership
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button size="sm" className="hidden md:inline-flex">
            Join Us
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-amber-100 opacity-50" />
          <div className="container relative flex flex-col items-center justify-center gap-4 py-24 md:py-32">
            <div className="space-y-3 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Central Asian Student Association
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Celebrating the rich cultural heritage of Central Asia at Georgia Tech
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">
                Join Our Community
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </section>
        <section id="about" className="container py-12 md:py-16">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">About Us</h2>
              <p className="mt-4 text-muted-foreground">
                The Central Asian Student Association at Georgia Tech is dedicated to promoting awareness and
                appreciation of Central Asian cultures, traditions, and heritage within the Georgia Tech community.
              </p>
              <p className="mt-4 text-muted-foreground">
                Our mission is to create a supportive community for Central Asian students while sharing our rich
                cultural heritage with the broader campus.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="overflow-hidden rounded-lg">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Central Asian cultural celebration"
                  className="aspect-video h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="events" className="bg-slate-50 py-12 md:py-16">
          <div className="container">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Upcoming Events</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="group rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow">
                <div className="flex items-center gap-2 text-amber-600">
                  <Calendar className="h-5 w-5" />
                  <span className="text-sm font-medium">April 25, 2025</span>
                </div>
                <h3 className="mt-3 text-xl font-semibold">Nowruz Celebration</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Join us for our annual Nowruz celebration featuring traditional food, music, and dance performances.
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Student Center Ballroom</span>
                </div>
                <Button variant="link" className="mt-4 h-8 p-0">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
              <div className="group rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow">
                <div className="flex items-center gap-2 text-amber-600">
                  <Calendar className="h-5 w-5" />
                  <span className="text-sm font-medium">May 10, 2025</span>
                </div>
                <h3 className="mt-3 text-xl font-semibold">Cultural Workshop</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Learn about traditional Central Asian arts and crafts in this hands-on workshop led by local artisans.
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Klaus Advanced Computing Building</span>
                </div>
                <Button variant="link" className="mt-4 h-8 p-0">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
              <div className="group rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow">
                <div className="flex items-center gap-2 text-amber-600">
                  <Calendar className="h-5 w-5" />
                  <span className="text-sm font-medium">June 5, 2025</span>
                </div>
                <h3 className="mt-3 text-xl font-semibold">End of Year Gala</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Celebrate the end of the academic year with a formal dinner featuring Central Asian cuisine and
                  entertainment.
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Georgia Tech Hotel and Conference Center</span>
                </div>
                <Button variant="link" className="mt-4 h-8 p-0">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="leadership" className="container py-12 md:py-16">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Our Leadership</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              { name: "Aisha Nurmatova", role: "President", country: "Kazakhstan" },
              { name: "Timur Aliyev", role: "Vice President", country: "Uzbekistan" },
              { name: "Gulnara Tashmatova", role: "Treasurer", country: "Kyrgyzstan" },
              { name: "Rustam Karimov", role: "Events Coordinator", country: "Tajikistan" },
            ].map((member, index) => (
              <div key={index} className="group flex flex-col items-center">
                <div className="overflow-hidden rounded-full">
                  <img
                    src={`/placeholder.svg?height=200&width=200&text=${index + 1}`}
                    alt={member.name}
                    className="h-32 w-32 object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-center text-lg font-semibold">{member.name}</h3>
                <p className="text-center text-sm text-muted-foreground">{member.role}</p>
                <p className="text-center text-xs text-muted-foreground">{member.country}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="contact" className="bg-slate-50 py-12 md:py-16">
          <div className="container">
            <div className="mx-auto max-w-md text-center">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Get In Touch</h2>
              <p className="mt-4 text-muted-foreground">
                Have questions or want to join our association? Reach out to us through any of these channels.
              </p>
              <div className="mt-6 flex flex-col gap-4">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="h-5 w-5 text-amber-600" />
                  <span>casa@gatech.edu</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Users className="h-5 w-5 text-amber-600" />
                  <span>Weekly Meetings: Thursdays at 6 PM, Student Center Room 320</span>
                </div>
              </div>
              <div className="mt-8 flex justify-center gap-4">
                <Button variant="outline" size="icon" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-amber-400 to-amber-600"></div>
            <span className="text-sm font-semibold">CASA GT</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © 2025 Central Asian Student Association at Georgia Tech. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

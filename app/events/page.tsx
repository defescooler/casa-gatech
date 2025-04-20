import Link from "next/link"
import { ArrowLeft, Calendar, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function EventsPage() {
    const events = [
        {
            id: 1,
            title: "Nowruz Celebration",
            date: "April 25, 2025",
            time: "6:00 PM - 9:00 PM",
            location: "Student Center Ballroom",
            description:
                "Join us for our annual Nowruz celebration featuring traditional food, music, and dance performances. Nowruz, the Persian New Year, is celebrated by many Central Asian cultures and marks the beginning of spring.",
            image: "/placeholder.svg?height=300&width=600&text=Nowruz",
        },
        {
            id: 2,
            title: "Cultural Workshop",
            date: "May 10, 2025",
            time: "2:00 PM - 4:00 PM",
            location: "Klaus Advanced Computing Building",
            description:
                "Learn about traditional Central Asian arts and crafts in this hands-on workshop led by local artisans. Participants will get to create their own pieces and learn about the cultural significance behind different art forms.",
            image: "/placeholder.svg?height=300&width=600&text=Workshop",
        },
        {
            id: 3,
            title: "End of Year Gala",
            date: "June 5, 2025",
            time: "7:00 PM - 10:00 PM",
            location: "Georgia Tech Hotel and Conference Center",
            description:
                "Celebrate the end of the academic year with a formal dinner featuring Central Asian cuisine and entertainment. We'll also be recognizing our graduating members and announcing next year's leadership team.",
            image: "/placeholder.svg?height=300&width=600&text=Gala",
        },
        {
            id: 4,
            title: "Central Asian Film Night",
            date: "July 15, 2025",
            time: "7:00 PM - 9:30 PM",
            location: "Student Center Theater",
            description:
                "Join us for a screening of award-winning films from Central Asia. We'll be showing a selection of short films and documentaries that highlight the region's culture, history, and contemporary issues.",
            image: "/placeholder.svg?height=300&width=600&text=Film+Night",
        },
        {
            id: 5,
            title: "Welcome Back Picnic",
            date: "August 28, 2025",
            time: "12:00 PM - 3:00 PM",
            location: "Tech Green",
            description:
                "Kick off the new academic year with our welcome back picnic. Meet new and returning members, enjoy delicious food, and learn about our plans for the upcoming year. All Georgia Tech students are welcome!",
            image: "/placeholder.svg?height=300&width=600&text=Picnic",
        },
    ]

    return (
        <div className="container flex min-h-screen flex-col py-12">
            <Link href="/" className="mb-8 flex items-center text-sm text-muted-foreground hover:text-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
            </Link>
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight">Upcoming Events</h1>
                <p className="mt-2 text-muted-foreground">
                    Join us at our upcoming events to learn more about Central Asian cultures and connect with our community.
                </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {events.map((event) => (
                    <Card key={event.id} className="flex flex-col overflow-hidden">
                        <div className="aspect-video w-full overflow-hidden">
                            <img src={event.image || "/placeholder.svg"} alt={event.title} className="h-full w-full object-cover" />
                        </div>
                        <CardHeader>
                            <div className="flex items-center gap-2 text-amber-600">
                                <Calendar className="h-5 w-5" />
                                <span className="text-sm font-medium">{event.date}</span>
                            </div>
                            <CardTitle className="text-xl">{event.title}</CardTitle>
                            <CardDescription>{event.time}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">{event.description}</p>
                            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                                <MapPin className="h-4 w-4" />
                                <span>{event.location}</span>
                            </div>
                        </CardContent>
                        <CardFooter className="mt-auto">
                            <Button variant="outline" className="w-full">
                                RSVP for this Event
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}

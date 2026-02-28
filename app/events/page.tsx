import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { events } from '@/lib/data';

export default function EventsPage() {
    return (
        <div className='container flex min-h-screen flex-col py-12'>
            <Link
                href='/'
                className='mb-8 flex items-center text-sm text-muted-foreground hover:text-foreground'
            >
                <ArrowLeft className='mr-2 h-4 w-4' />
                Back to Home
            </Link>
            <div className='mb-8'>
                <h1 className='text-3xl font-bold tracking-tight'>
                    Upcoming Events
                </h1>
                <p className='mt-2 text-muted-foreground'>
                    Join us at our upcoming events to learn more about Central
                    Asian cultures and connect with our community.
                </p>
            </div>
            {events.length > 0 ? (
                <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                    {events.map((event) => (
                        <Card
                            key={event.id}
                            className='flex flex-col overflow-hidden'
                        >
                            <div className='aspect-video w-full overflow-hidden'>
                                <img
                                    src={event.image || '/placeholder.svg'}
                                    alt={event.title}
                                    className='h-full w-full object-cover'
                                />
                            </div>
                            <CardHeader>
                                <div className='flex items-center gap-2 text-primary'>
                                    <Calendar className='h-5 w-5' />
                                    <span className='text-sm font-medium'>
                                        {event.date}
                                    </span>
                                </div>
                                <CardTitle className='text-xl'>
                                    {event.title}
                                </CardTitle>
                                <CardDescription>{event.time}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className='text-sm text-muted-foreground'>
                                    {event.description}
                                </p>
                                <div className='mt-4 flex items-center gap-2 text-sm text-muted-foreground'>
                                    <MapPin className='h-4 w-4' />
                                    <span>{event.location}</span>
                                </div>
                            </CardContent>
                            <CardFooter className='mt-auto'>
                                <Button variant='outline' className='w-full'>
                                    <Link href='https://gatech.campuslabs.com/engage/event/11556010'>
                                        RSVP for this Event
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            ) : (
                <div className='flex flex-col items-center justify-center rounded-lg border bg-background p-12 text-center'>
                    <Calendar className='h-16 w-16 text-primary opacity-70' />
                    <h2 className='mt-6 text-2xl font-semibold'>
                        No Upcoming Events
                    </h2>
                    <p className='mt-3 max-w-lg text-muted-foreground'>
                        We&#39;re currently planning our next events. Check back
                        soon for updates or subscribe to our newsletter to stay
                        informed about upcoming activities.
                    </p>
                    <Button className='mt-6' asChild>
                        <Link href='/'>Return to Homepage</Link>
                    </Button>
                </div>
            )}
        </div>
    );
}
